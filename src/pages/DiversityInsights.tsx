import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import { 
  Users, 
  Globe, 
  UserCheck, 
  Award, 
  TrendingUp, 
  BarChart, 
  PieChart, 
  LineChart, 
  Building, 
  MapPin,
  Filter
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DiversityInsights = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [selectedRegion, setSelectedRegion] = useState("global");
  const [selectedIndustry, setSelectedIndustry] = useState("tech");
  const [isLoading, setIsLoading] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Data for different regions
  const regionData = {
    global: {
      womenInTech: "38%",
      womenGrowth: "7.2%",
      minorities: "32%",
      minoritiesGrowth: "5.8%",
      disabilities: "18%",
      disabilitiesGrowth: "9.5%",
      veterans: "12%",
      veteransGrowth: "4.1%"
    },
    india: {
      womenInTech: "42%",
      womenGrowth: "9.3%",
      minorities: "35%",
      minoritiesGrowth: "6.9%",
      disabilities: "22%",
      disabilitiesGrowth: "12.5%",
      veterans: "9%",
      veteransGrowth: "3.2%"
    },
    northAmerica: {
      womenInTech: "36%",
      womenGrowth: "6.5%",
      minorities: "38%",
      minoritiesGrowth: "8.1%",
      disabilities: "19%",
      disabilitiesGrowth: "10.2%",
      veterans: "15%",
      veteransGrowth: "5.3%"
    },
    europe: {
      womenInTech: "34%",
      womenGrowth: "5.8%",
      minorities: "29%",
      minoritiesGrowth: "4.9%",
      disabilities: "21%",
      disabilitiesGrowth: "11.7%",
      veterans: "8%",
      veteransGrowth: "2.8%"
    },
    asiaPacific: {
      womenInTech: "40%",
      womenGrowth: "8.6%",
      minorities: "33%",
      minoritiesGrowth: "6.3%",
      disabilities: "17%",
      disabilitiesGrowth: "8.9%",
      veterans: "7%",
      veteransGrowth: "2.4%"
    }
  };

  // Data for different industries
  const industryData = {
    tech: {
      roleDistribution: [
        { role: "Software Development", percentage: "25%" },
        { role: "Product Management", percentage: "15%" },
        { role: "Data Science", percentage: "20%" },
        { role: "UX/UI Design", percentage: "15%" },
        { role: "Other Technical Roles", percentage: "25%" }
      ]
    },
    healthcare: {
      roleDistribution: [
        { role: "Medical Professionals", percentage: "35%" },
        { role: "Healthcare IT", percentage: "20%" },
        { role: "Administration", percentage: "15%" },
        { role: "Research", percentage: "20%" },
        { role: "Other Roles", percentage: "10%" }
      ]
    },
    finance: {
      roleDistribution: [
        { role: "Investment Banking", percentage: "20%" },
        { role: "Financial Analysis", percentage: "25%" },
        { role: "FinTech Development", percentage: "15%" },
        { role: "Risk Management", percentage: "20%" },
        { role: "Other Roles", percentage: "20%" }
      ]
    },
    education: {
      roleDistribution: [
        { role: "Teaching", percentage: "40%" },
        { role: "EdTech Development", percentage: "15%" },
        { role: "Administration", percentage: "20%" },
        { role: "Research", percentage: "15%" },
        { role: "Other Roles", percentage: "10%" }
      ]
    },
    manufacturing: {
      roleDistribution: [
        { role: "Engineering", percentage: "30%" },
        { role: "Production", percentage: "25%" },
        { role: "Quality Control", percentage: "15%" },
        { role: "Process Improvement", percentage: "15%" },
        { role: "Other Roles", percentage: "15%" }
      ]
    }
  };

  // Handle filters change
  const handleRegionChange = (value: string) => {
    setIsLoading(true);
    setSelectedRegion(value);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };
  
  const handleIndustryChange = (value: string) => {
    setIsLoading(true);
    setSelectedIndustry(value);
    
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  // Get current region data
  const currentRegionData = regionData[selectedRegion as keyof typeof regionData];
  const currentIndustryData = industryData[selectedIndustry as keyof typeof industryData];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pb-20">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      
      <div className="pt-24 container mx-auto px-4">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Diversity & Inclusion Insights
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive analysis of diversity trends in tech and STEM fields across global markets
          </p>
        </motion.div>
        
        {/* Filters */}
        <div className="mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-purple-500" />
              <h2 className="font-semibold text-gray-800 dark:text-gray-200">Filter Insights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-auto">
              <div className="w-full md:w-48">
                <Select value={selectedRegion} onValueChange={handleRegionChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="global">Global</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="northAmerica">North America</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asiaPacific">Asia Pacific</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48">
                <Select value={selectedIndustry} onValueChange={handleIndustryChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <motion.div
              className="h-12 w-12 border-4 border-purple-500 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        ) : (
          <Tabs defaultValue="overview" className="w-full mb-8">
            <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Trends</TabsTrigger>
              <TabsTrigger value="companies">Leading Companies</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Key Statistics */}
                <motion.div variants={itemVariants} className="lg:col-span-3">
                  <Card className="border-purple-200 dark:border-purple-900">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center gap-2">
                        <BarChart className="h-5 w-5 text-purple-500" />
                        Diversity in {selectedIndustry === "tech" ? "Technology" : selectedIndustry === "healthcare" ? "Healthcare" : selectedIndustry === "finance" ? "Finance" : selectedIndustry === "education" ? "Education" : "Manufacturing"} Industry
                        {selectedRegion !== "global" && ` - ${selectedRegion === "india" ? "India" : selectedRegion === "northAmerica" ? "North America" : selectedRegion === "europe" ? "Europe" : "Asia Pacific"}`}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-900/30">
                          <div className="flex items-center gap-2 mb-1">
                            <Users className="h-4 w-4 text-purple-600" />
                            <h3 className="text-sm font-medium text-purple-700 dark:text-purple-300">Women in Tech</h3>
                          </div>
                          <p className="text-2xl font-bold">{currentRegionData.womenInTech}</p>
                          <div className="flex items-center text-green-500 text-sm mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>{currentRegionData.womenGrowth}</span>
                          </div>
                        </div>
                        
                        <div className="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg border border-pink-100 dark:border-pink-900/30">
                          <div className="flex items-center gap-2 mb-1">
                            <Globe className="h-4 w-4 text-pink-600" />
                            <h3 className="text-sm font-medium text-pink-700 dark:text-pink-300">Underrepresented Minorities</h3>
                          </div>
                          <p className="text-2xl font-bold">{currentRegionData.minorities}</p>
                          <div className="flex items-center text-green-500 text-sm mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>{currentRegionData.minoritiesGrowth}</span>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
                          <div className="flex items-center gap-2 mb-1">
                            <UserCheck className="h-4 w-4 text-blue-600" />
                            <h3 className="text-sm font-medium text-blue-700 dark:text-blue-300">People with Disabilities</h3>
                          </div>
                          <p className="text-2xl font-bold">{currentRegionData.disabilities}</p>
                          <div className="flex items-center text-green-500 text-sm mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>{currentRegionData.disabilitiesGrowth}</span>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-900/30">
                          <div className="flex items-center gap-2 mb-1">
                            <Award className="h-4 w-4 text-green-600" />
                            <h3 className="text-sm font-medium text-green-700 dark:text-green-300">Veterans</h3>
                          </div>
                          <p className="text-2xl font-bold">{currentRegionData.veterans}</p>
                          <div className="flex items-center text-green-500 text-sm mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            <span>{currentRegionData.veteransGrowth}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Women in Tech Breakdown */}
                <motion.div variants={itemVariants} className="lg:col-span-2">
                  <Card className="border-purple-200 dark:border-purple-900 h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-bold flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-purple-500" />
                        Women in {selectedIndustry === "tech" ? "Tech" : selectedIndustry === "healthcare" ? "Healthcare" : selectedIndustry === "finance" ? "Finance" : selectedIndustry === "education" ? "Education" : "Manufacturing"} - Role Distribution
                      </CardTitle>
                      <CardDescription>
                        Breakdown of roles held by women in {selectedIndustry === "tech" ? "tech" : selectedIndustry} companies
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center">
                        <div className="relative h-64 w-64 my-4">
                          {/* Fake pie chart with custom segments - in production this would be a real chart */}
                          <div className="absolute inset-0 rounded-full bg-gray-100 dark:bg-gray-800"></div>
                          <div className="absolute inset-0 rounded-full" style={{background: "conic-gradient(#8b5cf6 0% 25%, #a78bfa 25% 40%, #c4b5fd 40% 60%, #d8b4fe 60% 75%, #f5d0fe 75% 100%)"}}></div>
                          <div className="absolute inset-[15%] rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                            <p className="font-bold text-purple-600 dark:text-purple-400 text-lg">
                              {currentRegionData.womenInTech}
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full mt-4">
                          {currentIndustryData.roleDistribution.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className={`h-3 w-3 rounded-full ${
                                index === 0 ? "bg-[#8b5cf6]" : 
                                index === 1 ? "bg-[#a78bfa]" : 
                                index === 2 ? "bg-[#c4b5fd]" : 
                                index === 3 ? "bg-[#d8b4fe]" : 
                                "bg-[#f5d0fe]"
                              }`}></div>
                              <span className="text-sm">{item.role} ({item.percentage})</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Regional Comparison */}
                <motion.div variants={itemVariants}>
                  <Card className="border-blue-200 dark:border-blue-900 h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-bold flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-blue-500" />
                        Regional Comparison
                      </CardTitle>
                      <CardDescription>
                        Women in tech across different regions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 pt-2">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>India</span>
                            <span className="font-medium">42%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "42%" }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>North America</span>
                            <span className="font-medium">37%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "37%" }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Europe</span>
                            <span className="font-medium">39%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "39%" }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Asia Pacific</span>
                            <span className="font-medium">36%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "36%" }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Global Average</span>
                            <span className="font-medium">38%</span>
                          </div>
                          <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "38%" }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
                
                {/* Disability Inclusion */}
                <motion.div variants={itemVariants} className="lg:col-span-3">
                  <Card className="border-blue-200 dark:border-blue-900">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-blue-500" />
                        Job Trends for People with Disabilities
                      </CardTitle>
                      <CardDescription>
                        Companies with inclusive hiring initiatives highlighting disability inclusion
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                        <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-lg p-4 shadow-sm">
                          <div className="flex items-center gap-2">
                            <Building className="h-5 w-5 text-blue-500" />
                            <h3 className="font-semibold">Microsoft</h3>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Hiring Rate</div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold">25.6%</span>
                              <span className="text-green-500 text-xs">+4.8%</span>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300 mt-3 mb-1">Key Initiatives</div>
                            <ul className="text-sm space-y-1">
                              <li className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                <span>Adaptive technology program</span>
                              </li>
                              <li className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                <span>Inclusive interview process</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-lg p-4 shadow-sm">
                          <div className="flex items-center gap-2">
                            <Building className="h-5 w-5 text-blue-500" />
                            <h3 className="font-semibold">IBM</h3>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Hiring Rate</div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold">22.3%</span>
                              <span className="text-green-500 text-xs">+3.2%</span>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300 mt-3 mb-1">Key Initiatives</div>
                            <ul className="text-sm space-y-1">
                              <li className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                <span>Neurodiversity hiring program</span>
                              </li>
                              <li className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                <span>Accessible workplace tools</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-900/30 rounded-lg p-4 shadow-sm">
                          <div className="flex items-center gap-2">
                            <Building className="h-5 w-5 text-blue-500" />
                            <h3 className="font-semibold">{selectedRegion === "india" ? "Infosys" : "Google"}</h3>
                          </div>
                          <div className="mt-3">
                            <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">Hiring Rate</div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold">{selectedRegion === "india" ? "28.5%" : "21.7%"}</span>
                              <span className="text-green-500 text-xs">{selectedRegion === "india" ? "+6.3%" : "+5.1%"}</span>
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300 mt-3 mb-1">Key Initiatives</div>
                            <ul className="text-sm space-y-1">
                              <li className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                <span>Accessible workspace design</span>
                              </li>
                              <li className="flex items-center gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                                <span>Specialized training programs</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="trends">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-purple-200 dark:border-purple-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-purple-500" />
                      <span>Year-over-Year Diversity Growth</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="h-[320px] relative w-full overflow-hidden rounded-lg bg-purple-50 dark:bg-purple-900/20 mb-4">
                        <motion.div 
                          className="absolute w-40 h-40 top-8 left-8"
                          animate={{ 
                            y: [0, 8, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }}
                        >
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 relative flex items-center justify-center">
                            <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                              <div className="text-4xl">👩‍💻</div>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md mt-2 text-center">
                            <span className="text-purple-600 dark:text-purple-400 font-bold">+14%</span>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="absolute w-40 h-40 top-10 right-8"
                          animate={{ 
                            y: [0, 10, 0],
                            scale: [1, 1.03, 1]
                          }}
                          transition={{ 
                            duration: 4, 
                            delay: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }}
                        >
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 relative flex items-center justify-center">
                            <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                              <div className="text-4xl">👩‍🔬</div>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md mt-2 text-center">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">+21%</span>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="absolute w-40 h-40 bottom-8 left-1/2 transform -translate-x-1/2"
                          animate={{ 
                            y: [0, 12, 0],
                            scale: [1, 1.08, 1]
                          }}
                          transition={{ 
                            duration: 5, 
                            delay: 1,
                            repeat: Infinity,
                            repeatType: "reverse" 
                          }}
                        >
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-600 relative flex items-center justify-center">
                            <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                              <div className="text-4xl">👩‍⚕️</div>
                            </div>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md mt-2 text-center">
                            <span className="text-orange-600 dark:text-orange-400 font-bold">+18%</span>
                          </div>
                        </motion.div>
                        
                        <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-gray-500 dark:text-gray-400">
                          Women in STEM careers growth since last year
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-2 w-full">
                        <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg border border-purple-100 dark:border-purple-900/30 text-center">
                          <p className="text-sm font-medium text-purple-700 dark:text-purple-300">Tech</p>
                          <p className="text-lg font-bold">+14%</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30 text-center">
                          <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Science</p>
                          <p className="text-lg font-bold">+21%</p>
                        </div>
                        <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-100 dark:border-orange-900/30 text-center">
                          <p className="text-sm font-medium text-orange-700 dark:text-orange-300">Healthcare</p>
                          <p className="text-lg font-bold">+18%</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 dark:border-blue-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-blue-500" />
                      <span>Career Progression Metrics</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center">
                      <div className="h-[320px] relative w-full overflow-hidden rounded-lg bg-blue-50 dark:bg-blue-900/20 mb-4">
                        <div className="absolute top-3 left-0 right-0 text-center">
                          <h3 className="text-blue-800 dark:text-blue-300 font-medium">Inclusive Career Ladder</h3>
                        </div>
                        
                        {/* Career ladder animation */}
                        <div className="absolute left-0 right-0 top-10 bottom-10 flex flex-col items-center justify-between">
                          <motion.div 
                            className="flex items-end gap-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                          >
                            <div className="flex flex-col items-center">
                              <div className="text-3xl mb-5">👨‍🦽</div>
                              <div className="bg-blue-200 dark:bg-blue-800 h-16 w-20 rounded-md flex items-center justify-center">
                                <span className="font-bold text-xs">C-Suite</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="text-3xl mb-5">👩‍🦯</div>
                              <div className="bg-blue-200 dark:bg-blue-800 h-16 w-20 rounded-md flex items-center justify-center">
                                <span className="font-bold text-xs">C-Suite</span>
                              </div>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="w-56 h-1 bg-blue-300 dark:bg-blue-700"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.7 }}
                          ></motion.div>
                          
                          <motion.div 
                            className="flex items-end gap-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                          >
                            <div className="flex flex-col items-center">
                              <div className="text-3xl mb-5">👨‍🦼</div>
                              <div className="bg-blue-300 dark:bg-blue-700 h-24 w-20 rounded-md flex items-center justify-center">
                                <span className="font-bold text-xs">Director</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="text-3xl mb-5">🧏‍♀️</div>
                              <div className="bg-blue-300 dark:bg-blue-700 h-24 w-20 rounded-md flex items-center justify-center">
                                <span className="font-bold text-xs">Director</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="text-3xl mb-5">🧏‍♂️</div>
                              <div className="bg-blue-300 dark:bg-blue-700 h-24 w-20 rounded-md flex items-center justify-center">
                                <span className="font-bold text-xs">Director</span>
                              </div>
                            </div>
                          </motion.div>
                          
                          <motion.div 
                            className="w-80 h-1 bg-blue-400 dark:bg-blue-600"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 1.7 }}
                          ></motion.div>
                          
                          <motion.div 
                            className="flex items-end gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.2 }}
                          >
                            <div className="flex flex-col items-center">
                              <div className="text-3xl mb-5">👩‍🦽</div>
                              <div className="bg-blue-400 dark:bg-blue-600 h-32 w-16 rounded-md flex items-center justify-center">
                                <span className="font-bold text-xs">Managers</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="text-3xl mb-5">🧠</div>
                              <div className="bg-blue-400 dark:bg-blue-600 h-32 w-16 rounded-md flex items-center justify-center">
                                <span className="font-bold text-xs">Managers</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="text-3xl mb-5">👁️</div>
                              <div className="bg-blue-400 dark:bg-blue-600 h-32 w-16 rounded-md flex items-center justify-center">
                                <span className="font-bold text-xs">Managers</span>
                              </div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="text-3xl mb-5">🦻</div>
                              <div className="bg-blue-400 dark:bg-blue-600 h-32 w-16 rounded-md flex items-center justify-center">
                                <span className="font-bold text-xs">Managers</span>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                        
                        <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-gray-500 dark:text-gray-400">
                          People with disabilities across career levels
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-2 w-full">
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
                          <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Management Roles</p>
                          <p className="text-lg font-bold">+23% YoY</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">For people with disabilities</p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
                          <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Promotion Rate</p>
                          <p className="text-lg font-bold">+17% YoY</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Compared to overall workforce</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="companies">
              <Card className="border-green-200 dark:border-green-900">
                <CardHeader>
                  <CardTitle>Leading Companies in Diversity & Inclusion</CardTitle>
                  <CardDescription>Companies with exceptional diversity metrics and initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {["Microsoft", "IBM", "Google", "Infosys", "TCS", "Accenture"].map((company, index) => (
                      <Card key={index} className="border-gray-200 dark:border-gray-700">
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base">{company}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Details about {company}'s diversity programs would be displayed here.
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default DiversityInsights; 