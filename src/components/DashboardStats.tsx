import { MapPin, Building, Route, Calendar } from "lucide-react";
import { booths, villages, routePlan } from "@/data/boothData";

const stats = [
  {
    label: "மொத்த வாக்குச்சாவடிகள்",
    value: booths.length,
    icon: Building,
    color: "gradient-primary",
  },
  {
    label: "மொத்த கிராமங்கள்",
    value: villages.length,
    icon: MapPin,
    color: "gradient-secondary",
  },
  {
    label: "பயண நாட்கள்",
    value: routePlan.length,
    icon: Calendar,
    color: "bg-accent",
  },
  {
    label: "மொத்த தூரம் (கி.மீ)",
    value: Math.round(routePlan.reduce((sum, day) => sum + day.stops.reduce((s, stop) => s + stop.distance, 0), 0)),
    icon: Route,
    color: "bg-info",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg p-5 shadow-card bg-card animate-fade-in"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className={`${stat.color} p-2.5 rounded-lg`}>
              <stat.icon className="h-5 w-5 text-primary-foreground" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
