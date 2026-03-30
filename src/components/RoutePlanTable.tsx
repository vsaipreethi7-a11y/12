import { useState } from "react";
import { routePlan } from "@/data/boothData";
import { ChevronDown, ChevronRight, MapPin, ExternalLink } from "lucide-react";

interface RoutePlanTableProps {
  onDaySelect: (day: number) => void;
  selectedDay: number | null;
}

const RoutePlanTable = ({ onDaySelect, selectedDay }: RoutePlanTableProps) => {
  const [expandedDays, setExpandedDays] = useState<Set<number>>(new Set([1]));

  const toggleDay = (day: number) => {
    const next = new Set(expandedDays);
    if (next.has(day)) next.delete(day);
    else next.add(day);
    setExpandedDays(next);
  };

  return (
    <div className="bg-card rounded-lg shadow-card overflow-hidden border border-border">
      <div className="p-4 border-b border-border gradient-hero">
        <h3 className="text-lg font-bold text-primary-foreground">
          📅 4 நாள் பயண திட்டம்
        </h3>
        <p className="text-sm text-primary-foreground/70 mt-1">
          கிராமம் மீது கிளிக் செய்து வரைபடத்தில் பாருங்கள்
        </p>
      </div>
      <div className="max-h-[500px] overflow-y-auto">
        {routePlan.map((day) => {
          const isExpanded = expandedDays.has(day.day);
          const isSelected = selectedDay === day.day;
          const totalDist = day.stops.reduce((s, stop) => s + stop.distance, 0);

          return (
            <div key={day.day} className="border-b border-border last:border-0">
              <button
                onClick={() => {
                  toggleDay(day.day);
                  onDaySelect(day.day);
                }}
                className={`w-full flex items-center justify-between p-3 hover:bg-muted/50 transition-colors ${
                  isSelected ? "bg-primary/5" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="font-semibold text-foreground">நாள் {day.day}</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                    {day.stops.length} இடங்கள்
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{totalDist.toFixed(1)} கி.மீ</span>
              </button>
              {isExpanded && (
                <div className="px-4 pb-3 animate-fade-in">
                  {day.stops.map((stop) => (
                    <div
                      key={stop.order}
                      className="flex items-center gap-3 py-2 border-t border-border/50 first:border-0"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground">
                        {stop.order}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {stop.village}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {stop.distance > 0 ? `${stop.distance} கி.மீ` : "தொடக்கம்"}
                        </p>
                      </div>
                      <a
                        href={`https://www.google.com/maps?q=${stop.lat},${stop.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoutePlanTable;
