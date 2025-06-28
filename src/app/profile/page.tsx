"use client";

import Layout from "@/components/layout/Layout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import Image from "next/image";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { currentUser, logout } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const tabs = [
    { id: "dashboard", label: "Dashboard" },
    { id: "courses", label: "My Courses" },
    { id: "progress", label: "Progress" },
    { id: "settings", label: "Settings" },
  ];

  // Mock data for dashboard cards
  const dashboardItems = [
    {
      title: "Aptitude Tests",
      description: "Practice tests to improve your logical and analytical skills",
      icon: "/file.svg",
      link: "/aptitude",
      color: "bg-blue-500",
    },
    {
      title: "Coding Practice",
      description: "Enhance your programming skills with interactive challenges",
      icon: "/window.svg",
      link: "/coding-practice",
      color: "bg-green-500",
    },
    {
      title: "Mock Interviews",
      description: "Prepare for technical interviews with realistic scenarios",
      icon: "/globe.svg",
      link: "/mock-tests",
      color: "bg-purple-500",
    },
    {
      title: "Learning Resources",
      description: "Access curated learning materials and tutorials",
      icon: "/file.svg",
      link: "/resources",
      color: "bg-yellow-500",
    },
  ];

  return (
    <ProtectedRoute>
      <Layout>
        <div className="bg-gray-50 min-h-screen">
          {/* Header section with user info */}
          <div className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                    {currentUser?.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="ml-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                      {currentUser?.displayName || 'Welcome, Student'}
                    </h1>
                    <p className="text-sm text-gray-500">{currentUser?.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Student Account
                  </span>
                  <button
                    onClick={logout}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Tab navigation */}
          <div className="border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content area */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {activeTab === "dashboard" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Learning Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {dashboardItems.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className={`h-2 ${item.color}`}></div>
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <div className={`w-10 h-10 rounded-full ${item.color} bg-opacity-20 flex items-center justify-center`}>
                              <Image src={item.icon} alt={item.title} width={20} height={20} />
                            </div>
                            <h3 className="ml-3 text-lg font-medium text-gray-900">{item.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Progress</h2>
                  <div className="bg-white rounded-lg shadow p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="flex flex-col">
                        <h3 className="text-sm font-medium text-gray-500">Completed Courses</h3>
                        <p className="text-3xl font-bold text-gray-900">2 / 8</p>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-medium text-gray-500">Coding Challenges</h3>
                        <p className="text-3xl font-bold text-gray-900">12 / 50</p>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "24%" }}></div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-sm font-medium text-gray-500">Mock Interviews</h3>
                        <p className="text-3xl font-bold text-gray-900">3 / 10</p>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">Upcoming Events</h2>
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    <ul className="divide-y divide-gray-200">
                      <li className="p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Advanced JavaScript Workshop</h3>
                            <p className="text-sm text-gray-500">Tomorrow, 3:00 PM - 5:00 PM</p>
                          </div>
                        </div>
                      </li>
                      <li className="p-4 hover:bg-gray-50">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900">Mock Interview Session</h3>
                            <p className="text-sm text-gray-500">Friday, 2:00 PM - 3:30 PM</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "courses" && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">My Enrolled Courses</h2>
                <p className="text-gray-600">Your enrolled courses will appear here.</p>
              </div>
            )}

            {activeTab === "progress" && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Learning Progress</h2>
                <p className="text-gray-600">Detailed progress tracking will appear here.</p>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
                    <p className="mt-1 text-sm text-gray-500">Update your account profile information.</p>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            autoComplete="given-name"
                            className="text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            autoComplete="family-name"
                            className="text-gray-900 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex justify-end">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}
