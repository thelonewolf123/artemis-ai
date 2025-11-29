"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"
import { toast } from "sonner"
import { HARDCODED_CHAT_ID } from "@/lib/skills-api"



export function TelegramConnect() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(HARDCODED_CHAT_ID)
    toast.success("Chat ID copied to clipboard")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Telegram Connection</CardTitle>
        <CardDescription>
          Connect your Telegram account to Artemis. Use this Chat ID to interact with the bot.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="chat-id">Your Chat ID</Label>
          <div className="flex space-x-2">
            <Input id="chat-id" value={HARDCODED_CHAT_ID} readOnly />
            <Button variant="outline" size="icon" onClick={copyToClipboard}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            This ID is currently hardcoded for demonstration purposes.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
