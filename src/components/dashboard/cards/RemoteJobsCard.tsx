import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { BarChart, TrendingUp, MapPin, Briefcase, GraduationCap, Globe, Users, Code, HeadphonesIcon, PenTool, FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface RemoteJobsCardProps {
  title?: string;
  description?: string;
  remoteJobsData?: {
    totalRemoteJobs: number;
    growthRate: number;
    topCategories: Array<{ name: string; percentage: number; icon: React.ReactNode }>;
    entryLevelPercentage: number;
    fresherOpportunities: number;
    topFresherRoles: Array<{ name: string; openings: number }>;
  };
}

const RemoteJobsCard = ({
  title = "Remote & Entry-Level Opportunities",
  description = "Insights on remote work trends and entry-level positions",
  remoteJobsData = {
    totalRemoteJobs: 24750,
    growthRate: 32,
    topCategories: [
      { name: "Software Development", percentage: 28, icon: <Code size={14} /> },
      { name: "Customer Support", percentage: 22, icon: <HeadphonesIcon size={14} /> },
      { name: "Marketing", percentage: 18, icon: <FileText size={14} /> },
      { name: "Design", percentage: 15, icon: <PenTool size={14} /> },
    ],
    entryLevelPercentage: 24,
    fresherOpportunities: 8650,
    topFresherRoles: [
      { name: "Software Developer Trainee", openings: 1250 },
      { name: "Junior Content Writer", openings: 980 },
      { name: "Digital Marketing Associate", openings: 875 },
      { name: "UI/UX Design Intern", openings: 720 },
    ]
  },
}: RemoteJobsCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 border-blue-200 dark:border-blue-900 transition-all duration-300 hover:shadow-lg card-glow">
        <CardHeader className="pb-2 border-b border-blue-100 dark:border-blue-900/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">{title}</CardTitle>
            </div>
            <Briefcase className="h-5 w-5 text-blue-500" />
          </div>
          <CardDescription className="text-sm line-clamp-2">{description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-3 overflow-y-auto max-h-[290px] scrollbar-thin">
          <div className="space-y-3">
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-2 border border-blue-100 dark:border-blue-800/30">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-xs font-medium">Remote Jobs</span>
                </div>
                <p className="mt-1 text-lg font-bold text-blue-700 dark:text-blue-300">
                  {remoteJobsData.totalRemoteJobs.toLocaleString()}
                </p>
              </div>

              <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-2 border border-green-100 dark:border-green-800/30">
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-xs font-medium">Growth Rate</span>
                </div>
                <p className="mt-1 text-lg font-bold text-green-700 dark:text-green-300">
                  +{remoteJobsData.growthRate}%
                </p>
              </div>
            </div>

            {/* Top Categories */}
            <div>
              <h4 className="mb-2 text-xs font-medium flex items-center gap-1">
                <Globe className="h-3.5 w-3.5 text-blue-500" />
                <span>Top Remote Job Categories</span>
              </h4>
              <div className="space-y-1.5">
                {remoteJobsData.topCategories.map((category, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <span className="text-blue-600 dark:text-blue-400">{category.icon}</span>
                        <span className="truncate">{category.name}</span>
                      </div>
                      <span className="font-medium">
                        {category.percentage}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-700">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Entry Level Stats */}
            <div className="rounded-lg border border-dashed border-blue-200 dark:border-blue-700 p-2 bg-blue-50/50 dark:bg-blue-900/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-medium">
                    Entry-Level & Fresher
                  </span>
                </div>
                <span className="text-sm font-bold text-indigo-700 dark:text-indigo-300">
                  {remoteJobsData.fresherOpportunities.toLocaleString()}
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                {remoteJobsData.entryLevelPercentage}% of remote jobs are
                suitable for entry-level candidates
              </p>
              
              <div className="mt-2 space-y-1.5">
                <h5 className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  <span>Top Roles for Freshers</span>
                </h5>
                <div className="grid grid-cols-2 gap-1.5">
                  {remoteJobsData.topFresherRoles.map((role, index) => (
                    <div 
                      key={index} 
                      className="text-xs p-1.5 rounded bg-white dark:bg-gray-800 shadow-sm border border-blue-100 dark:border-blue-800/30"
                    >
                      <div className="font-medium text-xs truncate">{role.name}</div>
                      <div className="text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-0.5">
                        <Zap className="h-3 w-3 flex-shrink-0" />
                        <span className="text-xs truncate">{role.openings.toLocaleString()} openings</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="pt-2 border-t border-blue-100 dark:border-blue-900/50">
          <Link to="/remote-jobs">
            <Button
              variant="link"
              className="text-blue-600 dark:text-blue-400 p-0 h-auto flex items-center gap-1 text-sm"
            >
              <Briefcase className="h-4 w-4" />
              <span>Explore All Remote Opportunities</span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default RemoteJobsCard;
