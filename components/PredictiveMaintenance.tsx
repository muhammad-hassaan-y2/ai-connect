import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PredictiveAlert {
  id: number;
  type: string;
  risk: "High" | "Medium" | "Low";
  reason: string;
}

export function PredictiveMaintenance() {
  const predictiveAlerts: PredictiveAlert[] = [
    { id: 1, type: "Potential Network Congestion", risk: "High", reason: "Increasing latency and packet loss trends" },
    { id: 2, type: "Hardware Failure Risk", risk: "Medium", reason: "Unusual CPU and memory utilization patterns" },
    { id: 3, type: "Bandwidth Saturation", risk: "Low", reason: "Gradual increase in bandwidth utilization" },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Predictive Maintenance Alerts</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-4">
            {predictiveAlerts.map((alert) => (
              <div key={alert.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold">{alert.type}</h3>
                  <p className="text-sm text-gray-500">{alert.reason}</p>
                </div>
                <Badge
                  variant={alert.risk === "High" ? "destructive" : alert.risk === "Medium" ? "default" : "secondary"}
                >
                  {alert.risk} Risk
                </Badge>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
