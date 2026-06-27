
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  Download,
  Eye,
  File,
  FileText,
  Calendar,
  Users,
  ArrowLeft,
  Search,
  Filter,
  TrendingUp,
  BarChart,
  PieChart,
  Printer,
  Share2,
  Sparkles,
  Star,
  Trophy,
  GraduationCap,
  BookOpen,
  Clock,
  UserCheck,
  Percent,
  Medal,
  Crown,
  Activity,
  Grid,
  List,
} from "lucide-react";

// Complete mock data with ALL results
const allResults = [
  // ===== পরীক্ষার ফলাফল =====
  {
    id: 1,
    title: "প্রথম সাময়িক পরীক্ষা ২০২৬",
    class: "১ম-৫ম শ্রেণী",
    type: "primary",
    category: "examination",
    file: "1st-term-result-2026.pdf",
    size: "৪৫৬ কেবি",
    date: "২০২৬-০৩-২০",
    totalStudents: 450,
    passed: 432,
    passRate: "৯৬%",
    grade: "এ",
    semester: "প্রথম সেমিস্টার",
  },
  {
    id: 2,
    title: "প্রথম সাময়িক পরীক্ষা ২০২৬",
    class: "৬ষ্ঠ-১০ম শ্রেণী",
    type: "secondary",
    category: "examination",
    file: "1st-term-result-2026-secondary.pdf",
    size: "৫২৩ কেবি",
    date: "২০২৬-০৩-২২",
    totalStudents: 700,
    passed: 665,
    passRate: "৯৫%",
    grade: "এ-",
    semester: "প্রথম সেমিস্টার",
  },
  {
    id: 3,
    title: "মধ্যবর্তী পরীক্ষা ২০২৬",
    class: "সকল শ্রেণী",
    type: "all",
    category: "examination",
    file: "mid-term-result-2026.pdf",
    size: "৬৭৮ কেবি",
    date: "২০২৬-০৬-২০",
    totalStudents: 1500,
    passed: 1425,
    passRate: "৯৫%",
    grade: "এ",
    semester: "দ্বিতীয় সেমিস্টার",
  },
  {
    id: 4,
    title: "দ্বিতীয় সাময়িক পরীক্ষা ২০২৬",
    class: "১ম-৮ম শ্রেণী",
    type: "primary",
    category: "examination",
    file: "2nd-term-result-2026.pdf",
    size: "৫৬৭ কেবি",
    date: "২০২৬-০৯-২৫",
    totalStudents: 850,
    passed: 816,
    passRate: "৯৬%",
    grade: "এ+",
    semester: "তৃতীয় সেমিস্টার",
  },
  {
    id: 5,
    title: "বার্ষিক পরীক্ষা ২০২৬",
    class: "৯ম-১২শ শ্রেণী",
    type: "secondary",
    category: "examination",
    file: "final-exam-2026.pdf",
    size: "৭৮৯ কেবি",
    date: "২০২৬-১১-৩০",
    totalStudents: 650,
    passed: 611,
    passRate: "৯৪%",
    grade: "এ",
    semester: "চতুর্থ সেমিস্টার",
  },

  // ===== বোর্ড ফলাফল =====
  {
    id: 6,
    title: "এসএসসি পরীক্ষা ২০২৫",
    class: "১০ম শ্রেণী",
    type: "board",
    category: "board",
    file: "ssc-result-2025.pdf",
    size: "৮৯০ কেবি",
    date: "২০২৫-০৫-১৫",
    totalStudents: 320,
    passed: 310,
    passRate: "৯৬.৮৭%",
    grade: "এ+",
    board: "ঢাকা বোর্ড",
    gpa: "৪.৮৫",
  },
  {
    id: 7,
    title: "এইচএসসি পরীক্ষা ২০২৫",
    class: "১২শ শ্রেণী",
    type: "board",
    category: "board",
    file: "hsc-result-2025.pdf",
    size: "৯৫৬ কেবি",
    date: "২০২৫-০৬-২০",
    totalStudents: 280,
    passed: 268,
    passRate: "৯৫.৭১%",
    grade: "এ",
    board: "ঢাকা বোর্ড",
    gpa: "৪.৭২",
  },
  {
    id: 8,
    title: "এসএসসি পরীক্ষা ২০২৪",
    class: "১০ম শ্রেণী",
    type: "board",
    category: "board",
    file: "ssc-result-2024.pdf",
    size: "৮৩৪ কেবি",
    date: "২০২৪-০৫-১০",
    totalStudents: 305,
    passed: 293,
    passRate: "৯৬.০৬%",
    grade: "এ+",
    board: "ঢাকা বোর্ড",
    gpa: "৪.৮০",
  },

  // ===== অভ্যন্তরীণ মূল্যায়ন =====
  {
    id: 9,
    title: "৫ম শ্রেণী মূল্যায়ন ২০২৬",
    class: "৫ম শ্রেণী",
    type: "internal",
    category: "internal",
    file: "class-5-internal-2026.pdf",
    size: "২৩৪ কেবি",
    date: "২০২৬-০২-১৫",
    totalStudents: 90,
    passed: 87,
    passRate: "৯৬.৬৭%",
    grade: "এ",
    assessmentType: "ত্রৈমাসিক",
  },
  {
    id: 10,
    title: "৮ম শ্রেণী মূল্যায়ন ২০২৬",
    class: "৮ম শ্রেণী",
    type: "internal",
    category: "internal",
    file: "class-8-internal-2026.pdf",
    size: "২৬৭ কেবি",
    date: "২০২৬-০২-২০",
    totalStudents: 95,
    passed: 91,
    passRate: "৯৫.৭৯%",
    grade: "এ-",
    assessmentType: "ত্রৈমাসিক",
  },
  {
    id: 11,
    title: "১০ম শ্রেণী মূল্যায়ন ২০২৬",
    class: "১০ম শ্রেণী",
    type: "internal",
    category: "internal",
    file: "class-10-internal-2026.pdf",
    size: "৩১২ কেবি",
    date: "২০২৬-০২-২৫",
    totalStudents: 100,
    passed: 96,
    passRate: "৯৬%",
    grade: "এ+",
    assessmentType: "ত্রৈমাসিক",
  },
];

