import Link from "next/link";
import Image from "next/image";
import { FaLaptopCode, FaBook, FaUserTie, FaClipboardList, FaDownload, FaBlog } from "react-icons/fa";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Boost Your Skills, <br />
                <span className="text-yellow-300">Ace Your Interviews</span>
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                A comprehensive platform for aptitude development, interview preparation, and coding practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/aptitude"
                  className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors flex items-center justify-center"
                >
                  Start Learning
                </Link>
                <Link
                  href="/mock-tests"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-lg font-medium text-lg transition-colors flex items-center justify-center"
                >
                  Take a Test
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/MindSprint/MindSprint.png"
                    alt="MindSprint"
                    width={200}
                    height={100}
                    className="rounded-lg"
                    priority
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for topics or tests..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                  <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-lg">
                    Search
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link
                    href="/aptitude"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg flex items-center gap-2 text-gray-800 transition-colors"
                  >
                    <FaBook className="text-blue-600" /> Aptitude
                  </Link>
                  <Link
                    href="/interview-questions"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg flex items-center gap-2 text-gray-800 transition-colors"
                  >
                    <FaUserTie className="text-blue-600" /> Interviews
                  </Link>
                  <Link
                    href="/coding-practice"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg flex items-center gap-2 text-gray-800 transition-colors"
                  >
                    <FaLaptopCode className="text-blue-600" /> Coding
                  </Link>
                  <Link
                    href="/mock-tests"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg flex items-center gap-2 text-gray-800 transition-colors"
                  >
                    <FaClipboardList className="text-blue-600" /> Tests
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              MindSprint offers comprehensive resources for students and job seekers to prepare for their career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Aptitude */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <FaBook className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Aptitude Training</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive topic-wise categories including logical reasoning, quantitative aptitude, and verbal ability.
                </p>
                <Link
                  href="/aptitude"
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  Explore Aptitude <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Interview Questions */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <FaUserTie className="text-purple-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interview Preparation</h3>
                <p className="text-gray-600 mb-6">
                  Domain-specific technical questions, HR questions, behavioral questions, and company-wise interview guides.
                </p>
                <Link
                  href="/interview-questions"
                  className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
                >
                  Prepare for Interviews <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Coding Practice */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <FaLaptopCode className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Coding Practice</h3>
                <p className="text-gray-600 mb-6">
                  Curated coding problems with difficulty levels, MCQ-based CS topics, and future online code editor.
                </p>
                <Link
                  href="/coding-practice"
                  className="text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  Start Coding <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Mock Tests */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="bg-yellow-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <FaClipboardList className="text-yellow-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mock Tests</h3>
                <p className="text-gray-600 mb-6">
                  Full-length aptitude and interview MCQ sets with timer and performance tracking features.
                </p>
                <Link
                  href="/mock-tests"
                  className="text-yellow-600 hover:text-yellow-800 font-medium flex items-center"
                >
                  Take a Test <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="bg-red-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <FaDownload className="text-red-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Resources</h3>
                <p className="text-gray-600 mb-6">
                  Downloadable PDFs, career tips, resume samples, and links to free courses for further learning.
                </p>
                <Link
                  href="/resources"
                  className="text-red-600 hover:text-red-800 font-medium flex items-center"
                >
                  Access Resources <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Blog */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <FaBlog className="text-indigo-600 text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Blog & Articles</h3>
                <p className="text-gray-600 mb-6">
                  Tips for freshers, interview experiences, and articles on technical and soft skills development.
                </p>
                <Link
                  href="/blog"
                  className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                >
                  Read Articles <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-200">Practice Questions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-blue-200">Mock Tests</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Company Guides</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-blue-200">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Create your free account today and get access to thousands of practice questions, mock tests, and resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/auth"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Sign Up for Free
              </Link>
              <Link
                href="/mock-tests"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium text-lg transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
