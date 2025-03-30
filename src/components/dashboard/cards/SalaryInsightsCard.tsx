import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import {
  DollarSign,
  TrendingUp,
  MapPin,
  Briefcase,
  Filter,
} from "lucide-react";

interface SalaryData {
  role: string;
  location: string;
  experience: string;
  salary: number;
  industry: string;
}

interface SalaryInsightsCardProps {
  data?: SalaryData[];
  title?: string;
  description?: string;
}

const mockSalaryData: SalaryData[] = [
  {
    role: "Software Engineer",
    location: "San Francisco",
    experience: "Entry Level",
    salary: 95000,
    industry: "Technology",
  },
  {
    role: "Software Engineer",
    location: "New York",
    experience: "Entry Level",
    salary: 90000,
    industry: "Technology",
  },
  {
    role: "Software Engineer",
    location: "Austin",
    experience: "Entry Level",
    salary: 80000,
    industry: "Technology",
  },
  {
    role: "Software Engineer",
    location: "San Francisco",
    experience: "Mid Level",
    salary: 130000,
    industry: "Technology",
  },
  {
    role: "Software Engineer",
    location: "New York",
    experience: "Mid Level",
    salary: 125000,
    industry: "Technology",
  },
  {
    role: "Software Engineer",
    location: "Austin",
    experience: "Mid Level",
    salary: 110000,
    industry: "Technology",
  },
  {
    role: "Software Engineer",
    location: "San Francisco",
    experience: "Senior",
    salary: 180000,
    industry: "Technology",
  },
  {
    role: "Software Engineer",
    location: "New York",
    experience: "Senior",
    salary: 170000,
    industry: "Technology",
  },
  {
    role: "Software Engineer",
    location: "Austin",
    experience: "Senior",
    salary: 150000,
    industry: "Technology",
  },
  {
    role: "Data Scientist",
    location: "San Francisco",
    experience: "Entry Level",
    salary: 100000,
    industry: "Technology",
  },
  {
    role: "Data Scientist",
    location: "New York",
    experience: "Entry Level",
    salary: 95000,
    industry: "Technology",
  },
  {
    role: "Data Scientist",
    location: "Austin",
    experience: "Entry Level",
    salary: 85000,
    industry: "Technology",
  },
  {
    role: "UX Designer",
    location: "San Francisco",
    experience: "Mid Level",
    salary: 120000,
    industry: "Technology",
  },
  {
    role: "UX Designer",
    location: "New York",
    experience: "Mid Level",
    salary: 115000,
    industry: "Technology",
  },
  {
    role: "UX Designer",
    location: "Austin",
    experience: "Mid Level",
    salary: 100000,
    industry: "Technology",
  },
  {
    role: "Product Manager",
    location: "San Francisco",
    experience: "Senior",
    salary: 190000,
    industry: "Technology",
  },
  {
    role: "Product Manager",
    location: "New York",
    experience: "Senior",
    salary: 180000,
    industry: "Technology",
  },
  {
    role: "Product Manager",
    location: "Austin",
    experience: "Senior",
    salary: 160000,
    industry: "Technology",
  },
  {
    role: "Marketing Manager",
    location: "San Francisco",
    experience: "Mid Level",
    salary: 110000,
    industry: "Marketing",
  },
  {
    role: "Marketing Manager",
    location: "New York",
    experience: "Mid Level",
    salary: 105000,
    industry: "Marketing",
  },
];

