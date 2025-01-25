import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function NetworkMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Network Topology</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-100 h-64 flex items-center justify-center">
          <p className="text-gray-500">Network Map Placeholder</p>
        </div>
      </CardContent>
    </Card>
  )
}

