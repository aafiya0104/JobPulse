import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  ArrowRight,
  Award,
  BookOpen,
  BrainCircuit,
  Code,
  Lightbulb,
  Rocket,
  Sparkles,
  TrendingUp,
} from "lucide-react";

interface Skill {
  id: string;
  name: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  relevanceScore: number;
  progress: number;
  estimatedTimeToLearn: string;
  resources: {
    title: string;
    url: string;
    type: "course" | "article" | "video" | "book";
  }[];
}

interface CareerPath {
  id: string;
  name: string;
  description: string;
  growthRate: number;
  skills: Skill[];
  demandLevel: "high" | "medium" | "low";
}

interface RecommendationPanelProps {
  careerPaths?: CareerPath[];
  selectedPathId?: string;
  onPathSelect?: (pathId: string) => void;
  onSkillClick?: (skill: Skill) => void;
}

const defaultCareerPaths: CareerPath[] = [
  {
    id: "frontend-dev",
    name: "Frontend Developer",
    description: "Build user interfaces and experiences for web applications",
    growthRate: 22,
    demandLevel: "high",
    skills: [
      {
        id: "react",
        name: "React",
        description: "A JavaScript library for building user interfaces",
        difficulty: "intermediate",
        relevanceScore: 95,
        progress: 65,
        estimatedTimeToLearn: "3 months",
        resources: [
          {
            title: "React Documentation",
            url: "https://reactjs.org/docs",
            type: "article",
          },
          {
            title: "React Fundamentals",
            url: "https://example.com/react-course",
            type: "course",
          },
        ],
      },
      {
        id: "typescript",
        name: "TypeScript",
        description:
          "Strongly typed programming language that builds on JavaScript",
        difficulty: "intermediate",
        relevanceScore: 88,
        progress: 40,
        estimatedTimeToLearn: "2 months",
        resources: [
          {
            title: "TypeScript Handbook",
            url: "https://www.typescriptlang.org/docs/",
            type: "article",
          },
          {
            title: "TypeScript Deep Dive",
            url: "https://example.com/typescript-book",
            type: "book",
          },
        ],
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        description: "A utility-first CSS framework for rapid UI development",
        difficulty: "beginner",
        relevanceScore: 82,
        progress: 75,
        estimatedTimeToLearn: "1 month",
        resources: [
          {
            title: "Tailwind Documentation",
            url: "https://tailwindcss.com/docs",
            type: "article",
          },
          {
            title: "Tailwind CSS Crash Course",
            url: "https://example.com/tailwind-video",
            type: "video",
          },
        ],
      },
    ],
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    description:
      "Analyze and interpret complex data to help organizations make better decisions",
    growthRate: 31,
    demandLevel: "high",
    skills: [
      {
        id: "python",
        name: "Python",
        description: "A programming language with libraries for data analysis",
        difficulty: "beginner",
        relevanceScore: 98,
        progress: 50,
        estimatedTimeToLearn: "3 months",
        resources: [
          {
            title: "Python for Data Science",
            url: "https://example.com/python-course",
            type: "course",
          },
          {
            title: "Python Data Science Handbook",
            url: "https://example.com/python-book",
            type: "book",
          },
        ],
      },
      {
        id: "machine-learning",
        name: "Machine Learning",
        description:
          "Algorithms and statistical models for computer systems to perform tasks",
        difficulty: "advanced",
        relevanceScore: 95,
        progress: 30,
        estimatedTimeToLearn: "6 months",
        resources: [
          {
            title: "Machine Learning Course",
            url: "https://example.com/ml-course",
            type: "course",
          },
          {
            title: "Hands-On Machine Learning",
            url: "https://example.com/ml-book",
            type: "book",
          },
        ],
      },
      {
        id: "sql",
        name: "SQL",
        description:
          "Standard language for storing, manipulating and retrieving data in databases",
        difficulty: "intermediate",
        relevanceScore: 90,
        progress: 70,
        estimatedTimeToLearn: "2 months",
        resources: [
          {
            title: "SQL Basics",
            url: "https://example.com/sql-tutorial",
            type: "article",
          },
          {
            title: "Advanced SQL for Data Scientists",
            url: "https://example.com/advanced-sql",
            type: "course",
          },
        ],
      },
    ],
  },
  {
    id: "ux-designer",
    name: "UX Designer",
    description: "Design the user experience for digital products and services",
    growthRate: 18,
    demandLevel: "medium",
    skills: [
      {
        id: "user-research",
        name: "User Research",
        description:
          "Techniques to understand user behaviors, needs, and motivations",
        difficulty: "intermediate",
        relevanceScore: 92,
        progress: 60,
        estimatedTimeToLearn: "3 months",
        resources: [
          {
            title: "User Research Methods",
            url: "https://example.com/user-research",
            type: "course",
          },
          {
            title: "Just Enough Research",
            url: "https://example.com/research-book",
            type: "book",
          },
        ],
      },
      {
        id: "figma",
        name: "Figma",
        description:
          "Cloud-based design tool for collaborative interface design",
        difficulty: "beginner",
        relevanceScore: 88,
        progress: 80,
        estimatedTimeToLearn: "1 month",
        resources: [
          {
            title: "Figma Essentials",
            url: "https://example.com/figma-course",
            type: "course",
          },
          {
            title: "Figma for UX Design",
            url: "https://example.com/figma-ux",
            type: "video",
          },
        ],
      },
      {
        id: "information-architecture",
        name: "Information Architecture",
        description: "Organizing and structuring content in an effective way",
        difficulty: "advanced",
        relevanceScore: 85,
        progress: 45,
        estimatedTimeToLearn: "4 months",
        resources: [
          {
            title: "Information Architecture Basics",
            url: "https://example.com/ia-basics",
            type: "article",
          },
          {
            title: "How to Make Sense of Any Mess",
            url: "https://example.com/ia-book",
            type: "book",
          },
        ],
      },
    ],
  },
];

