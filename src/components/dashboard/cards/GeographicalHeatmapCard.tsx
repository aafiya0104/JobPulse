import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  Info,
  MapPin,
  TrendingUp,
  Users,
  Globe,
  Building,
  Briefcase,
} from "lucide-react";

interface RegionData {
  name: string;
  jobCount: number;
  growthRate: number;
  topRoles: string[];
  avgSalary: string;
  topCompanies?: string[];
}

interface GeographicalHeatmapCardProps {
  title?: string;
  description?: string;
  regions?: RegionData[];
  onRegionClick?: (region: RegionData) => void;
}

const defaultRegions: RegionData[] = [
  {
    name: "West Coast",
    jobCount: 12500,
    growthRate: 8.5,
    topRoles: ["Software Engineer", "Data Scientist", "Product Manager"],
    avgSalary: "$125,000",
    topCompanies: ["Google", "Apple", "Meta", "Netflix"],
  },
  {
    name: "Northeast",
    jobCount: 9800,
    growthRate: 6.2,
    topRoles: ["Financial Analyst", "Marketing Director", "UX Designer"],
    avgSalary: "$115,000",
    topCompanies: ["JP Morgan", "Goldman Sachs", "IBM", "Deloitte"],
  },
  {
    name: "Midwest",
    jobCount: 7200,
    growthRate: 4.8,
    topRoles: ["Systems Analyst", "Project Manager", "Business Analyst"],
    avgSalary: "$95,000",
    topCompanies: ["Ford", "General Motors", "Caterpillar", "Abbott"],
  },
  {
    name: "South",
    jobCount: 8900,
    growthRate: 7.1,
    topRoles: ["DevOps Engineer", "Cloud Architect", "Sales Manager"],
    avgSalary: "$105,000",
    topCompanies: ["AT&T", "Lockheed Martin", "Dell", "ExxonMobil"],
  },
  {
    name: "India",
    jobCount: 18700,
    growthRate: 14.8,
    topRoles: ["Full Stack Developer", "AI/ML Engineer", "Mobile Developer"],
    avgSalary: "₹18,50,000",
    topCompanies: ["TCS", "Infosys", "Wipro", "HCL Technologies"],
  },
  {
    name: "Remote",
    jobCount: 15600,
    growthRate: 12.3,
    topRoles: ["Frontend Developer", "Content Writer", "Customer Success"],
    avgSalary: "$110,000",
    topCompanies: ["Shopify", "GitLab", "Zapier", "Automattic"],
  },
];

