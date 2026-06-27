
"use client";

import { useState, useEffect, useRef } from "react";
import { useAuth } from "@/app/context/AuthContext";
import {
  Bell,
  Search,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Moon,
  Sun,
  User,
  Settings,
  LogOut,
  ChevronDown,
  Mail,
  MessageSquare,
  Calendar,
  Award,
  CheckCircle,
  X,
} from "lucide-react";

interface AdminHeaderProps {
  onToggleCollapse: () => void;
  isCollapsed: boolean;
  onToggleMobile: () => void;
}

// Mock notifications – replace with real data
const mockNotifications = [
  {
    id: 1,
    title: "নতুন শিক্ষার্থী ভর্তি",
    description: "মোঃ রহমান ১ম শ্রেণীতে ভর্তি হয়েছে",
    time: "১০ মিনিট আগে",
    type: "student",
    read: false,
  },
  {
    id: 2,
    title: "ভর্তি আবেদন জমা",
    description: "সুলতানা আখতার ৬ষ্ঠ শ্রেণীতে আবেদন করেছেন",
    time: "২৫ মিনিট আগে",
    type: "application",
    read: false,
  },
  {
    id: 3,
    title: "নতুন নোটিশ প্রকাশিত",
    description: "ভর্তি বিজ্ঞপ্তি ২০২৬ প্রকাশিত হয়েছে",
    time: "১ ঘন্টা আগে",
    type: "notice",
    read: true,
  },
  {
    id: 4,
    title: "পরীক্ষার ফলাফল প্রকাশ",
    description: "প্রথম সাময়িক পরীক্ষার ফলাফল প্রকাশিত",
    time: "২ ঘন্টা আগে",
    type: "result",
    read: true,
  },
];

export default function AdminHeader({
  onToggleCollapse,
  isCollapsed,
  onToggleMobile,
}: AdminHeaderProps) {
  const { user, logout } = useAuth();
  const [isDark, setIsDark] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  // Refs for dropdown click‑outside
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  // Theme toggle – persists in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mark notification as read
  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <header className="flex h-16 items-center justify-between px-4 md:px-6 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="flex items-center gap-4">
        {/* Mobile Hamburger */}
        <button
          onClick={onToggleMobile}
          className="rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Desktop Collapse Toggle */}
        <button
          onClick={onToggleCollapse}
          className="hidden rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800 md:block"
          aria-label="Collapse sidebar"
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <PanelLeftClose className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Search Bar */}
        <div className="hidden md:relative md:max-w-md md:flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 py-1.5 pl-9 pr-4 text-sm text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors duration-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Notification Bell */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            {unreadCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-gray-900">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 rounded-xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-fade-in-up">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                  নোটিফিকেশন
                </h3>
                <button
                  onClick={() => setNotifications([])}
                  className="text-xs text-green-600 dark:text-green-400 hover:underline"
                >
                  সব মুছুন
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm">
                    কোনো নোটিফিকেশন নেই
                  </div>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`flex items-start gap-3 px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer ${
                        !n.read ? "bg-green-50 dark:bg-gray-700/50" : ""
                      }`}
                      onClick={() => markAsRead(n.id)}
                    >
                      <div className="mt-1 flex-shrink-0">
                        {n.type === "student" && (
                          <User className="h-5 w-5 text-green-500" />
                        )}
                        {n.type === "application" && (
                          <Mail className="h-5 w-5 text-blue-500" />
                        )}
                        {n.type === "notice" && (
                          <MessageSquare className="h-5 w-5 text-purple-500" />
                        )}
                        {n.type === "result" && (
                          <Award className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                          {n.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {n.description}
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
                          {n.time}
                        </p>
                      </div>
                      {!n.read && (
                        <span className="mt-1 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
                      )}
                    </div>
                  ))
                )}
              </div>
              <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700 text-center">
                <button className="text-xs text-green-600 dark:text-green-400 hover:underline">
                  সব দেখুন
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2 rounded-lg p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-red-500 text-sm font-semibold text-white shadow-md">
              {user ? user.charAt(0).toUpperCase() : "A"}
            </div>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 animate-fade-in-up">
              <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  {user || "Admin"}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  অ্যাডমিন প্যানেল
                </p>
              </div>
              <div className="py-1">
                <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <User className="h-4 w-4 text-gray-400" />
                  প্রোফাইল
                </button>
                <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  <Settings className="h-4 w-4 text-gray-400" />
                  সেটিংস
                </button>
                <button className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors border-t border-gray-100 dark:border-gray-700 mt-1 pt-2">
                  <LogOut className="h-4 w-4" />
                  <span onClick={logout}>লগআউট</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}