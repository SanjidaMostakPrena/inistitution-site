
"use client";

import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-red-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-green-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const closeMobile = () => setIsMobileOpen(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* ===== ডেস্কটপ সাইডবার (কলাপ্সেবল) ===== */}
      <aside
        className={`sticky top-0 h-screen flex-shrink-0 border-r border-gray-200 bg-white shadow-lg overflow-y-auto transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        } hidden md:block`}
      >
        <AdminSidebar collapsed={isCollapsed} onToggle={toggleCollapse} />
      </aside>

      {/* ===== মোবাইল সাইডবার (ওভারলে ড্রয়ার) ===== */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={closeMobile} />
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
            <AdminSidebar collapsed={false} onToggle={() => {}} />
            <button
              onClick={closeMobile}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ===== ডান পাশের কন্টেন্ট এলাকা ===== */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* হেডার (স্টিকি) */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <AdminHeader
            onToggleCollapse={toggleCollapse}
            isCollapsed={isCollapsed}
            onToggleMobile={toggleMobile}
          />
        </header>

      <main className="flex-1 overflow-y-auto min-h-0 p-4 md:p-6 bg-green-40 dark:bg-gray-900">
  {children}
</main>
      </div>
    </div>
  );
}