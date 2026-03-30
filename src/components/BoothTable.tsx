import { useState } from "react";
import { booths } from "@/data/boothData";
import { Search, ExternalLink } from "lucide-react";

const BoothTable = () => {
  const [search, setSearch] = useState("");

  const filtered = booths.filter(
    (b) =>
      b.boothName.includes(search) ||
      b.village.includes(search) ||
      b.areas.includes(search) ||
      String(b.boothNo).includes(search)
  );

  return (
    <div className="bg-card rounded-lg shadow-card border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-bold text-foreground">🏛️ வாக்குச்சாவடி பட்டியல்</h3>
          <div className="flex-1 max-w-xs ml-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="தேடு..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm bg-muted rounded-lg border-0 outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto max-h-[400px] overflow-y-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 sticky top-0">
            <tr>
              <th className="text-left p-3 font-semibold text-foreground">எண்</th>
              <th className="text-left p-3 font-semibold text-foreground">சாவடி</th>
              <th className="text-left p-3 font-semibold text-foreground">பெயர்</th>
              <th className="text-left p-3 font-semibold text-foreground">கிராமம்</th>
              <th className="text-center p-3 font-semibold text-foreground">Maps</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr key={b.slNo} className="border-t border-border/50 hover:bg-muted/30 transition-colors">
                <td className="p-3 text-muted-foreground">{b.slNo}</td>
                <td className="p-3 font-medium text-foreground">#{b.boothNo}</td>
                <td className="p-3 text-foreground max-w-[250px] truncate">{b.boothName}</td>
                <td className="p-3">
                  <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-0.5 rounded-full font-medium">
                    {b.village}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <a
                    href={`https://www.google.com/maps?q=${b.lat},${b.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="h-4 w-4 inline" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-8">எதுவும் கிடைக்கவில்லை</p>
        )}
      </div>
    </div>
  );
};

export default BoothTable;
