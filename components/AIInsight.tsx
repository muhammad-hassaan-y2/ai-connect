import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type NetworkData = {
  overallHealth: number
  bandwidthUsage: number
  latency: number
  packetLoss: number
  alerts: Array<{ id: string; type: string; severity: "Low" | "Medium" | "High" }>
  recommendations: Array<{ id: string; recommendation: string }>
}

export function AIInsights({ networkData }: { networkData: NetworkData }) {
  const generateAIInsights = (data: NetworkData) => {
    const insights = []

    if (data.overallHealth < 80) {
      insights.push("Network health is below optimal levels. Consider implementing the recommended optimizations.")
    }

    if (data.bandwidthUsage > 70) {
      insights.push("High bandwidth usage detected. Analyze traffic patterns and consider upgrading capacity.")
    }

    if (data.latency > 30) {
      insights.push("Latency is higher than usual. Check for network congestion or hardware issues.")
    }

    if (data.packetLoss > 0.5) {
      insights.push("Significant packet loss detected. Investigate potential network or hardware failures.")
    }

    if (data.alerts.some((alert) => alert.severity === "High")) {
      insights.push("High severity alerts detected. Immediate attention required.")
    }

    if (insights.length === 0) {
      insights.push("Network is performing optimally. Continue monitoring for any changes.")
    }

    return insights
  }

  const aiInsights = generateAIInsights(networkData)

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {aiInsights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

