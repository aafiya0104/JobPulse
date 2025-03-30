import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "../ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import {
  ArrowUpRight,
  TrendingUp,
  Users,
  Briefcase,
  LineChart,
  ChevronDown,
  Globe,
  Sparkles,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({
  title,
  value,
  change,
  icon,
  color = "bg-blue-500",
}: StatCardProps) => {
  return (
    <Card
      className={`p-6 border shadow-md hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800 card-glow`}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          <div
            className={`flex items-center mt-2 ${change >= 0 ? "text-green-500" : "text-red-500"}`}
          >
            <span className="text-sm font-medium">
              {change >= 0 ? "+" : ""}
              {change}%
            </span>
            <ArrowUpRight
              className={`h-4 w-4 ml-1 ${change >= 0 ? "" : "rotate-180"}`}
            />
          </div>
        </div>
        <div className={`p-3 rounded-full ${color}`}>{icon}</div>
      </div>
    </Card>
  );
};

interface PulseIndicatorProps {
  value: number;
  label: string;
  color: string;
}

const PulseIndicator = ({
  value = 65,
  label = "Job Market Pulse",
  color = "bg-blue-500",
}: PulseIndicatorProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <div
          className={`absolute inset-0 rounded-full ${color} opacity-20 animate-pulse`}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold">{value}%</span>
        </div>
      </div>
      <Progress value={value} className="w-32 h-2 mt-3" />
      <p className="mt-2 text-sm font-medium">{label}</p>
    </div>
  );
};

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const statsOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Futuristic background with parallax effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950"
        style={{ y: y1, scale }}
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-[30rem] h-[30rem] bg-indigo-300 dark:bg-indigo-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-[25rem] h-[25rem] bg-purple-300 dark:bg-purple-800 rounded-full opacity-20 blur-3xl"></div>

        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(0deg, transparent 24%, rgba(59, 130, 246, 0.5) 25%, rgba(59, 130, 246, 0.5) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.5) 75%, rgba(59, 130, 246, 0.5) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.5) 25%, rgba(59, 130, 246, 0.5) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.5) 75%, rgba(59, 130, 246, 0.5) 76%, transparent 77%, transparent)",
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>
      </motion.div>

      {/* Hero content */}
      <div className="container mx-auto px-4 h-full z-10 relative">
        <motion.div
          className="flex flex-col h-screen justify-center items-center text-center"
          style={{ opacity: textOpacity }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Globe className="h-20 w-20 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            JobTrends Dashboard
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Sparkles className="h-5 w-5 text-purple-500" />
            <h2 className="text-xl md:text-2xl font-semibold text-purple-600 dark:text-purple-400">
              Powered by AI & Real-Time Analytics
            </h2>
            <Sparkles className="h-5 w-5 text-purple-500" />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Discover cutting-edge insights into the global job market to make
            data-driven career decisions in India and worldwide
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg"
              onClick={scrollToContent}
            >
              Explore Insights
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <ChevronDown
              className="h-8 w-8 text-gray-500 dark:text-gray-400"
              onClick={scrollToContent}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats section that appears on scroll */}
      <motion.div
        className="container mx-auto px-4 absolute bottom-0 left-0 right-0 z-20 pb-20"
        style={{ opacity: statsOpacity, y: y3 }}
      >
        <div className="flex flex-col items-center">
          {/* Pulse indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <PulseIndicator
              value={78}
              label="Tech Sector"
              color="bg-blue-500"
            />
            <PulseIndicator
              value={65}
              label="Healthcare"
              color="bg-green-500"
            />
            <PulseIndicator
              value={58}
              label="Indian Market"
              color="bg-purple-500"
            />
            <PulseIndicator value={42} label="Retail" color="bg-yellow-500" />
          </motion.div>

          {/* Key stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl"
            style={{ y: y2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <StatCard
              title="Open Positions"
              value="248,582"
              change={15.4}
              icon={<Briefcase className="h-6 w-6 text-white" />}
              color="bg-blue-500"
            />
            <StatCard
              title="Tech Skills Demand"
              value="+23.7%"
              change={8.2}
              icon={<LineChart className="h-6 w-6 text-white" />}
              color="bg-purple-500"
            />
            <StatCard
              title="Remote Jobs"
              value="86,291"
              change={32.5}
              icon={<TrendingUp className="h-6 w-6 text-white" />}
              color="bg-green-500"
            />
            <StatCard
              title="Diversity Hiring"
              value="+42.8%"
              change={18.3}
              icon={<Users className="h-6 w-6 text-white" />}
              color="bg-pink-500"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
