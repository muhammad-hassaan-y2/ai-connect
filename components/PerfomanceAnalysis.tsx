import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type PerformanceAnalysisProps = {
  data: {
    availability: number;
    rtt: number;
    congestionLevel: number;
    cpuUtilization: number;
    memoryUtilization: number;
    qosMetrics: {
      voip: number;
      videoStreaming: number;
      fileTransfer: number;
    };
  };
};

export function PerformanceAnalysis({ data }: PerformanceAnalysisProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Network Availability */}
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader>
          <CardTitle className="text-white">Network Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.availability}%</div>
          <Progress value={data.availability} max={100} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>

      {/* Round-Trip Time */}
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader>
          <CardTitle className="text-white">Round-Trip Time (RTT)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.rtt} ms</div>
          <Progress value={data.rtt} max={100} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>

      {/* Network Congestion */}
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader>
          <CardTitle className="text-white">Network Congestion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.congestionLevel}%</div>
          <Progress value={data.congestionLevel} max={100} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>

      {/* CPU Utilization */}
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader>
          <CardTitle className="text-white">CPU Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.cpuUtilization}%</div>
          <Progress value={data.cpuUtilization} max={100} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>

      {/* Memory Utilization */}
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader>
          <CardTitle className="text-white">Memory Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-white">{data.memoryUtilization}%</div>
          <Progress value={data.memoryUtilization} max={100} className="mt-2 bg-white/20 [&>div]:bg-white" />
        </CardContent>
      </Card>

      {/* QoS Metrics */}
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader>
          <CardTitle className="text-white">QoS Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between">
                <span className="text-white">VoIP</span>
                <span className="text-white">{data.qosMetrics.voip}%</span>
              </div>
              <Progress value={data.qosMetrics.voip} max={100} className="mt-1 bg-white/20 [&>div]:bg-white" />
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-white">Video Streaming</span>
                <span className="text-white">{data.qosMetrics.videoStreaming}%</span>
              </div>
              <Progress value={data.qosMetrics.videoStreaming} max={100} className="mt-1 bg-white/20 [&>div]:bg-white" />
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-white">File Transfer</span>
                <span className="text-white">{data.qosMetrics.fileTransfer}%</span>
              </div>
              <Progress value={data.qosMetrics.fileTransfer} max={100} className="mt-1 bg-white/20 [&>div]:bg-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}