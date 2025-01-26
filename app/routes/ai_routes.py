from flask import Blueprint, jsonify, request
from app.services.ai_services import AIService
import asyncio
from datetime import datetime, timedelta
ai_bp = Blueprint('ai', __name__)


ai_service = AIService()

@ai_bp.route('/analyze-network/<ip_address>', methods=['GET'])
async def analyze_network(ip_address: str):
    """
    Analyze real-time network data and provide insights.
    """
    analysis = await ai_service.analyze_network_data(ip_address)
    return jsonify({"analysis": analysis})

@ai_bp.route('/predictive-alerts/<ip_address>', methods=['GET'])
async def predictive_alerts(ip_address: str):
    """
    Analyze historical data and generate predictive alerts.
    """
    # Fetch historical data for the last 24 hours
    alerts = await ai_service.generate_predictive_alerts(ip_address)
    return jsonify({"alerts": alerts})

@ai_bp.route('/optimize-resources/<ip_address>', methods=['GET'])
async def optimize_resources(ip_address: str):
    """
    Provide recommendations for resource optimization.
    """
    """
    Provide recommendations for resource optimization.
    """
    recommendations = await ai_service.optimize_resources(ip_address)
    return jsonify({"recommendations": recommendations})