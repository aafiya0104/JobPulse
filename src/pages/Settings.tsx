import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Shield,
  Eye,
  Globe,
  Moon,
  Palette,
  Mail,
  Lock,
  User,
  LogOut,
  Trash2,
  Save,
  Briefcase,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Separator } from "../components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [jobAlerts, setJobAlerts] = useState(true);
  const [marketUpdates, setMarketUpdates] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="pt-24 container mx-auto px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Manage your account settings and preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="flex items-center gap-3 p-4">
                    <Avatar>
                      <AvatarImage src="/avatar.png" alt="User avatar" />
                      <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-500 text-white">
                        SJ
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">sarah.johnson@example.com</p>
                    </div>
                  </div>

                  <nav className="py-2">
                    <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase">
                      User Settings
                    </div>
                    <div className="space-y-1 px-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-blue-600 dark:text-blue-400 font-medium"
                      >
                        <User className="h-4 w-4 mr-2" />
                        Account
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Lock className="h-4 w-4 mr-2" />
                        Password & Security
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Bell className="h-4 w-4 mr-2" />
                        Notifications
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Palette className="h-4 w-4 mr-2" />
                        Appearance
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Job Preferences
                      </Button>
                    </div>
                  </nav>

                  <nav className="py-2">
                    <div className="px-4 py-2 text-sm font-medium text-gray-500 uppercase">
                      Other
                    </div>
                    <div className="space-y-1 px-2">
                      <Button variant="ghost" className="w-full justify-start">
                        <Globe className="h-4 w-4 mr-2" />
                        Language & Region
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        <Eye className="h-4 w-4 mr-2" />
                        Privacy
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-red-600 dark:text-red-400">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign out
                      </Button>
                    </div>
                  </nav>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card className="border-red-200 dark:border-red-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-red-600 dark:text-red-400">
                    Danger Zone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="destructive" className="w-full">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>

              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>
                      Update your personal information
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="Sarah Johnson" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="sarah.johnson@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="Bangalore, India" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timezone">Timezone</Label>
                      <Select defaultValue="asia-kolkata">
                        <SelectTrigger>
                          <SelectValue placeholder="Select timezone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asia-kolkata">
                            Asia/Kolkata (GMT +5:30)
                          </SelectItem>
                          <SelectItem value="america-newyork">
                            America/New_York (GMT -4:00)
                          </SelectItem>
                          <SelectItem value="europe-london">
                            Europe/London (GMT +1:00)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t pt-5">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Profile Photo</CardTitle>
                    <CardDescription>
                      Update your profile picture
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-6">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/avatar.png" alt="User avatar" />
                        <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-500 text-white text-2xl">
                          SJ
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-x-2">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Upload New Photo
                        </Button>
                        <Button variant="outline">Remove</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-blue-500" />
                      Password & Security
                    </CardTitle>
                    <CardDescription>
                      Manage your password and security settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm New Password</Label>
                      <Input id="confirm-password" type="password" />
                    </div>

                    <Separator className="my-6" />

                    <div>
                      <h3 className="font-medium mb-3">Two-Factor Authentication</h3>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-medium">Enhance your account security</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <Switch defaultChecked={false} />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Login Sessions</h3>
                      <div className="space-y-3">
                        <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium">Current Session</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Windows • Chrome • Bangalore, India
                              </p>
                            </div>
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              Active
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-5">
                    <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Update Security Settings
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="notifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5 text-blue-500" />
                      Notification Preferences
                    </CardTitle>
                    <CardDescription>
                      Control how and when we contact you
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Email Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Job Recommendations</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Receive personalized job recommendations
                            </p>
                          </div>
                          <Switch 
                            checked={jobAlerts} 
                            onCheckedChange={setJobAlerts} 
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Market Updates</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Get the latest trends in your industry
                            </p>
                          </div>
                          <Switch 
                            checked={marketUpdates} 
                            onCheckedChange={setMarketUpdates} 
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Account Activity</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Security alerts and account updates
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-medium mb-3">Email Frequency</h3>
                      <div className="space-y-2">
                        <Label htmlFor="email-frequency">How often would you like to receive emails?</Label>
                        <Select defaultValue="weekly">
                          <SelectTrigger id="email-frequency">
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">In-App Notifications</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Job Matches</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Notify me about new job matches
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Skill Recommendations</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Suggest skills I should develop
                            </p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t pt-5">
                    <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            {saveSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-md flex items-center justify-center"
              >
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>Settings saved successfully!</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings; 