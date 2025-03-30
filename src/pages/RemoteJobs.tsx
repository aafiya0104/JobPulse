import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import {
  Briefcase,
  Search,
  Filter,
  MapPin,
  GraduationCap,
  Globe,
  Building,
  Code,
  HeadphonesIcon,
  FileText,
  PenTool,
  ChevronRight,
  Clock,
  Zap,
  TrendingUp,
  Star,
  Users,
  Sliders,
  Calendar,
  SlidersHorizontal,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";

// Define job categories and companies
const jobCategories = [
  { name: "Software Development", icon: <Code size={16} />, count: 4350 },
  { name: "Customer Support", icon: <HeadphonesIcon size={16} />, count: 2980 },
  { name: "Marketing", icon: <FileText size={16} />, count: 1840 },
  { name: "Design", icon: <PenTool size={16} />, count: 1620 },
];

const topCompanies = [
  { name: "TCS", jobs: 425, logo: "T" },
  { name: "Microsoft", jobs: 340, logo: "M" },
  { name: "Google", jobs: 285, logo: "G" },
  { name: "Infosys", jobs: 310, logo: "I" },
  { name: "IBM", jobs: 280, logo: "I" },
];

// Define remote jobs data
const remoteJobs = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "TechCorp India",
    location: "Remote (India)",
    type: "Full-time",
    salary: "₹4.5-6.5 LPA",
    posted: "2 days ago",
    category: "Software Development",
    experience: "0-1 years",
    skills: ["JavaScript", "React", "Node.js"],
    description: "Great opportunity for freshers to start their career in software development with a focus on JavaScript and modern web frameworks.",
  },
  {
    id: 2,
    title: "Customer Support Associate",
    company: "GlobalServe",
    location: "Remote (Worldwide)",
    type: "Full-time",
    salary: "₹3-4.5 LPA",
    posted: "1 day ago",
    category: "Customer Support",
    experience: "0-2 years",
    skills: ["Communication", "Problem Solving", "English Proficiency"],
    description: "Join our global customer support team helping users from around the world. Training provided for freshers.",
  },
  {
    id: 3,
    title: "Content Writer Intern",
    company: "ContentWave",
    location: "Remote (India)",
    type: "Internship",
    salary: "₹15-25k/month",
    posted: "3 days ago",
    category: "Marketing",
    experience: "0-1 years",
    skills: ["Writing", "SEO", "Research"],
    description: "Perfect for students and fresh graduates looking to build experience in content writing and digital marketing.",
  },
  {
    id: 4,
    title: "UI/UX Design Trainee",
    company: "DesignMinds",
    location: "Remote (Asia)",
    type: "Full-time",
    salary: "₹3.5-5 LPA",
    posted: "5 days ago",
    category: "Design",
    experience: "0-1 years",
    skills: ["Figma", "UI Design", "User Research"],
    description: "Training program for aspiring UI/UX designers. Learn by working on real-world projects.",
  },
  {
    id: 5,
    title: "Frontend Developer (Entry Level)",
    company: "WebTech Solutions",
    location: "Remote (India)",
    type: "Full-time",
    salary: "₹5-7 LPA",
    posted: "4 days ago",
    category: "Software Development",
    experience: "0-2 years",
    skills: ["HTML/CSS", "JavaScript", "React"],
    description: "Join our growing team of frontend developers. Great opportunity for freshers with basic knowledge of web technologies.",
  },
  {
    id: 6,
    title: "Digital Marketing Associate",
    company: "GrowthDigital",
    location: "Remote (India)",
    type: "Full-time",
    salary: "₹3.5-5 LPA",
    posted: "2 days ago",
    category: "Marketing",
    experience: "0-2 years",
    skills: ["Social Media", "Content Creation", "Analytics"],
    description: "Help businesses grow through digital marketing strategies. Training provided for motivated freshers.",
  },
];

