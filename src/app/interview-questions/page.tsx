import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FaJava, FaPython, FaCode, FaUserTie, FaUsers, FaBuilding } from "react-icons/fa";

export default function InterviewQuestionsPage() {
  const technicalCategories = [
    {
      id: "java",
      title: "Java",
      icon: <FaJava className="text-red-600 text-2xl" />,
      count: 250,
    },
    {
      id: "python",
      title: "Python",
      icon: <FaPython className="text-blue-600 text-2xl" />,
      count: 200,
    },
    {
      id: "web-dev",
      title: "Web Development",
      icon: <FaCode className="text-yellow-600 text-2xl" />,
      count: 300,
    },
    {
      id: "data-structures",
      title: "Data Structures",
      icon: <FaCode className="text-green-600 text-2xl" />,
      count: 180,
    },
    {
      id: "algorithms",
      title: "Algorithms",
      icon: <FaCode className="text-purple-600 text-2xl" />,
      count: 150,
    },
    {
      id: "database",
      title: "Database",
      icon: <FaCode className="text-indigo-600 text-2xl" />,
      count: 120,
    },
  ];

  const nonTechnicalCategories = [
    {
      id: "hr-questions",
      title: "HR Questions",
      icon: <FaUserTie className="text-blue-600 text-2xl" />,
      count: 100,
    },
    {
      id: "behavioral",
      title: "Behavioral Questions",
      icon: <FaUsers className="text-green-600 text-2xl" />,
      count: 150,
    },
  ];

  const companyCategories = [
    {
      id: "tcs",
      title: "TCS",
      logo: "TCS",
      count: 80,
    },
    {
      id: "infosys",
      title: "Infosys",
      logo: "Infosys",
      count: 75,
    },
    {
      id: "google",
      title: "Google",
      logo: "Google",
      count: 120,
    },
    {
      id: "microsoft",
      title: "Microsoft",
      logo: "Microsoft",
      count: 110,
    },
    {
      id: "amazon",
      title: "Amazon",
      logo: "Amazon",
      count: 100,
    },
    {
      id: "facebook",
      title: "Facebook",
      logo: "Facebook",
      count: 90,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Interview Questions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Prepare for your interviews with our comprehensive collection of technical, HR, behavioral, and company-specific questions.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Questions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {technicalCategories.map((category) => (
              <Link
                key={category.id}
                href={`/interview-questions/technical/${category.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6 flex items-center gap-4"
              >
                <div className="bg-gray-100 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-gray-500">{category.count} questions</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HR & Behavioral Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">HR & Behavioral Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nonTechnicalCategories.map((category) => (
              <Link
                key={category.id}
                href={`/interview-questions/${category.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8 flex flex-col md:flex-row items-center gap-6">
                  <div className="bg-gray-100 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">
                      {category.id === "hr-questions"
                        ? "Common HR questions about your background, strengths, weaknesses, and career goals."
                        : "Questions that assess your soft skills, teamwork, leadership, and problem-solving abilities."}
                    </p>
                    <div className="flex items-center">
                      <span className="text-purple-600 font-medium">{category.count} questions</span>
                      <span className="ml-2 text-purple-600">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company-wise Questions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Company-wise Interview Questions</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {companyCategories.map((company) => (
              <Link
                key={company.id}
                href={`/interview-questions/company/${company.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6 text-center"
              >
                <div className="bg-gray-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FaBuilding className="text-gray-600 text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{company.title}</h3>
                <p className="text-gray-500">{company.count} questions</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Tips */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-2xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Interview Tips & Resources</h2>
                <p className="text-xl">
                  Get expert advice on how to prepare for interviews, what to wear, and how to answer tricky questions.
                </p>
              </div>
              <div>
                <Link
                  href="/blog/interview-tips"
                  className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors inline-block"
                >
                  Read Interview Tips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 