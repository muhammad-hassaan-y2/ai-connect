import logging
from datetime import datetime
from typing import Dict, Any
import psutil
import speedtest
from app.models.network import NetworkDevice
from app import db
import subprocess
import re

logger = logging.getLogger(__name__)

# Thresholds for detecting issues
THRESHOLDS = {
    'download_speed': 50.0,  # Mbps
    'upload_speed': 10.0,    # Mbps
    'latency': 100.0,        # Milliseconds
    'packet_loss': 5.0,      # Percentage
    'cpu_usage': 80.0,       # Percentage
    'memory_usage': 80.0     # Percentage
}

class NetworkMonitor:
    def __init__(self, ip_address: str = None):
        self.ip_address = ip_address
        self.logger = logger

    def measure_latency_and_packet_loss(self, count: int = 4) -> Dict[str, Any]:
            
        try:
            # Construct the ping command
            command = ['ping', '-c', str(count), self.ip_address]  # Linux/macOS

            # Run the ping command
            output = subprocess.check_output(command, stderr=subprocess.STDOUT, universal_newlines=True)

            # Parse the output
            packet_loss_match = re.search(r'(\d+)% packet loss', output)
            latency_match = re.findall(r'time=([\d.]+) ms', output)

            if not packet_loss_match or not latency_match:
                return {
                    'ip_address': self.ip_address,
                    'avg_latency': None,
                    'packet_loss': 100.0  # Assume 100% packet loss if parsing fails
                }

            packet_loss = float(packet_loss_match.group(1))
            latency_values = [float(latency) for latency in latency_match]
            avg_latency = sum(latency_values) / len(latency_values) if latency_values else None

            return {
                'ip_address': self.ip_address,
                'avg_latency': avg_latency,
                'packet_loss': packet_loss
            }
        except Exception as e:
            return {
                'ip_address': self.ip_address,
                'avg_latency': None,
                'packet_loss': 100.0,
                'error': str(e)
            }

    def measure_cpu_and_memory_usage(self) -> Dict[str, Any]:
        """
        Measure CPU and memory usage.
        """
        cpu_usage = psutil.cpu_percent(interval=1)
        memory_usage = psutil.virtual_memory().percent
        return {
            'cpu_usage': cpu_usage,
            'memory_usage': memory_usage
        }

    def measure_bandwidth(self) -> Dict[str, Any]:
        try:
            st = speedtest.Speedtest()
            st.get_best_server()

            download_speed = st.download() / 1_000_000  # Convert to Mbps
            upload_speed = st.upload() / 1_000_000  # Convert to Mbps

            return {
                'download_speed': download_speed,
                'upload_speed': upload_speed
            }
        except Exception as e:
            self.logger.error(f"Bandwidth measurement failed: {e}")
            return {
                'download_speed': 0,
                'upload_speed': 0,
                'error': str(e)
            }

    def monitor_network(self) -> Dict[str, Any]:
        # Measure latency and packet loss
        latency_packet_loss = self.measure_latency_and_packet_loss()

        # Measure CPU and memory usage
        cpu_memory_usage = self.measure_cpu_and_memory_usage()

        # Measure bandwidth
        bandwidth = self.measure_bandwidth()

        # Combine all metrics
        network_data = {
            **latency_packet_loss,
            **cpu_memory_usage,
            **bandwidth,
            'timestamp': datetime.utcnow().isoformat()
        }

        # Log the data
        self.logger.info(f"Network data for {self.ip_address}: {network_data}")

        return network_data

    def save_network_data(self):
        """
        Save network monitoring data to the database.
        """
        network_data = self.monitor_network()

        # Create or update the device in the database
        device = NetworkDevice.query.filter_by(ip_address=self.ip_address).first()
        if not device:
            device = NetworkDevice(ip_address=self.ip_address)
            db.session.add(device)

        # Update device metrics
        device.bandwidth = f"{network_data['download_speed']} Mbps / {network_data['upload_speed']} Mbps"
        device.latency = network_data['avg_latency']
        device.packet_loss = network_data['packet_loss']
        device.cpu_usage = network_data['cpu_usage']
        device.status = "online" if network_data['packet_loss'] < THRESHOLDS['packet_loss'] else "offline"
        device.last_updated = datetime.utcnow()

        # Commit the transaction
        db.session.commit()

        return network_data