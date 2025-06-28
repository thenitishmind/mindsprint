import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FaSearch, FaTag, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: "How to Ace Your Technical Interview: Tips from Industry Experts",
      excerpt:
        "Learn proven strategies and techniques to help you succeed in your next technical interview, with advice from hiring managers at top tech companies.",
      category: "Interview Tips",
      date: "June 10, 2023",
      author: "Sarah Johnson",
      readTime: "8 min read",
      image: "technical-interview",
    },
    {
      id: 2,
      title: "The Complete Guide to Data Structures and Algorithms for Beginners",
      excerpt:
        "A comprehensive introduction to the most important data structures and algorithms concepts that every programmer should know.",
      category: "Technical",
      date: "May 25, 2023",
      author: "Michael Chen",
      readTime: "12 min read",
      image: "data-structures",
    },
    {
      id: 3,
      title: "5 Common Aptitude Test Mistakes and How to Avoid Them",
      excerpt:
        "Discover the most common mistakes candidates make during aptitude tests and learn practical strategies to avoid them.",
      category: "Aptitude",
      date: "June 2, 2023",
      author: "Priya Sharma",
      readTime: "6 min read",
      image: "aptitude-test",
    },
  ];

  const recentPosts = [
    {
      id: 4,
      title: "From Campus to Corporate: A Fresher's Guide to the First Job",
      category: "Career Tips",
      date: "June 15, 2023",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Understanding Big O Notation: A Simple Explanation",
      category: "Technical",
      date: "June 12, 2023",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "How to Build an Impressive GitHub Portfolio",
      category: "Career Tips",
      date: "June 8, 2023",
      readTime: "9 min read",
    },
    {
      id: 7,
      title: "Mastering Soft Skills for Technical Professionals",
      category: "Career Tips",
      date: "June 5, 2023",
      readTime: "8 min read",
    },
    {
      id: 8,
      title: "My Interview Experience at Google: Lessons Learned",
      category: "Interview Experience",
      date: "May 30, 2023",
      readTime: "11 min read",
    },
  ];

  const categories = [
    { name: "Interview Tips", count: 24 },
    { name: "Technical", count: 38 },
    { name: "Career Tips", count: 42 },
    { name: "Aptitude", count: 19 },
    { name: "Interview Experience", count: 27 },
    { name: "Coding", count: 31 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">MindSprint Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Insights, tips, and resources to help you excel in your career journey.
            </p>
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                />
                <button className="absolute right-2 top-2 bg-purple-600 text-white p-2 rounded-lg">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <div className="bg-purple-500 text-white text-xl font-bold p-4 rounded">
                    {post.image}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-800">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                        <FaUser className="text-gray-500" />
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center">
                      <FaCalendarAlt className="mr-1" /> {post.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts and Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Recent Posts */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-8">Recent Articles</h2>
              <div className="space-y-6">
                {recentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-purple-100 text-purple-800">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <div className="text-sm text-gray-500 flex items-center">
                      <FaCalendarAlt className="mr-1" /> {post.date}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/blog/all"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  View All Articles
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3 mt-12 lg:mt-0">
              {/* Categories */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex justify-between items-center py-2 border-b border-gray-100 hover:text-purple-600 transition-colors"
                    >
                      <span className="flex items-center">
                        <FaTag className="mr-2 text-gray-400" /> {category.name}
                      </span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl shadow-md overflow-hidden p-6 text-white">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <p className="mb-4">Get the latest articles and career tips delivered straight to your inbox.</p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-800"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-purple-700 hover:bg-gray-100 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have an interview experience or career tips to share? Become a contributor to our blog.
            </p>
            <Link
              href="/blog/contribute"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors inline-block"
            >
              Become a Contributor
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
} 