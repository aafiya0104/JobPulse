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
  LineChart,
  Line,
  Legend,
} from "recharts";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const Salary = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const roleSalaryData = [
    { role: "Software Architect", salary: 3500000, color: "#3b82f6" },
    { role: "Data Scientist", salary: 2800000, color: "#8b5cf6" },
    { role: "DevOps Engineer", salary: 2500000, color: "#ec4899" },
    { role: "Full Stack Developer", salary: 2200000, color: "#10b981" },
    { role: "Product Manager", salary: 2000000, color: "#f59e0b" },
    { role: "Frontend Developer", salary: 1800000, color: "#ef4444" },
    { role: "Backend Developer", salary: 1700000, color: "#6366f1" },
    { role: "UI/UX Designer", salary: 1500000, color: "#14b8a6" },
  ];

  const experienceSalaryData = [
    {
      experience: "0-2 years",
      "Software Development": 800000,
      "Data Science": 900000,
      DevOps: 750000,
      "Product Management": 850000,
    },
    {
      experience: "3-5 years",
      "Software Development": 1500000,
      "Data Science": 1800000,
      DevOps: 1600000,
      "Product Management": 1700000,
    },
    {
      experience: "6-8 years",
      "Software Development": 2200000,
      "Data Science": 2500000,
      DevOps: 2300000,
      "Product Management": 2400000,
    },
    {
      experience: "9-12 years",
      "Software Development": 3000000,
      "Data Science": 3500000,
      DevOps: 3200000,
      "Product Management": 3300000,
    },
    {
      experience: "13+ years",
      "Software Development": 4000000,
      "Data Science": 4500000,
      DevOps: 4200000,
      "Product Management": 4300000,
    },
  ];

  const citySalaryData = [
    { city: "Bangalore", salary: 2200000, color: "#3b82f6" },
    { city: "Mumbai", salary: 2100000, color: "#8b5cf6" },
    { city: "Delhi NCR", salary: 2000000, color: "#ec4899" },
    { city: "Hyderabad", salary: 1900000, color: "#10b981" },
    { city: "Pune", salary: 1800000, color: "#f59e0b" },
    { city: "Chennai", salary: 1700000, color: "#ef4444" },
    { city: "Kolkata", salary: 1500000, color: "#6366f1" },
    { city: "Ahmedabad", salary: 1400000, color: "#14b8a6" },
  ];

  const formatSalary = (value) => {
    if (value >= 1000000) {
      return `₹${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `₹${(value / 1000).toFixed(0)}K`;
    }
    return `₹${value}`;
  };

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
          <h1 className="gradient-text mb-4">Salary Insights</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Compare compensation across roles, experience levels, and regions to
            make informed career decisions.
          </p>
        </motion.div>

        <Tabs defaultValue="roles" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="roles">By Role</TabsTrigger>
            <TabsTrigger value="experience">By Experience</TabsTrigger>
            <TabsTrigger value="location">By Location</TabsTrigger>
          </TabsList>

          <TabsContent value="roles">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-lg border-0 card-glow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Average Salary by Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[500px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={roleSalaryData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis type="number" tickFormatter={formatSalary} />
                        <YAxis dataKey="role" type="category" width={150} />
                        <Tooltip
                          formatter={(value) => [
                            formatSalary(value),
                            "Average Annual Salary",
                          ]}
                          contentStyle={{
                            backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                          }}
                        />
                        <Bar dataKey="salary" radius={[0, 4, 4, 0]}>
                          {roleSalaryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="experience">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-lg border-0 card-glow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Salary Progression by Experience
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[500px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={experienceSalaryData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="experience" />
                        <YAxis tickFormatter={formatSalary} />
                        <Tooltip
                          formatter={(value) => [
                            formatSalary(value),
                            "Average Annual Salary",
                          ]}
                          contentStyle={{
                            backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                          }}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="Software Development"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Data Science"
                          stroke="#8b5cf6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="DevOps"
                          stroke="#ec4899"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="Product Management"
                          stroke="#10b981"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="location">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-lg border-0 card-glow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Average Salary by Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[500px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={citySalaryData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis type="number" tickFormatter={formatSalary} />
                        <YAxis dataKey="city" type="category" width={100} />
                        <Tooltip
                          formatter={(value) => [
                            formatSalary(value),
                            "Average Annual Salary",
                          ]}
                          contentStyle={{
                            backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                            borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                          }}
                        />
                        <Bar dataKey="salary" radius={[0, 4, 4, 0]}>
                          {citySalaryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="shadow-lg border-0 card-glow">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Salary Negotiation Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">
                    Research
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-blue-600 dark:text-blue-400 text-xs">
                          1
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Know the market rate for your role and experience level
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-blue-600 dark:text-blue-400 text-xs">
                          2
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Consider location-based salary differences
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-blue-600 dark:text-blue-400 text-xs">
                          3
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Research the company's compensation structure
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold mb-4 text-purple-600 dark:text-purple-400">
                    Preparation
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-purple-600 dark:text-purple-400 text-xs">
                          1
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Document your achievements and contributions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-purple-600 dark:text-purple-400 text-xs">
                          2
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Practice your negotiation conversation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-purple-600 dark:text-purple-400 text-xs">
                          3
                        </span>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        Prepare for common objections
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Salary;
