import { Suspense, useEffect } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./pages/Dashboard";
import Skills from "./pages/Skills";
import Industries from "./pages/Industries";
import Geography from "./pages/Geography";
import Salary from "./pages/Salary";
import DiversityInsights from "./pages/DiversityInsights";
import RemoteJobs from "./pages/RemoteJobs";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Innovation from "./pages/Innovation";
import MarketPulse from "./pages/MarketPulse";
import Footer from "./components/layout/Footer";
import routes from "tempo-routes";

function App() {
  // Check for dark mode preference
  useEffect(() => {
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/diversity-insights" element={<DiversityInsights />} />
          <Route path="/remote-jobs" element={<RemoteJobs />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/market-pulse" element={<MarketPulse />} />
          <Route path="/skills-recommendation" element={<Skills />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Footer />
      </>
    </Suspense>
  );
}

export default App;
