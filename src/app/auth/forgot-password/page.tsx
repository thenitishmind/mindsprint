"use client";

import Layout from "@/components/layout/Layout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <Layout>
      <section className="py-16 bg-gray-50">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
            <ForgotPasswordForm />
          </div>
        </div>
      </section>
    </Layout>
  );
} 