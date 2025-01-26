import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

type SettingsProps = {
  settings: {
    alertThresholds: {
      latency: number
      packetLoss: number
      bandwidthUtilization: number
      errorRates: number
    }
    notificationPreferences: {
      email: boolean
      sms: boolean
      pushNotifications: boolean
    }
  }
  setSettings: React.Dispatch<React.SetStateAction<SettingsProps["settings"]>>
}

export function Settings({ settings, setSettings }: SettingsProps) {
  const [localSettings, setLocalSettings] = useState(settings)

  const handleThresholdChange = (metric: keyof typeof settings.alertThresholds, value: string) => {
    setLocalSettings((prev) => ({
      ...prev,
      alertThresholds: {
        ...prev.alertThresholds,
        [metric]: Number(value),
      },
    }))
  }

  const handleNotificationChange = (type: keyof typeof settings.notificationPreferences) => {
    setLocalSettings((prev) => ({
      ...prev,
      notificationPreferences: {
        ...prev.notificationPreferences,
        [type]: !prev.notificationPreferences[type],
      },
    }))
  }

  const handleSave = () => {
    setSettings(localSettings)
    // Here you would typically send the new settings to your backend
    alert("Settings saved!")
  }

  return (
    <div className="space-y-4">
      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader>
          <CardTitle className="text-white">Alert Thresholds</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="latency-threshold" className="text-white">Latency Threshold (ms)</Label>
              <Input
                id="latency-threshold"
                type="number"
                value={localSettings.alertThresholds.latency}
                onChange={(e) => handleThresholdChange("latency", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
              />
            </div>
            <div>
              <Label htmlFor="packet-loss-threshold" className="text-white">Packet Loss Threshold (%)</Label>
              <Input
                id="packet-loss-threshold"
                type="number"
                value={localSettings.alertThresholds.packetLoss}
                onChange={(e) => handleThresholdChange("packetLoss", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
              />
            </div>
            <div>
              <Label htmlFor="bandwidth-utilization-threshold" className="text-white">Bandwidth Utilization Threshold (%)</Label>
              <Input
                id="bandwidth-utilization-threshold"
                type="number"
                value={localSettings.alertThresholds.bandwidthUtilization}
                onChange={(e) => handleThresholdChange("bandwidthUtilization", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
              />
            </div>
            <div>
              <Label htmlFor="error-rates-threshold" className="text-white">Error Rates Threshold (%)</Label>
              <Input
                id="error-rates-threshold"
                type="number"
                value={localSettings.alertThresholds.errorRates}
                onChange={(e) => handleThresholdChange("errorRates", e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder-white/50"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#227f9d]/90 text-white border-none">
        <CardHeader>
          <CardTitle className="text-white">Notification Preferences</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications" className="text-white">Email Notifications</Label>
            <Switch
              id=" email-notifications"
              checked={localSettings.notificationPreferences.email}
              onCheckedChange={() => handleNotificationChange("email")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="sms-notifications" className="text-white">SMS Notifications</Label>
            <Switch
              id="sms-notifications"
              checked={localSettings.notificationPreferences.sms}
              onCheckedChange={() => handleNotificationChange("sms")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications" className="text-white">Push Notifications</Label>
            <Switch
              id="push-notifications"
              checked={localSettings.notificationPreferences.pushNotifications}
              onCheckedChange={() => handleNotificationChange("pushNotifications")}
            />
          </div>
        </CardContent>
      </Card>

      <Button onClick={handleSave} className="bg-white text-[#227f9d] hover:bg-white/90">
        Save Settings
      </Button>
    </div>
  )
}