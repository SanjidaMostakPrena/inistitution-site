
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import {
//   LayoutDashboard,
//   Users,
//   GraduationCap,
//   BookOpen,
//   Calendar,
//     Award,
//   LogOut,
// } from "lucide-react";
// import { useAuth } from "@/app/context/AuthContext";

// const navItems = [
//   { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
//   { name: "StudentPortal", href: "/admin/portal", icon: Users },
//   { name: "Academic Information", href: "/admin/requirment", icon: GraduationCap },
//   { name: "Apply", href: "/admin/form", icon: BookOpen },
//   { name: "Notice", href: "/admin/notice", icon: Calendar },
//   { name: "Result", href: "/admin/result", icon:   Award },
// ];

// interface AdminSidebarProps {
//   collapsed: boolean;
//   onToggle: () => void;  // এখন আর ব্যবহার করা হচ্ছে না, তবে রাখা ভালো (ভবিষ্যতে কাজে লাগতে পারে)
// }

// export default function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
//   const pathname = usePathname();
//   const { logout } = useAuth();

//   return (
//     <div className="flex h-full flex-col bg-white">
//       {/* ব্র্যান্ডিং */}
//       <div
//         className={`flex items-center  px-4 py-6 transition-all ${
//           collapsed ? "justify-center" : "gap-3"
//         }`}
//       >
//         {/* লোগো – হোমপেজে ক্লিকযোগ্য */}
//         <Link href="/" className="relative h-12 w-12 flex-shrink-0">
//           <Image
//             src="/image/logo.jpeg"
//             alt="Logo"
//             fill
//             className="object-contain"
//             priority
//             unoptimized
//           />
//         </Link>
//         {!collapsed && (
//           <div className="flex flex-col justify-center">
//             <span className="text-sm font-bold leading-tight text-slate-800 ">
//               পলাশবাড়ী সুতি মাহমুদ
//             </span>
//             <span className="text-[10px] font-medium text-gray-500 truncate">
//               মডেল পাইলট সরকারি উচ্চ বিদ্যালয়
//             </span>
//           </div>
//         )}
//       </div>

//       {/* নেভিগেশন */}
//       <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
//         {navItems.map((item) => {
//           const isActive =
//             pathname === item.href || pathname.startsWith(item.href + "/");
//           return (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
//                 isActive
//                   ? "border-r-4 border-green-600 bg-gradient-to-r from-green-50 to-red-50 text-green-700"
//                   : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
//               } ${collapsed ? "justify-center" : ""}`}
//               title={collapsed ? item.name : undefined}
//             >
//               <item.icon className="h-5 w-5 flex-shrink-0" />
//               {!collapsed && <span>{item.name}</span>}
//             </Link>
//           );
//         })}
//       </nav>

//       {/* লগআউট (নিচে) – কলাপ্স টগল নেই */}
//       <div className="border-t border-gray-200 p-4">
//         <button
//           onClick={logout}
//           className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 ${
//             collapsed ? "justify-center" : ""
//           }`}
//           title={collapsed ? "Logout" : undefined}
//         >
//           <LogOut className="h-5 w-5 flex-shrink-0" />
//           {!collapsed && <span>Logout</span>}
//         </button>
//       </div>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  Award,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";

const navItems = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "StudentPortal", href: "/admin/portal", icon: Users },
  { name: "Academic Information", href: "/admin/requirment", icon: GraduationCap },
  { name: "Apply", href: "/admin/form", icon: BookOpen },
  { name: "Notice", href: "/admin/notice", icon: Calendar },
  { name: "Result", href: "/admin/result", icon: Award },
];

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <div className="flex h-full flex-col bg-white dark:bg-gray-800 transition-colors duration-300">
      {/* Branding */}
      <div
        className={`flex items-center px-4 py-6 transition-all ${
          collapsed ? "justify-center" : "gap-3"
        }`}
      >
        <Link href="/" className="relative h-12 w-12 flex-shrink-0">
          <Image
            src="/image/logo.jpeg"
            alt="Logo"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </Link>
        {!collapsed && (
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold leading-tight text-slate-800 dark:text-white">
              পলাশবাড়ী সুতি মাহমুদ
            </span>
            <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 truncate">
              মডেল পাইলট সরকারি উচ্চ বিদ্যালয়
            </span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? "border-r-4 border-green-600 dark:border-green-400 bg-gradient-to-r from-green-50 to-red-50 dark:from-green-900/20 dark:to-red-900/20 text-green-700 dark:text-green-400"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100"
              } ${collapsed ? "justify-center" : ""}`}
              title={collapsed ? item.name : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <button
          onClick={logout}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 dark:text-red-400 transition-colors hover:bg-red-50 dark:hover:bg-red-900/30 ${
            collapsed ? "justify-center" : ""
          }`}
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}