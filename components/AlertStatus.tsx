import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
        return "bg-red-500"
      case "warning":
        return "bg-yellow-500"
      case "informational":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <p>No active alerts</p>
        ) : (
          <ul className="space-y-2">
            {alerts.map((alert) => (
              <li key={alert.id} className="flex items-center justify-between p-2 bg-gray-100 rounded">
                <div>
                  <Badge className={getSeverityColor(alert.severity)}>{alert.severity}</Badge>
                  <span className="ml-2 font-medium">{alert.type}</span>
                  <p className="text-sm text-gray-600">{alert.message}</p>
                </div>
                <span className="text-sm text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

