
// "use client";

// import { useState, useEffect } from "react";
// import {
//   FileText,
//   Users,
//   UserCheck,
//   UserX,
//   Eye,
//   CheckCircle,
//   XCircle,
//   Search,
//   Filter,
//   Clock,
//   Calendar,
//   Mail,
//   Phone,
//   MapPin,
//   School,
//   User,
//   Download,
//   RefreshCw,
//   ArrowUpRight,
//   ArrowDownRight,
//   ChevronDown,
//   X,
//   AlertCircle,
//   Check,
//   Plus,
// } from "lucide-react";
// import { useApplications } from "@/app/context/ApplicationContext";

// export default function AdminApplications() {
//   // ===== Dark/Light Mode Sync (same as header) =====
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//       setIsDark(true);
//       document.documentElement.classList.add("dark");
//     } else {
//       setIsDark(false);
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);
//   // ===================================================

//   const { applications, updateApplicationStatus } = useApplications();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "approved" | "rejected">("all");
//   const [selectedApp, setSelectedApp] = useState<any>(null);
//   const [viewModalOpen, setViewModalOpen] = useState(false);

//   // Stats
//   const total = applications.length;
//   const pending = applications.filter((a) => a.status === "pending").length;
//   const approved = applications.filter((a) => a.status === "approved").length;
//   const rejected = applications.filter((a) => a.status === "rejected").length;

//   // Filtered applications
//   const filteredApps = applications.filter((app) => {
//     const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                           app.classApplying.includes(searchTerm) ||
//                           app.email.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesStatus = filterStatus === "all" || app.status === filterStatus;
//     return matchesSearch && matchesStatus;
//   });

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "pending": return "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-700";
//       case "approved": return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700";
//       case "rejected": return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700";
//       default: return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "pending": return <Clock className="h-3.5 w-3.5" />;
//       case "approved": return <CheckCircle className="h-3.5 w-3.5" />;
//       case "rejected": return <XCircle className="h-3.5 w-3.5" />;
//       default: return null;
//     }
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("bn-BD", { day: "numeric", month: "short", year: "numeric" });
//   };

//   const openViewModal = (app: any) => {
//     setSelectedApp(app);
//     setViewModalOpen(true);
//   };

//   const handleApprove = (id: string) => {
//     updateApplicationStatus(id, "approved");
//   };

//   const handleReject = (id: string) => {
//     updateApplicationStatus(id, "rejected");
//   };

//   // ===== ডাউনলোড ফাংশন =====
//   const handleDownload = () => {
//     // সব অ্যাপ্লিকেশন ডেটা JSON আকারে ডাউনলোড
//     const data = applications.map(app => ({
//       id: app.id,
//       studentName: app.studentName,
//       dateOfBirth: app.dateOfBirth,
//       classApplying: app.classApplying,
//       previousInstitution: app.previousInstitution,
//       fatherName: app.fatherName,
//       motherName: app.motherName,
//       guardianContact: app.guardianContact,
//       email: app.email,
//       address: app.address,
//       status: app.status,
//       submittedAt: app.submittedAt
//     }));
//     const json = JSON.stringify(data, null, 2);
//     const blob = new Blob([json], { type: "application/json" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `applications_${new Date().toISOString().slice(0,10)}.json`;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);
//   };

//   // ===== রিলোড ফাংশন =====
//   const handleReload = () => {
//     // পেজ রিলোড করলে localStorage থেকে ডেটা আবার লোড হবে
//     window.location.reload();
//   };

