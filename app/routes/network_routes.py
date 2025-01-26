from flask import Blueprint, jsonify, request
from app.services.network_services import NetworkMonitor
from app.models.network import NetworkDevice
from app import db
from datetime import datetime, timedelta
from app.services.realtime_services import start_scheduler, generate_realtime_data
import threading

network_bp = Blueprint('network', __name__)

# Initialize Network Monitor
network_monitor = NetworkMonitor()

user_ip_address = None

@network_bp.route('/set-ip', methods=['POST'])
def set_ip():
    global user_ip_address
    data = request.get_json()
    user_ip_address = data.get('ipAddress')

    if not user_ip_address:
        return jsonify({"message": "IP address is required"}), 400

    # Start the scheduler and real-time monitoring with the new IP address
    start_scheduler(user_ip_address)

    # Start the real-time data generation in a separate thread
    realtime_thread = threading.Thread(target=generate_realtime_data, args=(user_ip_address,))
    realtime_thread.daemon = True
    realtime_thread.start()

    return jsonify({"message": f"IP address set to {user_ip_address}"})

@network_bp.route('/devices', methods=['GET'])
def get_devices():
    """
    Get a list of all monitored network devices.
    """
    devices = NetworkDevice.query.all()
    return jsonify([{
        'ip_address': device.ip_address,
        'bandwidth': device.bandwidth,
        'latency': device.latency,
        'packet_loss': device.packet_loss,
        'cpu_usage': device.cpu_usage,
        'status': device.status,
        'last_updated': device.last_updated.isoformat()
    } for device in devices])


@network_bp.route('/devices/<ip_address>', methods=['GET'])
def get_realtime_data(ip_address):
    """
    Get real-time data for a network device.
    If an IP address is provided as a query parameter, use it.
    Otherwise, use the client's IP address.
    """
    # Get the IP address from the query parameters or the client's IP
    ip_address = request.args.get('ip')
    if not ip_address:
        # Get the client's IP address
        if request.headers.get('X-Forwarded-For'):
            ip_address = request.headers.get('X-Forwarded-For').split(',')[0].strip()
        else:
            ip_address = request.remote_addr

    # Monitor the network
    monitor = NetworkMonitor(ip_address=ip_address)
    network_data = monitor.save_network_data()

    return jsonify(network_data)



@network_bp.route('/history/<ip_address>', methods=['GET'])
def get_historical_data(ip_address):
    """
    Get historical data for a specific IP address within a custom time range.
    Query Parameters:
        - start_time: Start of the time range (ISO format, e.g., 2023-10-01T12:00:00).
        - end_time: End of the time range (ISO format, e.g., 2023-10-01T23:59:59).
    """
    # Get the time range from query parameters
    start_time = request.args.get('start_time')
    end_time = request.args.get('end_time')

    # Parse the time range
    try:
        start_time = datetime.fromisoformat(start_time) if start_time else datetime.utcnow() - timedelta(hours=24)
        end_time = datetime.fromisoformat(end_time) if end_time else datetime.utcnow()
    except ValueError:
        return jsonify({"error": "Invalid time format. Use ISO format (e.g., 2023-10-01T12:00:00)."}), 400

    # Query the database for historical data within the specified range
    historical_data = NetworkDevice.query.filter(
        NetworkDevice.ip_address == ip_address,
        NetworkDevice.last_updated >= start_time,
        NetworkDevice.last_updated <= end_time
    ).order_by(NetworkDevice.last_updated.asc()).all()

    # Format the historical data
    formatted_data = [{
        'timestamp': data.last_updated.isoformat(),
        'bandwidth': data.bandwidth,
        'latency': data.latency,
        'packet_loss': data.packet_loss,
        'cpu_usage': data.cpu_usage,
        'status': data.status
    } for data in historical_data]

    return jsonify(formatted_data)
