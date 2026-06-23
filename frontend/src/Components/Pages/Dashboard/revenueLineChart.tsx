import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CustomTooltip from "@/Components/Reusable elements/customTooltip";
import CustomLegend from  "@/Components/Reusable elements/customLegend";

function RevenueOverviewChart() {
  const data = [
    { day: "12 Jan", earnings: 29, revenue: 9 },
    { day: "13 Jan", earnings: 19, revenue: 32 },
    { day: "14 Jan", earnings: 22, revenue: 28 },
    { day: "15 Jan", earnings: 23, revenue: 18 },
    { day: "16 Jan", earnings: 15, revenue: 38 },
  ];

  return (
    <>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#94A3B8", fontSize: 12, fontFamily: "Inter"}} />
        <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `€${v}K`} tick={{ fill: "#94A3B8", fontSize: 12 }} />
        <Tooltip content={<CustomTooltip />} cursor={false} />
        <Line type="linear" dataKey="earnings" name="Earnings" stroke="#8C7BF7" strokeWidth={2} dot={false} />
        <Line type="linear" dataKey="revenue" name="Revenue" stroke="#78CF6F" strokeWidth={2} dot={false} />

      </LineChart>

    </ResponsiveContainer>

    <CustomLegend />
    </>
  );
}

export default RevenueOverviewChart;
