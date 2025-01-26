import unittest
import json
from your_flask_app import create_app


class NetworkStatusTestCase(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # Initialize the Flask test client
        cls.client = create_app().test_client()

    def test_network_status_success(self):
        # Test data for network status endpoint
        test_data = {
            "ip": "192.168.1.1",
            "communityString": "public",
            "metrics": ["bandwidth", "latency", "packetLoss", "cpuUsage"],
            "pingCount": 4,
            "tracerouteDepth": 30
        }

        # Simulate POST request to /network/network_status endpoint
        response = self.client.post(
            '/network/network_status',
            data=json.dumps(test_data),
            content_type='application/json'
        )

        # Assert the response status is OK (200)
        self.assertEqual(response.status_code, 200)

        # Parse the JSON response
        response_json = json.loads(response.data)

        # Assert that each requested metric is included in the response
        self.assertIn('bandwidth', response_json)
        self.assertIn('latency', response_json)
        self.assertIn('packetLoss', response_json)
        self.assertIn('cpuUsage', response_json)

    def test_network_status_missing_ip(self):
        # Test missing IP address
        test_data = {
            "communityString": "public",
            "metrics": ["bandwidth", "latency"],
            "pingCount": 4,
            "tracerouteDepth": 30
        }

        # Simulate POST request to /network/network_status endpoint with missing IP
        response = self.client.post(
            '/network/network_status',
            data=json.dumps(test_data),
            content_type='application/json'
        )

        # Assert the response status code is 400 (Bad Request)
        self.assertEqual(response.status_code, 400)
        
        # Assert the error message is appropriate
        response_json = json.loads(response.data)
        self.assertEqual(response_json['error'], 'IP address is required.')

    def test_network_status_invalid_metrics(self):
        # Test invalid metric
        test_data = {
            "ip": "192.168.1.1",
            "communityString": "public",
            "metrics": ["bandwidth", "invalidMetric"],
            "pingCount": 4,
            "tracerouteDepth": 30
        }

        # Simulate POST request to /network/network_status endpoint
        response = self.client.post(
            '/network/network_status',
            data=json.dumps(test_data),
            content_type='application/json'
        )

        # Assert the response status is OK (200)
        self.assertEqual(response.status_code, 200)

        # Parse the JSON response
        response_json = json.loads(response.data)

        # Assert that 'invalidMetric' is not in the response data
        self.assertNotIn('invalidMetric', response_json)

        # Assert that the valid metrics are still present
        self.assertIn('bandwidth', response_json)

    def test_network_status_empty_metrics(self):
        # Test with an empty metrics list
        test_data = {
            "ip": "192.168.1.1",
            "communityString": "public",
            "metrics": [],
            "pingCount": 4,
            "tracerouteDepth": 30
        }

        # Simulate POST request to /network/network_status endpoint
        response = self.client.post(
            '/network/network_status',
            data=json.dumps(test_data),
            content_type='application/json'
        )

        # Assert the response status is OK (200)
        self.assertEqual(response.status_code, 200)

        # Parse the JSON response
        response_json = json.loads(response.data)

        # Assert that no metrics data is returned
        self.assertEqual(response_json, {})

    def test_network_status_invalid_json(self):
        # Test sending invalid JSON
        test_data = "{'ip': '192.168.1.1', 'communityString': 'public'}"  # Invalid JSON format

        # Simulate POST request with invalid JSON
        response = self.client.post(
            '/network/network_status',
            data=test_data,
            content_type='application/json'
        )

        # Assert the response status code is 400 (Bad Request)
        self.assertEqual(response.status_code, 400)

        # Assert that the error message is appropriate
        response_json = json.loads(response.data)
        self.assertEqual(response_json['error'], 'Invalid JSON format.')

if __name__ == '__main__':
    unittest.main()
