import time
from flask import current_app
from app.services.network_services import NetworkMonitor
from app import socketio, create_app
from apscheduler.schedulers.background import BackgroundScheduler
import threading

def save_historical_data(ip_address):
    """
    Save network monitoring data to the database every hour.
    """
    with create_app().app_context():
        monitor = NetworkMonitor(ip_address=ip_address)
        monitor.save_network_data()
        print(f"Data saved for IP: {ip_address}")

scheduler = BackgroundScheduler()

def start_scheduler(ip_address: str):
    """
    Start the scheduler with the provided IP address.
    """
    scheduler.add_job(save_historical_data, 'interval', hours=1, args=[ip_address])
    scheduler.start()

def generate_realtime_data(ip_address=None):
    """
    Generate and emit real-time network data using the NetworkMonitor class.
    """
    if ip_address is None:
        ip_address = "192.168.1.1"  # Default IP if not provided
    
    app = create_app()
    with app.app_context():
        try:
            monitor = NetworkMonitor(ip_address=ip_address)
            
            while True:
                # Fetch real-time data
                network_data = monitor.save_network_data()
                
                # Emit the data to all connected clients
                socketio.emit('realtime_data', network_data)
                time.sleep(5)  # Emit data every 5 seconds
        except Exception as e:
            print(f"Error in generate_realtime_data: {e}")

# Remove separate thread initialization from other files
def start_realtime_thread(ip_address="192.168.1.1"):
    """
    Thread-safe method to start real-time data generation
    """
    thread = threading.Thread(target=generate_realtime_data, args=(ip_address,))
    thread.daemon = True
    thread.start()
    return thread