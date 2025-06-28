import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout/Layout";
import { FaLinkedin, FaTwitter, FaGithub, FaLightbulb, FaUsers, FaGraduationCap, FaChartLine } from "react-icons/fa";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      position: "Founder & CEO",
      bio: "Former Google engineer with 10+ years of experience in tech education.",
      image: "/MindSprint/MindSprint.png",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        github: "https://github.com",
      },
    },
    {
      name: "Priya Patel",
      position: "Head of Content",
      bio: "Education specialist with expertise in curriculum development and aptitude training.",
      image: "/MindSprint/MindSprint.png",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Arjun Reddy",
      position: "Technical Lead",
      bio: "Full-stack developer with a passion for creating educational platforms.",
      image: "/MindSprint/MindSprint.png",
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Neha Gupta",
      position: "Career Advisor",
      bio: "Former HR manager with experience at top tech companies.",
      image: "/MindSprint/MindSprint.png",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
  ];

  const values = [
    {
      title: "Quality Education",
      description: "We believe in providing high-quality, accurate, and up-to-date learning materials.",
      icon: <FaLightbulb className="text-yellow-500 text-3xl" />,
    },
    {
      title: "Accessibility",
      description: "Making career preparation resources accessible to everyone, regardless of background.",
      icon: <FaUsers className="text-blue-500 text-3xl" />,
    },
    {
      title: "Continuous Learning",
      description: "Encouraging a mindset of lifelong learning and constant improvement.",
      icon: <FaGraduationCap className="text-green-500 text-3xl" />,
    },
    {
      title: "Results-Oriented",
      description: "Focused on delivering practical knowledge that leads to tangible career outcomes.",
      icon: <FaChartLine className="text-purple-500 text-3xl" />,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">About MindSprint</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering students and job seekers with the knowledge and practice they need to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                <Image 
                  src="/MindSprint/MindSprint.png"
                  alt="MindSprint"
                  width={600}
                  height={400}
                  className="rounded-xl"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At MindSprint, our mission is to bridge the gap between education and employment by providing comprehensive resources for aptitude development, interview preparation, and coding practice.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone deserves access to high-quality learning materials that can help them achieve their career goals. Our platform is designed to empower students and job seekers with the knowledge, skills, and confidence they need to excel in their chosen fields.
              </p>
              <p className="text-lg text-gray-600">
                Founded in 2023, MindSprint has already helped thousands of users improve their skills and secure their dream jobs. We're committed to continuously expanding our resources and enhancing our platform to meet the evolving needs of our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-8 text-center"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-60 flex items-center justify-center overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={240}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-indigo-600 transition-colors">
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-400 hover:text-indigo-600 transition-colors">
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-400 hover:text-indigo-600 transition-colors">
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-blue-200">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-200">Job Placements</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Practice Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200">Partner Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Be part of a growing community of learners and professionals dedicated to continuous improvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth/signup"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Sign Up Free
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 