const RecommendationPanel: React.FC<RecommendationPanelProps> = ({
  careerPaths = defaultCareerPaths,
  selectedPathId = "frontend-dev",
  onPathSelect = () => {},
  onSkillClick = () => {},
}) => {
  const [activePathId, setActivePathId] = useState<string>(selectedPathId);

  const handlePathSelect = (pathId: string) => {
    setActivePathId(pathId);
    onPathSelect(pathId);
  };

  const activePath =
    careerPaths.find((path) => path.id === activePathId) || careerPaths[0];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress < 30) return "bg-red-600";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "course":
        return <BookOpen className="h-4 w-4 mr-1" />;
      case "article":
        return <Code className="h-4 w-4 mr-1" />;
      case "video":
        return <Rocket className="h-4 w-4 mr-1" />;
      case "book":
        return <BookOpen className="h-4 w-4 mr-1" />;
      default:
        return <Lightbulb className="h-4 w-4 mr-1" />;
    }
  };

  return (
    <div className="w-full bg-white dark:bg-gray-950 py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-2">
            <Sparkles className="inline-block h-8 w-8 mr-2 text-indigo-600 dark:text-indigo-400" />
            Personalized Skill Recommendations
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Discover the skills that will accelerate your career growth based on
            market demand and your interests.
          </p>
        </div>

        <Tabs
          defaultValue={activePathId}
          onValueChange={handlePathSelect}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <TabsList className="mb-4 md:mb-0 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
              {careerPaths.map((path) => (
                <TabsTrigger
                  key={path.id}
                  value={path.id}
                  className="px-4 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700 data-[state=active]:shadow-sm rounded-md"
                >
                  {path.name}
                  {path.demandLevel === "high" && (
                    <Badge
                      variant="outline"
                      className="ml-2 bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800"
                    >
                      <TrendingUp className="h-3 w-3 mr-1" /> Hot
                    </Badge>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="flex items-center">
              <BrainCircuit className="h-5 w-5 text-indigo-500 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mr-2">
                Growth Rate:
              </span>
              <Badge
                variant="secondary"
                className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
              >
                +{activePath.growthRate}% YoY
              </Badge>
            </div>
          </div>

          {careerPaths.map((path) => (
            <TabsContent key={path.id} value={path.id} className="mt-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {path.name} Path
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {path.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {path.skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="h-full"
                    >
                      <Card
                        className="h-full cursor-pointer hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-800"
                        onClick={() => onSkillClick(skill)}
                      >
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg font-bold">
                              {skill.name}
                            </CardTitle>
                            <Badge
                              className={`${getDifficultyColor(skill.difficulty)}`}
                            >
                              {skill.difficulty}
                            </Badge>
                          </div>
                          <CardDescription className="mt-1">
                            {skill.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Your Progress
                              </span>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {skill.progress}%
                              </span>
                            </div>
                            <Progress
                              value={skill.progress}
                              className={getProgressColor(skill.progress)}
                            />
                          </div>

                          <div className="flex items-center mb-3">
                            <Award className="h-4 w-4 text-amber-500 mr-2" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Relevance Score:{" "}
                            </span>
                            <span className="ml-1 font-semibold text-gray-800 dark:text-gray-200">
                              {skill.relevanceScore}/100
                            </span>
                          </div>

                          <div className="flex items-center">
                            <Rocket className="h-4 w-4 text-purple-500 mr-2" />
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              Est. Time to Learn:{" "}
                            </span>
                            <span className="ml-1 font-semibold text-gray-800 dark:text-gray-200">
                              {skill.estimatedTimeToLearn}
                            </span>
                          </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                          <div className="w-full">
                            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Learning Resources:
                            </div>
                            <div className="space-y-2">
                              {skill.resources.map((resource, index) => (
                                <TooltipProvider key={index}>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <a
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                                      >
                                        {getResourceIcon(resource.type)}
                                        {resource.title}
                                      </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>Open {resource.type} in new tab</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              ))}
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Explore More Skills <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default RecommendationPanel;
