import openai
from typing import Dict, List
from datetime import datetime,timedelta
from app import OPENAI_BASE_URL, OPENAI_API_TOKEN
from openai import AsyncOpenAI
from app.models.network import NetworkDevice

class AIService:
    def __init__(self):
        self.base_url = OPENAI_BASE_URL
        self.api_token = OPENAI_API_TOKEN
        self.openai = AsyncOpenAI(base_url=self.base_url, api_key=self.api_token)

    async def fetch_realtime_data(self, ip_address: str) -> Dict:
        """
        Fetch real-time data for a specific IP address from the database.
        """
        device = NetworkDevice.query.filter_by(ip_address=ip_address).first()
        if not device:
            return None

        return {
            "bandwidth": device.bandwidth,
            "latency": device.latency,
            "packet_loss": device.packet_loss,
            "cpu_usage": device.cpu_usage,
            "timestamp": device.last_updated.isoformat(),
        }

    async def fetch_historical_data(self, ip_address: str) -> List[Dict]:
        """
        Fetch historical data for a specific IP address within a time range.
        """
        end_time = datetime.utcnow()
        start_time = end_time - timedelta(hours=24)  # Last 24 hours

        historical_data = NetworkDevice.query.filter(
            NetworkDevice.ip_address == ip_address,
            NetworkDevice.last_updated >= start_time,
            NetworkDevice.last_updated <= end_time
        ).order_by(NetworkDevice.last_updated.asc()).all()

        return [{
            "timestamp": data.last_updated.isoformat(),
            "bandwidth": data.bandwidth,
            "latency": data.latency,
            "packet_loss": data.packet_loss,
            "cpu_usage": data.cpu_usage,
            "status": data.status
        } for data in historical_data]

    async def analyze_network_data(self, ip_address:str) -> Dict:
        """
        Analyze network data using OpenAI to predict potential issues and recommend actions.
        """

        network_data = await self.fetch_realtime_data(ip_address)
        if not network_data:
            return {"error": "Device not found"}
        system_prompt = """
        You are an AI-powered network monitoring assistant. Your task is to analyze network data, 
        predict potential issues, and recommend preventive actions. Use the following data:
        - Bandwidth: {bandwidth}
        - Latency: {latency} ms
        - Packet Loss: {packet_loss}%
        - CPU Usage: {cpu_usage}%
        - Timestamp: {timestamp}

        Provide insights and recommendations in a structured format.
        """
        user_prompt = f"""
        Analyze the following network data:
        - Bandwidth: {network_data['bandwidth']}
        - Latency: {network_data['latency']} ms
        - Packet Loss: {network_data['packet_loss']}%
        - CPU Usage: {network_data['cpu_usage']}%
        - Timestamp: {network_data['timestamp']}

        Predict potential issues and recommend preventive actions detailed and make sure to let them one how to do that and give clear steps and instruction for the prevention.
        """

        completion = await self.openai.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            model="gpt-4",  # Use GPT-4 for advanced analysis
        )
        return completion.choices[0].message.content

    async def generate_predictive_alerts(self, ip_address:str) -> Dict:
        """
        Analyze historical data to identify patterns and generate predictive alerts.
        """
        historical_data = await self.fetch_historical_data(ip_address)
        if not historical_data:
            return {"error": "No historical data found for the specified IP address in the last 24 hours."}

        system_prompt = """
        You are an AI-powered predictive maintenance assistant. Your task is to analyze historical 
        network data, identify patterns indicating potential failures or performance degradation, 
        and generate alerts for network administrators. Use the following data:
        - Historical Network Data: {historical_data}

        Provide alerts and recommendations in a structured format.
        """
        user_prompt = f"""
        Analyze the following historical network data for the last 24 hours:
        {historical_data}

        Identify patterns that indicate potential failures or performance degradation. 
        Generate alerts and recommend actions to prevent issues. Provide detailed steps and explanations.
        """

        completion = await self.openai.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            model="gpt-4",  # Use GPT-4 for advanced analysis
        )
        return completion.choices[0].message.content


    async def optimize_resources(self, ip_address: str) -> Dict:
        """
        Provide recommendations for efficient resource allocation.
        """
        realtime_data = await self.fetch_realtime_data(ip_address)
        if not realtime_data:
            return {"error": "No real-time data found for the specified IP address."}
        
        system_prompt = """
        You are an AI-powered resource optimization assistant. Your task is to analyze current 
        network resource usage and provide recommendations for optimal bandwidth distribution 
        please use an average threshold to create If it is good or not and why and how to enhance It for the speed and performance
        and hardware utilization. Use the following data:
        - Current Bandwidth: {bandwidth} 
        - Current CPU Usage: {cpu_usage}%
        - Current Latency: {latency} ms
        - Current Packet Loss: {packet_loss}%

        Provide recommendations in a structured format.
        """
        user_prompt = f"""
        Analyze the following current resource usage:
        - Bandwidth: {realtime_data['bandwidth']}
        - CPU Usage: {realtime_data['cpu_usage']}%
        - Latency: {realtime_data['latency']} ms
        - Packet Loss: {realtime_data['packet_loss']}%

        Provide recommendations for efficient resource allocation. Include detailed steps and explanations.
        """

        completion = await self.openai.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt},
            ],
            model="gpt-4",  # Use GPT-4 for advanced analysis
        )
        return completion.choices[0].message.content