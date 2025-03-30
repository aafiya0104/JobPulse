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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const Geography = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const topCitiesData = [
    { name: "Bangalore", jobs: 25000, color: "#3b82f6" },
    { name: "Mumbai", jobs: 18000, color: "#8b5cf6" },
    { name: "Delhi NCR", jobs: 16500, color: "#ec4899" },
    { name: "Hyderabad", jobs: 15000, color: "#10b981" },
    { name: "Pune", jobs: 12000, color: "#f59e0b" },
    { name: "Chennai", jobs: 10000, color: "#ef4444" },
    { name: "Kolkata", jobs: 7500, color: "#6366f1" },
    { name: "Ahmedabad", jobs: 5000, color: "#14b8a6" },
  ];

  const regionGrowthData = [
    { name: "South", growth: 28 },
    { name: "West", growth: 22 },
    { name: "North", growth: 18 },
    { name: "East", growth: 15 },
    { name: "Central", growth: 12 },
  ];

  const emergingHubs = [
    {
      name: "Coimbatore",
      state: "Tamil Nadu",
      growth: "+35%",
      industries: ["IT Services", "Manufacturing", "Education"],
      description:
        "Emerging as a major IT and manufacturing hub in South India",
    },
    {
      name: "Indore",
      state: "Madhya Pradesh",
      growth: "+32%",
      industries: ["IT/ITeS", "Automobile", "Pharmaceuticals"],
      description:
        "Fastest growing city in central India with strong IT presence",
    },
    {
      name: "Chandigarh",
      state: "Punjab/Haryana",
      growth: "+30%",
      industries: ["IT", "Education", "Services"],
      description: "Developing into a major tech hub in North India",
    },
    {
      name: "Kochi",
      state: "Kerala",
      growth: "+28%",
      industries: ["IT", "Tourism", "Shipping"],
      description: "Growing IT sector with focus on startups and innovation",
    },
    {
      name: "Jaipur",
      state: "Rajasthan",
      growth: "+25%",
      industries: ["IT", "Tourism", "Handicrafts"],
      description: "Emerging technology center with growing startup ecosystem",
    },
    {
      name: "Bhubaneswar",
      state: "Odisha",
      growth: "+22%",
      industries: ["IT", "Education", "Manufacturing"],
      description:
        "Rapidly developing IT infrastructure and educational institutions",
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
          <h1 className="gradient-text mb-4">Geographic Data</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore job distribution and opportunities across different
            locations in India.
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
                  Top Cities by Job Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={topCitiesData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip
                        formatter={(value) => [
                          `${value.toLocaleString()} jobs`,
                          "Available Positions",
                        ]}
                        contentStyle={{
                          backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                        }}
                      />
                      <Bar dataKey="jobs" radius={[0, 4, 4, 0]}>
                        {topCitiesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
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
                  Regional Growth Rates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={regionGrowthData}
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
                        formatter={(value) => [
                          `${value}% Growth`,
                          "Year-over-Year",
                        ]}
                        contentStyle={{
                          backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                        }}
                      />
                      <Bar
                        dataKey="growth"
                        fill="url(#colorGradient)"
                        radius={[4, 4, 0, 0]}
                      />
                      <defs>
                        <linearGradient
                          id="colorGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#8b5cf6"
                            stopOpacity={1}
                          />
                          <stop
                            offset="100%"
                            stopColor="#3b82f6"
                            stopOpacity={1}
                          />
                        </linearGradient>
                      </defs>
                    </BarChart>
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
                Emerging Job Hubs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergingHubs.map((hub, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold">{hub.name}</h3>
                      <span className="text-sm font-medium text-green-500">
                        {hub.growth}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {hub.state}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {hub.description}
                    </p>
                    <div>
                      <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                        Key Industries:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {hub.industries.map((industry, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Geography;