const GeographicalHeatmapCard = ({
  title = "Global Job Market Heatmap",
  description = "Explore job density across regions with detailed insights on demand and growth",
  regions = defaultRegions,
  onRegionClick = () => {},
}: GeographicalHeatmapCardProps) => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Calculate the intensity of the heat color based on job count
  const getHeatIntensity = (jobCount: number) => {
    const max = Math.max(...regions.map((r) => r.jobCount));
    const intensity = (jobCount / max) * 100;
    return intensity;
  };

  const handleRegionClick = (region: RegionData) => {
    setSelectedRegion(region);
    setIsDialogOpen(true);
    onRegionClick(region);
  };

  return (
    <Card className="w-full h-full overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/30 border-blue-200 dark:border-blue-900/50 card-glow">
      <CardHeader className="pb-2 border-b border-blue-100 dark:border-blue-900/30">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
              <Globe className="h-6 w-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold gradient-text">
                {title}
              </CardTitle>
              <CardDescription className="text-base text-blue-700 dark:text-blue-300 mt-1">
                {description}
              </CardDescription>
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <Info className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click on regions to see detailed job market information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="relative w-full h-[350px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg overflow-hidden border border-blue-100 dark:border-blue-900/20">
          {/* World Map Placeholder - In a real implementation, this would be an actual map component */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1589519160732-576f165b9aad?w=1200&q=80"
              alt="World Map"
              className="w-full h-full object-cover opacity-20"
            />
          </div>

          {/* Heat spots for each region */}
          <div className="absolute inset-0">
            {regions.map((region, index) => {
              // Position heat spots in different areas of the map
              const positions = [
                { top: "40%", left: "15%" }, // West Coast
                { top: "35%", left: "25%" }, // Northeast
                { top: "40%", left: "20%" }, // Midwest
                { top: "45%", left: "22%" }, // South
                { top: "50%", left: "65%" }, // India
                { top: "30%", left: "50%" }, // Remote (centered)
              ];

              const intensity = getHeatIntensity(region.jobCount);
              const size = 40 + intensity / 5; // Size based on job count

              // Different colors for different regions
              const colors = [
                "rgba(59, 130, 246, 1)", // blue
                "rgba(99, 102, 241, 1)", // indigo
                "rgba(139, 92, 246, 1)", // purple
                "rgba(236, 72, 153, 1)", // pink
                "rgba(239, 68, 68, 1)", // red
                "rgba(16, 185, 129, 1)", // green
              ];

              return (
                <motion.div
                  key={region.name}
                  className="absolute cursor-pointer"
                  style={{
                    top: positions[index].top,
                    left: positions[index].left,
                  }}
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleRegionClick(region)}
                >
                  <div
                    className="rounded-full flex items-center justify-center"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      background: `${colors[index]}`,
                      boxShadow: `0 0 ${intensity / 2}px ${intensity / 4}px ${colors[index].replace("1)", "0.5)")}`,
                    }}
                  >
                    <span className="text-xs font-bold text-white">
                      {region.jobCount > 10000 ? "10k+" : region.jobCount}
                    </span>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {region.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6">
          {regions.map((region, index) => {
            // Different gradient backgrounds for different regions
            const gradients = [
              "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20", // West Coast
              "from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20", // Northeast
              "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20", // Midwest
              "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20", // South
              "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20", // India
              "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20", // Remote
            ];

            return (
              <motion.div
                key={region.name}
                className={`bg-gradient-to-r ${gradients[index]} p-3 rounded-lg cursor-pointer border border-blue-100 dark:border-blue-900/20`}
                whileHover={{ y: -5, scale: 1.03 }}
                onClick={() => handleRegionClick(region)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {region.name}
                  </span>
                  <MapPin className="h-4 w-4 text-blue-500" />
                </div>
                <div className="mt-1 flex items-center text-xs text-gray-600 dark:text-gray-300">
                  <Users className="h-3 w-3 mr-1" />
                  <span>{region.jobCount.toLocaleString()}</span>
                  <TrendingUp className="h-3 w-3 ml-2 mr-1 text-green-500" />
                  <span className="font-bold">{region.growthRate}%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          variant="outline"
          className="w-full text-sm bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 dark:hover:from-blue-800/30 dark:hover:to-indigo-800/30 border-blue-200 dark:border-blue-800/30 text-blue-700 dark:text-blue-300"
          onClick={() => setIsDialogOpen(true)}
        >
          View Full Global Job Market Map
        </Button>
      </CardFooter>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[800px] bg-gradient-to-br from-white to-blue-50 dark:from-gray-950 dark:to-blue-950/20 border-blue-200 dark:border-blue-900/50">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
              <Globe className="h-6 w-6" />
              {selectedRegion
                ? `${selectedRegion.name} Job Market`
                : "Global Job Market Analysis"}
            </DialogTitle>
            <DialogDescription className="text-blue-700 dark:text-blue-300">
              Detailed job market insights and trends for this region.
            </DialogDescription>
          </DialogHeader>

          {selectedRegion ? (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30">
                  <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <Briefcase className="h-4 w-4" />
                    <span>Job Openings</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedRegion.jobCount.toLocaleString()}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-lg border border-green-200 dark:border-green-800/30">
                  <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>Growth Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    +{selectedRegion.growthRate}%
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800/30">
                  <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Avg. Salary</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedRegion.avgSalary}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 p-4 rounded-lg border border-indigo-200 dark:border-indigo-800/30">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-indigo-500" />
                    <span>Top Roles in Demand</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedRegion.topRoles.map((role, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {role}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 p-4 rounded-lg border border-pink-200 dark:border-pink-800/30">
                  <h4 className="text-base font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Building className="h-5 w-5 text-pink-500" />
                    <span>Top Companies Hiring</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedRegion.topCompanies?.map((company, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-pink-500 mr-2"></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {company}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800/30">
                <h4 className="text-base font-medium text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-500" />
                  <span>Monthly Job Growth Trend</span>
                </h4>
                <div className="h-[120px] flex items-end space-x-2">
                  {/* Simplified chart representation */}
                  {[35, 42, 38, 50, 65, 75, 60, 70, 85, 95, 80, 90].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 bg-gradient-to-t from-blue-500 to-indigo-500 dark:from-blue-600 dark:to-indigo-600 rounded-t-sm"
                        style={{ height: `${height}%` }}
                      ></div>
                    ),
                  )}
                </div>
                <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-[400px] flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Select a region to view detailed information
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default GeographicalHeatmapCard;
