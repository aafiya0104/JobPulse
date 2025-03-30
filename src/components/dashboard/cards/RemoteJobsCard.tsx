import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BarChart, TrendingUp, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

interface RemoteJobsCardProps {
  title?: string;
  description?: string;
  remoteJobsData?: {
    totalRemoteJobs: number;
    growthRate: number;
    topCategories: Array<{ name: string; percentage: number }>;
    entryLevelPercentage: number;
  };
}

const RemoteJobsCard = ({
  title = "Remote & Entry-Level Opportunities",
  description = "Insights on remote work trends and entry-level positions",
  remoteJobsData = {
    totalRemoteJobs: 24750,
    growthRate: 32,
    topCategories: [
      { name: "Software Development", percentage: 28 },
      { name: "Customer Support", percentage: 22 },
      { name: "Marketing", percentage: 18 },
      { name: "Design", percentage: 15 },
    ],
    entryLevelPercentage: 24,
  },
}: RemoteJobsCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden bg-white dark:bg-gray-800">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <Briefcase className="h-5 w-5 text-blue-500" />
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium">Remote Jobs</span>
                </div>
                <p className="mt-2 text-2xl font-bold">
                  {remoteJobsData.totalRemoteJobs.toLocaleString()}
                </p>
              </div>

              <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium">Growth Rate</span>
                </div>
                <p className="mt-2 text-2xl font-bold">
                  +{remoteJobsData.growthRate}%
                </p>
              </div>
            </div>

            {/* Top Categories */}
            <div>
              <h4 className="mb-2 text-sm font-medium">
                Top Remote Job Categories
              </h4>
              <div className="space-y-2">
                {remoteJobsData.topCategories.map((category, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span>{category.name}</span>
                      <span className="font-medium">
                        {category.percentage}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Entry Level Stats */}
            <div className="rounded-lg border border-dashed border-gray-200 dark:border-gray-700 p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm font-medium">
                    Entry-Level Positions
                  </span>
                </div>
                <span className="text-lg font-bold">
                  {remoteJobsData.entryLevelPercentage}%
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                {remoteJobsData.entryLevelPercentage}% of remote jobs are
                suitable for entry-level candidates
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RemoteJobsCard;
