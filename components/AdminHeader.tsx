
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { useAuth } from "@/app/context/AuthContext";
// import {
//   Bell,
//   Search,
//   Menu,
//   PanelLeftClose,
//   PanelLeftOpen,
//   Moon,
//   Sun,
//   User,
//   Settings,
//   LogOut,
//   ChevronDown,
//   Mail,
//   MessageSquare,
//   Award,
//   Palette,
//   Circle,
//   UserCircle,
//   BadgeCheck,
// } from "lucide-react";

// // Color themes
// const themes = [
//   { id: "green", label: "সবুজ", primary: "#10b981" },
//   { id: "blue", label: "নীল", primary: "#3b82f6" },
//   { id: "purple", label: "বেগুনি", primary: "#8b5cf6" },
//   { id: "red", label: "লাল", primary: "#ef4444" },
//   { id: "orange", label: "কমলা", primary: "#f59e0b" },
// ];

// interface AdminHeaderProps {
//   onToggleCollapse: () => void;
//   isCollapsed: boolean;
//   onToggleMobile: () => void;
// }

// // Mock notifications
// const mockNotifications = [
//   {
//     id: 1,
//     title: "নতুন শিক্ষার্থী ভর্তি",
//     description: "মোঃ রহমান ১ম শ্রেণীতে ভর্তি হয়েছে",
//     time: "১০ মিনিট আগে",
//     type: "student",
//     read: false,
//   },
//   {
//     id: 2,
//     title: "ভর্তি আবেদন জমা",
//     description: "সুলতানা আখতার ৬ষ্ঠ শ্রেণীতে আবেদন করেছেন",
//     time: "২৫ মিনিট আগে",
//     type: "application",
//     read: false,
//   },
//   {
//     id: 3,
//     title: "নতুন নোটিশ প্রকাশিত",
//     description: "ভর্তি বিজ্ঞপ্তি ২০২৬ প্রকাশিত হয়েছে",
//     time: "১ ঘন্টা আগে",
//     type: "notice",
//     read: true,
//   },
//   {
//     id: 4,
//     title: "পরীক্ষার ফলাফল প্রকাশ",
//     description: "প্রথম সাময়িক পরীক্ষার ফলাফল প্রকাশিত",
//     time: "২ ঘন্টা আগে",
//     type: "result",
//     read: true,
//   },
// ];

// export default function AdminHeader({
//   onToggleCollapse,
//   isCollapsed,
//   onToggleMobile,
// }: AdminHeaderProps) {
//   const { user, logout } = useAuth();

//   const [isDark, setIsDark] = useState(false);
//   const [themeColor, setThemeColor] = useState("green");
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isNotificationOpen, setIsNotificationOpen] = useState(false);
//   const [isThemeOpen, setIsThemeOpen] = useState(false);
//   const [notifications, setNotifications] = useState(mockNotifications);
//   const [searchFocused, setSearchFocused] = useState(false);

//   // Refs for dropdowns
//   const profileRef = useRef<HTMLDivElement>(null);
//   const notificationRef = useRef<HTMLDivElement>(null);
//   const themeRef = useRef<HTMLDivElement>(null);

//   // Load saved preferences
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       setIsDark(true);
//       document.documentElement.classList.add("dark");
//     }
//     const savedColor = localStorage.getItem("themeColor");
//     if (savedColor && themes.find((t) => t.id === savedColor)) {
//       setThemeColor(savedColor);
//       document.documentElement.setAttribute("data-theme", savedColor);
//     } else {
//       document.documentElement.setAttribute("data-theme", "green");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newDark = !isDark;
//     setIsDark(newDark);
//     if (newDark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   };

//   const changeColorTheme = (colorId: string) => {
//     setThemeColor(colorId);
//     document.documentElement.setAttribute("data-theme", colorId);
//     localStorage.setItem("themeColor", colorId);
//     setIsThemeOpen(false);
//   };

//   // Close dropdowns on outside click
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
//         setIsProfileOpen(false);
//       }
//       if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
//         setIsNotificationOpen(false);
//       }
//       if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
//         setIsThemeOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Mark notification as read
//   const markAsRead = (id: number) => {
//     setNotifications(
//       notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
//     );
//   };

//   const markAllAsRead = () => {
//     setNotifications(notifications.map((n) => ({ ...n, read: true })));
//   };

//   const clearAllNotifications = () => {
//     setNotifications([]);
//   };

//   const unreadCount = notifications.filter((n) => !n.read).length;
//   const currentTheme = themes.find((t) => t.id === themeColor) || themes[0];

