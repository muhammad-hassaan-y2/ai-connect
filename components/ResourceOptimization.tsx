import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Recommendation = {
  id: string
  recommendation: string
}

export function ResourceOptimization({ recommendations }: { recommendations: Recommendation[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Resource Optimization</CardTitle>
      </CardHeader>
      <CardContent>
        {recommendations.length === 0 ? (
          <p>No current recommendations</p>
        ) : (
          <ul className="list-disc pl-5 space-y-1">
            {recommendations.map((rec) => (
              <li key={rec.id}>{rec.recommendation}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}

