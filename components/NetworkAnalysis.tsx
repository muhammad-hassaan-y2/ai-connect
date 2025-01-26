"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

export function NetworkAnalysis() {
  const [input, setInput] = useState("")
  const [analysis, setAnalysis] = useState("")
  const [loading, setLoading] = useState(false)

  const handleAnalysis = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/analyze-network", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      })
      const data = await response.json()
      setAnalysis(data.analysis)
    } catch (error) {
      console.error("Error during network analysis:", error)
      setAnalysis("An error occurred during the analysis. Please try again.")
    }
    setLoading(false)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>AI Network Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Describe the network issue or paste logs here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleAnalysis} disabled={loading}>
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze Network"
          )}
        </Button>
        {analysis && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <h3 className="font-semibold mb-2">Analysis Result:</h3>
            <p>{analysis}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

