import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area
} from "recharts";
import { 
  ArrowUpRight, 
  Briefcase, 
  Building, 
  Code, 
  FileText, 
  Globe, 
  GraduationCap, 
  HeadphonesIcon, 
  Layers, 
  LineChart as LineChartIcon, 
  PenTool, 
  TrendingUp, 
  Users,
  Download
} from "lucide-react";

// Sample data for visualizations
const marketGrowthData = [
  { month: 'Jan', IT: 4000, Healthcare: 2400, Finance: 2000, Retail: 1500 },
  { month: 'Feb', IT: 3000, Healthcare: 2800, Finance: 2200, Retail: 1700 },
  { month: 'Mar', IT: 5000, Healthcare: 3200, Finance: 2500, Retail: 1900 },
  { month: 'Apr', IT: 7000, Healthcare: 3800, Finance: 2900, Retail: 2100 },
  { month: 'May', IT: 6500, Healthcare: 4200, Finance: 3100, Retail: 2300 },
  { month: 'Jun', IT: 7500, Healthcare: 4800, Finance: 3500, Retail: 2500 },
];

const jobDistributionData = [
  { name: 'Full-time', value: 65 },
  { name: 'Part-time', value: 15 },
  { name: 'Contract', value: 12 },
  { name: 'Freelance', value: 8 },
];

const skillDemandData = [
  { name: 'Jan', AI: 65, Web: 48, Mobile: 42, Cloud: 55 },
  { name: 'Feb', AI: 70, Web: 50, Mobile: 45, Cloud: 60 },
  { name: 'Mar', AI: 75, Web: 49, Mobile: 48, Cloud: 63 },
  { name: 'Apr', AI: 78, Web: 52, Mobile: 50, Cloud: 65 },
  { name: 'May', AI: 82, Web: 55, Mobile: 53, Cloud: 68 },
  { name: 'Jun', AI: 85, Web: 57, Mobile: 55, Cloud: 70 },
];

const salaryTrendsData = [
  { year: '2018', Tech: 80000, Healthcare: 75000, Finance: 85000, Marketing: 60000 },
  { year: '2019', Tech: 85000, Healthcare: 78000, Finance: 88000, Marketing: 62000 },
  { year: '2020', Tech: 90000, Healthcare: 82000, Finance: 90000, Marketing: 65000 },
  { year: '2021', Tech: 95000, Healthcare: 88000, Finance: 93000, Marketing: 70000 },
  { year: '2022', Tech: 102000, Healthcare: 92000, Finance: 98000, Marketing: 75000 },
  { year: '2023', Tech: 110000, Healthcare: 100000, Finance: 105000, Marketing: 82000 },
];

// Colors for charts
const COLORS = ['#4f46e5', '#8b5cf6', '#3b82f6', '#0ea5e9', '#10b981', '#ec4899'];

