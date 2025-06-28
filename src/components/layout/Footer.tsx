import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    learn: [
      { title: "Aptitude", href: "/aptitude" },
      { title: "Interview Questions", href: "/interview-questions" },
      { title: "Coding Practice", href: "/coding-practice" },
      { title: "Mock Tests", href: "/mock-tests" },
    ],
    resources: [
      { title: "PDFs", href: "/resources" },
      { title: "Career Tips", href: "/resources#career-tips" },
      { title: "Resume Samples", href: "/resources#resume-samples" },
      { title: "Free Courses", href: "/resources#free-courses" },
    ],
    company: [
      { title: "About Us", href: "/about" },
      { title: "Contact Us", href: "/contact" },
      { title: "Blog", href: "/blog" },
      { title: "Privacy Policy", href: "/privacy-policy" },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <Image 
                src="/mindsprint-logo.svg" 
                alt="MindSprint Logo" 
                width={40} 
                height={40} 
                className="mr-2"
              />
              <span className="text-2xl font-bold text-blue-400">
                MindSprint
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering students and job seekers with the knowledge and practice they need to succeed.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {currentYear} MindSprint. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-blue-400 mr-4">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 