//   return (
//     <header className="relative flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 md:px-6">
//       {/* Gradient accent line */}
//       <div
//         className="absolute bottom-0 left-0 h-0.5 w-full transition-colors duration-500"
//         style={{ backgroundColor: currentTheme.primary }}
//       />

//       <div className="flex items-center gap-4">
//         {/* Mobile menu */}
//         <button
//           onClick={onToggleMobile}
//           className="rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
//         >
//           <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
//         </button>

//         {/* Desktop collapse toggle */}
//         <button
//           onClick={onToggleCollapse}
//           className="hidden rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 md:block"
//         >
//           {isCollapsed ? (
//             <PanelLeftOpen className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//           ) : (
//             <PanelLeftClose className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//           )}
//         </button>

//         {/* Search bar */}
//         <div
//           className={`hidden transition-all duration-300 md:relative md:max-w-md md:flex-1 ${
//             searchFocused ? "md:max-w-lg" : ""
//           }`}
//         >
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
//           <input
//             type="text"
//             placeholder="অনুসন্ধান..."
//             onFocus={() => setSearchFocused(true)}
//             onBlur={() => setSearchFocused(false)}
//             className="w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 pl-9 pr-4 text-sm text-gray-900 transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-green-400"
//           />
//         </div>
//       </div>

//       <div className="flex items-center gap-2 md:gap-3">
//         {/* Theme color picker */}
//         <div className="relative" ref={themeRef}>
//           <button
//             onClick={() => setIsThemeOpen(!isThemeOpen)}
//             className="flex items-center gap-1 rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
//             aria-label="থিম কালার পরিবর্তন"
//           >
//             <Palette className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//             <span
//               className="h-3 w-3 rounded-full border border-gray-300 dark:border-gray-600"
//               style={{ backgroundColor: currentTheme.primary }}
//             />
//           </button>

//           {isThemeOpen && (
//             <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 z-50">
//               <div className="border-b border-gray-200 px-4 py-2 dark:border-gray-700">
//                 <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
//                   প্রাইমারি কালার
//                 </p>
//               </div>
//               <div className="grid grid-cols-5 gap-2 p-2">
//                 {themes.map((t) => (
//                   <button
//                     key={t.id}
//                     onClick={() => changeColorTheme(t.id)}
//                     className={`flex flex-col items-center gap-1 rounded-lg p-2 transition-all duration-200 hover:scale-110 ${
//                       themeColor === t.id
//                         ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-800"
//                         : ""
//                     }`}
//                     style={{
//                       ringColor: themeColor === t.id ? t.primary : undefined,
//                     }}
//                   >
//                     <Circle
//                       className="h-6 w-6"
//                       style={{ fill: t.primary, color: t.primary }}
//                     />
//                     <span className="text-[10px] text-gray-600 dark:text-gray-400">
//                       {t.label}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Dark/Light toggle */}
//         <button
//           onClick={toggleTheme}
//           className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
//           aria-label="ডার্ক/লাইট মোড"
//         >
//           {isDark ? (
//             <Sun className="h-5 w-5 text-yellow-400" />
//           ) : (
//             <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//           )}
//         </button>

//         {/* Notifications */}
//         <div className="relative" ref={notificationRef}>
//           <button
//             onClick={() => setIsNotificationOpen(!isNotificationOpen)}
//             className="relative rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
//             aria-label="নোটিফিকেশন"
//           >
//             <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
//             {unreadCount > 0 && (
//               <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-gray-900">
//                 {unreadCount}
//               </span>
//             )}
//           </button>

