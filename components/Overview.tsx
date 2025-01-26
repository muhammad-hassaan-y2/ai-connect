import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Define the prop types for the component
interface OverviewProps {
  totalSchools?: number;
  connectivityDistribution?: {
    good: number;
    fair: number;
    poor: number;
  };
  averageRiskScore?: number;
}

export function Overview({
  totalSchools = 100, // Default value
  connectivityDistribution = { good: 70, fair: 20, poor: 10 }, // Default values
  averageRiskScore = 3.5, // Default value
}: OverviewProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-cyan-900">Total Schools Monitored</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-cyan-700">{totalSchools}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-cyan-900">Connectivity Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between">
                <span>Good</span>
                <span>{connectivityDistribution.good}%</span>
              </div>
              <Progress value={connectivityDistribution.good} className="h-2 bg-cyan-100" />
            </div>
            <div>
              <div className="flex justify-between">
                <span>Fair</span>
                <span>{connectivityDistribution.fair}%</span>
              </div>
              <Progress value={connectivityDistribution.fair} className="h-2 bg-cyan-100" />
            </div>
            <div>
              <div className="flex justify-between">
                <span>Poor</span>
                <span>{connectivityDistribution.poor}%</span>
              </div>
              <Progress value={connectivityDistribution.poor} className="h-2 bg-cyan-100" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-cyan-900">Average Risk Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{averageRiskScore.toFixed(1)}</div>
          <Progress value={(averageRiskScore / 5) * 100} className="h-2 mt-2 bg-cyan-100" />
        </CardContent>
      </Card>
    </div>
  );
}
