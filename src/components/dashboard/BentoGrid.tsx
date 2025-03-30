import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillDemandCard from "./cards/SkillDemandCard";
import GeographicalHeatmapCard from "./cards/GeographicalHeatmapCard";
import IndustryTrendCard from "./cards/IndustryTrendCard";
import SalaryInsightsCard from "./cards/SalaryInsightsCard";
import DiversityMetricsCard from "./cards/DiversityMetricsCard";
import RemoteJobsCard from "./cards/RemoteJobsCard";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";

interface BentoGridProps {
  className?: string;
}

const BentoGrid = ({ className = "" }: BentoGridProps) => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleExpandCard = (cardId: string) => {
    setExpandedCard(cardId);
    setIsDialogOpen(true);
  };

  // Animation variants for the grid items
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={`w-full px-4 md:px-6 py-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {/* Skill Demand Card - Spans 2 columns on larger screens */}
        <motion.div
          className="lg:col-span-2 h-[500px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <SkillDemandCard onExpandView={() => handleExpandCard("skills")} />
        </motion.div>

        {/* Industry Trend Card */}
        <motion.div
          className="h-[500px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IndustryTrendCard
            onExpandClick={() => handleExpandCard("industry")}
          />
        </motion.div>

        {/* Geographical Heatmap Card - Spans 2 columns on larger screens */}
        <motion.div
          className="lg:col-span-2 h-[600px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <GeographicalHeatmapCard onRegionClick={() => {}} />
        </motion.div>

        {/* Salary Insights Card */}
        <motion.div
          className="h-[600px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <SalaryInsightsCard />
        </motion.div>

        {/* Diversity Metrics Card */}
        <motion.div
          className="h-[400px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={4}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <DiversityMetricsCard />
        </motion.div>

        {/* Remote Jobs Card */}
        <motion.div
          className="h-[400px]"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          custom={5}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <RemoteJobsCard />
        </motion.div>
      </div>

      {/* Expanded Card Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto">
          <div className="p-4">
            {expandedCard === "skills" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Skill Demand Analysis</h2>
                  <Maximize2 className="h-5 w-5 text-gray-500" />
                </div>
                <p className="text-gray-500">
                  Detailed analysis of in-demand skills across industries and
                  regions.
                </p>
                <div className="h-[600px] overflow-hidden">
                  <SkillDemandCard />
                </div>
              </div>
            )}

            {expandedCard === "industry" && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">
                    Industry Growth Analysis
                  </h2>
                  <Maximize2 className="h-5 w-5 text-gray-500" />
                </div>
                <p className="text-gray-500">
                  Comprehensive breakdown of industry growth trends and job
                  opportunities.
                </p>
                <div className="h-[600px] overflow-hidden">
                  <IndustryTrendCard />
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BentoGrid;