//           {isNotificationOpen && (
//             <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 z-50">
//               <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
//                 <h3 className="font-semibold text-gray-800 dark:text-gray-100">
//                   নোটিফিকেশন
//                 </h3>
//                 <div className="flex gap-2">
//                   {notifications.length > 0 && (
//                     <>
//                       <button
//                         onClick={markAllAsRead}
//                         className="text-xs text-green-600 hover:underline dark:text-green-400"
//                       >
//                         সব পড়া হয়েছে
//                       </button>
//                       <button
//                         onClick={clearAllNotifications}
//                         className="text-xs text-red-600 hover:underline dark:text-red-400"
//                       >
//                         মুছুন
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//               <div className="max-h-80 overflow-y-auto">
//                 {notifications.length === 0 ? (
//                   <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
//                     কোনো নোটিফিকেশন নেই
//                   </div>
//                 ) : (
//                   notifications.map((n) => (
//                     <div
//                       key={n.id}
//                       className={`flex items-start gap-3 px-4 py-3 transition-colors cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
//                         !n.read ? "bg-green-50 dark:bg-gray-700/50" : ""
//                       }`}
//                       onClick={() => markAsRead(n.id)}
//                     >
//                       <div className="mt-1 flex-shrink-0">
//                         {n.type === "student" && (
//                           <User className="h-5 w-5 text-green-500" />
//                         )}
//                         {n.type === "application" && (
//                           <Mail className="h-5 w-5 text-blue-500" />
//                         )}
//                         {n.type === "notice" && (
//                           <MessageSquare className="h-5 w-5 text-purple-500" />
//                         )}
//                         {n.type === "result" && (
//                           <Award className="h-5 w-5 text-red-500" />
//                         )}
//                       </div>
//                       <div className="min-w-0 flex-1">
//                         <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
//                           {n.title}
//                         </p>
//                         <p className="text-xs text-gray-500 dark:text-gray-400">
//                           {n.description}
//                         </p>
//                         <p className="mt-0.5 text-[10px] text-gray-400 dark:text-gray-500">
//                           {n.time}
//                         </p>
//                       </div>
//                       {!n.read && (
//                         <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
//                       )}
//                     </div>
//                   ))
//                 )}
//               </div>
//               <div className="border-t border-gray-200 px-4 py-2 text-center dark:border-gray-700">
//                 <button className="text-xs text-green-600 hover:underline dark:text-green-400">
//                   সব দেখুন
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Profile */}
//         <div className="relative" ref={profileRef}>
//           <button
//             onClick={() => setIsProfileOpen(!isProfileOpen)}
//             className="flex items-center gap-2 rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
//             aria-label="প্রোফাইল"
//           >
//             <div className="relative">
//               <div
//                 className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white shadow-md transition-all duration-300"
//                 style={{
//                   backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.primary}dd)`,
//                 }}
//               >
//                 {user ? user.charAt(0).toUpperCase() : "A"}
//               </div>
//               <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500 dark:border-gray-900"></span>
//             </div>
//             <ChevronDown
//               className={`h-4 w-4 text-gray-500 transition-transform duration-200 dark:text-gray-400 ${
//                 isProfileOpen ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {isProfileOpen && (
//             <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 z-50">
//               <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3 dark:border-gray-700">
//                 <div
//                   className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white shadow-md"
//                   style={{
//                     backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.primary}dd)`,
//                   }}
//                 >
//                   {user ? user.charAt(0).toUpperCase() : "A"}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-gray-800 dark:text-gray-100">
//                     {user || "Admin"}
//                   </p>
//                   <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
//                     <BadgeCheck className="h-3 w-3 text-green-500" />
//                     অ্যাডমিন
//                   </p>
//                 </div>
//               </div>   
                
            
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }
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
  Award,
  Palette,
  Circle,
  UserCircle,
  BadgeCheck,
} from "lucide-react";

// Color themes
const themes = [
  { id: "green", label: "সবুজ", primary: "#10b981" },
  { id: "blue", label: "নীল", primary: "#3b82f6" },
  { id: "purple", label: "বেগুনি", primary: "#8b5cf6" },
  { id: "red", label: "লাল", primary: "#ef4444" },
  { id: "orange", label: "কমলা", primary: "#f59e0b" },
];

interface AdminHeaderProps {
  onToggleCollapse: () => void;
  isCollapsed: boolean;
  onToggleMobile: () => void;
}

