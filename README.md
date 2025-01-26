
Flask Application: AI Connect
This is a Flask-based web application that provides APIs for AI-related functionalities, network management, and real-time services.

Features
AI Services: APIs for AI-related tasks.

Network Management: APIs for managing network configurations.

Real-Time Services: APIs for real-time data processing.

Database Integration: SQLite database for storing application data.

Prerequisites
Before running the application, ensure you have the following installed:

Python 3.7 or higher

Flask

SQLite (for database)

Other dependencies listed in requirements.txt

Installation
Clone the Repository:

bash
Copy
git clone https://github.com/muhammad-hassaan-y2/back-end.git
cd ai-connect
Set Up a Virtual Environment:

bash
Copy
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install Dependencies:

bash
Copy
pip install -r requirements.txt
Initialize the Database:

bash
Copy
flask db init
flask db migrate
flask db upgrade
Running the Application
Start the Flask Development Server:


and here are the api points :

Route 1: Set IP Address
Endpoint: POST /api/set-ip

Description: Sets the IP address for real-time monitoring and starts the scheduler.

Request Body:

{
  "ipAddress": "192.168.1.1"
}
Response:

{
  "message": "IP address set to 192.168.1.1"
}

Route 2: Get All Devices
Endpoint: GET /api/devices

Description: Returns a list of all monitored network devices.

Response:

[
  {
    "ip_address": "192.168.1.1",
    "bandwidth": "100 Mbps / 50 Mbps",
    "latency": 50.0,
    "packet_loss": 2.0,
    "cpu_usage": 70.0,
    "status": "online",
    "last_updated": "2023-10-25T12:34:56.789012"
  }
]

Route 3: 

Get Real-Time Data
Endpoint: GET /api/devices/<ip_address>

Description: Returns real-time data for a specific IP address.

Response:

{
  "ip_address": "192.168.1.1",
  "bandwidth": "100 Mbps / 50 Mbps",
  "latency": 50.0,
  "packet_loss": 2.0,
  "cpu_usage": 70.0,
  "status": "online",
  "last_updated": "2023-10-25T12:34:56.789012"
}

Get Historical Data
Endpoint: GET /api/history/<ip_address>

Description: Returns historical data for a specific IP address within a custom time range.

Query Parameters:

start_time: Start of the time range (ISO format, e.g., 2023-10-01T12:00:00).

end_time: End of the time range (ISO format, e.g., 2023-10-01T23:59:59).

Response:

[
  {
    "timestamp": "2023-10-01T12:00:00",
    "bandwidth": "100 Mbps / 50 Mbps",
    "latency": 50.0,
    "packet_loss": 2.0,
    "cpu_usage": 70.0,
    "status": "online"
  }
]


Update the Frontend or API Clients
Ensure your frontend or API clients can send requests to the new AI endpoints:

/api/analyze-network/<ipaddress> for real-time analysis.

/api/predictive-alerts/<ipaddress> for predictive maintenance alerts.

/api/optimize-resources/<ipaddress> for resource optimization recommendations.


bash
Copy
python run.py
Access the Application:

Open your browser and go to http://127.0.0.1:5000.
