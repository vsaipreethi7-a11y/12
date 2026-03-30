import { useState } from "react";
import { MapPin, LayoutDashboard, Route, List } from "lucide-react";
import DashboardStats from "@/components/DashboardStats";
import BoothMap from "@/components/BoothMap";
import RoutePlanTable from "@/components/RoutePlanTable";
import BoothTable from "@/components/BoothTable";
import VillageChart from "@/components/VillageChart";
import { routePlan } from "@/data/boothData";

type Tab = "dashboard" | "route" | "booths" | "map";

const tabs: { id: Tab; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "route", label: "பயண திட்டம்", icon: Route },
  { id: "booths", label: "சாவடிகள்", icon: List },
  { id: "map", label: "வரைபடம்", icon: MapPin },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [selectedDay, setSelectedDay] = useState<number | null>(1);

  const currentRoute = selectedDay
    ? routePlan.find((d) => d.day === selectedDay)?.stops || []
    : [];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="gradient-secondary p-2.5 rounded-lg">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold">220 வாசுதேவநல்லூர்</h1>
              <p className="text-sm opacity-80">வாக்குச்சாவடி பயண திட்டமிடல்</p>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 -mb-px overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-6">
        {activeTab === "dashboard" && (
          <div className="space-y-6 animate-fade-in">
            <DashboardStats />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <VillageChart />
              <BoothMap height="340px" />
            </div>
          </div>
        )}

        {activeTab === "route" && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 animate-fade-in">
            <div className="lg:col-span-2">
              <RoutePlanTable onDaySelect={setSelectedDay} selectedDay={selectedDay} />
            </div>
            <div className="lg:col-span-3">
              <div className="sticky top-16">
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">
                    {selectedDay ? `நாள் ${selectedDay} வரைபடம்` : "வரைபடம்"}
                  </span>
                  {selectedDay && (
                    <a
                      href={`https://www.google.com/maps/dir/${currentRoute.map(s => `${s.lat},${s.lng}`).join("/")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full hover:opacity-90"
                    >
                      Google Maps-ல் திற
                    </a>
                  )}
                </div>
                <BoothMap
                  selectedDay={selectedDay}
                  routeStops={currentRoute}
                  height="500px"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "booths" && (
          <div className="animate-fade-in">
            <BoothTable />
          </div>
        )}

        {activeTab === "map" && (
          <div className="animate-fade-in">
            <BoothMap height="calc(100vh - 180px)" />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