const MarketPulse = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Animation variants for pie chart
  const pieVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut" 
      }
    }
  };

  // Function to generate and download market report
  const generateReport = () => {
    setIsGeneratingReport(true);
    
    // Simulate report generation delay
    setTimeout(() => {
      // Create report content
      const reportData = {
        title: "Market Pulse Insights Report",
        date: new Date().toLocaleDateString(),
        jobGrowthData: jobGrowthData,
        skillDemandData: skillDemandData,
        industryGrowthData: industryGrowthData,
        employmentData: employmentData
      };
      
      // Convert report data to JSON string
      const jsonString = JSON.stringify(reportData, null, 2);
      
      // Create a blob from the JSON string
      const blob = new Blob([jsonString], { type: "application/json" });
      
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      
      // Create a temporary link element
      const link = document.createElement("a");
      link.href = url;
      link.download = `Market_Pulse_Report_${new Date().toISOString().split('T')[0]}.json`;
      
      // Append the link to the document, click it, and remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Release the URL
      URL.revokeObjectURL(url);
      
      setIsGeneratingReport(false);
    }, 2000); // 2 second delay to simulate processing
  };

  return (
    <div className="min-h-screen pb-20">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main className="pt-24 px-4 container mx-auto max-w-7xl">
        <div className="mb-8">
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Market Pulse 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 ml-2">
              Insights
            </span>
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real-time job market indicators and growth trends across industries
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { title: "Total Jobs", value: "456,782", change: 12, icon: <Briefcase className="h-5 w-5 text-white" />, color: "bg-indigo-600" },
            { title: "Growing Industries", value: "8", change: 4, icon: <Building className="h-5 w-5 text-white" />, color: "bg-purple-600" },
            { title: "In-Demand Skills", value: "32", change: 18, icon: <GraduationCap className="h-5 w-5 text-white" />, color: "bg-blue-600" },
            { title: "Market Growth", value: "14.3%", change: 7, icon: <TrendingUp className="h-5 w-5 text-white" />, color: "bg-cyan-600" },
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.title}</p>
                      <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                      <div className="flex items-center mt-2 text-green-500">
                        <span className="text-sm font-medium">+{stat.change}%</span>
                        <ArrowUpRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                    <div className={`p-3 rounded-full ${stat.color}`}>{stat.icon}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Tabs defaultValue="insights" className="mb-8">
          <TabsList className="mb-4">
            <TabsTrigger value="insights">Market Insights</TabsTrigger>
            <TabsTrigger value="trends">Growth Trends</TabsTrigger>
            <TabsTrigger value="skills">Skill Demand</TabsTrigger>
            <TabsTrigger value="salary">Salary Trends</TabsTrigger>
          </TabsList>
          
          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-indigo-600" />
                    Job Type Distribution
                  </CardTitle>
                  <CardDescription>Breakdown of available jobs by employment type</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <motion.div 
                    className="h-[350px] flex items-center justify-center"
                    variants={pieVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={jobDistributionData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                          animationBegin={200}
                          animationDuration={1500}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {jobDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  </motion.div>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Globe className="h-5 w-5 text-indigo-600" />
                    Industry Market Share
                  </CardTitle>
                  <CardDescription>Distribution of job openings across top industries</CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={marketGrowthData.slice(-4)}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="IT" fill="#4f46e5" />
                        <Bar dataKey="Healthcare" fill="#8b5cf6" />
                        <Bar dataKey="Finance" fill="#3b82f6" />
                        <Bar dataKey="Retail" fill="#0ea5e9" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <LineChartIcon className="h-5 w-5 text-indigo-600" />
                  Industry Growth Trends
                </CardTitle>
                <CardDescription>Monthly growth patterns across top industries</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-[350px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={marketGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="IT" stroke="#4f46e5" strokeWidth={2} activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="Healthcare" stroke="#8b5cf6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Finance" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Retail" stroke="#0ea5e9" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  Market Growth Projection
                </CardTitle>
                <CardDescription>Year-over-year job market growth by industry</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-[450px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={marketGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="IT" stackId="1" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="Healthcare" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="Finance" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                      <Area type="monotone" dataKey="Retail" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.6} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Code className="h-5 w-5 text-indigo-600" />
                  Skill Demand Trends
                </CardTitle>
                <CardDescription>Growing demand for key technical skills</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-[450px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={skillDemandData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="AI" stroke="#4f46e5" strokeWidth={2} activeDot={{ r: 8 }} />
                      <Line type="monotone" dataKey="Web" stroke="#8b5cf6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Mobile" stroke="#3b82f6" strokeWidth={2} />
                      <Line type="monotone" dataKey="Cloud" stroke="#0ea5e9" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="salary">
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Layers className="h-5 w-5 text-indigo-600" />
                  Salary Growth Trends
                </CardTitle>
                <CardDescription>Annual salary trends across industries</CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <div className="h-[450px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salaryTrendsData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                      <Legend />
                      <Bar dataKey="Tech" fill="#4f46e5" />
                      <Bar dataKey="Healthcare" fill="#8b5cf6" />
                      <Bar dataKey="Finance" fill="#3b82f6" />
                      <Bar dataKey="Marketing" fill="#0ea5e9" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="col-span-1 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Hot Job Categories</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <ul className="space-y-2">
                {[
                  { name: "Machine Learning", growth: "+24%", icon: <Code size={16} className="text-indigo-600" /> },
                  { name: "Healthcare Tech", growth: "+18%", icon: <HeadphonesIcon size={16} className="text-purple-600" /> },
                  { name: "Data Analytics", growth: "+15%", icon: <LineChartIcon size={16} className="text-blue-600" /> },
                  { name: "UX/UI Design", growth: "+14%", icon: <PenTool size={16} className="text-cyan-600" /> },
                  { name: "Content Creation", growth: "+12%", icon: <FileText size={16} className="text-green-600" /> },
                ].map((job, index) => (
                  <motion.li
                    key={job.name}
                    className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-gray-800"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-2">
                      {job.icon}
                      <span className="font-medium">{job.name}</span>
                    </div>
                    <span className="text-green-500 font-medium">{job.growth}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Regional Job Market Comparison</CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[280px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={[
                      { region: 'North America', jobs: 125000, remote: 45000 },
                      { region: 'Europe', jobs: 98000, remote: 38000 },
                      { region: 'Asia Pacific', jobs: 142000, remote: 32000 },
                      { region: 'India', jobs: 85000, remote: 26000 },
                      { region: 'Latin America', jobs: 35000, remote: 18000 },
                    ]}
                    margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis type="number" />
                    <YAxis dataKey="region" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="jobs" name="Total Jobs" fill="#4f46e5" />
                    <Bar dataKey="remote" name="Remote Jobs" fill="#8b5cf6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center">
          <Button 
            variant="outline" 
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-950"
            onClick={generateReport}
            disabled={isGeneratingReport}
          >
            {isGeneratingReport ? (
              <>
                <motion.div
                  className="h-4 w-4 border-2 border-indigo-600 border-t-transparent rounded-full mr-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Generating Report...
              </>
            ) : (
              <>
                <FileText className="h-4 w-4 mr-2" />
                Download Market Report
              </>
            )}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default MarketPulse; 