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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Network Availability */}
      <Card>
        <CardHeader>
          <CardTitle>Network Availability</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.availability}%</div>
          <Progress value={data.availability} max={100} className="mt-2" />
        </CardContent>
      </Card>

      {/* Round-Trip Time */}
      <Card>
        <CardHeader>
          <CardTitle>Round-Trip Time (RTT)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.rtt} ms</div>
          <Progress value={data.rtt} max={100} className="mt-2" />
        </CardContent>
      </Card>

      {/* Network Congestion */}
      <Card>
        <CardHeader>
          <CardTitle>Network Congestion</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.congestionLevel}%</div>
          <Progress value={data.congestionLevel} max={100} className="mt-2" />
        </CardContent>
      </Card>

      {/* CPU Utilization */}
      <Card>
        <CardHeader>
          <CardTitle>CPU Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.cpuUtilization}%</div>
          <Progress value={data.cpuUtilization} max={100} className="mt-2" />
        </CardContent>
      </Card>

      {/* Memory Utilization */}
      <Card>
        <CardHeader>
          <CardTitle>Memory Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.memoryUtilization}%</div>
          <Progress value={data.memoryUtilization} max={100} className="mt-2" />
        </CardContent>
      </Card>

      {/* QoS Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>QoS Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>VoIP</span>
                <span>{data.qosMetrics.voip}%</span>
              </div>
              <Progress value={data.qosMetrics.voip} max={100} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Video Streaming</span>
                <span>{data.qosMetrics.videoStreaming}%</span>
              </div>
              <Progress value={data.qosMetrics.videoStreaming} max={100} />
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>File Transfer</span>
                <span>{data.qosMetrics.fileTransfer}%</span>
              </div>
              <Progress value={data.qosMetrics.fileTransfer} max={100} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