const SalaryInsightsCard = ({
  data = mockSalaryData,
  title = "Salary Insights",
  description = "Explore average salaries based on roles, experience levels, and locations",
}: SalaryInsightsCardProps) => {
  const [selectedRole, setSelectedRole] = useState<string>("Software Engineer");
  const [selectedLocation, setSelectedLocation] =
    useState<string>("All Locations");
  const [selectedExperience, setSelectedExperience] =
    useState<string>("All Levels");
  const [salaryRange, setSalaryRange] = useState<[number, number]>([
    60000, 200000,
  ]);

  // Get unique values for filters
  const roles = Array.from(new Set(data.map((item) => item.role)));
  const locations = [
    "All Locations",
    ...Array.from(new Set(data.map((item) => item.location))),
  ];
  const experienceLevels = [
    "All Levels",
    ...Array.from(new Set(data.map((item) => item.experience))),
  ];

  // Filter data based on selections
  const filteredData = data.filter((item) => {
    const roleMatch =
      selectedRole === "All Roles" || item.role === selectedRole;
    const locationMatch =
      selectedLocation === "All Locations" ||
      item.location === selectedLocation;
    const experienceMatch =
      selectedExperience === "All Levels" ||
      item.experience === selectedExperience;
    const salaryMatch =
      item.salary >= salaryRange[0] && item.salary <= salaryRange[1];
    return roleMatch && locationMatch && experienceMatch && salaryMatch;
  });

  // Calculate average salary from filtered data
  const averageSalary =
    filteredData.length > 0
      ? Math.round(
          filteredData.reduce((sum, item) => sum + item.salary, 0) /
            filteredData.length,
        )
      : 0;

  // Find min and max salaries from filtered data
  const minSalary =
    filteredData.length > 0
      ? Math.min(...filteredData.map((item) => item.salary))
      : 0;
  const maxSalary =
    filteredData.length > 0
      ? Math.max(...filteredData.map((item) => item.salary))
      : 0;

  return (
    <Card className="w-full h-full overflow-hidden bg-white dark:bg-gray-900 border-0 shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-emerald-500" />
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="filters">Filters</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
                className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 p-4 rounded-lg flex flex-col items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Average Salary
                </span>
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  ${averageSalary.toLocaleString()}
                </span>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg flex flex-col items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Minimum Salary
                </span>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ${minSalary.toLocaleString()}
                </span>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg flex flex-col items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Maximum Salary
                </span>
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  ${maxSalary.toLocaleString()}
                </span>
              </motion.div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2 flex items-center gap-1">
                <TrendingUp className="h-4 w-4" /> Salary Distribution
              </h4>
              <div className="h-40 w-full bg-gray-50 dark:bg-gray-800 rounded-lg p-4 flex items-end justify-around">
                {filteredData.length > 0 ? (
                  // Simple bar chart visualization
                  experienceLevels
                    .filter((level) => level !== "All Levels")
                    .map((level, index) => {
                      const levelData = filteredData.filter(
                        (item) => item.experience === level,
                      );
                      const levelAvg =
                        levelData.length > 0
                          ? Math.round(
                              levelData.reduce(
                                (sum, item) => sum + item.salary,
                                0,
                              ) / levelData.length,
                            )
                          : 0;

                      // Calculate height percentage (max 90%)
                      const maxPossibleSalary = 200000; // Assuming this is our max for scaling
                      const heightPercentage = levelAvg
                        ? (levelAvg / maxPossibleSalary) * 90
                        : 0;

                      return (
                        <motion.div
                          key={level}
                          className="relative flex flex-col items-center"
                          initial={{ height: 0 }}
                          animate={{ height: `${heightPercentage}%` }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div
                            className={`w-16 rounded-t-md ${index === 0 ? "bg-blue-500" : index === 1 ? "bg-emerald-500" : "bg-purple-500"}`}
                            style={{ height: "100%" }}
                          />
                          <span className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                            {level}
                          </span>
                          <span className="text-xs font-medium">
                            ${levelAvg.toLocaleString()}
                          </span>
                        </motion.div>
                      );
                    })
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No data available for current filters
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="filters" className="space-y-4">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium flex items-center gap-1 mb-1">
                  <Briefcase className="h-4 w-4" /> Role
                </label>
                <Select value={selectedRole} onValueChange={setSelectedRole}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Roles">All Roles</SelectItem>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-1 mb-1">
                  <MapPin className="h-4 w-4" /> Location
                </label>
                <Select
                  value={selectedLocation}
                  onValueChange={setSelectedLocation}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-1 mb-1">
                  <TrendingUp className="h-4 w-4" /> Experience Level
                </label>
                <Select
                  value={selectedExperience}
                  onValueChange={setSelectedExperience}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium flex items-center gap-1 mb-1">
                  <Filter className="h-4 w-4" /> Salary Range
                </label>
                <div className="pt-6 px-2">
                  <Slider
                    defaultValue={[60000, 200000]}
                    max={200000}
                    min={40000}
                    step={5000}
                    value={salaryRange}
                    onValueChange={(value) =>
                      setSalaryRange(value as [number, number])
                    }
                    className="mb-6"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>${salaryRange[0].toLocaleString()}</span>
                    <span>${salaryRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="text-xs text-gray-500 border-t pt-4">
        <p>Data updated: July 2023 • Source: JobTrends Market Analysis</p>
      </CardFooter>
    </Card>
  );
};

export default SalaryInsightsCard;
