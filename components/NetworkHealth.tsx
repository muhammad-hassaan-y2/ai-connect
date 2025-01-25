import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

type NetworkHealthProps = {
  data: {
    latency: number
    jitter: number
    packetLoss: number
    bandwidthUtilization: number
    throughput: number
    errorRates: number
  }
}

export function NetworkHealth({ data }: NetworkHealthProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Latency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.latency} ms</div>
          <Progress value={data.latency} max={100} className="mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Jitter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.jitter} ms</div>
          <Progress value={data.jitter} max={20} className="mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Packet Loss</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.packetLoss}%</div>
          <Progress value={data.packetLoss} max={5} className="mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Bandwidth Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.bandwidthUtilization}%</div>
          <Progress value={data.bandwidthUtilization} max={100} className="mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Throughput</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.throughput} Mbps</div>
          <Progress value={data.throughput} max={1000} className="mt-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Error Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.errorRates}%</div>
          <Progress value={data.errorRates} max={2} className="mt-2" />
        </CardContent>
      </Card>
    </div>
  )
}

