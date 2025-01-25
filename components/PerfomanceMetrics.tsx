import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

type PerformanceMetricsProps = {
  bandwidthUsage: number
  latency: number
  packetLoss: number
}

export function PerformanceMetrics({ bandwidthUsage, latency, packetLoss }: PerformanceMetricsProps) {
  const data = [
    { name: "Bandwidth", value: bandwidthUsage },
    { name: "Latency", value: latency },
    { name: "Packet Loss", value: packetLoss * 100 }, // Convert to percentage
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