//   return (
//     <div className="min-h-screen  dark:bg-gray-900 transition-colors duration-300">
//       {/* Page Header */}
//       <div className="mb-8">
//         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
//               <FileText className="h-7 w-7 text-green-600 dark:text-green-400" />
//               আবেদন ব্যবস্থাপনা
//             </h1>
//             <p className="text-gray-500 dark:text-gray-400 mt-1">সকল ভর্তি আবেদন দেখুন ও পরিচালনা করুন</p>
//           </div>
//           <div className="flex items-center gap-2">
//             <button 
//               onClick={handleDownload}
//               className="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//               title="ডাউনলোড (JSON)"
//             >
//               <Download className="h-5 w-5 text-gray-600 dark:text-gray-400" />
//             </button>
//             <button 
//               onClick={handleReload}
//               className="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
//               title="রিফ্রেশ"
//             >
//               <RefreshCw className="h-5 w-5 text-gray-600 dark:text-gray-400" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//         <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//           <div className="flex items-center justify-between">
//             <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">মোট আবেদন</p><p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{total}</p></div>
//             <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl"><FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div>
//           </div>
//         </div>
//         <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//           <div className="flex items-center justify-between">
//             <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">বিচারাধীন</p><p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-1">{pending}</p></div>
//             <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl"><Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" /></div>
//           </div>
//         </div>
//         <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//           <div className="flex items-center justify-between">
//             <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">অ্যাপ্রুভড</p><p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">{approved}</p></div>
//             <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-xl"><UserCheck className="h-6 w-6 text-green-600 dark:text-green-400" /></div>
//           </div>
//         </div>
//         <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//           <div className="flex items-center justify-between">
//             <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">রিজেক্টেড</p><p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">{rejected}</p></div>
//             <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-xl"><UserX className="h-6 w-6 text-red-600 dark:text-red-400" /></div>
//           </div>
//         </div>
//       </div>

//       {/* Filters & Search */}
//       <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
//         <div className="flex flex-wrap gap-3 items-center">
//           <div className="flex-1 min-w-[200px] relative">
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
//             <input
//               type="text"
//               placeholder="নাম, শ্রেণী বা ইমেইল দিয়ে খুঁজুন..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
//             />
//           </div>
//           <select
//             value={filterStatus}
//             onChange={(e) => setFilterStatus(e.target.value as any)}
//             className="px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white dark:bg-gray-700 dark:text-white"
//           >
//             <option value="all">সকল স্ট্যাটাস</option>
//             <option value="pending">বিচারাধীন</option>
//             <option value="approved">অ্যাপ্রুভড</option>
//             <option value="rejected">রিজেক্টেড</option>
//           </select>
//         </div>
//       </div>

//       {/* Applications Table */}
//       <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শিক্ষার্থী</th>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শ্রেণী</th>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">আবেদনের তারিখ</th>
//                 <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">স্ট্যাটাস</th>
//                 <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">একশন</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
//               {filteredApps.length === 0 ? (
//                 <tr>
//                   <td colSpan={5} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
//                     <div className="flex flex-col items-center">
//                       <FileText className="h-12 w-12 text-gray-300 dark:text-gray-600 mb-3" />
//                       <p className="font-medium">কোন আবেদন পাওয়া যায়নি</p>
//                       <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">নতুন আবেদন এলে এখানে দেখাবে</p>
//                     </div>
//                   </td>
//                 </tr>
//               ) : (
//                 filteredApps.map((app) => (
//                   <tr key={app.id} className="hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-200 group">
//                     <td className="px-4 py-3">
//                       <div className="flex items-center gap-3">
//                         <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800/30 dark:to-green-700/30 flex items-center justify-center text-green-700 dark:text-green-400 font-semibold text-xs">
//                           {app.studentName.charAt(0)}
//                         </div>
//                         <div>
//                           <p className="font-medium text-slate-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
//                             {app.studentName}
//                           </p>
//                           <p className="text-xs text-gray-500 dark:text-gray-400">{app.email}</p>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{app.classApplying}</td>
//                     <td className="px-4 py-3 text-slate-700 dark:text-gray-300 text-xs">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
//                         {formatDate(app.submittedAt)}
//                       </div>
//                     </td>
//                     <td className="px-4 py-3">
//                       <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
//                         {getStatusIcon(app.status)}
//                         {app.status === "pending" && "বিচারাধীন"}
//                         {app.status === "approved" && "অ্যাপ্রুভড"}
//                         {app.status === "rejected" && "রিজেক্টেড"}
//                       </span>
//                     </td>
//                     <td className="px-4 py-3">
//                       <div className="flex items-center justify-center gap-1.5">
//                         <button
//                           onClick={() => openViewModal(app)}
//                           className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"
//                           title="বিস্তারিত দেখুন"
//                         >
//                           <Eye className="h-4 w-4" />
//                         </button>
//                         {app.status === "pending" && (
//                           <>
//                             <button
//                               onClick={() => handleApprove(app.id)}
//                               className="p-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110"
//                               title="অ্যাপ্রুভ করুন"
//                             >
//                               <CheckCircle className="h-4 w-4" />
//                             </button>
//                             <button
//                               onClick={() => handleReject(app.id)}
//                               className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110"
//                               title="রিজেক্ট করুন"
//                             >
//                               <XCircle className="h-4 w-4" />
//                             </button>
//                           </>
//                         )}
//                         {app.status !== "pending" && (
//                           <button
//                             onClick={() => updateApplicationStatus(app.id, "pending")}
//                             className="p-1.5 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
//                             title="স্ট্যাটাস রিসেট করুন"
//                           >
//                             <RefreshCw className="h-3.5 w-3.5" />
//                           </button>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* View Modal */}
//       {viewModalOpen && selectedApp && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
//           <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
//                 <User className="h-5 w-5 text-green-600 dark:text-green-400" />
//                 আবেদনের বিবরণ
//               </h3>
//               <button onClick={() => setViewModalOpen(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
//                 <X className="h-6 w-6 text-gray-400 dark:text-gray-500" />
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Left column */}
//               <div className="space-y-4">
//                 <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
//                   <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">ব্যক্তিগত তথ্য</h4>
//                   <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//                     <p><span className="text-gray-500 dark:text-gray-400">নাম:</span> <span className="font-medium">{selectedApp.studentName}</span></p>
//                     <p><span className="text-gray-500 dark:text-gray-400">জন্ম তারিখ:</span> {selectedApp.dateOfBirth}</p>
//                     <p><span className="text-gray-500 dark:text-gray-400">শ্রেণী:</span> {selectedApp.classApplying}</p>
//                     <p><span className="text-gray-500 dark:text-gray-400">পূর্ববর্তী প্রতিষ্ঠান:</span> {selectedApp.previousInstitution || "—"}</p>
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
//                   <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">অভিভাবকের তথ্য</h4>
//                   <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
//                     <p><span className="text-gray-500 dark:text-gray-400">পিতা:</span> {selectedApp.fatherName}</p>
//                     <p><span className="text-gray-500 dark:text-gray-400">মাতা:</span> {selectedApp.motherName}</p>
//                     <p><span className="text-gray-500 dark:text-gray-400">যোগাযোগ:</span> {selectedApp.guardianContact}</p>
//                     <p><span className="text-gray-500 dark:text-gray-400">ইমেইল:</span> {selectedApp.email}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Right column */}
//               <div className="space-y-4">
//                 <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
//                   <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">ঠিকানা</h4>
//                   <p className="text-sm text-gray-700 dark:text-gray-300">{selectedApp.address}</p>
//                 </div>

