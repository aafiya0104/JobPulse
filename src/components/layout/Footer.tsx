import React from "react";
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

interface FooterProps {
  showFullFooter?: boolean;
}

const Footer = ({ showFullFooter = true }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t py-8 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-7xl">
        {showFullFooter ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4">JobPulse</h3>
              <p className="text-muted-foreground mb-4">
                Your smart job market dashboard for data-driven career
                decisions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/dashboard"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/industries"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Industry Insights
                  </Link>
                </li>
                <li>
                  <Link
                    to="/salary"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Salary Insights
                  </Link>
                </li>
                <li>
                  <Link
                    to="/remote-jobs"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Remote Jobs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/innovation"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Innovation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/diversity-insights"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Diversity & Inclusion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/geography"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Geographic Data
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Settings
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="font-semibold mb-4">More</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/login"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Help & Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : null}

        <Separator className="mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} JobPulse. All rights reserved.
          </p>

          <div className="flex items-center">
            <p className="text-sm text-muted-foreground">
              Made with <Heart size={14} className="inline text-red-500 mx-1" />{" "}
              for data-driven career decisions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
