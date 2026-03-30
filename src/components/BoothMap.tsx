import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { villages, booths } from "@/data/boothData";

interface BoothMapProps {
  selectedDay?: number | null;
  routeStops?: { lat: number; lng: number; village: string }[];
  height?: string;
}

const BoothMap = ({ selectedDay, routeStops, height = "400px" }: BoothMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    if (mapInstance.current) {
      mapInstance.current.remove();
    }

    const map = L.map(mapRef.current).setView([9.235, 77.39], 13);
    mapInstance.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '© OpenStreetMap',
      maxZoom: 18,
    }).addTo(map);

    // Custom icons
    const boothIcon = L.divIcon({
      html: `<div style="background: hsl(220 70% 45%); width: 10px; height: 10px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
      className: "",
      iconSize: [14, 14],
      iconAnchor: [7, 7],
    });

    const villageIcon = L.divIcon({
      html: `<div style="background: hsl(30 90% 55%); width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>`,
      className: "",
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });

    const routeIcon = (order: number) => L.divIcon({
      html: `<div style="background: hsl(160 60% 40%); width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center; color: white; font-size: 11px; font-weight: 700;">${order}</div>`,
      className: "",
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });

    if (routeStops && routeStops.length > 0) {
      // Show route
      const coords: L.LatLngExpression[] = routeStops.map(s => [s.lat, s.lng]);
      L.polyline(coords, { color: "hsl(160, 60%, 40%)", weight: 3, opacity: 0.8, dashArray: "8, 6" }).addTo(map);
      
      routeStops.forEach((stop, i) => {
        L.marker([stop.lat, stop.lng], { icon: routeIcon(i + 1) })
          .addTo(map)
          .bindPopup(`<strong>${i + 1}. ${stop.village}</strong>`);
      });

      map.fitBounds(L.latLngBounds(coords).pad(0.1));
    } else {
      // Show all villages and booths
      villages.forEach(v => {
        L.marker([v.lat, v.lng], { icon: villageIcon })
          .addTo(map)
          .bindPopup(`<strong>${v.name}</strong><br/>${v.boothCount} வாக்குச்சாவடிகள்`);
      });

      // Show individual booths with slight offset
      booths.forEach(b => {
        const offset = (Math.random() - 0.5) * 0.003;
        L.marker([b.lat + offset, b.lng + offset], { icon: boothIcon })
          .addTo(map)
          .bindPopup(`<strong>#${b.boothNo}</strong><br/>${b.boothName}<br/><em>${b.village}</em>`);
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [selectedDay, routeStops]);

  return (
    <div
      ref={mapRef}
      style={{ height, width: "100%" }}
      className="rounded-lg overflow-hidden shadow-card border border-border"
    />
  );
};

export default BoothMap;
