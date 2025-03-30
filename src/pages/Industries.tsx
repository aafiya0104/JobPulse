import React from "react";
import Header from "../components/layout/Header";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const Industries = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const industryDistributionData = [
    { name: "Technology", value: 35, color: "#3b82f6" },
    { name: "Healthcare", value: 20, color: "#8b5cf6" },
    { name: "Finance", value: 15, color: "#ec4899" },
    { name: "Education", value: 10, color: "#10b981" },
    { name: "Manufacturing", value: 8, color: "#f59e0b" },
    { name: "Retail", value: 7, color: "#ef4444" },
    { name: "Others", value: 5, color: "#6366f1" },
  ];

  const growthTrendData = [
    {
      name: "2020",
      Technology: 15,
      Healthcare: 8,
      Finance: 10,
      Education: 5,
    },
    {
      name: "2021",
      Technology: 18,
      Healthcare: 12,
      Finance: 8,
      Education: 6,
    },
    {
      name: "2022",
      Technology: 25,
      Healthcare: 15,
      Finance: 12,
      Education: 8,
    },
    {
      name: "2023",
      Technology: 30,
      Healthcare: 18,
      Finance: 14,
      Education: 9,
    },
    {
      name: "2024",
      Technology: 35,
      Healthcare: 20,
      Finance: 15,
      Education: 10,
    },
  ];

  const emergingIndustries = [
    {
      name: "Green Energy",
      description: "Renewable energy solutions and sustainable technologies",
      growth: "+45%",
      icon: "🌱",
    },
    {
      name: "Digital Health",
      description: "Telemedicine, health tech, and remote patient monitoring",
      growth: "+38%",
      icon: "🏥",
    },
    {
      name: "Fintech",
      description: "Digital banking, cryptocurrency, and financial services",
      growth: "+32%",
      icon: "💰",
    },
    {
      name: "EdTech",
      description: "Online learning platforms and educational technology",
      growth: "+28%",
      icon: "🎓",
    },
    {
      name: "Cybersecurity",
      description: "Data protection, network security, and privacy solutions",
      growth: "+25%",
      icon: "🔒",
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <div className="container mx-auto px-4 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="gradient-text mb-4">Industry Insights</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover growing sectors and market opportunities across different
            industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-lg border-0 card-glow h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Industry Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={industryDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {industryDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value}%`, "Market Share"]}
                        contentStyle={{
                          backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                        }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="shadow-lg border-0 card-glow h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold">
                  Industry Growth Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={growthTrendData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="name" />
                      <YAxis
                        label={{
                          value: "Growth %",
                          angle: -90,
                          position: "insideLeft",
                        }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="Technology"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Healthcare"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Finance"
                        stroke="#ec4899"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="Education"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-lg border-0 card-glow">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Emerging Industries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergingIndustries.map((industry, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{industry.icon}</div>
                      <div>
                        <h3 className="text-lg font-bold">{industry.name}</h3>
                        <span className="text-sm font-medium text-green-500">
                          {industry.growth} YoY
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {industry.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Industries;
