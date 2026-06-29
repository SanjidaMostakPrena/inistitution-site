
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  GraduationCap,
  CheckCircle,
  FileText,
  Users,
  Calendar,
  Clock,
  MapPin,
  Search,
  ChevronDown,
  Eye,
  Edit,
  Plus,
  XCircle,
  ArrowLeft,
  Bell,
  Home,
  Download,
  BookOpen,
  Award,
  Sparkles,
  Star,
  Heart,
  Zap,
  Globe,
  Mail,
  Phone,
  MessageSquare,
  Video,
  Camera,
  Image,
  Music,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Code,
  Terminal,
  Database,
  Server,
  CloudCog,
  Cpu,
  HardDrive,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Mic,
  MicOff,
  Radio,
  Wifi,
  Bluetooth,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  Power,
  PowerOff,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Pentagon,
  StarHalf,
  StarOff,
  ThumbsUp,
  ThumbsDown,
  Trophy,
  Medal,
  Ribbon,
  Crown,
  Gem,
  Diamond,
  Sparkle,
  Flame,
  Rocket,
  Plane,
  Car,
  Bus,
  Train,
  Ship,
  Bike,
  Mountain,
  
  Flower,
  Leaf,
  Droplet,
  Waves,
  Snowflake,
  Map,
  Target,
  Lightbulb,
  PenTool,
  BookMarked,
  Library,
  ScrollText,
  FileCheck,
  FileSpreadsheet,
  Presentation,
  Microscope,
  Beaker,
  Atom,
  Dna,
  Brain,
  HeartPulse,
  Stethoscope,
  Pill,
  Activity,
  BarChart,
  PieChart,
  LineChart,
  AreaChart,
  ScatterChart,
  Radar,
  Gauge,
  ClipboardList,
  UserCheck,
  UserPlus,
  Users as UsersIcon,
  CalendarDays,
  Clock as ClockIcon,
  FileCheck as FileCheckIcon,
  Shield,
  ShieldCheck,
  ShieldAlert,
  ShieldQuestion,
  BadgeCheck,
  BadgeAlert,
  BadgeInfo,
  BadgeX,
  Check,
  X,
  AlertOctagon,
  AlertCircle as AlertCircleIcon,
  CheckCircle as CheckCircleIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  XCircle as XCircleIcon,
  MinusCircle as MinusCircleIcon,
  PlusCircle as PlusCircleIcon,
  FlaskConical,
} from "lucide-react";

const Flask = ({ className }: { className?: string }) => (
  <FlaskConical className={className} />
);

