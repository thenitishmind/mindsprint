import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FaCalculator, FaBrain, FaLanguage, FaChartLine, FaClock, FaBook, FaQuestionCircle } from "react-icons/fa";

export default function AptitudePage() {
  const topics = [
    {
      id: "logical-reasoning",
      title: "Logical Reasoning",
      icon: <FaBrain className="text-purple-600 text-2xl" />,
      description: "Develop critical thinking skills with puzzles, syllogisms, and logical problems.",
      subtopics: ["Puzzles", "Syllogisms", "Logical Deductions", "Blood Relations", "Coding-Decoding"],
      color: "purple",
    },
    {
      id: "quantitative",
      title: "Quantitative Aptitude",
      icon: <FaCalculator className="text-blue-600 text-2xl" />,
      description: "Master mathematical concepts and numerical problem-solving techniques.",
      subtopics: ["Number Systems", "Algebra", "Geometry", "Probability", "Data Interpretation"],
      color: "blue",
    },
    {
      id: "verbal",
      title: "Verbal Ability",
      icon: <FaLanguage className="text-green-600 text-2xl" />,
      description: "Enhance your language skills with vocabulary, grammar, and comprehension.",
      subtopics: ["Vocabulary", "Grammar", "Reading Comprehension", "Verbal Reasoning", "Para Jumbles"],
      color: "green",
    },
    {
      id: "data-interpretation",
      title: "Data Interpretation",
      icon: <FaChartLine className="text-red-600 text-2xl" />,
      description: "Learn to analyze and interpret data from charts, graphs, and tables.",
      subtopics: ["Tables", "Bar Graphs", "Line Charts", "Pie Charts", "Caselet Based Problems"],
      color: "red",
    },
  ];

  const practiceOptions = [
    {
      title: "Timed Tests",
      icon: <FaClock className="text-yellow-600 text-2xl" />,
      description: "Practice under time constraints to improve speed and accuracy.",
      link: "/aptitude/timed-tests",
    },
    {
      title: "Topic Notes",
      icon: <FaBook className="text-indigo-600 text-2xl" />,
      description: "Comprehensive study material for each aptitude topic.",
      link: "/aptitude/notes",
    },
    {
      title: "Practice Questions",
      icon: <FaQuestionCircle className="text-teal-600 text-2xl" />,
      description: "Thousands of practice questions with detailed solutions.",
      link: "/aptitude/practice",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Aptitude Training</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive aptitude preparation with topic-wise categories, practice questions, and timed tests.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Aptitude Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  <div className={`bg-${topic.color}-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6`}>
                    {topic.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{topic.title}</h3>
                  <p className="text-gray-600 mb-6">{topic.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-2">Popular Subtopics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {topic.subtopics.map((subtopic) => (
                        <Link
                          key={subtopic}
                          href={`/aptitude/${topic.id}/${subtopic.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`bg-${topic.color}-50 text-${topic.color}-700 px-3 py-1 rounded-full text-sm hover:bg-${topic.color}-100 transition-colors`}
                        >
                          {subtopic}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={`/aptitude/${topic.id}`}
                    className={`text-${topic.color}-600 hover:text-${topic.color}-800 font-medium flex items-center`}
                  >
                    Explore {topic.title} <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Options */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Practice Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="p-8 text-center">
                  <div className="bg-gray-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <Link
                    href={option.link}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Test Your Skills?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Take a full-length aptitude test to assess your strengths and areas for improvement.
              </p>
              <Link
                href="/mock-tests/aptitude"
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors inline-block"
              >
                Take a Mock Test
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 