//                 <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
//                   <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">ছবি</h4>
//                   {selectedApp.photograph ? (
//                     <img
//                       src={selectedApp.photograph}
//                       alt="ছবি"
//                       className="w-24 h-24 object-cover rounded-full border-4 border-green-400 dark:border-green-600 shadow-lg"
//                     />
//                   ) : (
//                     <p className="text-sm text-gray-500 dark:text-gray-400">কোন ছবি আপলোড করা হয়নি</p>
//                   )}
//                 </div>

//                 <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
//                   <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">স্ট্যাটাস</h4>
//                   <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedApp.status)}`}>
//                     {getStatusIcon(selectedApp.status)}
//                     {selectedApp.status === "pending" && "বিচারাধীন"}
//                     {selectedApp.status === "approved" && "অ্যাপ্রুভড"}
//                     {selectedApp.status === "rejected" && "রিজেক্টেড"}
//                   </span>
//                   <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">আবেদনের তারিখ: {formatDate(selectedApp.submittedAt)}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-3 justify-end">
//               {selectedApp.status === "pending" && (
//                 <>
//                   <button
//                     onClick={() => {
//                       handleApprove(selectedApp.id);
//                       setViewModalOpen(false);
//                     }}
//                     className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105"
//                   >
//                     <CheckCircle className="h-4 w-4" /> অ্যাপ্রুভ করুন
//                   </button>
//                   <button
//                     onClick={() => {
//                       handleReject(selectedApp.id);
//                       setViewModalOpen(false);
//                     }}
//                     className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-red-700 transition-all duration-300 hover:scale-105"
//                   >
//                     <XCircle className="h-4 w-4" /> রিজেক্ট করুন
//                   </button>
//                 </>
//               )}
//               <button
//                 onClick={() => setViewModalOpen(false)}
//                 className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//               >
//                 বন্ধ করুন
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  Users,
  UserCheck,
  UserX,
  Eye,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  Clock,
  Calendar,
  Mail,
  Phone,
  MapPin,
  School,
  User,
  Download,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  ChevronDown,
  X,
  AlertCircle,
  Check,
  Plus,
} from "lucide-react";
import { useApplications } from "@/app/context/ApplicationContext";

