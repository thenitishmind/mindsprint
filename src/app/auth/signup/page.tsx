"use client";

import Layout from "@/components/layout/Layout";
import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";

export default function SignupPage() {
  return (
    <Layout>
      <section className="py-8 md:py-16 bg-gradient-to-b from-blue-50 to-gray-100 min-h-[calc(100vh-80px)] flex items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Left side - Hero image/description */}
            <div className="hidden md:block md:w-1/2 lg:w-2/5 max-w-md">
              <div className="text-center md:text-left mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join MindSprint Today</h1>
                <p className="text-lg text-gray-600">
                  Create your account and start your journey to mastering tech skills.
                </p>
              </div>
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/MindSprint/MindSprint.svg"
                  alt="MindSprint Learning"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>
            
            {/* Right side - Signup form */}
            <div className="w-full md:w-1/2 lg:w-2/5 max-w-md">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 md:p-8 border border-gray-100">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}