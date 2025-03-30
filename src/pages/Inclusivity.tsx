import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import {
  Heart,
  Users,
  UserCheck,
  Award,
  Globe,
  Briefcase,
  TrendingUp,
  Star,
  Building,
  BookOpen,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Bookmark,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const Inclusivity = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

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

  const inclusivityPractices = [
    {
      name: "Flexible Work Arrangements",
      description: "Remote, hybrid, and flexible hours to accommodate diverse needs",
      companies: 78,
      color: "bg-blue-500",
    },
    {
      name: "Accessible Workplaces",
      description: "Physically accessible spaces and digital accessibility standards",
      companies: 62,
      color: "bg-purple-500",
    },
    {
      name: "Skill-based Hiring",
      description: "Focus on capabilities rather than degrees or background",
      companies: 84,
      color: "bg-green-500",
    },
    {
      name: "Mentorship Programs",
      description: "Supporting career growth for underrepresented groups",
      companies: 71,
      color: "bg-pink-500",
    },
  ];

  const inclusiveCompanies = [
    {
      name: "Microsoft",
      description: "Leading in accessible technology and inclusive hiring practices",
      practices: ["Accessible Tech", "Disability Inclusion", "Flexible Work"],
      icon: "M",
      color: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      name: "Infosys",
      description: "Focused on gender diversity and accessible career paths",
      practices: ["Women in Tech", "Returnship Programs", "Skill Development"],
      icon: "I",
      color: "bg-gradient-to-r from-indigo-500 to-indigo-600",
    },
    {
      name: "Accenture",
      description: "Global leader in diversity initiatives and inclusive work culture",
      practices: ["Disability Hiring", "LGBTQ+ Inclusion", "Mental Health Support"],
      icon: "A",
      color: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
    {
      name: "TCS",
      description: "Pioneering programs for persons with disabilities in tech roles",
      practices: ["Accessible Workplace", "Neurodiversity Programs", "Remote Work"],
      icon: "T",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
  ];

  const successStories = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "Microsoft India",
      story: "As a woman with a visual impairment, finding a tech role that accommodated my needs was challenging. Microsoft's accessible workplace and inclusive hiring process changed everything for me. Now I'm developing accessibility features that help others like me.",
      image: "PS",
    },
    {
      name: "Rajiv Kumar",
      role: "Data Analyst",
      company: "TCS",
      story: "After serving in the military and sustaining an injury, I worried about transitioning to a civilian career. TCS's veteran program provided training and mentorship that made the transition smooth. I now lead a team of analysts.",
      image: "RK",
    },
    {
      name: "Ananya Patel",
      role: "UX Designer",
      company: "Infosys",
      story: "As a mother returning to the workforce after a 5-year break, I feared my skills were outdated. Infosys's returnship program gave me the opportunity to refresh my skills and rejoin the tech industry without starting over.",
      image: "AP",
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />

      <div className="pt-24 container mx-auto px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Inclusivity in the Workplace
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Discover companies committed to creating diverse, equitable, and inclusive work environments for everyone
          </p>
        </motion.div>

        {/* Hero section with stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card className="h-full overflow-hidden border-purple-200 dark:border-purple-900">
              <CardHeader className="pb-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-900/20 dark:to-pink-900/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle>Why Inclusivity Matters</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose dark:prose-invert prose-p:text-gray-600 dark:prose-p:text-gray-300">
                  <p className="lead">
                    In today's global economy, inclusive workplaces aren't just the right thing to do—they're good for business.
                  </p>
                  <p>
                    Companies with diverse and inclusive cultures are 35% more likely to outperform their competitors,
                    have 22% lower turnover rates, and make better decisions 87% of the time. For job seekers, finding companies
                    that prioritize inclusivity means more opportunities, better career growth, and healthier work environments.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-900/30">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-800 mx-auto mb-3">
                      <Users className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                    </div>
                    <h3 className="text-center font-semibold mb-1">+35%</h3>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Higher financial performance
                    </p>
                  </div>
                  <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-100 dark:border-pink-900/30">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pink-100 dark:bg-pink-800 mx-auto mb-3">
                      <Star className="h-6 w-6 text-pink-600 dark:text-pink-300" />
                    </div>
                    <h3 className="text-center font-semibold mb-1">+87%</h3>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Better decision making
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-900/30">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-800 mx-auto mb-3">
                      <UserCheck className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                    </div>
                    <h3 className="text-center font-semibold mb-1">-22%</h3>
                    <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                      Lower employee turnover
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-900/20 dark:to-pink-900/20 border-t border-purple-100 dark:border-purple-900/50">
                <Button className="mx-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Find Inclusive Companies
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full border-blue-200 dark:border-blue-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-blue-500" />
                  <span>Skills-Based Opportunities</span>
                </CardTitle>
                <CardDescription>
                  Companies focusing on skills over traditional qualifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Tech Sector</span>
                      <span className="text-sm font-medium">84%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: "84%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Remote Positions</span>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: "72%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Entry-Level</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-sm font-medium mb-3">Key Companies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      Google
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      IBM
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      Infosys
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      Microsoft
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                      TCS
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Main content tabs */}
        <Tabs defaultValue="practices" className="w-full mb-10">
          <TabsList className="w-full max-w-lg mx-auto grid grid-cols-3 mb-8">
            <TabsTrigger value="practices">Inclusive Practices</TabsTrigger>
            <TabsTrigger value="companies">Leading Companies</TabsTrigger>
            <TabsTrigger value="stories">Success Stories</TabsTrigger>
          </TabsList>

          <TabsContent value="practices">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {inclusivityPractices.map((practice, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full ${practice.color} flex items-center justify-center text-white`}>
                          {index === 0 ? (
                            <Briefcase className="h-5 w-5" />
                          ) : index === 1 ? (
                            <UserCheck className="h-5 w-5" />
                          ) : index === 2 ? (
                            <Award className="h-5 w-5" />
                          ) : (
                            <Users className="h-5 w-5" />
                          )}
                        </div>
                        <CardTitle className="text-xl">{practice.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="py-4">
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {practice.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-500">
                            {practice.companies} companies implementing
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="md:col-span-2">
                <Card className="border-purple-200 dark:border-purple-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-purple-500" />
                      <span>Resources for Job Seekers</span>
                    </CardTitle>
                    <CardDescription>
                      Tools to help you find inclusive employers and opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Inclusivity Checklist</span>
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Questions to ask potential employers about their inclusive practices
                        </p>
                        <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Users className="h-4 w-4 text-blue-500" />
                          <span>Community Groups</span>
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Connect with organizations supporting diverse professionals
                        </p>
                        <Button variant="outline" size="sm" className="w-full">View Directory</Button>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Award className="h-4 w-4 text-purple-500" />
                          <span>Accessibility Tools</span>
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          Resources to help with job search and workplace accommodations
                        </p>
                        <Button variant="outline" size="sm" className="w-full">Explore Tools</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>

          <TabsContent value="companies">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inclusiveCompanies.map((company, index) => (
                <Card key={index} className="hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-lg ${company.color} flex items-center justify-center text-white font-bold text-xl`}>
                        {company.icon}
                      </div>
                      <div>
                        <CardTitle>{company.name}</CardTitle>
                        <CardDescription className="mt-1">
                          {company.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Key Inclusivity Initiatives</h3>
                      <div className="flex flex-wrap gap-2">
                        {company.practices.map((practice, idx) => (
                          <Badge 
                            key={idx}
                            variant="outline" 
                            className="bg-gray-50 dark:bg-gray-800"
                          >
                            {practice}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">Diversity Growth</span>
                        </div>
                        <span className="text-sm font-medium">+{12 + index * 4}% YoY</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View Company Profile
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              
              <div className="md:col-span-2">
                <Card className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 border-indigo-200 dark:border-indigo-900">
                  <CardContent className="py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">Looking for inclusive employers?</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Search our database of companies committed to diversity and inclusion
                        </p>
                      </div>
                      <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                        <Input 
                          placeholder="Search companies..." 
                          className="w-full md:w-[300px] bg-white dark:bg-gray-800 border-indigo-200 dark:border-indigo-800"
                        />
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stories">
            <div className="space-y-6">
              {successStories.map((story, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/4 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 p-8 flex items-center justify-center">
                      <div className="h-24 w-24 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                        {story.image}
                      </div>
                    </div>
                    <div className="md:w-3/4 p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{story.name}</h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Briefcase className="h-4 w-4 mr-1" />
                          <span>{story.role} at {story.company}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        "{story.story}"
                      </p>
                      <Button variant="outline" className="flex items-center gap-1">
                        <span>Read Full Story</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
              
              <div className="flex justify-center mt-6">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                  Share Your Story
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <CardContent className="py-8">
              <div className="flex flex-col items-center text-center">
                <Heart className="h-10 w-10 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Stay Updated on Inclusivity Trends</h2>
                <p className="mb-6 max-w-2xl">
                  Join our newsletter to receive the latest information on inclusive job opportunities, 
                  company initiatives, and resources for diverse job seekers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                  <Input 
                    placeholder="Your email address"
                    className="bg-white/20 border-white/30 placeholder-white/70 text-white"
                  />
                  <Button variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Inclusivity; 