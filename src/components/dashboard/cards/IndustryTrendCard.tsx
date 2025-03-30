import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../ui/tooltip";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Info,
  TrendingUp,
  TrendingDown,
  Maximize2,
} from "lucide-react";
import { Button } from "../../ui/button";

interface IndustryData {
  name: string;
  growthRate: number;
  color: string;
  jobCount: number;
}

interface IndustryTrendCardProps {
  title?: string;
  description?: string;
  industries?: IndustryData[];
  onExpandClick?: () => void;
}

const IndustryTrendCard = ({
  title = "Industry Growth Trends",
  description = "Year-over-year growth rates across major industries",
  industries = [
    {
      name: "Technology",
      growthRate: 12.5,
      color: "#4f46e5",
      jobCount: 125000,
    },
    { name: "Healthcare", growthRate: 8.3, color: "#06b6d4", jobCount: 98000 },
    { name: "Finance", growthRate: 3.2, color: "#10b981", jobCount: 76000 },
    { name: "Retail", growthRate: -2.1, color: "#f43f5e", jobCount: 45000 },
    {
      name: "Manufacturing",
      growthRate: -4.5,
      color: "#f97316",
      jobCount: 62000,
    },
    { name: "Education", growthRate: 5.7, color: "#8b5cf6", jobCount: 83000 },
  ],
  onExpandClick = () => {},
}: IndustryTrendCardProps) => {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null);

  // Sort industries by growth rate (descending)
  const sortedIndustries = [...industries].sort(
    (a, b) => b.growthRate - a.growthRate,
  );

  // Calculate the maximum absolute growth rate for scaling
  const maxGrowthRate = Math.max(
    ...industries.map((i) => Math.abs(i.growthRate)),
  );

  return (
    <Card className="w-full h-full overflow-hidden bg-white dark:bg-gray-950 shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
              {description}
            </CardDescription>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onExpandClick}
                  className="h-8 w-8"
                >
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View detailed analysis</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {sortedIndustries.map((industry) => (
            <motion.div
              key={industry.name}
              className="relative"
              onMouseEnter={() => setHoveredIndustry(industry.name)}
              onMouseLeave={() => setHoveredIndustry(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: industry.color }}
                  />
                  <span className="font-medium text-sm">{industry.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span
                    className={`text-sm font-semibold ${industry.growthRate >= 0 ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"}`}
                  >
                    {industry.growthRate >= 0 ? "+" : ""}
                    {industry.growthRate}%
                  </span>
                  {industry.growthRate >= 0 ? (
                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600 dark:text-red-500" />
                  )}
                </div>
              </div>

              <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${industry.growthRate >= 0 ? "bg-gradient-to-r from-blue-400 to-blue-600" : "bg-gradient-to-r from-red-400 to-red-600"}`}
                  style={{
                    width: `${Math.min(100, (Math.abs(industry.growthRate) / maxGrowthRate) * 100)}%`,
                  }}
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.min(100, (Math.abs(industry.growthRate) / maxGrowthRate) * 100)}%`,
                  }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>

              {hoveredIndustry === industry.name && (
                <motion.div
                  className="absolute -right-2 -top-10 bg-white dark:bg-gray-800 shadow-lg rounded-md p-2 z-10 text-xs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p>
                    <span className="font-semibold">Jobs:</span>{" "}
                    {industry.jobCount.toLocaleString()}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-4 pt-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Info className="h-3 w-3" />
              <span>Based on last 12 months data</span>
            </div>
            <Button
              variant="link"
              className="text-xs p-0 h-auto"
              onClick={onExpandClick}
            >
              View all industries
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IndustryTrendCard;
