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
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white">Latency</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.latency} ms</div>
          <Progress value={data.latency} max={100} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white">Jitter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.jitter} ms</div>
          <Progress value={data.jitter} max={20} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white">Packet Loss</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.packetLoss}%</div>
          <Progress value={data.packetLoss} max={5} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white">Bandwidth Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.bandwidthUtilization}%</div>
          <Progress value={data.bandwidthUtilization} max={100} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white">Throughput</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.throughput} Mbps</div>
          <Progress value={data.throughput} max={1000} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-white">Error Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.errorRates}%</div>
          <Progress value={data.errorRates} max={2} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>
    </div>
  )
}