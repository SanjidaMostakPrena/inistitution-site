
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Lock, User } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    const success = await login(username, password);
    setIsLoading(false);
    if (success) {
      router.push("/admin");
    } else {
      setError("Invalid credentials. Use admin/admin.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-red-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-green-100">
        <div className="text-center mb-6">
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 mb-3">
              <Image
                src="/image/logo.jpeg"
                alt="পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
            <h1 className="text-xl font-bold text-slate-800 leading-tight">
              পলাশবাড়ী সুতি মাহমুদ
              <span className="block text-sm font-normal text-slate-600">
                মডেল পাইলট সরকারি উচ্চ বিদ্যালয়
              </span>
            </h1>
            <div className="mt-2 h-px w-12 bg-gradient-to-r from-green-500 to-red-500 mx-auto" />
            <p className="mt-3 text-sm text-gray-500">অ্যাডমিন প্যানেলে প্রবেশ করুন</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ইউজারনেম</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="admin"
                required
                autoComplete="username"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="••••••••"
                required
                autoComplete="current-password"
              />
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-2 rounded-lg border border-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:from-green-700 hover:to-red-700 transition duration-200 shadow-md hover:shadow-lg disabled:opacity-70"
          >
            {isLoading ? "প্রবেশ করছেন..." : "প্রবেশ করুন"}
          </button>

          <div className="text-center text-xs text-gray-400 mt-4">
            ডেমো: admin / admin
          </div>
        </form>
      </div>
    </div>
  );
}