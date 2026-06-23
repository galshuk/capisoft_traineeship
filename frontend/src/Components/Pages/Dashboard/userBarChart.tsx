import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import CustomTooltip from "@/Components/Reusable elements/customTooltip";
import { useState } from "react";

function UserOverviewChart() {
    const data = [
        { day: "12 Aug", clients: 220 },
        { day: "13 Aug", clients: 390 },
        { day: "14 Aug", clients: 398 },
        { day: "15 Aug", clients: 90 },
        { day: "16 Aug", clients: 110 },
        { day: "17 Aug", clients: 240 },
        { day: "18 Aug", clients: 310 },
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return(

        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Bar
                maxBarSize={20}
                fill="#C4B5FD"
                activeBar={{ fill: "#7C3AED" }}
                dataKey="clients"
                radius={[8, 8, 0, 0]}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill:'#94A3B8', fontSize: 12, fontWeight: "500"}}
                />
            <YAxis axisLine={false} tickLine={false} />
        </BarChart>
        </ResponsiveContainer>
    );

}

export default UserOverviewChart;
