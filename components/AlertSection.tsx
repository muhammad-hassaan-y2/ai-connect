import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Alert {
  id: string
  type: string
  severity: "critical" | "warning" | "informational"
  message: string
}

interface AlertSectionProps {
  alerts: Alert[]
}

export function AlertSection({ alerts }: AlertSectionProps) {
  const getBadgeVariant = (severity: Alert["severity"]) => {
    switch (severity) {
      case "critical":
        return "destructive"
      case "warning":
        return "default"
      case "informational":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Active Alerts</CardTitle>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="north">North Region</SelectItem>
            <SelectItem value="south">South Region</SelectItem>
            <SelectItem value="east">East Region</SelectItem>
            <SelectItem value="west">West Region</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          {alerts.length === 0 ? (
            <div className="text-center text-gray-500">No active alerts</div>
          ) : (
            <div className="space-y-4">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{alert.type}</h3>
                    <p className="text-sm text-gray-500">{alert.message}</p>
                  </div>
                  <Badge variant={getBadgeVariant(alert.severity)}>{alert.severity}</Badge>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