export default function ResultPage() {
  const router = useRouter();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedYear, setSelectedYear] = useState("২০২৬");
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      primary: "bg-green-100 text-green-700",
      secondary: "bg-purple-100 text-purple-700",
      board: "bg-yellow-100 text-yellow-700",
      internal: "bg-blue-100 text-blue-700",
      all: "bg-gray-100 text-gray-700",
    };
    return colors[type] || "bg-gray-100 text-gray-700";
  };

  const getTypeBadge = (type: string) => {
    const badges: Record<string, string> = {
      primary: "প্রাথমিক",
      secondary: "মাধ্যমিক",
      board: "বোর্ড ফলাফল",
      internal: "অভ্যন্তরীণ মূল্যায়ন",
      all: "সকল শ্রেণী",
    };
    return badges[type] || type;
  };

  const getCategoryBadge = (category: string) => {
    const badges: Record<string, string> = {
      examination: "📝 পরীক্ষা",
      board: "🎯 বোর্ড",
      internal: "📊 অভ্যন্তরীণ",
    };
    return badges[category] || category;
  };

  const getGradeColor = (grade: string) => {
    const colors: Record<string, string> = {
      "এ+": "bg-emerald-100 text-emerald-700 border-emerald-200",
      "এ": "bg-green-100 text-green-700 border-green-200",
      "এ-": "bg-lime-100 text-lime-700 border-lime-200",
      "বি+": "bg-blue-100 text-blue-700 border-blue-200",
    };
    return colors[grade] || "bg-gray-100 text-gray-700";
  };

  const getFilteredResults = () => {
    let filtered = allResults;
    if (selectedFilter !== "all") {
      filtered = filtered.filter(item => item.category === selectedFilter);
    }
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.includes(searchTerm) ||
        item.class.includes(searchTerm)
      );
    }
    return filtered;
  };

  const totalStudents = allResults.reduce((acc, curr) => acc + curr.totalStudents, 0);
  const totalPassed = allResults.reduce((acc, curr) => acc + curr.passed, 0);
  const overallPassRate = `${Math.round((totalPassed / totalStudents) * 100)}%`;
  const totalResults = allResults.length;

  const handlePreview = (id: number) => {
    router.push(`/result/${id}`);
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
            href="/academic" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 sm:mb-6 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
            একাডেমিক প্রোগ্রামে ফিরুন
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 animate-spin-slow" />
              ফলাফল বিভাগ
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 animate-fade-in-up">
              <span className="text-yellow-300">ফলাফল</span> ও অর্জন
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
              পরীক্ষার ফলাফল, বোর্ড ফলাফল, অভ্যন্তরীণ মূল্যায়ন এবং কর্মক্ষমতা প্রতিবেদন 
              অ্যাক্সেস করুন। পিডিএফ ডাউনলোড করুন এবং একাডেমিক অগ্রগতি ট্র্যাক করুন।
            </p>
          </div>
        </div>
      </section>

      {/* পরিসংখ্যান */}
      <section className="py-4 sm:py-6 md:py-8 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            <div className="text-center p-3 sm:p-4 rounded-xl hover:bg-green-50 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-100">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {totalStudents}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500" />
                মোট শিক্ষার্থী
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl hover:bg-green-50 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-200">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {totalPassed}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <UserCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-500" />
                মোট উত্তীর্ণ
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl hover:bg-green-50 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-300">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {overallPassRate}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <Percent className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-yellow-500" />
                উত্তীর্ণের হার
              </div>
            </div>
            <div className="text-center p-3 sm:p-4 rounded-xl hover:bg-green-50 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-400">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {totalResults}
              </div>
              <div className="text-[10px] sm:text-xs text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <FileText className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-red-500" />
                মোট ফলাফল
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* দ্রুত নেভিগেশন */}
      <section className="py-3 sm:py-4 bg-white shadow-sm sticky top-16 lg:top-20 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {[
              { id: "examination", label: "পরীক্ষার ফলাফল", icon: <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
              { id: "board", label: "বোর্ড ফলাফল", icon: <Trophy className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
              { id: "internal", label: "অভ্যন্তরীণ মূল্যায়ন", icon: <Activity className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-sm font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 ${
                  selectedFilter === tab.id
                    ? "bg-gradient-to-r from-green-500 to-red-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
                }`}
              >
                {tab.icon}
                <span className="hidden xs:inline">{tab.label}</span>
                <span className="xs:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            ))}
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-sm font-medium transition-all duration-300 flex items-center gap-1 sm:gap-2 ${
                selectedFilter === "all"
                  ? "bg-gradient-to-r from-green-500 to-red-500 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
              }`}
            >
              <Filter className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">সব ফলাফল</span>
            </button>
          </div>
        </div>
      </section>

      {/* অনুসন্ধান ও ফিল্টার */}
      <section className="py-4 sm:py-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between max-w-6xl mx-auto">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="শিরোনাম বা শ্রেণী দ্বারা অনুসন্ধান..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white"
              >
                <option value="২০২৬">২০২৬</option>
                <option value="২০২৫">২০২৫</option>
                <option value="২০২৪">২০২৪</option>
              </select>
              <button
                onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                className="p-2 sm:p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-300"
              >
                {viewMode === "grid" ? <List className="h-4 w-4 sm:h-5 sm:w-5" /> : <Grid className="h-4 w-4 sm:h-5 sm:w-5" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ফলাফল তালিকা */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-4 sm:gap-6 max-w-7xl mx-auto`}>
            {getFilteredResults().map((result, index) => (
              <div
                key={result.id}
                className={`bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:scale-[1.02] overflow-hidden animate-fade-in-up animate-on-scroll ${viewMode === "list" ? "md:flex md:items-center" : ""}`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
                onMouseEnter={() => setHoveredCard(result.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`p-4 sm:p-6 ${viewMode === "list" ? "md:flex-1" : ""}`}>
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                        <FileText className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${result.category === "board" ? "text-yellow-500" : result.category === "internal" ? "text-blue-500" : "text-red-500"}`} />
                        <h3 className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors duration-300 text-sm sm:text-base truncate">
                          {result.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
                        <span className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1">
                          <Users className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> {result.class}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> {result.date}
                        </span>
                        <span className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1">
                          <File className="h-2.5 w-2.5 sm:h-3 sm:w-3" /> {result.size}
                        </span>
                        <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded ${getTypeColor(result.type)}`}>
                          {getTypeBadge(result.type)}
                        </span>
                        <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">
                          {getCategoryBadge(result.category)}
                        </span>
                        {"board" in result && (
                          <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded bg-purple-100 text-purple-700">
                            {result.board}
                          </span>
                        )}
                        {"assessmentType" in result && (
                          <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded bg-cyan-100 text-cyan-700">
                            {result.assessmentType}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className={`text-center min-w-[45px] sm:min-w-[60px] ${getGradeColor(result.grade)} px-2 sm:px-3 py-1 rounded-lg flex-shrink-0`}>
                      <span className="text-base sm:text-lg font-bold">{result.grade}</span>
                    </div>
                  </div>

                  {/* পরিসংখ্যান সারি */}
                  <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500" />
                      {result.totalStudents} শিক্ষার্থী
                    </span>
                    <span className="flex items-center gap-1">
                      <UserCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-500" />
                      {result.passed} উত্তীর্ণ
                    </span>
                    <span className="flex items-center gap-1">
                      <Percent className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-yellow-500" />
                      <span className="font-semibold text-green-600">{result.passRate}</span>
                    </span>
                    {"gpa" in result && (
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-purple-500" />
                        <span className="font-semibold">জিপিএ: {result.gpa}</span>
                      </span>
                    )}
                    {"semester" in result && (
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-500" />
                        {result.semester}
                      </span>
                    )}
                  </div>

                  {/* অ্যাকশন বাটন */}
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    <button 
                      onClick={() => handlePreview(result.id)}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-105 text-[10px] sm:text-xs font-medium"
                    >
                      <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      প্রিভিউ
                    </button>
                    <button className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-105 text-[10px] sm:text-xs font-medium">
                      <Download className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      ডাউনলোড
                    </button>
                    <button className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-all duration-300 hover:scale-105 text-[10px] sm:text-xs font-medium">
                      <Printer className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      প্রিন্ট
                    </button>
                    <button className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-[10px] sm:text-xs font-medium">
                      <Share2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      শেয়ার
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredResults().length === 0 && (
            <div className="text-center py-12">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📄</div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800">কোন ফলাফল পাওয়া যায়নি</h3>
              <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">আপনার অনুসন্ধানের সাথে মেলে এমন কোনো ফলাফল নেই।</p>
            </div>
          )}
        </div>
      </section>

      {/* বাল্ক ডাউনলোড */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-green-50/30 via-white to-red-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-sm font-semibold mb-3 sm:mb-4">
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              বাল্ক ডাউনলোড
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2">সব ফলাফল ডাউনলোড করুন</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">অফলাইন অ্যাক্সেসের জন্য একটি জিপ ফাইলে সব ফলাফল পিডিএফ পান</p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg">
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                সব ডাউনলোড (জিপ)
              </button>
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg">
                <Printer className="h-4 w-4 sm:h-5 sm:w-5" />
                সব প্রিন্ট করুন
              </button>
            </div>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-3 sm:mt-4">সব ফলাফল পিডিএফ ফরম্যাটে। মোট সাইজ: ~৪.৫ এমবি</p>
          </div>
        </div>
      </section>

      {/* বৈশিষ্ট্য */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-sm font-semibold mb-3 sm:mb-4">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin-slow" />
              ফলাফল বৈশিষ্ট্য
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 sm:mb-4">ফলাফল ব্যবস্থাপনা বৈশিষ্ট্য</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">ব্যাপক ফলাফল প্রকাশ ও ব্যবস্থাপনা ব্যবস্থা</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 sm:p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up animate-on-scroll">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-800">পিডিএফ ডাউনলোড</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">অফলাইন দেখার ও প্রিন্টের জন্য ফলাফল পিডিএফ ডাউনলোড করুন</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 sm:p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up animation-delay-100 animate-on-scroll">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-800">কর্মক্ষমতা ট্র্যাকিং</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">সময়ের সাথে একাডেমিক অগ্রগতি ও কর্মক্ষমতা ট্র্যাক করুন</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 sm:p-6 rounded-2xl text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group animate-fade-in-up animation-delay-200 animate-on-scroll">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <Share2 className="h-6 w-6 sm:h-8 sm:w-8 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-800">সহজ শেয়ারিং</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">অভিভাবক ও স্টেকহোল্ডারদের সাথে তাৎক্ষণিক ফলাফল শেয়ার করুন</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}