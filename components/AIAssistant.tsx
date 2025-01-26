"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useChat } from "ai/react"


export function AIAssistant() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  })

  return (
    <Card className="fixed bottom-4 right-4 w-80 bg-card">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle>AI Network Assistant</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[300px] mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-2`}>
              <div className={`flex items-start ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                <Avatar className="w-8 h-8">
                  <AvatarFallback>{message.role === "user" ? "U" : "AI"}</AvatarFallback>
                </Avatar>
                <div
                  className={`mx-2 p-2 rounded-lg ${
                    message.role === "user"
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={handleSubmit} className="flex">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Ask about network issues..."
            className="flex-grow mr-2"
          />
          <Button type="submit">Send</Button>
        </form>
      </CardContent>
    </Card>
  )
}

