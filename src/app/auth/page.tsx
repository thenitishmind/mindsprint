"use client";

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Tabs */}
            <div className="flex">
              <button
                className={`w-1/2 py-4 text-center font-medium text-lg ${
                  activeTab === "login"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </button>
              <button
                className={`w-1/2 py-4 text-center font-medium text-lg ${
                  activeTab === "signup"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>

            <div className="p-8">
              {/* Login Form */}
              {activeTab === "login" && <LoginForm />}

              {/* Signup Form */}
              {activeTab === "signup" && <SignupForm />}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
} 