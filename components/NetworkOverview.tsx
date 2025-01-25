import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function NetworkOverview({ health }: { health: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Health</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-2">{health}%</div>
        <Progress value={health} className="w-full" />
      </CardContent>
    </Card>
  )
}

