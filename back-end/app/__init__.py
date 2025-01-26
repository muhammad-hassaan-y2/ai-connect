import threading
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_socketio import SocketIO

db = SQLAlchemy()
socketio = SocketIO()

def create_app():
    app = Flask(__name__)
    CORS(app)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False 

    # Initialize SQLAlchemy
    db.init_app(app)

    # Initialize Socket.IO
    socketio.init_app(app, cors_allowed_origins="*")

    # Create tables (if they don't exist)
    with app.app_context():
        db.create_all()

    # Import and register the network blueprint
    from app.routes.network_routes import network_bp
    app.register_blueprint(network_bp, url_prefix='/api')

    # Import Socket.IO routes (no blueprint needed)
    from app.routes.socket_routes import handle_connect, handle_disconnect

    return app

# Import this after defining create_app to avoid circular imports
from app.services.realtime_services import start_realtime_thread

# Start real-time thread when the module is imported
start_realtime_thread()