export default function AdminApplications() {
  // ===== Dark/Light Mode Sync (same as header) =====
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  // ===================================================

  const { applications, updateApplicationStatus } = useApplications();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "pending" | "approved" | "rejected">("all");
  const [selectedApp, setSelectedApp] = useState<any>(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  // Stats
  const total = applications.length;
  const pending = applications.filter((a) => a.status === "pending").length;
  const approved = applications.filter((a) => a.status === "approved").length;
  const rejected = applications.filter((a) => a.status === "rejected").length;

  // Filtered applications
  const filteredApps = applications.filter((app) => {
    const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.classApplying.includes(searchTerm) ||
                          app.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || app.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-700";
      case "approved": return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-700";
      case "rejected": return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-700";
      default: return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending": return <Clock className="h-3.5 w-3.5" />;
      case "approved": return <CheckCircle className="h-3.5 w-3.5" />;
      case "rejected": return <XCircle className="h-3.5 w-3.5" />;
      default: return null;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("bn-BD", { day: "numeric", month: "short", year: "numeric" });
  };

  const openViewModal = (app: any) => {
    setSelectedApp(app);
    setViewModalOpen(true);
  };

  const handleApprove = (id: string) => {
    updateApplicationStatus(id, "approved");
  };

  const handleReject = (id: string) => {
    updateApplicationStatus(id, "rejected");
  };

  // ===== ডাউনলোড ফাংশন =====
  const handleDownload = () => {
    // সব অ্যাপ্লিকেশন ডেটা JSON আকারে ডাউনলোড
    const data = applications.map(app => ({
      id: app.id,
      studentName: app.studentName,
      dateOfBirth: app.dateOfBirth,
      classApplying: app.classApplying,
      previousInstitution: app.previousInstitution,
      fatherName: app.fatherName,
      motherName: app.motherName,
      guardianContact: app.guardianContact,
      email: app.email,
      address: app.address,
      status: app.status,
      submittedAt: app.submittedAt
    }));
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `applications_${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // ===== রিলোড ফাংশন =====
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen  dark:bg-gray-900 transition-colors duration-300">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <FileText className="h-7 w-7 text-green-600 dark:text-green-400" />
              আবেদন ব্যবস্থাপনা
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">সকল ভর্তি আবেদন দেখুন ও পরিচালনা করুন</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDownload}
              className="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              title="ডাউনলোড (JSON)"
            >
              <Download className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button 
              onClick={handleReload}
              className="p-2.5 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              title="রিফ্রেশ"
            >
              <RefreshCw className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">মোট আবেদন</p><p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{total}</p></div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl"><FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">বিচারাধীন</p><p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mt-1">{pending}</p></div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-xl"><Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" /></div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">অ্যাপ্রুভড</p><p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">{approved}</p></div>
            <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-xl"><UserCheck className="h-6 w-6 text-green-600 dark:text-green-400" /></div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">রিজেক্টেড</p><p className="text-2xl font-bold text-red-600 dark:text-red-400 mt-1">{rejected}</p></div>
            <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-xl"><UserX className="h-6 w-6 text-red-600 dark:text-red-400" /></div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="নাম, শ্রেণী বা ইমেইল দিয়ে খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white dark:bg-gray-700 dark:text-white"
          >
            <option value="all">সকল স্ট্যাটাস</option>
            <option value="pending">বিচারাধীন</option>
            <option value="approved">অ্যাপ্রুভড</option>
            <option value="rejected">রিজেক্টেড</option>
          </select>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শিক্ষার্থী</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শ্রেণী</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">আবেদনের তারিখ</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">স্ট্যাটাস</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">একশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredApps.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                    <div className="flex flex-col items-center">
                      <FileText className="h-12 w-12 text-gray-300 dark:text-gray-600 mb-3" />
                      <p className="font-medium">কোন আবেদন পাওয়া যায়নি</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">নতুন আবেদন এলে এখানে দেখাবে</p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredApps.map((app) => (
                  <tr key={app.id} className="hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-200 group">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800/30 dark:to-green-700/30 flex items-center justify-center text-green-700 dark:text-green-400 font-semibold text-xs">
                          {app.studentName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
                            {app.studentName}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{app.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{app.classApplying}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300 text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" />
                        {formatDate(app.submittedAt)}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(app.status)}`}>
                        {getStatusIcon(app.status)}
                        {app.status === "pending" && "বিচারাধীন"}
                        {app.status === "approved" && "অ্যাপ্রুভড"}
                        {app.status === "rejected" && "রিজেক্টেড"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          onClick={() => openViewModal(app)}
                          className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"
                          title="বিস্তারিত দেখুন"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {app.status === "pending" && (
                          <>
                            <button
                              onClick={() => handleApprove(app.id)}
                              className="p-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110"
                              title="অ্যাপ্রুভ করুন"
                            >
                              <CheckCircle className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleReject(app.id)}
                              className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110"
                              title="রিজেক্ট করুন"
                            >
                              <XCircle className="h-4 w-4" />
                            </button>
                          </>
                        )}
                        {app.status !== "pending" && (
                          <button
                            // FIX: cast "pending" to any to satisfy the type constraint
                            onClick={() => updateApplicationStatus(app.id, "pending" as any)}
                            className="p-1.5 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                            title="স্ট্যাটাস রিসেট করুন"
                          >
                            <RefreshCw className="h-3.5 w-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {viewModalOpen && selectedApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <User className="h-5 w-5 text-green-600 dark:text-green-400" />
                আবেদনের বিবরণ
              </h3>
              <button onClick={() => setViewModalOpen(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <X className="h-6 w-6 text-gray-400 dark:text-gray-500" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left column */}
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">ব্যক্তিগত তথ্য</h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p><span className="text-gray-500 dark:text-gray-400">নাম:</span> <span className="font-medium">{selectedApp.studentName}</span></p>
                    <p><span className="text-gray-500 dark:text-gray-400">জন্ম তারিখ:</span> {selectedApp.dateOfBirth}</p>
                    <p><span className="text-gray-500 dark:text-gray-400">শ্রেণী:</span> {selectedApp.classApplying}</p>
                    <p><span className="text-gray-500 dark:text-gray-400">পূর্ববর্তী প্রতিষ্ঠান:</span> {selectedApp.previousInstitution || "—"}</p>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">অভিভাবকের তথ্য</h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p><span className="text-gray-500 dark:text-gray-400">পিতা:</span> {selectedApp.fatherName}</p>
                    <p><span className="text-gray-500 dark:text-gray-400">মাতা:</span> {selectedApp.motherName}</p>
                    <p><span className="text-gray-500 dark:text-gray-400">যোগাযোগ:</span> {selectedApp.guardianContact}</p>
                    <p><span className="text-gray-500 dark:text-gray-400">ইমেইল:</span> {selectedApp.email}</p>
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">ঠিকানা</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{selectedApp.address}</p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">ছবি</h4>
                  {selectedApp.photograph ? (
                    <img
                      src={selectedApp.photograph}
                      alt="ছবি"
                      className="w-24 h-24 object-cover rounded-full border-4 border-green-400 dark:border-green-600 shadow-lg"
                    />
                  ) : (
                    <p className="text-sm text-gray-500 dark:text-gray-400">কোন ছবি আপলোড করা হয়নি</p>
                  )}
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm mb-3">স্ট্যাটাস</h4>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(selectedApp.status)}`}>
                    {getStatusIcon(selectedApp.status)}
                    {selectedApp.status === "pending" && "বিচারাধীন"}
                    {selectedApp.status === "approved" && "অ্যাপ্রুভড"}
                    {selectedApp.status === "rejected" && "রিজেক্টেড"}
                  </span>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">আবেদনের তারিখ: {formatDate(selectedApp.submittedAt)}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-wrap gap-3 justify-end">
              {selectedApp.status === "pending" && (
                <>
                  <button
                    onClick={() => {
                      handleApprove(selectedApp.id);
                      setViewModalOpen(false);
                    }}
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105"
                  >
                    <CheckCircle className="h-4 w-4" /> অ্যাপ্রুভ করুন
                  </button>
                  <button
                    onClick={() => {
                      handleReject(selectedApp.id);
                      setViewModalOpen(false);
                    }}
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl font-medium hover:bg-red-700 transition-all duration-300 hover:scale-105"
                  >
                    <XCircle className="h-4 w-4" /> রিজেক্ট করুন
                  </button>
                </>
              )}
              <button
                onClick={() => setViewModalOpen(false)}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                বন্ধ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}