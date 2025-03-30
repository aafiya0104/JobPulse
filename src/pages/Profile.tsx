import React from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit,
  Award,
  Briefcase,
  Book,
  Calendar,
  Clock,
  Settings,
  ChevronRight,
  FileText,
  TrendingUp,
  BarChart,
  LineChart,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
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

  // Example user data
  const user = {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+91 98765 43210",
    location: "Bangalore, India",
    bio: "Software developer with 2 years of experience specializing in frontend development. Passionate about creating accessible and responsive web applications.",
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "React", level: 78 },
      { name: "TypeScript", level: 65 },
      { name: "Node.js", level: 55 },
      { name: "HTML/CSS", level: 90 },
    ],
    experience: [
      {
        role: "Junior Frontend Developer",
        company: "TechSolutions",
        period: "Jan 2022 - Present",
        description: "Developing and maintaining web applications using React and TypeScript.",
      },
      {
        role: "Web Development Intern",
        company: "WebCraft",
        period: "Jun 2021 - Dec 2021",
        description: "Assisted in building responsive websites and implementing UX improvements.",
      },
    ],
    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "VIT University",
        period: "2017 - 2021",
        gpa: "8.4/10",
      },
    ],
    interests: ["Frontend Development", "UI/UX Design", "Mobile App Development", "Accessibility"],
    preferredJobTypes: ["Remote", "Hybrid"],
    careerGoals: "To become a senior frontend developer with expertise in modern frameworks and accessibility standards.",
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Edit className="h-4 w-4 mr-2" /> Edit Profile
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src="/avatar.png" alt="User avatar" />
                        <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-500 text-white text-2xl">
                          SJ
                        </AvatarFallback>
                      </Avatar>
                      <h2 className="text-xl font-bold">{user.name}</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Frontend Developer
                      </p>

                      <div className="w-full space-y-3 mt-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <span>{user.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-gray-500" />
                          <span>{user.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span>{user.location}</span>
                        </div>
                      </div>

                      <div className="w-full mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="font-medium mb-3 flex items-center gap-2">
                          <Award className="h-4 w-4 text-blue-500" />
                          Skills
                        </h3>
                        <div className="space-y-4">
                          {user.skills.map((skill, index) => (
                            <div key={index} className="space-y-1">
                              <div className="flex justify-between items-center text-sm">
                                <span>{skill.name}</span>
                                <span className="text-gray-500">{skill.level}%</span>
                              </div>
                              <Progress value={skill.level} className="h-2" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="w-full mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                        <h3 className="font-medium mb-3 flex items-center gap-2">
                          <Briefcase className="h-4 w-4 text-blue-500" />
                          Job Preferences
                        </h3>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <div className="mt-0.5">
                              <Clock className="h-4 w-4 text-gray-500" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Preferred Job Types</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {user.preferredJobTypes.map((type, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800"
                                  >
                                    {type}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="mt-0.5">
                              <TrendingUp className="h-4 w-4 text-gray-500" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Career Goals</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {user.careerGoals}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full grid grid-cols-4 mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="insights">Career Insights</TabsTrigger>
              </TabsList>

              <TabsContent value="about">
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{user.bio}</p>

                    <div className="mt-6">
                      <h3 className="font-medium mb-3">Areas of Interest</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.interests.map((interest, index) => (
                          <Badge
                            key={index}
                            className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                          >
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {user.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-blue-500 pl-4 pb-6 relative"
                        >
                          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-1"></div>
                          <h3 className="font-bold text-lg">{exp.role}</h3>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                            <span>•</span>
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            {exp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <FileText className="h-4 w-4 mr-2" />
                      View Full Resume
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {user.education.map((edu, index) => (
                        <div
                          key={index}
                          className="border-l-2 border-indigo-500 pl-4 pb-6 relative"
                        >
                          <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1"></div>
                          <h3 className="font-bold text-lg">{edu.degree}</h3>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                            <Book className="h-4 w-4" />
                            <span>{edu.institution}</span>
                            <span>•</span>
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            GPA: {edu.gpa}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="insights">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center gap-2">
                        <BarChart className="h-5 w-5 text-blue-500" />
                        Skills Gap Analysis
                      </CardTitle>
                      <CardDescription>
                        Compare your skills with market demands
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="h-60 flex items-center justify-center">
                        <p className="text-gray-500">Skills analysis chart would be displayed here</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center gap-2">
                        <LineChart className="h-5 w-5 text-purple-500" />
                        Career Growth Trajectory
                      </CardTitle>
                      <CardDescription>
                        Projected career path based on your profile
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="h-60 flex items-center justify-center">
                        <p className="text-gray-500">Career growth chart would be displayed here</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-green-500" />
                        Recommended Next Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold">
                            1
                          </div>
                          <div>
                            <h4 className="font-medium">Improve TypeScript skills</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              TypeScript is in high demand with a 32% increase in job listings requiring this skill.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 text-sm font-bold">
                            2
                          </div>
                          <div>
                            <h4 className="font-medium">Learn about accessibility standards</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Companies are prioritizing accessibility - this skill can set you apart from competitors.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 text-sm font-bold">
                            3
                          </div>
                          <div>
                            <h4 className="font-medium">Build a portfolio with React projects</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              Showcase your capabilities through practical projects to attract potential employers.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600">
                        Get Personalized Career Advice
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 