// Mock notifications
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
  const [themeColor, setThemeColor] = useState("green");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);
  const [searchFocused, setSearchFocused] = useState(false);

  // Refs for dropdowns
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<HTMLDivElement>(null);

  // Load saved preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor && themes.find((t) => t.id === savedColor)) {
      setThemeColor(savedColor);
      document.documentElement.setAttribute("data-theme", savedColor);
    } else {
      document.documentElement.setAttribute("data-theme", "green");
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

  const changeColorTheme = (colorId: string) => {
    setThemeColor(colorId);
    document.documentElement.setAttribute("data-theme", colorId);
    localStorage.setItem("themeColor", colorId);
    setIsThemeOpen(false);
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
      if (themeRef.current && !themeRef.current.contains(event.target as Node)) {
        setIsThemeOpen(false);
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

  const markAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter((n) => !n.read).length;
  const currentTheme = themes.find((t) => t.id === themeColor) || themes[0];

  return (
    <header className="relative flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 shadow-sm transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 md:px-6">
      {/* Gradient accent line */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-full transition-colors duration-500"
        style={{ backgroundColor: currentTheme.primary }}
      />

      <div className="flex items-center gap-4">
        {/* Mobile menu */}
        <button
          onClick={onToggleMobile}
          className="rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden"
        >
          <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Desktop collapse toggle */}
        <button
          onClick={onToggleCollapse}
          className="hidden rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 md:block"
        >
          {isCollapsed ? (
            <PanelLeftOpen className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          ) : (
            <PanelLeftClose className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Search bar */}
        <div
          className={`hidden transition-all duration-300 md:relative md:max-w-md md:flex-1 ${
            searchFocused ? "md:max-w-lg" : ""
          }`}
        >
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="অনুসন্ধান..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full rounded-lg border border-gray-300 bg-gray-50 py-1.5 pl-9 pr-4 text-sm text-gray-900 transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-green-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-3">
        {/* Theme color picker */}
        <div className="relative" ref={themeRef}>
          <button
            onClick={() => setIsThemeOpen(!isThemeOpen)}
            className="flex items-center gap-1 rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="থিম কালার পরিবর্তন"
          >
            <Palette className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span
              className="h-3 w-3 rounded-full border border-gray-300 dark:border-gray-600"
              style={{ backgroundColor: currentTheme.primary }}
            />
          </button>

          {isThemeOpen && (
            <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 z-50">
              <div className="border-b border-gray-200 px-4 py-2 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  প্রাইমারি কালার
                </p>
              </div>
              <div className="grid grid-cols-5 gap-2 p-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => changeColorTheme(t.id)}
                    className={`flex flex-col items-center gap-1 rounded-lg p-2 transition-all duration-200 hover:scale-110 ${
                      themeColor === t.id
                        ? "ring-2 ring-offset-2 ring-offset-white dark:ring-offset-gray-800"
                        : ""
                    }`}
                    style={{
                      // Fix: Use CSS custom property for ring color
                      '--tw-ring-color': themeColor === t.id ? t.primary : 'transparent',
                    } as React.CSSProperties}
                  >
                    <Circle
                      className="h-6 w-6"
                      style={{ fill: t.primary, color: t.primary }}
                    />
                    <span className="text-[10px] text-gray-600 dark:text-gray-400">
                      {t.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Dark/Light toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="ডার্ক/লাইট মোড"
        >
          {isDark ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            className="relative rounded-lg p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="নোটিফিকেশন"
          >
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            {unreadCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white dark:ring-gray-900">
                {unreadCount}
              </span>
            )}
          </button>

          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 z-50">
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                  নোটিফিকেশন
                </h3>
                <div className="flex gap-2">
                  {notifications.length > 0 && (
                    <>
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-green-600 hover:underline dark:text-green-400"
                      >
                        সব পড়া হয়েছে
                      </button>
                      <button
                        onClick={clearAllNotifications}
                        className="text-xs text-red-600 hover:underline dark:text-red-400"
                      >
                        মুছুন
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    কোনো নোটিফিকেশন নেই
                  </div>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`flex items-start gap-3 px-4 py-3 transition-colors cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${
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
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-100">
                          {n.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {n.description}
                        </p>
                        <p className="mt-0.5 text-[10px] text-gray-400 dark:text-gray-500">
                          {n.time}
                        </p>
                      </div>
                      {!n.read && (
                        <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                      )}
                    </div>
                  ))
                )}
              </div>
              <div className="border-t border-gray-200 px-4 py-2 text-center dark:border-gray-700">
                <button className="text-xs text-green-600 hover:underline dark:text-green-400">
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
            className="flex items-center gap-2 rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="প্রোফাইল"
          >
            <div className="relative">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white shadow-md transition-all duration-300"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.primary}dd)`,
                }}
              >
                {user ? user.charAt(0).toUpperCase() : "A"}
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500 dark:border-gray-900"></span>
            </div>
            <ChevronDown
              className={`h-4 w-4 text-gray-500 transition-transform duration-200 dark:text-gray-400 ${
                isProfileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800 z-50">
              <div className="flex items-center gap-3 border-b border-gray-200 px-4 py-3 dark:border-gray-700">
                <div
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-semibold text-white shadow-md"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.primary}dd)`,
                  }}
                >
                  {user ? user.charAt(0).toUpperCase() : "A"}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">
                    {user || "Admin"}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <BadgeCheck className="h-3 w-3 text-green-500" />
                    অ্যাডমিন
                  </p>
                </div>
              </div>   
                
            
            </div>
          )}
        </div>
      </div>
    </header>
  );
}