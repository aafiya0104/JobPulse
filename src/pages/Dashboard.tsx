import React from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/dashboard/HeroSection";
import BentoGrid from "../components/dashboard/BentoGrid";
import RecommendationPanel from "../components/dashboard/RecommendationPanel";

const Dashboard = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen pb-20">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <div className="pt-20">
        <HeroSection />
        <RecommendationPanel />
        <BentoGrid />
      </div>
    </div>
  );
};

export default Dashboard;
