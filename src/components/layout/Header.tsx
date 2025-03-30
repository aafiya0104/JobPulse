import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X, Search, Bell, User, Settings } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface HeaderProps {
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

const Header = ({
  isDarkMode = false,
  onToggleTheme = () => {},
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-gray-900 ${isScrolled ? "shadow-md py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mr-2 relative overflow-hidden shadow-lg">
              {/* 3D-style logo */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-7 h-7 rounded-md bg-white/20 transform rotate-45 blur-[1px]"></div>
                <div className="absolute w-5 h-5 rounded-full bg-indigo-300/80 top-1 left-1 blur-[1px]"></div>
                <div className="absolute w-6 h-6 rounded-md bg-purple-400/70 bottom-1 right-1 transform rotate-12"></div>
                <div className="relative z-10 text-white font-bold text-lg">J</div>
              </div>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              JobPulse
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation - Left Side */}
        <div className="hidden md:flex items-center space-x-8 flex-1 ml-12">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/20 to-purple-500/20 p-6 no-underline outline-none focus:shadow-md"
                          to="/market-pulse"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            Market Pulse
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Real-time job market indicators and trends
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/skills"
                        >
                          <div className="text-sm font-medium leading-none">
                            Skills Analysis
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore in-demand skills and growth opportunities
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/industries"
                        >
                          <div className="text-sm font-medium leading-none">
                            Industry Insights
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Discover growing sectors and market opportunities
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/geography"
                        >
                          <div className="text-sm font-medium leading-none">
                            Geographic Data
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Job distribution and opportunities by location
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Career Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/skills-recommendation"
                        >
                          <div className="text-sm font-medium leading-none">
                            Skill Recommendations
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Personalized upskilling suggestions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/salary"
                        >
                          <div className="text-sm font-medium leading-none">
                            Salary Insights
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Compare compensation across roles and regions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/diversity-insights"
                        >
                          <div className="text-sm font-medium leading-none">
                            Diversity & Inclusion
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Inclusive hiring trends and opportunities
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          to="/remote-jobs"
                        >
                          <div className="text-sm font-medium leading-none">
                            Remote Opportunities
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Find the best remote and entry-level positions
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Navigation - Right Side */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <Link
                  to="/innovation"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Innovation
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/diversity-insights"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Diversity & Inclusion
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/remote-jobs"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Remote Jobs
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="Search trends..."
              className="pl-8 w-[200px] h-9 rounded-full bg-gray-100 dark:bg-gray-800 border-none focus-visible:ring-blue-500"
            />
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleTheme}
            className="hidden md:flex rounded-full"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex rounded-full relative"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-white font-medium">
              1
            </span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hidden md:flex"
                aria-label="User profile"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatar.png" alt="User avatar" />
                  <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-500 text-white">
                    US
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <Link
                to="/profile"
                className="w-full flex items-center py-2 px-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <User className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400" />
                <span>Profile</span>
              </Link>
              <Link
                to="/settings"
                className="w-full flex items-center py-2 px-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Settings className="w-4 h-4 mr-3 text-blue-600 dark:text-blue-400" />
                <span>Settings</span>
              </Link>
              <Link to="/login">
                <DropdownMenuItem>
                  Sign out
                </DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 z-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="container mx-auto px-4 space-y-4">
            <Link
              to="/dashboard"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Dashboard
            </Link>
            <Link
              to="/skills"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Skills
            </Link>
            <Link
              to="/industries"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Industries
            </Link>
            <Link
              to="/geography"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Location
            </Link>
            <Link
              to="/salary"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Salaries
            </Link>
            <Link
              to="/innovation"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Innovation
            </Link>
            <Link
              to="/diversity-insights"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Diversity & Inclusion
            </Link>
            <Link
              to="/remote-jobs"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Remote Jobs
            </Link>
            <Link
              to="/profile"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block py-2 text-lg font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Settings
            </Link>
            <div className="pt-2 flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  onToggleTheme();
                  toggleMobileMenu();
                }}
                className="flex items-center gap-2"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="h-4 w-4" /> Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-4 w-4" /> Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
