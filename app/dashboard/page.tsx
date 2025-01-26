"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "@/components/Sidebar"
import { Overview } from "@/components/Overview"
import { MonitoringMap } from "@/components/MonitoringMap"
import { AlertSection } from "@/components/AlertSection"
import { NetworkMetrics } from "@/components/NetworkMetrics"
import { PredictiveMaintenance } from "@/components/PredictiveMaintenance"
import { NetworkHealth } from "@/components/NetworkHealth"
import { PerformanceAnalysis } from "@/components/PerfomanceAnalysis"
import { Settings } from "@/components/Settings"
import { NetworkAnalysis } from "@/components/NetworkAnalysis"

interface NetworkData {
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

interface Alert {
  id: string
  type: string
  severity: "critical" | "warning" | "informational"
  message: string
  timestamp: Date
}

interface SettingsData {
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

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")
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
  const [settings, setSettings] = useState<SettingsData>({
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

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview   />
      case "map":
        return <MonitoringMap />
      case "alerts":
        return <AlertSection alerts={alerts} />
      case "metrics":
        return <NetworkMetrics />
      case "health":
        return <NetworkHealth data={networkData} />
      case "performance":
        return <PerformanceAnalysis data={networkData} />
      case "predictive":
        return <PredictiveMaintenance   />
      case "analysis":
        return <NetworkAnalysis />
      case "settings":
        return <Settings settings={settings} setSettings={setSettings} />
      default:
        return <Overview />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-3xl font-bold text-foreground mb-6">Network Monitoring Dashboard</h1>
        {renderContent()}
      </main>
    </div>
  )
}

