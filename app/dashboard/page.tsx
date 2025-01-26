"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "next-auth/react"
import { NetworkHealth } from "@/components/NetworkHealth"
import { AlertStatus } from "@/components/AlertStatus"
import { PerformanceAnalysis } from "@/components/PerfomanceAnalysis"
import { Settings } from "@/components/Settings"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type NetworkData = {
  latency: number
  jitter: number
  packetLoss: number
  bandwidthUtilization: number
  throughput: number
  errorRates: number
  availability: number
  rtt: number
  congestionLevel: number
  cpuUtilization: number
  memoryUtilization: number
  qosMetrics: {
    voip: number
    videoStreaming: number
    fileTransfer: number
  }
}

type Alert = {
  id: string
  type: string
  severity: "critical" | "warning" | "informational"
  message: string
  timestamp: Date
}

export default function Dashboard() {
  const [networkData, setNetworkData] = useState<NetworkData>({
    latency: 20,
    jitter: 5,
    packetLoss: 0.5,
    bandwidthUtilization: 65,
    throughput: 950,
    errorRates: 0.1,
    availability: 99.9,
    rtt: 40,
    congestionLevel: 25,
    cpuUtilization: 60,
    memoryUtilization: 70,
    qosMetrics: {
      voip: 95,
      videoStreaming: 90,
      fileTransfer: 85,
    },
  })

  const [alerts, setAlerts] = useState<Alert[]>([])
  const [settings, setSettings] = useState({
    alertThresholds: {
      latency: 50,
      packetLoss: 1,
      bandwidthUtilization: 80,
      errorRates: 1,
    },
    notificationPreferences: {
      email: true,
      sms: false,
      pushNotifications: true,
    },
  })

  const router = useRouter()

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setNetworkData((prevData) => ({
        ...prevData,
        latency: Math.floor(Math.random() * 50) + 10,
        jitter: Math.floor(Math.random() * 10) + 1,
        packetLoss: Number((Math.random() * 2).toFixed(2)),
        bandwidthUtilization: Math.floor(Math.random() * 30) + 50,
        throughput: Math.floor(Math.random() * 200) + 800,
        errorRates: Number((Math.random() * 0.5).toFixed(2)),
        availability: Number((99 + Math.random()).toFixed(2)),
        rtt: Math.floor(Math.random() * 30) + 30,
        congestionLevel: Math.floor(Math.random() * 50),
        cpuUtilization: Math.floor(Math.random() * 40) + 40,
        memoryUtilization: Math.floor(Math.random() * 30) + 60,
        qosMetrics: {
          voip: Math.floor(Math.random() * 10) + 90,
          videoStreaming: Math.floor(Math.random() * 15) + 85,
          fileTransfer: Math.floor(Math.random() * 20) + 80,
        },
      }))

      // Generate random alerts
      if (Math.random() > 0.7) {
        const newAlert: Alert = {
          id: Math.random().toString(36).substr(2, 9),
          type: ["Network Congestion", "High Latency", "Packet Loss"][Math.floor(Math.random() * 3)],
          severity: ["critical", "warning", "informational"][Math.floor(Math.random() * 3)] as
            | "critical"
            | "warning"
            | "informational",
          message: "Simulated alert message",
          timestamp: new Date(),
        }
        setAlerts((prevAlerts) => [...prevAlerts.slice(-9), newAlert])
      }
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push("/login")
  }

  return (
    <div
      className="min-h-screen bg-[#020617]"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/--73dCYeqK4Imf5ONk3myVKjZNodKZal.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <nav className="bg-[#227f9d]/90 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-white">NetMonitor Pro</span>
              </div>
            </div>
            <div className="flex items-center">
              <Button onClick={handleLogout} variant="outline">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-6">Network Monitoring Dashboard</h1>
        <Tabs defaultValue="health" className="space-y-4">
          <TabsList>
            <TabsTrigger value="health">Network Health</TabsTrigger>
            <TabsTrigger value="alerts">Alert Status</TabsTrigger>
            <TabsTrigger value="performance">Performance Analysis</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="health">
            <NetworkHealth data={networkData} />
          </TabsContent>
          <TabsContent value="alerts">
            <AlertStatus alerts={alerts} />
          </TabsContent>
          <TabsContent value="performance">
            <PerformanceAnalysis data={networkData} />
          </TabsContent>
          <TabsContent value="settings">
            <Settings settings={settings} setSettings={setSettings} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

