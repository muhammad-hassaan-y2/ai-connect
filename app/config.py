import os

class Config:
    SECRET_KEY = os.urandom(24)  # Randomly generated secret key
    DEBUG = True  # Enable debug mode for development
