import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FaDownload, FaBriefcase, FaFileAlt, FaGraduationCap, FaBook, FaLaptopCode } from "react-icons/fa";

export default function ResourcesPage() {
  const resourceCategories = [
    {
      id: "pdf-downloads",
      title: "PDF Downloads",
      icon: <FaDownload className="text-red-600 text-2xl" />,
      description: "Downloadable study materials, cheat sheets, and reference guides.",
      count: 45,
    },
    {
      id: "career-tips",
      title: "Career Tips",
      icon: <FaBriefcase className="text-blue-600 text-2xl" />,
      description: "Expert advice on career planning, job search strategies, and professional development.",
      count: 30,
    },
    {
      id: "resume-samples",
      title: "Resume Samples",
      icon: <FaFileAlt className="text-green-600 text-2xl" />,
      description: "Sample resumes and templates for different experience levels and job roles.",
      count: 25,
    },
    {
      id: "free-courses",
      title: "Free Courses",
      icon: <FaGraduationCap className="text-purple-600 text-2xl" />,
      description: "Links to free online courses, tutorials, and learning resources.",
      count: 50,
    },
  ];

  const featuredPDFs = [
    {
      id: 1,
      title: "Data Structures & Algorithms Cheat Sheet",
      category: "Technical",
      size: "2.4 MB",
      downloads: 12500,
      thumbnail: "DSA",
    },
    {
      id: 2,
      title: "Aptitude Questions Compilation",
      category: "Aptitude",
      size: "3.8 MB",
      downloads: 9800,
      thumbnail: "Aptitude",
    },
    {
      id: 3,
      title: "Interview Questions & Answers Guide",
      category: "Interview",
      size: "1.9 MB",
      downloads: 15200,
      thumbnail: "Interview",
    },
    {
      id: 4,
      title: "Resume Writing Masterclass",
      category: "Career",
      size: "1.2 MB",
      downloads: 7600,
      thumbnail: "Resume",
    },
  ];

  const freeCourses = [
    {
      title: "Web Development Fundamentals",
      platform: "Udemy",
      duration: "10 hours",
      rating: 4.7,
      students: 125000,
      link: "https://www.udemy.com",
      icon: <FaLaptopCode className="text-yellow-600 text-xl" />,
    },
    {
      title: "Python for Beginners",
      platform: "Coursera",
      duration: "20 hours",
      rating: 4.8,
      students: 250000,
      link: "https://www.coursera.org",
      icon: <FaLaptopCode className="text-blue-600 text-xl" />,
    },
    {
      title: "Data Structures in Java",
      platform: "edX",
      duration: "15 hours",
      rating: 4.6,
      students: 85000,
      link: "https://www.edx.org",
      icon: <FaLaptopCode className="text-red-600 text-xl" />,
    },
    {
      title: "Interview Preparation Guide",
      platform: "LinkedIn Learning",
      duration: "8 hours",
      rating: 4.9,
      students: 62000,
      link: "https://www.linkedin.com/learning",
      icon: <FaBriefcase className="text-green-600 text-xl" />,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Access a wide range of free resources to enhance your learning and career preparation.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Resource Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category) => (
              <Link
                key={category.id}
                href={`/resources/${category.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
              >
                <div className="bg-gray-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="text-orange-600 font-medium">{category.count} resources</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured PDFs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured PDF Downloads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPDFs.map((pdf) => (
              <div
                key={pdf.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-40 flex items-center justify-center">
                  <div className="bg-red-500 text-white text-xl font-bold p-4 rounded">
                    {pdf.thumbnail}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-red-100 text-red-800">
                      {pdf.category}
                    </span>
                    <span className="text-sm text-gray-500">{pdf.size}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{pdf.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{pdf.downloads.toLocaleString()} downloads</span>
                    <Link
                      href={`/resources/pdf/${pdf.id}`}
                      className="flex items-center text-red-600 hover:text-red-800 font-medium"
                    >
                      <FaDownload className="mr-1" /> Download
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/resources/pdf-downloads"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              View All PDFs
            </Link>
          </div>
        </div>
      </section>

      {/* Free Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Free Online Courses</h2>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                    Course
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden md:table-cell">
                    Platform
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden sm:table-cell">
                    Duration
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden lg:table-cell">
                    Rating
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden xl:table-cell">
                    Students
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Link</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {freeCourses.map((course) => (
                  <tr key={course.title}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm">
                      <div className="flex items-center">
                        <div className="mr-3">{course.icon}</div>
                        <div className="font-medium text-gray-900">{course.title}</div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden md:table-cell">
                      {course.platform}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell">
                      {course.duration}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm hidden lg:table-cell">
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{course.rating}</span>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden xl:table-cell">
                      {course.students.toLocaleString()}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-800"
                      >
                        Access<span className="sr-only">, {course.title}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/resources/free-courses"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Resume Builder Tool</h2>
                <p className="text-xl">
                  Create a professional resume with our easy-to-use resume builder. Choose from multiple templates and customize to your needs.
                </p>
              </div>
              <div>
                <Link
                  href="/resources/resume-builder"
                  className="bg-white text-red-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors inline-block"
                >
                  Build Your Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 