export default function AdmissionPage() {
  const [activeTab, setActiveTab] = useState("requirements");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [notificationCount] = useState(5);
  const [selectedProgram, setSelectedProgram] = useState("all");

  // ভর্তি প্রয়োজনীয়তা ডেটা
  const requirements = [
    {
      id: 1,
      title: "ন্যূনতম একাডেমিক যোগ্যতা",
      description: "প্রার্থীদের পূর্ববর্তী শ্রেণী ন্যূনতম প্রয়োজনীয় জিপিএ সহ সম্পন্ন করতে হবে",
      details: [
        "পূর্ববর্তী পরীক্ষায় ন্যূনতম জিপিএ ৩.০০",
        "পূর্ববর্তী শ্রেণীর সকল বিষয়ে উত্তীর্ণ",
        "একাডেমিক বহিষ্কারের কোনো ইতিহাস নেই",
        "পূর্ববর্তী বিদ্যালয়ের সুপারিশ",
      ],
      icon: "📚",
      color: "green",
      level: "সকল শ্রেণী",
    },
    {
      id: 2,
      title: "বয়সের প্রয়োজনীয়তা",
      description: "বিভিন্ন শ্রেণীতে ভর্তির জন্য বয়সের যোগ্যতার মানদণ্ড",
      details: [
        "১ম শ্রেণী: ৫-৬ বছর",
        "২য় শ্রেণী: ৬-৭ বছর",
        "৩য় শ্রেণী: ৭-৮ বছর",
        "৪র্থ শ্রেণী: ৮-৯ বছর",
        "৫ম শ্রেণী: ৯-১০ বছর",
        "৬ষ্ঠ শ্রেণী: ১০-১১ বছর",
        "৭ম শ্রেণী: ১১-১২ বছর",
        "৮ম শ্রেণী: ১২-১৩ বছর",
        "৯ম শ্রেণী: ১৩-১৪ বছর",
        "১০ম শ্রেণী: ১৪-১৫ বছর",
      ],
      icon: "🎂",
      color: "purple",
      level: "সকল শ্রেণী",
    },
    {
      id: 3,
      title: "ভাষার দক্ষতা",
      description: "বাংলা ও ইংরেজিতে দক্ষতা প্রয়োজন",
      details: [
        "বাংলা পড়া, লেখা ও বলার ক্ষমতা",
        "ইংরেজিতে মৌলিক যোগাযোগ দক্ষতা",
        "উচ্চ শ্রেণীর জন্য: ইংরেজি দক্ষতা পরীক্ষা প্রয়োজন হতে পারে",
        "অতিরিক্ত ভাষা কোর্স উপলব্ধ",
      ],
      icon: "🌍",
      color: "blue",
      level: "সকল শ্রেণী",
    },
    {
      id: 4,
      title: "পূর্ববর্তী বিদ্যালয়ের রেকর্ড",
      description: "পূর্ববর্তী প্রতিষ্ঠান থেকে সম্পূর্ণ একাডেমিক রেকর্ড",
      details: [
        "মূল ট্রান্সক্রিপ্ট/মার্কশীট",
        "বিদ্যালয় ত্যাগের সনদ",
        "চারিত্রিক সনদ",
        "স্থানান্তর সনদ (টিসি)",
        "আচরণ সনদ",
      ],
      icon: "📋",
      color: "orange",
      level: "সকল শ্রেণী",
    },
    {
      id: 5,
      title: "শারীরিক ফিটনেস",
      description: "ভালো শারীরিক ও মানসিক স্বাস্থ্য প্রয়োজন",
      details: [
        "নিবন্ধিত চিকিৎসকের কাছ থেকে শারীরিক ফিটনেস সনদ",
        "টিকা প্রদানের রেকর্ড",
        "দৃষ্টি ও শ্রবণ পরীক্ষার রিপোর্ট",
        "বিশেষ চিকিৎসা শর্তের বিবরণ",
      ],
      icon: "🏥",
      color: "red",
      level: "সকল শ্রেণী",
    },
  ];

  // যোগ্যতার মানদণ্ড ডেটা
  const eligibility = [
    {
      id: 1,
      level: "প্রাথমিক স্তর (১ম-৫ম শ্রেণী)",
      criteria: [
        "পূর্ববর্তী শ্রেণী সফলভাবে সম্পন্ন",
        "বয়স: ৫-১০ বছর",
        "মৌলিক সাক্ষরতা ও গণনা দক্ষতা",
        "অভিভাবকের সম্মতি",
        "ক্যাচমেন্ট এলাকায় বসবাস (পছন্দনীয়)",
      ],
      seats: 150,
      status: "খোলা",
    },
    {
      id: 2,
      level: "নিম্ন মাধ্যমিক (৬ষ্ঠ-৮ম শ্রেণী)",
      criteria: [
        "পঞ্চম শ্রেণী ন্যূনতম জিপিএ ৩.০০ সহ উত্তীর্ণ",
        "বয়স: ১০-১৩ বছর",
        "বাংলা, ইংরেজি, গণিতে শক্তিশালী ভিত্তি",
        "ভালো আচরণ রেকর্ড",
        "ভর্তি পরীক্ষায় উত্তীর্ণ",
      ],
      seats: 120,
      status: "খোলা",
    },
    {
      id: 3,
      level: "মাধ্যমিক স্তর (৯ম-১০ম শ্রেণী)",
      criteria: [
        "অষ্টম শ্রেণী ন্যূনতম জিপিএ ৩.৫০ সহ উত্তীর্ণ",
        "বয়স: ১৩-১৫ বছর",
        "মূল বিষয়ে দক্ষতা",
        "পূর্ববর্তী বিদ্যালয়ের সুপারিশ",
        "ভর্তি পরীক্ষায় উত্তীর্ণ",
      ],
      seats: 90,
      status: "সীমিত",
    },
    {
      id: 4,
      level: "উচ্চ মাধ্যমিক (১১শ-১২শ শ্রেণী)",
      criteria: [
        "এসএসসি/সমমান ন্যূনতম জিপিএ ৪.০০ সহ উত্তীর্ণ",
        "বয়স: ১৫-১৭ বছর",
        "শাখাভিত্তিক প্রয়োজনীয়তা",
        "বিষয় সমন্বয়ের যোগ্যতা",
        "ভর্তি পরীক্ষায় উত্তীর্ণ",
      ],
      seats: 60,
      status: "খোলা",
    },
  ];

  // প্রয়োজনীয় নথিপত্র ডেটা
  const documents = [
    {
      id: 1,
      category: "একাডেমিক নথিপত্র",
      items: [
        { name: "জন্ম সনদ", required: true, format: "মূল + ২ কপি" },
        { name: "পূর্ববর্তী বিদ্যালয়ের ট্রান্সক্রিপ্ট", required: true, format: "মূল + ২ কপি" },
        { name: "বিদ্যালয় ত্যাগের সনদ", required: true, format: "মূল" },
        { name: "স্থানান্তর সনদ", required: true, format: "মূল" },
        { name: "আচরণ সনদ", required: true, format: "মূল" },
        { name: "চারিত্রিক সনদ", required: true, format: "মূল" },
      ],
      icon: "📄",
    },
    {
      id: 2,
      category: "ব্যক্তিগত নথিপত্র",
      items: [
        { name: "জাতীয় আইডি/পাসপোর্ট (অভিভাবক)", required: true, format: "কপি" },
        { name: "পাসপোর্ট সাইজের ছবি", required: true, format: "৮ কপি" },
        { name: "অভিভাবকের যোগাযোগের তথ্য", required: true, format: "লিখিত" },
        { name: "শারীরিক ফিটনেস সনদ", required: true, format: "মূল" },
        { name: "টিকা প্রদানের রেকর্ড", required: true, format: "কপি" },
      ],
      icon: "🪪",
    },
    {
      id: 3,
      category: "অতিরিক্ত নথিপত্র",
      items: [
        { name: "অতিরিক্ত কার্যক্রমের সনদ", required: false, format: "কপি" },
        { name: "বিশেষ প্রতিভা/প্রতিবন্ধী রিপোর্ট", required: false, format: "মূল" },
        { name: "পূর্ববর্তী বিদ্যালয় থেকে স্থানান্তর (প্রযোজ্য হলে)", required: false, format: "মূল" },
        { name: "আর্থিক সহায়তা আবেদন", required: false, format: "ফর্ম" },
      ],
      icon: "📎",
    },
  ];

  // ভর্তি নির্দেশিকা ডেটা
  const guidelines = [
    {
      id: 1,
      step: "ধাপ ১: আবেদন জমা",
      description: "সঠিক তথ্য সহ অনলাইন আবেদন ফর্ম পূরণ করুন",
      details: [
        "ভর্তি পোর্টালে যান",
        "অ্যাকাউন্ট তৈরি করুন বা লগইন করুন",
        "ব্যক্তিগত ও একাডেমিক তথ্য পূরণ করুন",
        "প্রয়োজনীয় নথিপত্র আপলোড করুন",
        "আবেদন ফি পরিশোধ করুন",
      ],
      icon: "📝",
      color: "green",
    },
    {
      id: 2,
      step: "ধাপ ২: নথিপত্র যাচাইকরণ",
      description: "জমা দেওয়া সকল নথিপত্র ভর্তি অফিস দ্বারা যাচাই করা হবে",
      details: [
        "নথিপত্রের সত্যতা যাচাই",
        "একাডেমিক রেকর্ড যাচাই",
        "বয়সের যোগ্যতা যাচাই",
        "আবাসিক স্থিতি নিশ্চিতকরণ",
      ],
      icon: "🔍",
      color: "purple",
    },
    {
      id: 3,
      step: "ধাপ ৩: ভর্তি পরীক্ষা",
      description: "যোগ্য প্রার্থীদের জন্য লিখিত পরীক্ষা এবং/অথবা সাক্ষাৎকার",
      details: [
        "বিষয়ভিত্তিক লিখিত পরীক্ষা",
        "ভর্তি কমিটির সাথে সাক্ষাৎকার",
        "অতিরিক্ত কার্যক্রমের মূল্যায়ন",
        "অভিভাবক/প্রহরীর সাক্ষাৎকার",
      ],
      icon: "📝",
      color: "blue",
    },
    {
      id: 4,
      step: "ধাপ ৪: চূড়ান্ত নির্বাচন",
      description: "মেধাভিত্তিক নির্বাচন এবং ভর্তি প্রস্তাব",
      details: [
        "মেধা তালিকা প্রকাশ",
        "ভর্তি প্রস্তাব পত্র",
        "ফি প্রদান এবং নিশ্চিতকরণ",
        "অভিমুখীকরণ কর্মসূচি",
      ],
      icon: "🎉",
      color: "orange",
    },
    {
      id: 5,
      step: "ধাপ ৫: নিবন্ধন",
      description: "নিবন্ধন এবং অভিমুখীকরণ প্রক্রিয়া সম্পন্ন করুন",
      details: [
        "মূল নথিপত্র জমা দিন",
        "টিউশন ফি পরিশোধ করুন",
        "নিবন্ধন সম্পন্ন করুন",
        "শিক্ষার্থী আইডি ও উপকরণ সংগ্রহ করুন",
        "অভিমুখীকরণ অধিবেশনে যোগ দিন",
      ],
      icon: "🎓",
      color: "green",
    },
  ];

  // ভর্তি পরিসংখ্যান
  const stats = [
    { label: "মোট আবেদন", value: "2,450", change: "+১২%", icon: UsersIcon },
    { label: "ভর্তি প্রস্তাব", value: "1,850", change: "+৮%", icon: UserCheck },
    { label: "নিবন্ধনের হার", value: "75.5%", change: "+৫%", icon: GraduationCap },
    { label: "আন্তর্জাতিক শিক্ষার্থী", value: "125", change: "+২০%", icon: Globe },
  ];

  const getColorClass = (color: string) => {
    const colors: Record<string, string> = {
      green: "bg-green-100 text-green-700 border-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200",
      red: "bg-red-100 text-red-700 border-red-200",
      emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
      pink: "bg-pink-100 text-pink-700 border-pink-200",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
    };
    return colors[color] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getStatusColor = (status: string) => {
    return status === "খোলা" ? "bg-green-100 text-green-700" :
           status === "সীমিত" ? "bg-yellow-100 text-yellow-700" :
           status === "বন্ধ" ? "bg-red-100 text-red-700" :
           "bg-gray-100 text-gray-700";
  };

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-12 md:py-16 lg:py-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant" />
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
                হোমে ফিরুন
              </Link>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 animate-fade-in-up">
                <span className="text-yellow-300">ভর্তি</span> তথ্য
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-white/90 animate-fade-in-up animation-delay-200">
                মানসম্মত শিক্ষার আপনার প্রবেশদ্বার। ভর্তির প্রয়োজনীয়তা, যোগ্যতা ও নির্দেশিকা সম্পর্কে জানুন।
              </p>
            </div>
          
          </div>
        </div>
      </section>

      {/* দ্রুত পরিসংখ্যান */}
      <section className="py-4 sm:py-6 md:py-8 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-3 sm:p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] sm:text-xs text-gray-500 truncate">{stat.label}</p>
                      <p className="text-sm sm:text-base md:text-xl font-bold text-gray-800">{stat.value}</p>
                      <p className="text-[10px] sm:text-xs text-green-600">{stat.change}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ট্যাব */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {[
              { id: "requirements", label: "প্রয়োজনীয়তা", icon: FileCheck },
              { id: "eligibility", label: "যোগ্যতা", icon: ShieldCheck },
              { id: "documents", label: "নথিপত্র", icon: FileText },
              { id: "guidelines", label: "নির্দেশিকা", icon: ClipboardList },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchTerm("");
                  }}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105"
                      : "text-gray-600 hover:bg-gray-100 hover:text-green-600"
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 md:h-4 md:w-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* কন্টেন্ট */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {activeTab === "requirements" && (
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">ভর্তির প্রয়োজনীয়তা</h2>
                  <button className="text-xs sm:text-sm text-green-600 hover:text-green-700 font-medium transition-colors inline-flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform">
                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    প্রয়োজনীয়তা ডাউনলোড (পিডিএফ)
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {requirements.map((item, index) => (
                    <div
                      key={item.id}
                      className="group bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200 border border-transparent animate-fade-in-up animate-on-scroll"
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="text-2xl sm:text-3xl">{item.icon}</div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors text-sm sm:text-base">
                            {item.title}
                          </h3>
                          <span className={`text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full border ${getColorClass(item.color)} inline-block`}>
                            {item.level}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                      <ul className="mt-3 space-y-1.5">
                        {item.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "eligibility" && (
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">যোগ্যতার মানদণ্ড</h2>
                  <button className="text-xs sm:text-sm text-green-600 hover:text-green-700 font-medium transition-colors inline-flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform">
                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    যোগ্যতা ডাউনলোড (পিডিএফ)
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                  {eligibility.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 border border-transparent animate-fade-in-up animate-on-scroll"
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">{item.level}</h3>
                        <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">আসন সংখ্যা: {item.seats}</p>
                      <ul className="space-y-1.5">
                        {item.criteria.map((criterion, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                            <ShieldCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{criterion}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <button className="text-xs sm:text-sm text-green-600 hover:text-green-700 font-medium transition-colors hover:gap-3 transition-all">
                          বিস্তারিত →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "documents" && (
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">প্রয়োজনীয় নথিপত্র</h2>
                  <button className="text-xs sm:text-sm text-green-600 hover:text-green-700 font-medium transition-colors inline-flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform">
                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    চেকলিস্ট ডাউনলোড (পিডিএফ)
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {documents.map((category, index) => (
                    <div
                      key={category.id}
                      className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 border border-transparent animate-fade-in-up animate-on-scroll"
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl sm:text-2xl">{category.icon}</span>
                        <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{category.category}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                            {item.required ? (
                              <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            ) : (
                              <MinusCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0 mt-0.5" />
                            )}
                            <div className="min-w-0">
                              <p className="text-gray-700 text-xs sm:text-sm">{item.name}</p>
                              <p className="text-[10px] sm:text-xs text-gray-400">{item.format}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-[10px] sm:text-xs text-gray-400">
                          {category.items.filter(i => i.required).length}টি প্রয়োজনীয় নথিপত্র
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "guidelines" && (
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">ভর্তি নির্দেশিকা</h2>
                  <button className="text-xs sm:text-sm text-green-600 hover:text-green-700 font-medium transition-colors inline-flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform">
                    <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    নির্দেশিকা ডাউনলোড (পিডিএফ)
                  </button>
                </div>

                <div className="relative">
                  <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-emerald-400 to-green-400 rounded-full" />
                  
                  <div className="space-y-6 sm:space-y-8">
                    {guidelines.map((item, index) => (
                      <div
                        key={item.id}
                        className={`flex flex-col md:flex-row items-start gap-4 sm:gap-6 animate-fade-in-up animate-on-scroll`}
                        style={{ animationDelay: `${(index + 1) * 100}ms` }}
                      >
                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:order-2'}`}>
                          <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 border border-transparent">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xl sm:text-2xl">{item.icon}</span>
                              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.step}</h3>
                            </div>
                            <p className="text-xs sm:text-sm text-gray-600 font-medium mb-2">{item.description}</p>
                            <ul className="space-y-1.5">
                              {item.details.map((detail, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                  <ChevronDown className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-500 -rotate-90 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="relative z-10 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xs sm:text-sm mx-auto md:mx-0">
                          {index + 1}
                        </div>
                        <div className="md:w-1/2 hidden md:block" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

   
    </main>
  );
}