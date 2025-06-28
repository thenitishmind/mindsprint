import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FaCode, FaLaptopCode, FaDatabase, FaServer, FaMobile, FaChartBar } from "react-icons/fa";

export default function CodingPracticePage() {
  const difficultyLevels = [
    {
      level: "Easy",
      color: "green",
      count: 120,
      description: "Perfect for beginners to practice basic programming concepts",
    },
    {
      level: "Medium",
      color: "yellow",
      count: 200,
      description: "Intermediate problems to strengthen your problem-solving skills",
    },
    {
      level: "Hard",
      color: "red",
      count: 80,
      description: "Challenging problems for experienced programmers",
    },
  ];

  const problemCategories = [
    {
      id: "arrays",
      title: "Arrays & Strings",
      icon: <FaCode className="text-blue-600 text-2xl" />,
      count: 85,
    },
    {
      id: "linked-lists",
      title: "Linked Lists",
      icon: <FaCode className="text-green-600 text-2xl" />,
      count: 45,
    },
    {
      id: "trees",
      title: "Trees & Graphs",
      icon: <FaCode className="text-yellow-600 text-2xl" />,
      count: 60,
    },
    {
      id: "sorting",
      title: "Sorting & Searching",
      icon: <FaCode className="text-purple-600 text-2xl" />,
      count: 50,
    },
    {
      id: "dynamic-programming",
      title: "Dynamic Programming",
      icon: <FaCode className="text-red-600 text-2xl" />,
      count: 70,
    },
    {
      id: "recursion",
      title: "Recursion & Backtracking",
      icon: <FaCode className="text-indigo-600 text-2xl" />,
      count: 40,
    },
  ];

  const topicCategories = [
    {
      id: "algorithms",
      title: "Algorithms",
      icon: <FaLaptopCode className="text-2xl" />,
      color: "blue",
    },
    {
      id: "data-structures",
      title: "Data Structures",
      icon: <FaDatabase className="text-2xl" />,
      color: "green",
    },
    {
      id: "web-development",
      title: "Web Development",
      icon: <FaServer className="text-2xl" />,
      color: "yellow",
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      icon: <FaMobile className="text-2xl" />,
      color: "purple",
    },
    {
      id: "system-design",
      title: "System Design",
      icon: <FaChartBar className="text-2xl" />,
      color: "red",
    },
  ];

  const popularProblems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      category: "Arrays",
      solvedCount: 15420,
    },
    {
      id: 2,
      title: "Reverse Linked List",
      difficulty: "Easy",
      category: "Linked Lists",
      solvedCount: 12350,
    },
    {
      id: 3,
      title: "Merge Two Sorted Lists",
      difficulty: "Easy",
      category: "Linked Lists",
      solvedCount: 11200,
    },
    {
      id: 4,
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium",
      category: "Trees",
      solvedCount: 9870,
    },
    {
      id: 5,
      title: "Maximum Subarray",
      difficulty: "Medium",
      category: "Dynamic Programming",
      solvedCount: 8950,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Coding Practice</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Sharpen your programming skills with our collection of coding problems, categorized by difficulty and topic.
            </p>
          </div>
        </div>
      </section>

      {/* Difficulty Levels */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Difficulty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {difficultyLevels.map((level) => (
              <Link
                key={level.level}
                href={`/coding-practice/difficulty/${level.level.toLowerCase()}`}
                className={`bg-white border rounded-xl p-8 text-center hover:shadow-lg transition-shadow`}
              >
                <h3 className={`text-2xl font-bold text-${level.color}-600 mb-2`}>{level.level}</h3>
                <div className={`w-20 h-1 bg-${level.color}-500 mx-auto mb-4`}></div>
                <p className="text-gray-600 mb-4">{level.description}</p>
                <div className={`text-${level.color}-600 font-semibold text-lg`}>{level.count} Problems</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Problem Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemCategories.map((category) => (
              <Link
                key={category.id}
                href={`/coding-practice/category/${category.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6 flex items-center gap-4"
              >
                <div className="bg-gray-100 p-3 rounded-full w-14 h-14 flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                  <p className="text-gray-500">{category.count} problems</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Problems */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Problems</h2>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Problem
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Difficulty
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Solved By
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {popularProblems.map((problem) => (
                  <tr key={problem.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                      <Link href={`/coding-practice/problem/${problem.id}`} className="font-medium text-blue-600 hover:text-blue-800">
                        {problem.title}
                      </Link>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm">
                      <span
                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                          problem.difficulty === "Easy"
                            ? "bg-green-100 text-green-800"
                            : problem.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {problem.difficulty}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{problem.category}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{problem.solvedCount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/coding-practice/all"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Problems
            </Link>
          </div>
        </div>
      </section>

      {/* Topic Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">CS Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {topicCategories.map((topic) => (
              <Link
                key={topic.id}
                href={`/coding-practice/topic/${topic.id}`}
                className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition-shadow flex flex-col items-center"
              >
                <div className="bg-gray-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <span className={`text-${topic.color}-600`}>{topic.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Online Code Editor Coming Soon!</h2>
                <p className="text-xl">
                  We're working on an integrated code editor to help you solve problems directly on our platform.
                </p>
              </div>
              <div>
                <button className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors inline-block opacity-50 cursor-not-allowed">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 