const RemoteJobs = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [salaryRange, setSalaryRange] = useState([20, 80]);
  const [selectedTab, setSelectedTab] = useState("all-jobs");
  const [jobTypeFilters, setJobTypeFilters] = useState({
    fullTime: true,
    partTime: false,
    contract: false,
    internship: true
  });
  const [timeFilters, setTimeFilters] = useState({
    day: true,
    week: true,
    month: false
  });
  const [filteredJobs, setFilteredJobs] = useState(remoteJobs);
  const [isSearching, setIsSearching] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      applyFilters();
      setIsSearching(false);
    }, 500); // Simulate search delay
  };

  const toggleJobTypeFilter = (filter: keyof typeof jobTypeFilters) => {
    setJobTypeFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const toggleTimeFilter = (filter: keyof typeof timeFilters) => {
    setTimeFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  // Function to apply all filters
  const applyFilters = () => {
    let result = [...remoteJobs];
    
    // Apply search term filter
    if (searchTerm.trim() !== '') {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(job => 
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.description.toLowerCase().includes(searchLower) ||
        job.skills.some(skill => skill.toLowerCase().includes(searchLower))
      );
    }
    
    // Apply experience filter
    if (experienceFilter !== 'all') {
      result = result.filter(job => {
        if (experienceFilter === 'entry-level') {
          return job.experience.includes('0-');
        } else if (experienceFilter === 'mid-level') {
          return job.experience.includes('2-') || job.experience.includes('3-') || job.experience.includes('4-');
        } else if (experienceFilter === 'senior') {
          return job.experience.includes('5+') || parseInt(job.experience.split('-')[0]) >= 5;
        }
        return true;
      });
    }
    
    // Apply category filter
    if (categoryFilter !== 'all') {
      const categoryMap: {[key: string]: string} = {
        'software': 'Software Development',
        'customer-support': 'Customer Support',
        'marketing': 'Marketing',
        'design': 'Design'
      };
      result = result.filter(job => job.category === categoryMap[categoryFilter]);
    }
    
    // Apply tab filter
    if (selectedTab !== 'all-jobs') {
      switch (selectedTab) {
        case 'entry-level':
          result = result.filter(job => job.experience.includes('0-'));
          break;
        case 'remote-india':
          result = result.filter(job => job.location.includes('India'));
          break;
        case 'internships':
          result = result.filter(job => job.type === 'Internship');
          break;
        case 'for-freshers':
          result = result.filter(job => 
            job.description.toLowerCase().includes('fresher') || 
            job.experience.includes('0-')
          );
          break;
      }
    }
    
    // Apply salary range filter
    const minSalary = (salaryRange[0] / 10).toFixed(1);
    const maxSalary = (salaryRange[1] / 10).toFixed(1);
    result = result.filter(job => {
      // Extract salary range numbers
      const salaryText = job.salary.replace('₹', '').replace(' LPA', '').replace('k/month', '');
      
      // Special handling for internship salaries in thousands per month
      if (job.salary.includes('k/month')) {
        // Convert monthly salary to annual (LPA) for comparison
        const monthlyMin = parseFloat(salaryText.split('-')[0]) / 100;
        const monthlyMax = parseFloat(salaryText.split('-')[1]) / 100;
        return monthlyMax >= parseFloat(minSalary) || monthlyMin <= parseFloat(maxSalary);
      }
      
      // Regular LPA salary
      const [jobMinSalary, jobMaxSalary] = salaryText.includes('-') 
        ? salaryText.split('-').map(s => parseFloat(s))
        : [parseFloat(salaryText), parseFloat(salaryText)];
      
      // Check if job salary range overlaps with filter salary range
      return (jobMaxSalary >= parseFloat(minSalary) && jobMinSalary <= parseFloat(maxSalary)) || 
             isNaN(jobMinSalary) || isNaN(jobMaxSalary); // Include jobs with non-numeric salaries
    });
    
    // Apply job type filters
    if (!Object.values(jobTypeFilters).every(v => v === true)) {
      result = result.filter(job => {
        if (job.type === 'Full-time' && jobTypeFilters.fullTime) return true;
        if (job.type === 'Part-time' && jobTypeFilters.partTime) return true;
        if (job.type === 'Contract' && jobTypeFilters.contract) return true;
        if (job.type === 'Internship' && jobTypeFilters.internship) return true;
        return false;
      });
    }
    
    // Apply time filters
    if (!Object.values(timeFilters).every(v => v === true)) {
      result = result.filter(job => {
        const daysSincePosting = parseInt(job.posted.split(' ')[0]);
        if (timeFilters.day && daysSincePosting <= 1) return true;
        if (timeFilters.week && daysSincePosting <= 7) return true;
        if (timeFilters.month && daysSincePosting <= 30) return true;
        return false;
      });
    }
    
    setFilteredJobs(result);
  };

  // Apply filters on mount and when any filter changes
  useEffect(() => {
    applyFilters();
  }, [selectedTab, experienceFilter, categoryFilter, searchTerm, salaryRange, jobTypeFilters, timeFilters]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen pb-20">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <div className="pt-24 container mx-auto px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Remote & Entry-Level Opportunities
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find the perfect remote job to kickstart or advance your career from anywhere
          </p>
        </motion.div>

        {/* Remote job statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-blue-100 dark:border-blue-800/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-medium">Total Remote Jobs</h3>
            </div>
            <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">24,750</p>
            <div className="flex items-center text-green-500 text-sm mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+32% growth</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-indigo-100 dark:border-indigo-800/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-medium">Entry-Level Positions</h3>
            </div>
            <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">8,650</p>
            <div className="flex items-center text-green-500 text-sm mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+45% growth</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-purple-100 dark:border-purple-800/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-medium">Indian Companies Hiring</h3>
            </div>
            <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">350+</p>
            <div className="flex items-center text-green-500 text-sm mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>+28% growth</span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-green-100 dark:border-green-800/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                <Zap className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-medium">Average Salary Growth</h3>
            </div>
            <p className="text-2xl font-bold text-green-700 dark:text-green-300">18%</p>
            <div className="flex items-center text-green-500 text-sm mt-1">
              <Star className="h-3 w-3 mr-1" />
              <span>Year over year</span>
            </div>
          </motion.div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for remote jobs, skills or companies..."
                className="pl-10 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Experience Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Experience Levels</SelectItem>
                    <SelectItem value="entry-level">Entry Level (0-2 yrs)</SelectItem>
                    <SelectItem value="mid-level">Mid Level (2-5 yrs)</SelectItem>
                    <SelectItem value="senior">Senior (5+ yrs)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="customer-support">Customer Support</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => document.getElementById('filters')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleSearch}
                  disabled={isSearching}
                >
                  {isSearching ? (
                    <>
                      <motion.div
                        className="h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Searching...
                    </>
                  ) : (
                    'Search'
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6" id="filters">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sliders className="h-5 w-5 text-blue-500" />
                    <span>Refine Results</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Salary Range (LPA)</h4>
                    <Slider
                      defaultValue={[20, 80]}
                      max={100}
                      step={5}
                      value={salaryRange}
                      onValueChange={setSalaryRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>₹{(salaryRange[0] / 10).toFixed(1)} LPA</span>
                      <span>₹{(salaryRange[1] / 10).toFixed(1)} LPA</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Job Type</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="full-time" 
                          checked={jobTypeFilters.fullTime}
                          onCheckedChange={() => toggleJobTypeFilter('fullTime')}
                        />
                        <label htmlFor="full-time" className="text-sm">Full-time</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="part-time" 
                          checked={jobTypeFilters.partTime}
                          onCheckedChange={() => toggleJobTypeFilter('partTime')}
                        />
                        <label htmlFor="part-time" className="text-sm">Part-time</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="contract" 
                          checked={jobTypeFilters.contract}
                          onCheckedChange={() => toggleJobTypeFilter('contract')}
                        />
                        <label htmlFor="contract" className="text-sm">Contract</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="internship" 
                          checked={jobTypeFilters.internship}
                          onCheckedChange={() => toggleJobTypeFilter('internship')}
                        />
                        <label htmlFor="internship" className="text-sm">Internship</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Posted Within</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="24h" 
                          checked={timeFilters.day}
                          onCheckedChange={() => toggleTimeFilter('day')}
                        />
                        <label htmlFor="24h" className="text-sm">Last 24 hours</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="week" 
                          checked={timeFilters.week}
                          onCheckedChange={() => toggleTimeFilter('week')}
                        />
                        <label htmlFor="week" className="text-sm">Last week</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="month" 
                          checked={timeFilters.month}
                          onCheckedChange={() => toggleTimeFilter('month')}
                        />
                        <label htmlFor="month" className="text-sm">Last month</label>
                      </div>
                    </div>
                  </div>

                  <Button 
                    className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={applyFilters}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-500" />
                    <span>Top Hiring Companies</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {topCompanies.map((company, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                          {company.logo}
                        </div>
                        <div>
                          <p className="font-medium">{company.name}</p>
                          <p className="text-sm text-gray-500">{company.jobs} jobs</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="all-jobs" className="w-full" value={selectedTab} onValueChange={setSelectedTab}>
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 mb-6">
                <TabsTrigger value="all-jobs">All Jobs</TabsTrigger>
                <TabsTrigger value="entry-level">Entry Level</TabsTrigger>
                <TabsTrigger value="remote-india">Remote India</TabsTrigger>
                <TabsTrigger value="internships">Internships</TabsTrigger>
                <TabsTrigger value="for-freshers">For Freshers</TabsTrigger>
              </TabsList>

              <TabsContent value="all-jobs">
                {filteredJobs.length === 0 ? (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No jobs found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      We couldn't find any jobs matching your criteria. Try adjusting your filters or search term.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredJobs.map((job) => (
                      <Card key={job.id} className="job-card overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{job.title}</h3>
                                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {job.posted}
                                </Badge>
                              </div>
                              
                              <div className="flex flex-wrap gap-y-2 text-gray-600 dark:text-gray-300">
                                <div className="flex items-center mr-4">
                                  <Building className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.company}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <Briefcase className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.type}</span>
                                </div>
                                <div className="flex items-center">
                                  <GraduationCap className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.experience}</span>
                                </div>
                              </div>
                              
                              <p className="text-gray-700 dark:text-gray-300 mt-2">{job.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mt-2">
                                {job.skills.map((skill, index) => (
                                  <Badge key={index} className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-center md:items-end gap-3">
                              <div className="text-xl font-bold text-green-600 dark:text-green-400">
                                {job.salary}
                              </div>
                              <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="entry-level">
                {/* Entry level content uses the same filtered jobs from state */}
                <div className="space-y-4">
                  {filteredJobs.length === 0 ? (
                    <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                      <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium mb-2">No entry-level jobs found</h3>
                      <p className="text-gray-500 max-w-md mx-auto">
                        We couldn't find any entry-level jobs matching your criteria. Try adjusting your filters.
                      </p>
                    </div>
                  ) : (
                    filteredJobs.map((job) => (
                      <Card key={job.id} className="job-card overflow-hidden hover:shadow-md transition-shadow">
                        {/* Same job card content as in all-jobs tab */}
                        <CardContent className="p-6">
                          {/* ... Same content as above ... */}
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </TabsContent>

              <TabsContent value="remote-india">
                {filteredJobs.length === 0 ? (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No remote jobs in India found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      We couldn't find any remote jobs in India matching your criteria. Try adjusting your filters.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredJobs.map((job) => (
                      <Card key={job.id} className="job-card overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{job.title}</h3>
                                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {job.posted}
                                </Badge>
                              </div>
                              
                              <div className="flex flex-wrap gap-y-2 text-gray-600 dark:text-gray-300">
                                <div className="flex items-center mr-4">
                                  <Building className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.company}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <Briefcase className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.type}</span>
                                </div>
                                <div className="flex items-center">
                                  <GraduationCap className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.experience}</span>
                                </div>
                              </div>
                              
                              <p className="text-gray-700 dark:text-gray-300 mt-2">{job.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mt-2">
                                {job.skills.map((skill, index) => (
                                  <Badge key={index} className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-center md:items-end gap-3">
                              <div className="text-xl font-bold text-green-600 dark:text-green-400">
                                {job.salary}
                              </div>
                              <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="internships">
                {filteredJobs.length === 0 ? (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No internships found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      We couldn't find any internships matching your criteria. Try adjusting your filters.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredJobs.map((job) => (
                      <Card key={job.id} className="job-card overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{job.title}</h3>
                                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {job.posted}
                                </Badge>
                              </div>
                              
                              <div className="flex flex-wrap gap-y-2 text-gray-600 dark:text-gray-300">
                                <div className="flex items-center mr-4">
                                  <Building className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.company}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <Briefcase className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.type}</span>
                                </div>
                                <div className="flex items-center">
                                  <GraduationCap className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.experience}</span>
                                </div>
                              </div>
                              
                              <p className="text-gray-700 dark:text-gray-300 mt-2">{job.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mt-2">
                                {job.skills.map((skill, index) => (
                                  <Badge key={index} className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-center md:items-end gap-3">
                              <div className="text-xl font-bold text-green-600 dark:text-green-400">
                                {job.salary}
                              </div>
                              <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="for-freshers">
                {filteredJobs.length === 0 ? (
                  <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">No fresher jobs found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      We couldn't find any jobs for freshers matching your criteria. Try adjusting your filters.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredJobs.map((job) => (
                      <Card key={job.id} className="job-card overflow-hidden hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-2 flex-1">
                              <div className="flex items-start justify-between">
                                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">{job.title}</h3>
                                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                  {job.posted}
                                </Badge>
                              </div>
                              
                              <div className="flex flex-wrap gap-y-2 text-gray-600 dark:text-gray-300">
                                <div className="flex items-center mr-4">
                                  <Building className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.company}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.location}</span>
                                </div>
                                <div className="flex items-center mr-4">
                                  <Briefcase className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.type}</span>
                                </div>
                                <div className="flex items-center">
                                  <GraduationCap className="h-4 w-4 mr-1 text-gray-500" />
                                  <span>{job.experience}</span>
                                </div>
                              </div>
                              
                              <p className="text-gray-700 dark:text-gray-300 mt-2">{job.description}</p>
                              
                              <div className="flex flex-wrap gap-2 mt-2">
                                {job.skills.map((skill, index) => (
                                  <Badge key={index} className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex flex-col items-center md:items-end gap-3">
                              <div className="text-xl font-bold text-green-600 dark:text-green-400">
                                {job.salary}
                              </div>
                              <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">
                                Apply Now
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteJobs; 