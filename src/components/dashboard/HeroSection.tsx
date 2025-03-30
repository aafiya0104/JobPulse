import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  MousePointer,
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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig);
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig);
  const y3 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -75]), springConfig);
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.9]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.5]), springConfig);
  const textOpacity = useSpring(useTransform(scrollYProgress, [0, 0.25], [1, 0]), springConfig);
  
  // Mouse parallax effect with improved responsiveness
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useSpring(mousePosition.x, { stiffness: 250, damping: 20 });
  const mouseY = useSpring(mousePosition.y, { stiffness: 250, damping: 20 });

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const targetElement = targetRef.current;
    if (targetElement) {
      const { width, height, left, top } = targetElement.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 15; // Increased sensitivity
      const y = (clientY - top - height / 2) / 15; // Increased sensitivity
      setMousePosition({ x, y });
    }
  };

  const scrollToContent = () => {
    const contentElement = document.getElementById("dashboard-content");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback to a fixed position if element not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden" ref={targetRef}>
      {/* Enhanced network-style background with cursor-based interactivity */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 dark:from-indigo-950 dark:via-purple-950 dark:to-blue-950"
        style={{ y: y1, scale }}
      >
        {/* Network lines and nodes background with improved cursor following */}
        <motion.svg
          width="100%"
          height="100%"
          className="absolute inset-0 opacity-40 dark:opacity-50"
          style={{ 
            x: mouseX,
            y: mouseY,
            rotate: useTransform(mouseX, [-50, 50], [-5, 5]),
          }}
        >
          <defs>
            <pattern
              id="network-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
              patternTransform={`rotate(${mouseX.get() * 0.05}) scale(${1 + Math.abs(mouseY.get()) * 0.001})`}
            >
              <line
                x1="30"
                y1="0"
                x2="30"
                y2="60"
                stroke="rgba(79, 70, 229, 0.6)"
                strokeWidth="0.8"
              />
              <line
                x1="0"
                y1="30"
                x2="60"
                y2="30"
                stroke="rgba(79, 70, 229, 0.6)"
                strokeWidth="0.8"
              />
              <line
                x1="0"
                y1="0"
                x2="60"
                y2="60"
                stroke="rgba(79, 70, 229, 0.5)"
                strokeWidth="0.8"
              />
              <line
                x1="60"
                y1="0"
                x2="0"
                y2="60"
                stroke="rgba(79, 70, 229, 0.5)"
                strokeWidth="0.8"
              />
              <circle
                cx="30"
                cy="30"
                r="2"
                fill="rgba(147, 51, 234, 0.8)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network-pattern)" />
          
          {/* Additional animated elements */}
          <motion.g
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {[...Array(12)].map((_, i) => (
              <circle
                key={i}
                cx={100 + i * 150}
                cy={100 + (i % 3) * 150}
                r="4"
                fill="rgba(139, 92, 246, 0.8)"
              />
            ))}
          </motion.g>
        </motion.svg>

        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-indigo-300 dark:bg-indigo-800 rounded-full opacity-20 blur-3xl"
          style={{ 
            x: useTransform(mouseX, value => value * 2.5),
            y: useTransform(mouseY, value => value * 2.5),
            scale: useTransform(mouseY, [-20, 20], [0.9, 1.1]) 
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-40 right-20 w-[30rem] h-[30rem] bg-purple-300 dark:bg-purple-800 rounded-full opacity-20 blur-3xl"
          style={{ 
            x: useTransform(mouseX, value => value * -2),
            y: useTransform(mouseY, value => value * -2)
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/3 w-[25rem] h-[25rem] bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"
            style={{
            x: useTransform(mouseX, value => value * 1.5),
            y: useTransform(mouseY, value => value * 1.5)
            }}
        ></motion.div>
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
            <div className="relative">
              <motion.div
                className="h-20 w-20 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto flex items-center justify-center mb-4 relative overflow-hidden shadow-lg"
                whileHover={{ rotate: 15 }}
              >
                {/* Improved 3D-style logo with better blending */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-16 h-16 rounded-full bg-white/10 transform blur-[2px]"></div>
                  <div className="absolute w-12 h-12 rounded-full bg-indigo-300/40 top-2 left-2 blur-[2px]"></div>
                  <div className="absolute w-14 h-14 rounded-full bg-purple-400/30 bottom-2 right-2 transform blur-[1px]"></div>
                  <div className="relative z-10 text-white font-bold text-3xl">J</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white text-xs font-bold"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                AI
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            JobPulse
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl group"
              onClick={scrollToContent}
            >
              <span>Explore Insights</span>
              <motion.span 
                className="inline-block ml-2"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.span>
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Scroll to explore</p>
            <motion.div
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <MousePointer className="h-5 w-5 text-gray-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Divider with unique shape */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L48 8.875C96 17.75 192 35.5 288 53.25C384 71 480 88.75 576 88.75C672 88.75 768 71 864 62.125C960 53.25 1056 53.25 1152 44.375C1248 35.5 1344 17.75 1392 8.875L1440 0V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            className="fill-white dark:fill-gray-900"
          />
        </svg>
      </div>
      
      {/* Beginning of content section marker */}
      <div id="dashboard-content"></div>
    </section>
  );
};

export default HeroSection;
