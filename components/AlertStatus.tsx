import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Alert = {
  id: string
  type: string
  severity: "critical" | "warning" | "informational"
  message: string
  timestamp: Date
}

type AlertStatusProps = {
  alerts: Alert[]
}

export function AlertStatus({ alerts }: AlertStatusProps) {
  const getSeverityColor = (severity: Alert["severity"]) => {
    switch (severity) {
      case "critical":
        return "bg-red-900/50 text-red-50" // Updated for critical
      case "warning":
        return "bg-yellow-900/50 text-yellow-50" // Updated for warning
      case "informational":
        return "bg-blue-900/50 text-blue-50" // Updated for informational
      default:
        return "bg-gray-500 text-white" // Default case
    }
  }

  return (
    <Card className="bg-[#227f9d]/90 text-white border-none">
      <CardHeader>
        <CardTitle className="text-white">Active Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <div className="text-center text-white/70">No active alerts</div>
        ) : (
          <ul className="space-y-2">
            {alerts.map((alert) => (
              <li key={alert.id} className={`p-4 rounded-md ${getSeverityColor(alert.severity)}`}>
                <div className="flex justify-between">
                  <span className="font-bold">{alert.type}</span>
                  <span>{alert.timestamp.toLocaleString()}</span>
                </div>
                <p className="mt-1">{alert.message}</p>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}