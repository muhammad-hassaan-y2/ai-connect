from flask_socketio import emit
from app import socketio
from app.services.realtime_services import generate_realtime_data
import threading

# Start the real-time data generation thread
threading.Thread(target=generate_realtime_data, daemon=True).start()

@socketio.on('connect')
def handle_connect():
    print("Client connected")
    emit('message', {'data': 'Connected to WebSocket'})

@socketio.on('disconnect')
def handle_disconnect():
    print("Client disconnected")