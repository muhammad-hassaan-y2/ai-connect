import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, Map, Bell, Activity, Heart,  Brain, Settings, Home } from "lucide-react"

const menuItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "map", label: "Monitoring Map", icon: Map },
  { id: "alerts", label: "Alerts", icon: Bell },
  { id: "metrics", label: "Network Metrics", icon: BarChart },
  { id: "health", label: "Network Health", icon: Heart },
  { id: "performance", label: "Performance", icon: Activity },
  { id: "predictive", label: "Predictive Maintenance", icon: Brain },
  { id: "settings", label: "Settings", icon: Settings },
]
type SidebarProps = {
    activeTab: string;
    setActiveTab: (tab: string) => void;
  };
  
export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-white border-r border-gray-200">
      
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </div>
  )
}

