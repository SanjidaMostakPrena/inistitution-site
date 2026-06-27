"use client";

import { useState, useEffect } from "react";
import {
  Megaphone,
  Plus,
  Search,
  X,
  FileText,
  Calendar,
  Award,
  MessageSquare,
  Bell,
  Star,
  Users,
  Eye,
  Edit,
  Trash2,
  ChevronRight,
  Download,
  Printer,
  Share2,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
  Save,
  RefreshCw,
  Filter,
  Grid,
  List,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

// ===== INITIAL DATA =====
const initialNotices = [
  {
    id: 1,
    title: "ভর্তি বিজ্ঞপ্তি ২০২৬ - ১ম থেকে ১০ম শ্রেণী",
    category: "circular",
    priority: "high",
    date: "২০২৬-০১-১৫",
    time: "১০:০০ AM",
    views: 1250,
    author: "ভর্তি অফিস",
    excerpt: "২০২৬ শিক্ষাবর্ষের জন্য ১ম থেকে ১০ম শ্রেণীতে ভর্তির আবেদন আহ্বান করা হচ্ছে। অনলাইন আবেদন ফর্ম এখন উপলব্ধ।",
    content: "২০২৬ শিক্ষাবর্ষের জন্য ১ম থেকে ১০ম শ্রেণীতে ভর্তির বিস্তারিত বিজ্ঞপ্তি। আবেদন আহ্বান করা হচ্ছে। অনলাইন আবেদন ফর্ম এখন আমাদের ওয়েবসাইটে উপলব্ধ। আবেদনের শেষ তারিখ ২৮ ফেব্রুয়ারি, ২০২৬। ভর্তি পরীক্ষা ১৫ মার্চ, ২০২৬ তারিখে অনুষ্ঠিত হবে।",
    icon: <FileText className="h-5 w-5" />,
    color: "from-blue-400 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500",
  },
  {
    id: 2,
    title: "ভর্তি পরীক্ষার সময়সূচী ২০২৬",
    category: "schedule",
    priority: "high",
    date: "২০২৬-০১-২০",
    time: "০৯:৩০ AM",
    views: 980,
    author: "পরীক্ষা কমিটি",
    excerpt: "সকল শ্রেণীর ভর্তি পরীক্ষার সময়সূচী প্রকাশিত হয়েছে। আপনার পরীক্ষা কেন্দ্র ও সময় স্লট চেক করুন।",
    content: "সকল শ্রেণীর ভর্তি পরীক্ষার সময়সূচী প্রকাশিত হয়েছে। অনুগ্রহ করে আপনার পরীক্ষা কেন্দ্র ও সময় স্লট চেক করুন। পরীক্ষা ১৫ মার্চ, ২০২৬ তারিখে সকাল ১০:০০ থেকে দুপুর ১২:০০ পর্যন্ত অনুষ্ঠিত হবে। ফলাফল ২৫ মার্চ, ২০২৬ তারিখে প্রকাশিত হবে।",
    icon: <Calendar className="h-5 w-5" />,
    color: "from-purple-400 to-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-500",
  },
  {
    id: 3,
    title: "ভর্তি ফলাফল ২০২৫ - চূড়ান্ত তালিকা প্রকাশিত",
    category: "result",
    priority: "high",
    date: "২০২৬-০২-০৫",
    time: "০৪:০০ PM",
    views: 2100,
    author: "ভর্তি কমিটি",
    excerpt: "২০২৫ শিক্ষাবর্ষের চূড়ান্ত ভর্তি ফলাফল প্রকাশিত হয়েছে। এখন আপনার ভর্তি অবস্থা চেক করুন।",
    content: "২০২৫ শিক্ষাবর্ষের চূড়ান্ত ভর্তি ফলাফল প্রকাশিত হয়েছে। প্রার্থীরা ভর্তি পোর্টালে লগইন করে তাদের ভর্তি অবস্থা চেক করতে পারেন। নির্বাচিত প্রার্থীদের ২০ ফেব্রুয়ারি, ২০২৬ এর মধ্যে নিবন্ধন প্রক্রিয়া সম্পূর্ণ করতে হবে।",
    icon: <Award className="h-5 w-5" />,
    color: "from-red-400 to-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
  },
  {
    id: 4,
    title: "গুরুত্বপূর্ণ ঘোষণা: ফি কাঠামো ২০২৬",
    category: "announcement",
    priority: "medium",
    date: "২০২৬-০১-১০",
    time: "১১:০০ AM",
    views: 750,
    author: "অ্যাকাউন্টস অফিস",
    excerpt: "২০২৬ শিক্ষাবর্ষের জন্য সংশোধিত ফি কাঠামো ঘোষণা করা হয়েছে। নতুন ফি বিবরণ চেক করুন।",
    content: "২০২৬ শিক্ষাবর্ষের জন্য সংশোধিত ফি কাঠামো ঘোষণা করা হয়েছে। নতুন ফি কাঠামো জানুয়ারি ২০২৬ থেকে কার্যকর। অভিভাবকদের ওয়েবসাইটে বিস্তারিত ফি বিবরণ চেক করার জন্য অনুরোধ করা হচ্ছে।",
    icon: <MessageSquare className="h-5 w-5" />,
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-500",
  },
  {
    id: 5,
    title: "বৃত্তি আবেদন বিজ্ঞপ্তি ২০২৬",
    category: "circular",
    priority: "medium",
    date: "২০২৬-০১-২৫",
    time: "০২:৩০ PM",
    views: 560,
    author: "বৃত্তি কমিটি",
    excerpt: "২০২৬ শিক্ষাবর্ষের জন্য মেধাভিত্তিক বৃত্তির আবেদন এখন খোলা হয়েছে।",
    content: "২০২৬ শিক্ষাবর্ষের জন্য মেধাভিত্তিক বৃত্তির আবেদন এখন খোলা হয়েছে। পূর্ববর্তী পরীক্ষায় এ+ প্রাপ্ত শিক্ষার্থীরা আবেদনের যোগ্য। আবেদনের শেষ তারিখ ২৮ ফেব্রুয়ারি, ২০২৬।",
    icon: <Star className="h-5 w-5" />,
    color: "from-green-400 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-500",
  },
  {
    id: 6,
    title: "অভিমুখীকরণ কর্মসূচির সময়সূচী",
    category: "schedule",
    priority: "low",
    date: "২০২৬-০২-০১",
    time: "০৯:০০ AM",
    views: 320,
    author: "শিক্ষার্থী বিষয়ক",
    excerpt: "নতুন শিক্ষার্থীদের জন্য অভিমুখীকরণ কর্মসূচি ২০ ফেব্রুয়ারি, ২০২৬ তারিখে অনুষ্ঠিত হবে। সকল নতুন শিক্ষার্থীদের উপস্থিত থাকতে হবে।",
    content: "নতুন শিক্ষার্থীদের জন্য অভিমুখীকরণ কর্মসূচি ২০ ফেব্রুয়ারি, ২০২৬ তারিখে সকাল ১০:০০ টায় বিদ্যালয়ের অডিটোরিয়ামে অনুষ্ঠিত হবে। সকল নতুন শিক্ষার্থীদের তাদের অভিভাবকদের সাথে উপস্থিত থাকতে হবে। কর্মসূচিতে ক্যাম্পাস ট্যুর এবং শ্রেণী বরাদ্দ অন্তর্ভুক্ত থাকবে।",
    icon: <Users className="h-5 w-5" />,
    color: "from-teal-400 to-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-teal-500",
  },
  {
    id: 7,
    title: "ভর্তি পরীক্ষার ফলাফল ২০২৬ - মেধা তালিকা",
    category: "result",
    priority: "high",
    date: "২০২৬-০৩-২৫",
    time: "০৩:০০ PM",
    views: 1850,
    author: "পরীক্ষা কমিটি",
    excerpt: "২০২৬ ভর্তি পরীক্ষার মেধা তালিকা প্রকাশিত হয়েছে। আপনার র্যাঙ্ক ও ভর্তি অবস্থা চেক করুন।",
    content: "২০২৬ ভর্তি পরীক্ষার মেধা তালিকা প্রকাশিত হয়েছে। প্রার্থীরা তাদের র্যাঙ্ক ও ভর্তি অবস্থা চেক করতে পারেন। শীর্ষ ১০০ শিক্ষার্থী ২০% বৃত্তি পাবে। ভর্তি নিশ্চিতকরণের শেষ তারিখ ৫ এপ্রিল, ২০২৬।",
    icon: <Award className="h-5 w-5" />,
    color: "from-orange-400 to-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500",
  },
  {
    id: 8,
    title: "গুরুত্বপূর্ণ নোটিশ: ভর্তির সময়সীমা বর্ধিত",
    category: "announcement",
    priority: "high",
    date: "২০২৬-০২-১৫",
    time: "০৫:৩০ PM",
    views: 890,
    author: "ভর্তি অফিস",
    excerpt: "২০২৬ শিক্ষাবর্ষের ভর্তির সময়সীমা ১০ মার্চ, ২০২৬ পর্যন্ত বর্ধিত করা হয়েছে।",
    content: "২০২৬ শিক্ষাবর্ষের ভর্তির সময়সীমা ১০ মার্চ, ২০২৬ পর্যন্ত বর্ধিত করা হয়েছে। শিক্ষার্থীদের নতুন সময়সীমার আগে তাদের আবেদন সম্পূর্ণ করতে উৎসাহিত করা হচ্ছে। দেরিতে জমা দেওয়া আবেদন গ্রহণ করা হবে না।",
    icon: <Bell className="h-5 w-5" />,
    color: "from-pink-400 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-500",
  },
];

// ===== HELPER FUNCTIONS =====
const getCategoryLabel = (category: string) => {
  switch (category) {
    case "circular": return "বিজ্ঞপ্তি";
    case "schedule": return "সময়সূচী";
    case "announcement": return "ঘোষণা";
    case "result": return "ফলাফল";
    default: return category;
  }
};

const getPriorityLabel = (priority: string) => {
  switch (priority) {
    case "high": return "উচ্চ";
    case "medium": return "মাঝারি";
    case "low": return "নিম্ন";
    default: return priority;
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "bg-red-100 text-red-700";
    case "medium": return "bg-yellow-100 text-yellow-700";
    case "low": return "bg-green-100 text-green-700";
    default: return "bg-gray-100 text-gray-700";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "circular": return "bg-blue-100 text-blue-700 border-blue-200";
    case "schedule": return "bg-purple-100 text-purple-700 border-purple-200";
    case "announcement": return "bg-yellow-100 text-yellow-700 border-yellow-200";
    case "result": return "bg-red-100 text-red-700 border-red-200";
    default: return "bg-gray-100 text-gray-700 border-gray-200";
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "circular": return <FileText className="h-4 w-4" />;
    case "schedule": return <Calendar className="h-4 w-4" />;
    case "announcement": return <MessageSquare className="h-4 w-4" />;
    case "result": return <Award className="h-4 w-4" />;
    default: return <FileText className="h-4 w-4" />;
  }
};

// ===== MAIN COMPONENT =====
export default function AdminNotices() {
  const [notices, setNotices] = useState(initialNotices);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterPriority, setFilterPriority] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<any>(null);
  const [editFormData, setEditFormData] = useState<any>({});
  const [addFormData, setAddFormData] = useState<any>({});

  // Stats
  const total = notices.length;
  const circulars = notices.filter(n => n.category === "circular").length;
  const schedules = notices.filter(n => n.category === "schedule").length;
  const announcements = notices.filter(n => n.category === "announcement").length;
  const results = notices.filter(n => n.category === "result").length;

  // Filtered notices
  const filteredNotices = notices.filter((notice) => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === "all" || notice.category === filterCategory;
    const matchesPriority = filterPriority === "all" || notice.priority === filterPriority;
    return matchesSearch && matchesCategory && matchesPriority;
  });

  // Modal handlers
  const openViewModal = (notice: any) => {
    setSelectedNotice(notice);
    setViewModalOpen(true);
  };

  const openEditModal = (notice: any) => {
    setSelectedNotice(notice);
    setEditFormData({ ...notice });
    setEditModalOpen(true);
  };

  const openDeleteModal = (notice: any) => {
    setSelectedNotice(notice);
    setDeleteModalOpen(true);
  };

  const openAddModal = () => {
    setAddFormData({
      title: "",
      category: "circular",
      priority: "medium",
      date: new Date().toISOString().split("T")[0],
      time: new Date().toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" }),
      author: "প্রশাসন",
      excerpt: "",
      content: "",
      views: 0,
    });
    setAddModalOpen(true);
  };

  // CRUD operations
  const handleAddSave = () => {
    const newNotice = {
      id: Math.max(0, ...notices.map(n => n.id)) + 1,
      ...addFormData,
      icon: getCategoryIcon(addFormData.category),
      color: addFormData.category === "circular" ? "from-blue-400 to-blue-600" :
             addFormData.category === "schedule" ? "from-purple-400 to-purple-600" :
             addFormData.category === "announcement" ? "from-yellow-400 to-yellow-600" :
             "from-red-400 to-red-600",
      bgColor: addFormData.category === "circular" ? "bg-blue-50" :
               addFormData.category === "schedule" ? "bg-purple-50" :
               addFormData.category === "announcement" ? "bg-yellow-50" :
               "bg-red-50",
      borderColor: addFormData.category === "circular" ? "border-blue-500" :
                   addFormData.category === "schedule" ? "border-purple-500" :
                   addFormData.category === "announcement" ? "border-yellow-500" :
                   "border-red-500",
    };
    setNotices([newNotice, ...notices]);
    setAddModalOpen(false);
    alert("নতুন নোটিশ যোগ করা হয়েছে (ডেমো)");
  };

  const handleEditSave = () => {
    const updatedNotices = notices.map((notice) =>
      notice.id === editFormData.id ? editFormData : notice
    );
    setNotices(updatedNotices);
    setEditModalOpen(false);
    alert("নোটিশ আপডেট করা হয়েছে (ডেমো)");
  };

  const handleDeleteConfirm = () => {
    const updatedNotices = notices.filter((notice) => notice.id !== selectedNotice.id);
    setNotices(updatedNotices);
    setDeleteModalOpen(false);
    alert("নোটিশ ডিলিট করা হয়েছে (ডেমো)");
  };

  // View modal renderer
  const renderViewModal = () => {
    if (!selectedNotice) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
          <div className={`bg-gradient-to-r ${selectedNotice.color} p-6 sticky top-0 z-10`}>
            <div className="flex items-start justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  {selectedNotice.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full bg-white/20`}>
                      {getCategoryLabel(selectedNotice.category)}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full bg-white/20`}>
                      {getPriorityLabel(selectedNotice.priority)} অগ্রাধিকার
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mt-1">{selectedNotice.title}</h3>
                </div>
              </div>
              <button onClick={() => setViewModalOpen(false)} className="p-2 rounded-lg hover:bg-white/20 transition-colors">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {selectedNotice.date}</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {selectedNotice.time}</span>
              <span className="flex items-center gap-1"><Eye className="h-4 w-4" /> {selectedNotice.views} বার দেখা</span>
              <span className="flex items-center gap-1"><User className="h-4 w-4" /> {selectedNotice.author}</span>
            </div>
            <p className="text-gray-700 whitespace-pre-line">{selectedNotice.content}</p>
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-700 transition-colors hover:scale-105">
                <Download className="h-4 w-4" /> ডাউনলোড
              </button>
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors hover:scale-105">
                <Printer className="h-4 w-4" /> প্রিন্ট
              </button>
              <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-purple-700 transition-colors hover:scale-105">
                <Share2 className="h-4 w-4" /> শেয়ার
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Edit modal renderer
  const renderEditModal = () => {
    if (!selectedNotice) return null;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setEditFormData({ ...editFormData, [name]: value });
    };
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Edit className="h-5 w-5 text-green-600" /> নোটিশ সম্পাদনা
            </h3>
            <button onClick={() => setEditModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">শিরোনাম</label>
              <input name="title" value={editFormData.title || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ক্যাটাগরি</label>
                <select name="category" value={editFormData.category || "circular"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                  <option value="circular">বিজ্ঞপ্তি</option>
                  <option value="schedule">সময়সূচী</option>
                  <option value="announcement">ঘোষণা</option>
                  <option value="result">ফলাফল</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">অগ্রাধিকার</label>
                <select name="priority" value={editFormData.priority || "medium"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                  <option value="high">উচ্চ</option>
                  <option value="medium">মাঝারি</option>
                  <option value="low">নিম্ন</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">তারিখ</label>
                <input type="date" name="date" value={editFormData.date || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">সময়</label>
                <input type="time" name="time" value={editFormData.time || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">লেখক</label>
              <input name="author" value={editFormData.author || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">সারাংশ</label>
              <textarea name="excerpt" rows={2} value={editFormData.excerpt || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">বিবরণ</label>
              <textarea name="content" rows={4} value={editFormData.content || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ভিউ</label>
              <input type="number" name="views" value={editFormData.views || 0} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
          </div>
          <button onClick={handleEditSave} className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2">
            <Save className="h-4 w-4" /> আপডেট করুন
          </button>
        </div>
      </div>
    );
  };

  // Add modal renderer
  const renderAddModal = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setAddFormData({ ...addFormData, [name]: value });
    };
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Plus className="h-5 w-5 text-green-600" /> নতুন নোটিশ
            </h3>
            <button onClick={() => setAddModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">শিরোনাম</label>
              <input name="title" value={addFormData.title || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ক্যাটাগরি</label>
                <select name="category" value={addFormData.category || "circular"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                  <option value="circular">বিজ্ঞপ্তি</option>
                  <option value="schedule">সময়সূচী</option>
                  <option value="announcement">ঘোষণা</option>
                  <option value="result">ফলাফল</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">অগ্রাধিকার</label>
                <select name="priority" value={addFormData.priority || "medium"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                  <option value="high">উচ্চ</option>
                  <option value="medium">মাঝারি</option>
                  <option value="low">নিম্ন</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">তারিখ</label>
                <input type="date" name="date" value={addFormData.date || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">সময়</label>
                <input type="time" name="time" value={addFormData.time || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">লেখক</label>
              <input name="author" value={addFormData.author || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">সারাংশ</label>
              <textarea name="excerpt" rows={2} value={addFormData.excerpt || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">বিবরণ</label>
              <textarea name="content" rows={4} value={addFormData.content || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
          </div>
          <button onClick={handleAddSave} className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2">
            <Plus className="h-4 w-4" /> যোগ করুন
          </button>
        </div>
      </div>
    );
  };

  // Delete modal renderer
  const renderDeleteModal = () => {
    if (!selectedNotice) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl animate-scale-in">
          <div className="flex items-center gap-3 text-red-600 mb-4">
            <AlertCircle className="h-8 w-8" />
            <h3 className="text-xl font-bold">নিশ্চিত করুন</h3>
          </div>
          <p className="text-gray-600 mb-6">
            আপনি কি <span className="font-semibold text-slate-800">{selectedNotice.title}</span> ডিলিট করতে চান?
            এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।
          </p>
          <div className="flex gap-3">
            <button onClick={() => setDeleteModalOpen(false)} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              বাতিল
            </button>
            <button onClick={handleDeleteConfirm} className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors">
              ডিলিট
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ===== MAIN RENDER =====
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">
              <Megaphone className="h-7 w-7 text-green-600" />
              নোটিশ ব্যবস্থাপনা
            </h1>
            <p className="text-gray-500 mt-1">ভর্তি সংক্রান্ত সকল নোটিশ তৈরি, সম্পাদনা ও পরিচালনা করুন</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={openAddModal} className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg">
              <Plus className="h-4 w-4" /> নতুন নোটিশ
            </button>
            <button className="p-2.5 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              <RefreshCw className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">মোট নোটিশ</p><p className="text-2xl font-bold text-slate-800 mt-1">{total}</p></div>
            <div className="p-3 bg-blue-50 rounded-xl"><Megaphone className="h-6 w-6 text-blue-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">বিজ্ঞপ্তি</p><p className="text-2xl font-bold text-blue-600 mt-1">{circulars}</p></div>
            <div className="p-3 bg-blue-50 rounded-xl"><FileText className="h-6 w-6 text-blue-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">সময়সূচী</p><p className="text-2xl font-bold text-purple-600 mt-1">{schedules}</p></div>
            <div className="p-3 bg-purple-50 rounded-xl"><Calendar className="h-6 w-6 text-purple-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">ঘোষণা</p><p className="text-2xl font-bold text-yellow-600 mt-1">{announcements}</p></div>
            <div className="p-3 bg-yellow-50 rounded-xl"><MessageSquare className="h-6 w-6 text-yellow-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">ফলাফল</p><p className="text-2xl font-bold text-red-600 mt-1">{results}</p></div>
            <div className="p-3 bg-red-50 rounded-xl"><Award className="h-6 w-6 text-red-600" /></div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="নোটিশ অনুসন্ধান..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
          >
            <option value="all">সকল ক্যাটাগরি</option>
            <option value="circular">বিজ্ঞপ্তি</option>
            <option value="schedule">সময়সূচী</option>
            <option value="announcement">ঘোষণা</option>
            <option value="result">ফলাফল</option>
          </select>
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
          >
            <option value="all">সকল অগ্রাধিকার</option>
            <option value="high">উচ্চ</option>
            <option value="medium">মাঝারি</option>
            <option value="low">নিম্ন</option>
          </select>
          <button
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300"
          >
            {viewMode === "grid" ? <List className="h-5 w-5 text-gray-600" /> : <Grid className="h-5 w-5 text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Notices Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className={`bg-white rounded-2xl shadow-sm border-l-4 ${notice.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent p-5`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${notice.color} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                    {notice.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${getCategoryColor(notice.category)}`}>
                        {getCategoryLabel(notice.category)}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${getPriorityColor(notice.priority)}`}>
                        {getPriorityLabel(notice.priority)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm mt-1 line-clamp-2">{notice.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{notice.excerpt}</p>
                  </div>
                </div>
                <div className="flex gap-1 ml-2">
                  <button onClick={() => openViewModal(notice)} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110" title="বিস্তারিত"><Eye className="h-4 w-4" /></button>
                  <button onClick={() => openEditModal(notice)} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110" title="সম্পাদনা"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => openDeleteModal(notice)} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110" title="ডিলিট"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-gray-400">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {notice.date}</span>
                <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {notice.time}</span>
                <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {notice.views}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শিরোনাম</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ক্যাটাগরি</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">অগ্রাধিকার</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">তারিখ</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">একশন</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredNotices.map((notice) => (
                  <tr key={notice.id} className="hover:bg-green-50/50 transition-colors duration-200 group">
                    <td className="px-4 py-3 font-medium text-slate-800 group-hover:text-green-700 transition-colors">{notice.title}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${getCategoryColor(notice.category)}`}>
                        {getCategoryLabel(notice.category)}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${getPriorityColor(notice.priority)}`}>
                        {getPriorityLabel(notice.priority)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{notice.date}</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button onClick={() => openViewModal(notice)} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                        <button onClick={() => openEditModal(notice)} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                        <button onClick={() => openDeleteModal(notice)} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredNotices.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
            <Megaphone className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">কোন নোটিশ পাওয়া যায়নি</h3>
          <p className="text-gray-500 max-w-md mx-auto">আপনার অনুসন্ধান বা ফিল্টারের সাথে মেলে এমন কোনো নোটিশ নেই।</p>
        </div>
      )}

      {/* Modals */}
      {viewModalOpen && renderViewModal()}
      {editModalOpen && renderEditModal()}
      {addModalOpen && renderAddModal()}
      {deleteModalOpen && renderDeleteModal()}
    </div>
  );
}