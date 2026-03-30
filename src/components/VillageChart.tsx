import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { villages } from "@/data/boothData";

const chartData = villages
  .filter((v) => v.boothCount > 0)
  .sort((a, b) => b.boothCount - a.boothCount)
  .map((v) => ({ name: v.name, count: v.boothCount }));

const colors = [
  "hsl(220, 70%, 45%)",
  "hsl(30, 90%, 55%)",
  "hsl(160, 60%, 40%)",
  "hsl(200, 80%, 50%)",
  "hsl(280, 60%, 50%)",
  "hsl(340, 70%, 50%)",
  "hsl(60, 80%, 45%)",
  "hsl(120, 50%, 40%)",
];

const VillageChart = () => {
  return (
    <div className="bg-card rounded-lg shadow-card border border-border p-4">
      <h3 className="text-lg font-bold text-foreground mb-4">📊 கிராம வாரி வாக்குச்சாவடிகள்</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
          <XAxis type="number" tick={{ fontSize: 12 }} />
          <YAxis
            dataKey="name"
            type="category"
            width={150}
            tick={{ fontSize: 11 }}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(220, 20%, 97%)",
              border: "1px solid hsl(220, 15%, 88%)",
              borderRadius: "8px",
              fontSize: "13px",
            }}
          />
          <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={20}>
            {chartData.map((_, idx) => (
              <Cell key={idx} fill={colors[idx % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VillageChart;
