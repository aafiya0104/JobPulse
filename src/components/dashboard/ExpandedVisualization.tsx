import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ZoomIn, ZoomOut, Download, Share2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface ExpandedVisualizationProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  chartType?: "line" | "bar" | "pie" | "map" | "scatter";
  data?: any;
  sourceInfo?: string;
  lastUpdated?: string;
}

const ExpandedVisualization = ({
  isOpen = true,
  onClose = () => {},
  title = "Skill Demand Forecast",
  description = "Detailed analysis of skill demand trends across industries over the past 12 months.",
  chartType = "line",
  data = null,
  sourceInfo = "Data sourced from JobTrends Analytics Platform",
  lastUpdated = "Last updated: June 2023",
}: ExpandedVisualizationProps) => {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Mock data for different chart types if no data is provided
  const mockData = {
    line: [
      { month: "Jan", javascript: 85, python: 78, react: 65, aws: 72 },
      { month: "Feb", javascript: 82, python: 80, react: 68, aws: 75 },
      { month: "Mar", javascript: 88, python: 82, react: 72, aws: 78 },
      { month: "Apr", javascript: 90, python: 85, react: 75, aws: 80 },
      { month: "May", javascript: 92, python: 88, react: 80, aws: 82 },
      { month: "Jun", javascript: 95, python: 90, react: 85, aws: 85 },
    ],
    map: "Geographic data visualization",
    bar: [
      { skill: "JavaScript", demand: 95 },
      { skill: "Python", demand: 90 },
      { skill: "React", demand: 85 },
      { skill: "AWS", demand: 82 },
      { skill: "Data Science", demand: 78 },
    ],
    pie: [
      { name: "Frontend", value: 35 },
      { name: "Backend", value: 30 },
      { name: "Full Stack", value: 25 },
      { name: "DevOps", value: 10 },
    ],
    scatter: [
      { skill: "JavaScript", demand: 95, growth: 5 },
      { skill: "Python", demand: 90, growth: 8 },
      { skill: "React", demand: 85, growth: 12 },
      { skill: "AWS", demand: 82, growth: 7 },
      { skill: "Data Science", demand: 78, growth: 15 },
    ],
  };

  const chartData = data || mockData[chartType];

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 1.5));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5));
  };

  const renderPlaceholderChart = () => {
    switch (chartType) {
      case "map":
        return (
          <div className="relative h-[500px] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4 text-slate-500">
                <svg
                  className="w-16 h-16 mx-auto"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <p className="text-lg font-medium">
                Geographical Job Market Heatmap
              </p>
              <p className="text-sm text-slate-500 mt-2">
                Interactive map showing job density across regions
              </p>
            </div>
          </div>
        );
      case "line":
        return (
          <div className="relative h-[500px] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
            <div className="w-full h-full p-6">
              <div className="h-full flex flex-col justify-between">
                <div className="grid grid-cols-6 gap-4 h-[400px]">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex flex-col justify-end">
                      <div
                        className="bg-blue-500 rounded-t-sm w-full"
                        style={{
                          height: `${Math.random() * 60 + 20}%`,
                          opacity: 0.7 + i / 20,
                        }}
                      />
                      <div className="text-xs text-center mt-2">
                        {mockData.line[i - 1].month}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-500 mt-4">
                  <div>JavaScript</div>
                  <div>Python</div>
                  <div>React</div>
                  <div>AWS</div>
                </div>
              </div>
            </div>
          </div>
        );
      case "bar":
        return (
          <div className="relative h-[500px] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
            <div className="w-full h-full p-6">
              <div className="h-full flex">
                <div className="w-16 flex flex-col justify-between text-xs text-right pr-2">
                  <div>100%</div>
                  <div>75%</div>
                  <div>50%</div>
                  <div>25%</div>
                  <div>0%</div>
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-5 gap-6 h-[400px]">
                    {mockData.bar.map((item, i) => (
                      <div key={i} className="flex flex-col justify-end">
                        <div
                          className="bg-indigo-500 rounded-t-sm w-full"
                          style={{
                            height: `${item.demand}%`,
                            opacity: 0.7 + i / 20,
                          }}
                        />
                        <div className="text-xs text-center mt-2 truncate">
                          {item.skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "pie":
        return (
          <div className="relative h-[500px] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
            <div className="relative w-64 h-64">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="#818cf8" />
                <path d="M50,50 L50,10 A40,40 0 0,1 85,65 z" fill="#4f46e5" />
                <path d="M50,50 L85,65 A40,40 0 0,1 30,85 z" fill="#6366f1" />
                <path d="M50,50 L30,85 A40,40 0 0,1 50,10 z" fill="#a5b4fc" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-lg font-medium">Job Roles</div>
                  <div className="text-sm text-slate-500">Distribution</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {mockData.pie.map((item, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className="w-3 h-3 mr-2 rounded-full"
                    style={{
                      backgroundColor: [
                        "#818cf8",
                        "#4f46e5",
                        "#6366f1",
                        "#a5b4fc",
                      ][i],
                    }}
                  />
                  <span>
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      case "scatter":
        return (
          <div className="relative h-[500px] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
            <div className="w-full h-full p-8">
              <div className="relative h-full">
                <div className="absolute left-0 top-0 h-full border-l border-slate-300 flex flex-col justify-between text-xs">
                  <div>High</div>
                  <div>Medium</div>
                  <div>Low</div>
                </div>
                <div className="absolute bottom-0 left-0 w-full border-b border-slate-300 flex justify-between text-xs">
                  <div>Low</div>
                  <div>Medium</div>
                  <div>High</div>
                </div>
                <div className="absolute left-10 right-4 top-4 bottom-10">
                  {mockData.scatter.map((item, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-purple-500 flex items-center justify-center"
                      style={{
                        width: `${item.growth * 2}px`,
                        height: `${item.growth * 2}px`,
                        left: `${(item.demand / 100) * 100}%`,
                        bottom: `${(item.growth / 20) * 100}%`,
                        opacity: 0.7,
                      }}
                    >
                      <div className="absolute whitespace-nowrap text-xs -mt-6">
                        {item.skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="h-[500px] w-full bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
            <p className="text-lg">Chart visualization placeholder</p>
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-base">
            {description}
          </DialogDescription>
        </DialogHeader>

        <motion.div
          className="my-6 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {renderPlaceholderChart()}
        </motion.div>

        <div className="flex flex-wrap justify-between items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
          <div>{sourceInfo}</div>
          <div>{lastUpdated}</div>
        </div>

        <DialogFooter className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Zoom in"
            >
              <ZoomIn className="h-5 w-5" />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Zoom out"
            >
              <ZoomOut className="h-5 w-5" />
            </button>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Download data"
            >
              <Download className="h-5 w-5" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Share visualization"
            >
              <Share2 className="h-5 w-5" />
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExpandedVisualization;
