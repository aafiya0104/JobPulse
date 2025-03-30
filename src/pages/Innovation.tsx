import React from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import {
  Lightbulb,
  TrendingUp,
  BarChart,
  Brain,
  Cpu,
  LineChart,
  Zap,
  Code,
  Layers,
  Compass,
  ArrowRight,
  ExternalLink,
  CheckCircle,
  Podcast,
  Video,
  FileText,
  Sparkles,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Innovation = () => {
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
  
  const trendingTechnologies = [
    {
      name: "Artificial Intelligence",
      icon: <Brain className="h-6 w-6 text-purple-500" />,
      growth: 128,
      description: "Machine learning, natural language processing, and computer vision are revolutionizing industries",
      skills: ["Machine Learning", "TensorFlow", "PyTorch", "NLP"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Cloud Computing",
      icon: <Layers className="h-6 w-6 text-blue-500" />,
      growth: 87,
      description: "Distributed computing, serverless architecture, and cloud-native development",
      skills: ["AWS", "Azure", "GCP", "Kubernetes"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Web3 & Blockchain",
      icon: <Cpu className="h-6 w-6 text-green-500" />,
      growth: 64,
      description: "Decentralized applications, smart contracts, and distributed ledger technologies",
      skills: ["Solidity", "Ethereum", "Smart Contracts", "DApps"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "DevOps & Automation",
      icon: <Code className="h-6 w-6 text-orange-500" />,
      growth: 73,
      description: "Continuous integration/deployment, infrastructure as code, and automated testing",
      skills: ["Docker", "Terraform", "GitHub Actions", "Jenkins"],
      color: "from-orange-500 to-red-500",
    },
  ];

  const innovativeApproaches = [
    {
      title: "AI-Powered Skill Matching",
      description: "Advanced algorithms analyze your skills and match them to emerging job opportunities",
      icon: <Compass className="h-6 w-6 text-indigo-500" />,
    },
    {
      title: "Personalized Learning Paths",
      description: "Customized upskilling recommendations based on your career goals and industry trends",
      icon: <LineChart className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "Predictive Career Analytics",
      description: "Forecast how industry changes will affect your role and identify future-proof skills",
      icon: <BarChart className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "Remote Work Optimization",
      description: "Tools and resources to maximize productivity and opportunities in distributed teams",
      icon: <Zap className="h-6 w-6 text-green-500" />,
    },
  ];
  
  const resources = [
    {
      title: "The Future of Work Report 2023",
      type: "report",
      icon: <FileText className="h-5 w-5 text-blue-500" />,
      url: "#",
    },
    {
      title: "Innovation in Tech Careers Podcast",
      type: "podcast",
      icon: <Podcast className="h-5 w-5 text-purple-500" />,
      url: "#",
    },
    {
      title: "AI Tools for Job Seekers Workshop",
      type: "video",
      icon: <Video className="h-5 w-5 text-red-500" />,
      url: "#",
    },
    {
      title: "Emerging Skills Assessment",
      type: "tool",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
      url: "#",
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
            Innovation in Career Development
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
            Discover cutting-edge approaches and technologies transforming how we work and build careers
          </p>
        </motion.div>

        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card className="overflow-hidden border-indigo-200 dark:border-indigo-900">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold">The Future of Work is Here</h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Traditional career paths are evolving rapidly with technological innovation. 
                  Staying ahead means embracing new tools, skills, and approaches to career development.
                  Our AI-powered platform helps you navigate this changing landscape with personalized insights.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Skill-Based Matching</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Find opportunities based on your unique capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Predictive Analytics</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">See how industry trends will affect your career</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Personalized Learning</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Custom upskilling recommendations for your goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Future-Proof Tools</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Resources to thrive in the changing job market</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>Explore Your Future Career</span>
                </Button>
              </div>
              <div className="md:w-2/5 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 dark:from-indigo-900/30 dark:to-blue-900/30 p-8 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 dark:from-indigo-500/10 dark:to-blue-500/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{ 
                        duration: 5, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center"
                    >
                      <div className="w-56 h-56 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                        <Brain className="h-24 w-24 text-indigo-500" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Trending Technologies */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-6 w-6 text-indigo-500" />
            <h2 className="text-2xl font-bold">Trending Technologies & Skills</h2>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {trendingTechnologies.map((tech, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${tech.color}`}>
                          {tech.icon}
                        </div>
                        <CardTitle>{tech.name}</CardTitle>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        +{tech.growth}% Growth
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="py-4">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {tech.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline"
                            className="bg-gray-50 dark:bg-gray-800"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" className="w-full flex items-center justify-center gap-1">
                      <span>Explore Career Paths</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Innovative Approaches */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb className="h-6 w-6 text-purple-500" />
            <h2 className="text-2xl font-bold">Innovative Approaches to Career Development</h2>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {innovativeApproaches.map((approach, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="hover:shadow-md transition-all duration-300">
                  <CardContent className="pt-6 pb-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                          {approach.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{approach.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {approach.description}
                        </p>
                        <Button variant="ghost" className="pl-0 text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:bg-transparent hover:text-indigo-700 dark:hover:text-indigo-300">
                          <span>Learn more</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <h2 className="text-2xl font-bold">Resources & Tools</h2>
              <TabsList>
                <TabsTrigger value="all">All Resources</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-3">
                          {resource.icon}
                          <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 capitalize">
                            {resource.type}
                          </Badge>
                        </div>
                        <h3 className="font-medium mb-4">{resource.title}</h3>
                        <Button 
                          variant="outline" 
                          className="mt-auto"
                          size="sm"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span>Access Resource</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="reports" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.filter(r => r.type === 'report').map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-3">
                          {resource.icon}
                          <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 capitalize">
                            {resource.type}
                          </Badge>
                        </div>
                        <h3 className="font-medium mb-4">{resource.title}</h3>
                        <Button 
                          variant="outline" 
                          className="mt-auto"
                          size="sm"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span>Access Resource</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="podcasts" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.filter(r => r.type === 'podcast').map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-3">
                          {resource.icon}
                          <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 capitalize">
                            {resource.type}
                          </Badge>
                        </div>
                        <h3 className="font-medium mb-4">{resource.title}</h3>
                        <Button 
                          variant="outline" 
                          className="mt-auto"
                          size="sm"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span>Access Resource</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="videos" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.filter(r => r.type === 'video').map((resource, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300">
                    <CardContent className="pt-6">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-3">
                          {resource.icon}
                          <Badge variant="outline" className="bg-gray-50 dark:bg-gray-800 capitalize">
                            {resource.type}
                          </Badge>
                        </div>
                        <h3 className="font-medium mb-4">{resource.title}</h3>
                        <Button 
                          variant="outline" 
                          className="mt-auto"
                          size="sm"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          <span>Access Resource</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white border-none">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Ready to innovate your career?</h2>
                  <p className="text-white/90 max-w-xl">
                    Our AI-powered platform analyzes your skills and interests to create a personalized 
                    innovation roadmap tailored to your career goals.
                  </p>
                </div>
                <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                  <Sparkles className="h-5 w-5 mr-2" />
                  <span>Get Started Now</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Innovation; 