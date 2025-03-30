import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  Info,
  TrendingUp,
  Users,
  UserCheck,
  Heart,
  Award,
  Globe,
} from "lucide-react";

interface DiversityMetric {
  category: string;
  percentage: number;
  growth: number;
  color: string;
}

interface DiversityMetricsCardProps {
  title?: string;
  description?: string;
  metrics?: DiversityMetric[];
}

const DiversityMetricsCard = ({
  title = "Diversity & Inclusion Metrics",
  description = "Track diversity trends in tech and STEM fields across global markets",
  metrics = [
    {
      category: "Women in Tech",
      percentage: 38,
      growth: 7.2,
      color: "#8b5cf6",
    },
    {
      category: "Underrepresented Minorities",
      percentage: 32,
      growth: 5.8,
      color: "#ec4899",
    },
    {
      category: "People with Disabilities",
      percentage: 18,
      growth: 9.5,
      color: "#3b82f6",
    },
    {
      category: "LGBTQ+ Representation",
      percentage: 15,
      growth: 6.3,
      color: "#f59e0b",
    },
    {
      category: "Veterans",
      percentage: 12,
      growth: 4.1,
      color: "#10b981",
    },
  ],
}: DiversityMetricsCardProps) => {
  return (
    <Card className="w-full h-full overflow-hidden bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-950/30 transition-all duration-300 hover:shadow-lg border-purple-200 dark:border-purple-900 card-glow">
      <CardHeader className="pb-2 border-b border-purple-100 dark:border-purple-900/50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
              <Users size={20} className="text-white" />
            </div>
            <CardTitle className="text-2xl font-bold gradient-text">
              {title}
            </CardTitle>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-purple-400 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-300">
                  <Info size={18} />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="w-64">
                  Track diversity hiring metrics including women in tech/STEM
                  growth and inclusive hiring practices across global markets
                  including India.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription className="text-base text-purple-700 dark:text-purple-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center mb-1">
                <div className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: metric.color }}
                  ></div>
                  <span className="font-medium text-base">
                    {metric.category}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-base">
                  <span className="font-semibold">{metric.percentage}%</span>
                  <div className="flex items-center text-green-500">
                    <TrendingUp size={16} />
                    <span className="text-sm ml-0.5 font-bold">
                      {metric.growth}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full h-3 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: metric.color,
                    width: `${metric.percentage}%`,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.percentage}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-purple-100 dark:border-purple-900/50">
          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-500" />
            <span className="gradient-text">Inclusive Hiring Initiatives</span>
          </h4>
          <div className="grid grid-cols-2 gap-3">
            <motion.div
              className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-3 rounded-lg border border-purple-100 dark:border-purple-800/50"
              whileHover={{ scale: 1.03 }}
            >
              <Users size={20} className="text-purple-500" />
              <span className="text-sm font-medium">Mentorship Programs</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-3 rounded-lg border border-blue-100 dark:border-blue-800/50"
              whileHover={{ scale: 1.03 }}
            >
              <UserCheck size={20} className="text-blue-500" />
              <span className="text-sm font-medium">Inclusive Recruitment</span>
            </motion.div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border border-purple-200 dark:border-purple-800/30">
          <h4 className="text-base font-semibold mb-2 flex items-center gap-2">
            <Globe className="h-4 w-4 text-purple-600" />
            <span>Indian Market Spotlight</span>
          </h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Indian tech companies lead with 42% women in tech roles, 15% higher
            than global average. Companies like Infosys, TCS, and Wipro have
            increased diversity hiring by 28% in 2023.
          </p>
        </div>
      </CardContent>

      <CardFooter className="pt-2 border-t border-purple-100 dark:border-purple-900/50">
        <Button
          variant="link"
          className="text-purple-600 dark:text-purple-400 p-0 h-auto flex items-center gap-1"
        >
          <Heart className="h-4 w-4" />
          <span>View Diversity Success Stories</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiversityMetricsCard;
