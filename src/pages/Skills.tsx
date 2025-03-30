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

const Skills = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const skillsData = [
    { name: "React", value: 85, color: "#3b82f6" },
    { name: "Node.js", value: 78, color: "#8b5cf6" },
    { name: "Python", value: 72, color: "#ec4899" },
    { name: "Data Science", value: 68, color: "#10b981" },
    { name: "Cloud Computing", value: 65, color: "#f59e0b" },
    { name: "DevOps", value: 60, color: "#ef4444" },
    { name: "Machine Learning", value: 55, color: "#6366f1" },
    { name: "UI/UX Design", value: 50, color: "#14b8a6" },
  ];

  const emergingSkillsData = [
    { name: "Blockchain", growth: 120 },
    { name: "AI/ML", growth: 95 },
    { name: "AR/VR", growth: 85 },
    { name: "Quantum Computing", growth: 75 },
    { name: "Cybersecurity", growth: 70 },
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
          <h1 className="gradient-text mb-4">Skills Analysis</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the most in-demand skills in the job market and identify
            growth opportunities to advance your career.
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
                  Most In-Demand Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={skillsData}
                      layout="vertical"
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip
                        formatter={(value) => [
                          `${value}% Demand`,
                          "Demand Level",
                        ]}
                        contentStyle={{
                          backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                          borderColor: isDarkMode ? "#374151" : "#e5e7eb",
                        }}
                      />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {skillsData.map((entry, index) => (
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
                  Fastest Growing Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={emergingSkillsData}
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
                Skill Development Roadmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    level: "Beginner",
                    skills: [
                      "HTML/CSS",
                      "JavaScript Basics",
                      "Git",
                      "SQL Fundamentals",
                    ],
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    level: "Intermediate",
                    skills: [
                      "React/Vue/Angular",
                      "Node.js",
                      "API Design",
                      "Cloud Basics",
                    ],
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    level: "Advanced",
                    skills: [
                      "System Architecture",
                      "DevOps",
                      "ML/AI",
                      "Performance Optimization",
                    ],
                    color: "from-pink-400 to-pink-600",
                  },
                ].map((category, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
                  >
                    <h3
                      className={`text-lg font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.level}
                    </h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <li key={idx} className="flex items-center">
                          <div
                            className={`h-2 w-2 rounded-full bg-gradient-to-r ${category.color} mr-2`}
                          ></div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
