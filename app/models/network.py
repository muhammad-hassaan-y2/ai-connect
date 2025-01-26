from datetime import datetime
from app import db

from app import db
from datetime import datetime

class NetworkDevice(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    ip_address = db.Column(db.String(15), nullable=False)
    bandwidth = db.Column(db.String(20))
    latency = db.Column(db.Float)
    packet_loss = db.Column(db.Float)
    cpu_usage = db.Column(db.Float)
    status = db.Column(db.String(20))
    last_updated = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"<NetworkDevice {self.ip_address}>"