import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SkillDemandCardProps {
  className?: string;
}

const mockData = [
  { month: "Jan", demand: 65 },
  { month: "Feb", demand: 59 },
  { month: "Mar", demand: 80 },
  { month: "Apr", demand: 81 },
  { month: "May", demand: 56 },
  { month: "Jun", demand: 55 },
  { month: "Jul", demand: 40 },
  { month: "Aug", demand: 70 },
  { month: "Sep", demand: 90 },
  { month: "Oct", demand: 85 },
  { month: "Nov", demand: 95 },
  { month: "Dec", demand: 100 },
];

export default function SkillDemandCard({ className }: SkillDemandCardProps) {
  const [hoveredData, setHoveredData] = useState<{
    month: string;
    demand: number;
  } | null>(null);

  const handleMouseEnter = (data: any) => {
    setHoveredData(data.payload);
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  return (
    <Card
      className={`${className} overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-blue-800 dark:text-blue-300">
          Skill Demand Forecast
        </CardTitle>
        <p className="text-sm text-blue-600 dark:text-blue-400">
          Trending skills in the Indian tech market
        </p>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={mockData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              onMouseMove={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#ccc"
                opacity={0.3}
              />
              <XAxis dataKey="month" stroke="#6366f1" />
              <YAxis stroke="#6366f1" />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-md border border-blue-200 dark:border-blue-700">
                        <p className="font-medium text-blue-800 dark:text-blue-300">{`${payload[0].payload.month}`}</p>
                        <p className="text-blue-600 dark:text-blue-400">{`Demand: ${payload[0].value}`}</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Line
                type="monotone"
                dataKey="demand"
                stroke="#4f46e5"
                strokeWidth={3}
                dot={{ r: 4, fill: "#4f46e5" }}
                activeDot={{
                  r: 6,
                  fill: "#4f46e5",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 text-center">
          {hoveredData ? (
            <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
              {hoveredData.month}:{" "}
              <span className="font-bold">{hoveredData.demand}%</span> demand
            </p>
          ) : (
            <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
              Hover over the chart to see detailed demand data
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
