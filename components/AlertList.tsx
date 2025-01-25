import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Alert = {
  id: string
  type: string
  severity: "Low" | "Medium" | "High"
}

export function AlertsList({ alerts }: { alerts: Alert[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Predictive Maintenance Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        {alerts.length === 0 ? (
          <p>No active alerts</p>
        ) : (
          <ul className="space-y-2">
            {alerts.map((alert) => (
              <li key={alert.id} className="flex justify-between items-center">
                <span>{alert.type}</span>
                <Badge
                  variant={
                    alert.severity === "High" ? "destructive" : alert.severity === "Medium" ? "default" : "secondary"
                  }
                >
                  {alert.severity}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

