import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FaClipboardList, FaLaptopCode, FaUserTie, FaGraduationCap, FaClock, FaChartLine, FaBuilding } from "react-icons/fa";

export default function MockTestsPage() {
  const testCategories = [
    {
      id: "aptitude",
      title: "Aptitude Tests",
      icon: <FaClipboardList className="text-blue-600 text-2xl" />,
      description: "Full-length aptitude tests covering logical reasoning, quantitative aptitude, and verbal ability.",
      count: 25,
      color: "blue",
    },
    {
      id: "technical",
      title: "Technical Tests",
      icon: <FaLaptopCode className="text-green-600 text-2xl" />,
      description: "Domain-specific technical assessments for various programming languages and technologies.",
      count: 40,
      color: "green",
    },
    {
      id: "interview",
      title: "Interview Simulations",
      icon: <FaUserTie className="text-purple-600 text-2xl" />,
      description: "Mock interview scenarios with common HR and technical questions for practice.",
      count: 15,
      color: "purple",
    },
    {
      id: "company",
      title: "Company-specific Tests",
      icon: <FaBuilding className="text-red-600 text-2xl" />,
      description: "Tests modeled after assessment patterns of top companies like TCS, Infosys, and more.",
      count: 30,
      color: "red",
    },
  ];

  const featuredTests = [
    {
      id: 1,
      title: "Complete Aptitude Assessment",
      duration: "120 mins",
      questions: 100,
      difficulty: "Medium",
      category: "Aptitude",
      takers: 5240,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Java Developer Interview Test",
      duration: "90 mins",
      questions: 75,
      difficulty: "Hard",
      category: "Technical",
      takers: 3150,
      rating: 4.7,
    },
    {
      id: 3,
      title: "HR Interview Preparation",
      duration: "60 mins",
      questions: 50,
      difficulty: "Medium",
      category: "Interview",
      takers: 4200,
      rating: 4.9,
    },
  ];

  const features = [
    {
      title: "Timed Tests",
      icon: <FaClock className="text-blue-600 text-2xl" />,
      description: "Practice under time constraints to improve your speed and accuracy.",
    },
    {
      title: "Performance Analytics",
      icon: <FaChartLine className="text-green-600 text-2xl" />,
      description: "Get detailed insights into your performance with comprehensive analytics.",
    },
    {
      title: "Personalized Recommendations",
      icon: <FaGraduationCap className="text-purple-600 text-2xl" />,
      description: "Receive tailored recommendations based on your performance.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Mock Tests</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Prepare for your interviews and assessments with our comprehensive collection of mock tests.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tests */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Tests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTests.map((test) => (
              <div
                key={test.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        test.category === "Aptitude"
                          ? "bg-blue-100 text-blue-800"
                          : test.category === "Technical"
                          ? "bg-green-100 text-green-800"
                          : "bg-purple-100 text-purple-800"
                      }`}
                    >
                      {test.category}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="ml-1 text-sm font-medium text-gray-600">{test.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{test.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <FaClock className="mr-1" />
                      {test.duration}
                    </div>
                    <div className="flex items-center">
                      <FaClipboardList className="mr-1" />
                      {test.questions} questions
                    </div>
                    <div>
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold ${
                          test.difficulty === "Easy"
                            ? "bg-green-100 text-green-800"
                            : test.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {test.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{test.takers.toLocaleString()} takers</span>
                    <Link
                      href={`/mock-tests/${test.id}`}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      Start Test
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/mock-tests/all"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View All Tests
            </Link>
          </div>
        </div>
      </section>

      {/* Test Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Test Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testCategories.map((category) => (
              <Link
                key={category.id}
                href={`/mock-tests/${category.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8 flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-gray-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <div className="flex items-center">
                      <span className="text-indigo-600 font-medium">{category.count} tests available</span>
                      <span className="ml-2 text-indigo-600">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Test Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 p-8 text-center"
              >
                <div className="bg-gray-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Test Your Knowledge?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Create an account to track your progress, bookmark tests, and compete on the leaderboard.
              </p>
              <Link
                href="/auth/signup"
                className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors inline-block"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 