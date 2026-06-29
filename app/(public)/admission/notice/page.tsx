
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  ArrowLeft,
  Megaphone,
  Calendar,
  Clock,
  Eye,
  Download,
  Search,
  X,
  FileText,
  FileCheck,
  Award,
  ChevronRight,
  Users,
  Bell,
  MessageSquare,
  Share2,
  Printer,
  Star,
  User,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  Trophy,
} from "lucide-react";

export default function NoticesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNotice, setSelectedNotice] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const notices = [
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
      icon: <Trophy className="h-5 w-5" />,
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "উচ্চ";
      case "medium":
        return "মাঝারি";
      case "low":
        return "নিম্ন";
      default:
        return priority;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "circular":
        return "বিজ্ঞপ্তি";
      case "schedule":
        return "সময়সূচী";
      case "announcement":
        return "ঘোষণা";
      case "result":
        return "ফলাফল";
      default:
        return category;
    }
  };

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch = notice.title.includes(searchTerm) ||
                         notice.excerpt.includes(searchTerm);
    return matchesSearch;
  });

  const openModal = (notice: any) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-12 md:py-16 lg:py-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant" />
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 sm:mb-6 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
            হোমে ফিরুন
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Megaphone className="h-3 w-3 sm:h-4 sm:w-4 animate-spin-slow" />
              নোটিশ ও আপডেট
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 animate-fade-in-up">
              <span className="text-yellow-300">ভর্তি</span> নোটিশ
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
              ভর্তি সংক্রান্ত সকল বিজ্ঞপ্তি, সময়সূচী, ঘোষণা এবং ফলাফলের সাথে আপডেট থাকুন।
            </p>
          </div>
        </div>
      </section>

      {/* অনুসন্ধান */}
      <section className="py-4 sm:py-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-16 lg:top-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between max-w-6xl mx-auto">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="নোটিশ অনুসন্ধান..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* নোটিশ গ্রিড */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* ফলাফল সংখ্যা */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4 sm:mb-6">
              <p className="text-xs sm:text-sm text-gray-500">
                <span className="font-semibold text-slate-800">{filteredNotices.length}</span> টি নোটিশ দেখানো হচ্ছে
              </p>
              
            </div>

            {filteredNotices.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">কোন নোটিশ পাওয়া যায়নি</h3>
                <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">আপনার অনুসন্ধান সামঞ্জস্য করুন</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {filteredNotices.map((notice, index) => (
                  <div
                    key={notice.id}
                    className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-l-4 ${notice.borderColor} animate-fade-in-up animate-on-scroll`}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    onClick={() => openModal(notice)}
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                            <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium bg-blue-100 text-blue-700`}>
                              {getCategoryLabel(notice.category)}
                            </span>
                            <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-medium ${getPriorityColor(notice.priority)}`}>
                              {getPriorityLabel(notice.priority)} অগ্রাধিকার
                            </span>
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
                            {notice.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2 line-clamp-2">
                            {notice.excerpt}
                          </p>
                        </div>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${notice.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 ml-2 sm:ml-3`}>
                          {notice.icon}
                        </div>
                      </div>

                      <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          {notice.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          {notice.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          {notice.views} বার দেখা
                        </span>
                        <span className="flex items-center gap-1 hidden sm:flex">
                          <User className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                          {notice.author}
                        </span>
                      </div>

                      <div className="mt-2 sm:mt-3">
                        <button
                          className="text-[10px] sm:text-xs text-green-600 hover:text-green-700 font-medium flex items-center gap-1 hover:gap-2 transition-all"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(notice);
                          }}
                        >
                          বিস্তারিত পড়ুন
                          <ChevronRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* দ্রুত পরিসংখ্যান */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-green-50/30 via-white to-red-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            <div className="text-center p-3 sm:p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animate-on-scroll">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">{notices.filter(n => n.category === "circular").length}</div>
              <div className="text-[10px] sm:text-xs text-gray-600 mt-1">বিজ্ঞপ্তি</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animate-on-scroll" style={{ animationDelay: "100ms" }}>
              <div className="text-xl sm:text-2xl font-bold text-purple-600">{notices.filter(n => n.category === "schedule").length}</div>
              <div className="text-[10px] sm:text-xs text-gray-600 mt-1">সময়সূচী</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animate-on-scroll" style={{ animationDelay: "200ms" }}>
              <div className="text-xl sm:text-2xl font-bold text-yellow-600">{notices.filter(n => n.category === "announcement").length}</div>
              <div className="text-[10px] sm:text-xs text-gray-600 mt-1">ঘোষণা</div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up animate-on-scroll" style={{ animationDelay: "300ms" }}>
              <div className="text-xl sm:text-2xl font-bold text-red-600">{notices.filter(n => n.category === "result").length}</div>
              <div className="text-[10px] sm:text-xs text-gray-600 mt-1">ফলাফল</div>
            </div>
          </div>
        </div>
      </section>

      {/* নোটিশ বিস্তারিত মোডাল */}
      {isModalOpen && selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className={`bg-gradient-to-r ${selectedNotice.color} p-4 sm:p-6 sticky top-0 z-10`}>
              <div className="flex items-start justify-between text-white">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    {selectedNotice.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-[10px] sm:text-xs bg-white/20 px-1.5 sm:px-2 py-0.5 rounded">
                        {getCategoryLabel(selectedNotice.category)}
                      </span>
                      <span className="text-[10px] sm:text-xs bg-white/20 px-1.5 sm:px-2 py-0.5 rounded">
                        {getPriorityLabel(selectedNotice.priority)} অগ্রাধিকার
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg md:text-xl font-bold mt-1 line-clamp-2">{selectedNotice.title}</h2>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-1.5 sm:p-2 rounded-lg hover:bg-white/20 transition-colors flex-shrink-0"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-sm text-gray-500 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-100">
                <span className="flex items-center gap-1">
                  <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  {selectedNotice.date}
                </span>
                <span className="flex items-center gap-1">
                  <ClockIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  {selectedNotice.time}
                </span>
                <span className="flex items-center gap-1">
                  <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                  {selectedNotice.views} বার দেখা
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-3 w-3 sm:h-4 sm:w-4" />
                  {selectedNotice.author}
                </span>
              </div>

              <div className="prose max-w-none">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedNotice.content}
                </p>
              </div>

              <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100 flex flex-wrap gap-2 sm:gap-3">
                <button className="inline-flex items-center gap-1.5 sm:gap-2 bg-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105">
                  <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  ডাউনলোড
                </button>
                <button className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                  <Printer className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  প্রিন্ট
                </button>
                <button className="inline-flex items-center gap-1.5 sm:gap-2 bg-purple-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium hover:bg-purple-700 transition-all duration-300 hover:scale-105">
                  <Share2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  শেয়ার
                </button>
                <Link
                  href="/admission/form"
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium hover:bg-red-700 transition-all duration-300 hover:scale-105 sm:ml-auto"
                >
                  এখনই আবেদন করুন
                  <ChevronRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}