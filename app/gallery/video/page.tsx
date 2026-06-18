"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Video,
  Play,
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
  Download,
  ArrowLeft,
  Search,
  Filter,
  Grid,
  List,
  X,
  User,
  Tag,
  Award,
  BookOpen,
  GraduationCap,
  Trophy,
  Sparkles,
  Calendar as CalendarIcon,
  MapPin,
  Users,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  ChevronRight,
  ExternalLink,
  Home,
  Bell,
  Settings,
  Star,
  TrendingUp,
} from "lucide-react";

// YouTube icon component
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function VideoGalleryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
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

  // Video Data - Use English numerals in code, display Bengali in UI
  const videoData = [
    // Promotional Videos
    {
      id: 1,
      title: "এবিসি ইনস্টিটিউশনে স্বাগতম - ক্যাম্পাস ট্যুর ২০২৬",
      type: "promotional",
      category: "ক্যাম্পাস ট্যুর",
      date: "২০২৬-০১-১৫",
      duration: "৪:৩২",
      views: 12500,
      likes: 2340,
      description: "আমাদের সুন্দর ক্যাম্পাসের ভার্চুয়াল ট্যুর দেখুন এবং জানুন কেন এবিসি ইনস্টিটিউশন একটি প্রধান শিক্ষাগত গন্তব্য।",
      tags: ["ক্যাম্পাস ট্যুর", "অবকাঠামো", "সুবিধা"],
      featured: true,
    },
    {
      id: 2,
      title: "এবিসি ইনস্টিটিউশন - শিক্ষায় শ্রেষ্ঠত্ব",
      type: "promotional",
      category: "ভূমিকা",
      date: "২০২৬-০১-১০",
      duration: "৩:৪৫",
      views: 8900,
      likes: 1560,
      description: "শিক্ষায় আমাদের শ্রেষ্ঠত্বের প্রতি অঙ্গীকার আবিষ্কার করুন, সততা এবং উদ্ভাবনের মাধ্যমে ভবিষ্যতের নেতা তৈরি করা।",
      tags: ["ভূমিকা", "মিশন", "দৃষ্টিভঙ্গি"],
      featured: true,
    },
    {
      id: 3,
      title: "এবিসি ইনস্টিটিউশনের অত্যাধুনিক ল্যাবরেটরি",
      type: "promotional",
      category: "সুবিধা",
      date: "২০২৬-০১-০৫",
      duration: "৫:২০",
      views: 5600,
      likes: 890,
      description: "ব্যবহারিক শিক্ষা এবং গবেষণার জন্য অত্যাধুনিক প্রযুক্তিতে সজ্জিত আমাদের আধুনিক ল্যাবরেটরি ঘুরে দেখুন।",
      tags: ["ল্যাব", "বিজ্ঞান", "প্রযুক্তি", "গবেষণা"],
      featured: false,
    },
    {
      id: 4,
      title: "এবিসি ইনস্টিটিউশনের লাইব্রেরি ও শিক্ষা উপকরণ",
      type: "promotional",
      category: "সুবিধা",
      date: "২০২৫-১২-২০",
      duration: "৩:১৫",
      views: 4200,
      likes: 670,
      description: "শিক্ষায় শ্রেষ্ঠত্বের জন্য বিস্তৃত সম্পদ সহ আমাদের অত্যাধুনিক লাইব্রেরি।",
      tags: ["লাইব্রেরি", "সম্পদ", "শিক্ষা"],
      featured: false,
    },

    // Academic Videos
    {
      id: 5,
      title: "বিজ্ঞান মেলা ২০২৬ - উদ্ভাবনী প্রকল্প",
      type: "academic",
      category: "বিজ্ঞান",
      date: "২০২৬-০২-১৫",
      duration: "৮:৪৫",
      views: 7800,
      likes: 1230,
      description: "শিক্ষার্থীরা বার্ষিক বিজ্ঞান মেলায় তাদের উদ্ভাবনী বিজ্ঞান প্রকল্প প্রদর্শন করে।",
      tags: ["বিজ্ঞান মেলা", "প্রকল্প", "উদ্ভাবন"],
      featured: true,
    },
    {
      id: 6,
      title: "এবিসি ইনস্টিটিউশনে ভার্চুয়াল শ্রেণীকক্ষের অভিজ্ঞতা",
      type: "academic",
      category: "শিক্ষা",
      date: "২০২৬-০১-২৫",
      duration: "৬:৩০",
      views: 3400,
      likes: 560,
      description: "ইন্টারেক্টিভ শিক্ষা প্রযুক্তি সহ আমাদের আধুনিক শ্রেণীকক্ষের অভিজ্ঞতা নিন।",
      tags: ["শ্রেণীকক্ষ", "শিক্ষা", "প্রযুক্তি"],
      featured: false,
    },

    // Event Videos
    {
      id: 7,
      title: "বার্ষিক সাংস্কৃতিক রাত ২০২৬ - হাইলাইটস",
      type: "event",
      category: "সাংস্কৃতিক",
      date: "২০২৬-০১-৩০",
      duration: "১২:২০",
      views: 12500,
      likes: 2100,
      description: "বার্ষিক সাংস্কৃতিক রাতে শিক্ষার্থীদের অসাধারণ সাংস্কৃতিক পরিবেশনা।",
      tags: ["সাংস্কৃতিক", "নৃত্য", "সংগীত", "পরিবেশনা"],
      featured: true,
    },
    {
      id: 8,
      title: "বার্ষিক দিবস উদযাপন ২০২৬ - সম্পূর্ণ অনুষ্ঠান",
      type: "event",
      category: "উদযাপন",
      date: "২০২৬-০১-২০",
      duration: "১৫:৪৫",
      views: 9800,
      likes: 1670,
      description: "শিক্ষার্থী, শিক্ষক এবং অভিভাবকদের সাথে মহাসমারোহে বার্ষিক দিবস উদযাপন।",
      tags: ["বার্ষিক দিবস", "উদযাপন", "পুরস্কার"],
      featured: false,
    },

    // Sports Videos
    {
      id: 9,
      title: "আন্তঃস্কুল ক্রিকেট টুর্নামেন্ট ফাইনাল ২০২৬",
      type: "sports",
      category: "ক্রিকেট",
      date: "২০২৬-০২-১০",
      duration: "১৮:৩০",
      views: 15600,
      likes: 2780,
      description: "এবিসি ইনস্টিটিউশন এবং ডিফেন্ডিং চ্যাম্পিয়নদের মধ্যে উত্তেজনাপূর্ণ ক্রিকেট ফাইনাল ম্যাচ।",
      tags: ["ক্রিকেট", "ক্রীড়া", "টুর্নামেন্ট"],
      featured: true,
    },
    {
      id: 10,
      title: "ফুটবল চ্যাম্পিয়নশিপ ২০২৬ - হাইলাইটস",
      type: "sports",
      category: "ফুটবল",
      date: "২০২৬-০২-০৫",
      duration: "১০:১৫",
      views: 8900,
      likes: 1450,
      description: "থ্রিলিং ফুটবল চ্যাম্পিয়নশিপ ম্যাচের হাইলাইটস।",
      tags: ["ফুটবল", "ক্রীড়া", "চ্যাম্পিয়নশিপ"],
      featured: false,
    },
    {
      id: 11,
      title: "বার্ষিক ক্রীড়া দিবস ২০২৬ - সম্পূর্ণ কভারেজ",
      type: "sports",
      category: "অ্যাথলেটিক্স",
      date: "২০২৬-০১-২৮",
      duration: "১৪:২০",
      views: 6700,
      likes: 980,
      description: "বিভিন্ন অ্যাথলেটিক ইভেন্ট সহ বার্ষিক ক্রীড়া দিবসের সম্পূর্ণ কভারেজ।",
      tags: ["ক্রীড়া দিবস", "অ্যাথলেটিক্স", "প্রতিযোগিতা"],
      featured: false,
    },

    // Achievement Videos
    {
      id: 12,
      title: "এবিসি ইনস্টিটিউশন - বোর্ড পরীক্ষার সাফল্যের গল্প ২০২৫",
      type: "achievement",
      category: "সাফল্য",
      date: "২০২৫-১২-১৫",
      duration: "৭:৪৫",
      views: 5200,
      likes: 890,
      description: "বোর্ড পরীক্ষায় আমাদের শীর্ষ অর্জনকারীদের অনুপ্রেরণামূলক সাফল্যের গল্প।",
      tags: ["সাফল্য", "অর্জন", "বোর্ড পরীক্ষা"],
      featured: false,
    },
    {
      id: 13,
      title: "এবিসি ইনস্টিটিউশন - পুরস্কার বিতরণী অনুষ্ঠান ২০২৫",
      type: "achievement",
      category: "পুরস্কার",
      date: "২০২৫-১২-১০",
      duration: "৯:৩০",
      views: 3800,
      likes: 620,
      description: "শিক্ষার্থীদের অসাধারণ অর্জন স্বীকৃতি প্রদানের বার্ষিক পুরস্কার বিতরণী অনুষ্ঠান।",
      tags: ["পুরস্কার", "অর্জন", "স্বীকৃতি"],
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "সব ভিডিও", icon: <Video className="h-4 w-4" /> },
    { id: "promotional", label: "প্রমোশনাল", icon: <Sparkles className="h-4 w-4" /> },
    { id: "academic", label: "একাডেমিক", icon: <BookOpen className="h-4 w-4" /> },
    { id: "event", label: "ইভেন্ট", icon: <Calendar className="h-4 w-4" /> },
    { id: "sports", label: "ক্রীড়া", icon: <Trophy className="h-4 w-4" /> },
    { id: "achievement", label: "অর্জন", icon: <Award className="h-4 w-4" /> },
  ];

  const getCategoryColor = (type: string) => {
    switch (type) {
      case "promotional":
        return "from-purple-500 to-purple-700";
      case "academic":
        return "from-blue-500 to-blue-700";
      case "event":
        return "from-green-500 to-green-700";
      case "sports":
        return "from-orange-500 to-orange-700";
      case "achievement":
        return "from-yellow-500 to-yellow-700";
      default:
        return "from-gray-500 to-gray-700";
    }
  };

  const getCategoryBadge = (type: string) => {
    switch (type) {
      case "promotional":
        return "bg-purple-100 text-purple-700";
      case "academic":
        return "bg-blue-100 text-blue-700";
      case "event":
        return "bg-green-100 text-green-700";
      case "sports":
        return "bg-orange-100 text-orange-700";
      case "achievement":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryLabel = (type: string) => {
    switch (type) {
      case "promotional":
        return "প্রমোশনাল";
      case "academic":
        return "একাডেমিক";
      case "event":
        return "ইভেন্ট";
      case "sports":
        return "ক্রীড়া";
      case "achievement":
        return "অর্জন";
      default:
        return type;
    }
  };

  const filteredVideos = videoData.filter((video) => {
    const matchesSearch = video.title.includes(searchTerm) ||
                         video.description.includes(searchTerm) ||
                         video.tags.some(tag => tag.includes(searchTerm));
    const matchesCategory = selectedCategory === "all" || video.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openModal = (video: any) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Format number with Bengali numerals for display
  const formatBengaliNumber = (num: number): string => {
    const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().replace(/\d/g, digit => bengaliDigits[parseInt(digit)]);
  };

  // YouTube embed URL
  const getYouTubeEmbedUrl = (youtubeId: string) => {
    return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
  };

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-20 md:py-28">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
            হোমে  ফিরে যান
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                <Video className="h-4 w-4 animate-spin-slow" />
                ভিডিও গ্যালারি
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 animate-fade-in-up">
                আমাদের <span className="text-yellow-300">ভিডিও</span> গ্যালারি
              </h1>
              <p className="text-white/90 text-lg animate-fade-in-up animation-delay-200">
                আমাদের প্রাতিষ্ঠানিক প্রমোশনাল ভিডিও এবং ইভেন্টের হাইলাইটস দেখুন
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                <div className="text-xs text-white/80 font-medium">মোট ভিডিও</div>
                <div className="font-bold text-lg">{formatBengaliNumber(videoData.length)}</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10">
                <div className="text-xs text-white/80 font-medium">ক্যাটাগরি</div>
                <div className="font-bold text-lg">৫</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-6 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-16 lg:top-20 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-green-500 to-red-500 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105"
                  }`}
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="ভিডিও খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm w-48 md:w-56"
                />
              </div>
              <button
                onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                className="p-2.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
              >
                {viewMode === "grid" ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredVideos.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎬</div>
                <h3 className="text-xl font-semibold text-slate-800">কোন ভিডিও পাওয়া যায়নি</h3>
                <p className="text-gray-500 mt-2">আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে দেখুন</p>
              </div>
            ) : (
              <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-6`}>
                {filteredVideos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up animate-on-scroll ${
                      video.featured ? "ring-2 ring-yellow-400" : ""
                    }`}
                    style={{ animationDelay: `${(index + 1) * 100}ms` }}
                    onClick={() => openModal(video)}
                  >
                    {/* Video Thumbnail */}
                    <div className="relative aspect-video bg-gray-900 cursor-pointer">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                      {video.featured && (
                        <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          ফিচার্ড
                        </div>
                      )}
                      <div className="absolute top-2 right-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${getCategoryBadge(video.type)}`}>
                          {getCategoryLabel(video.type)}
                        </span>
                      </div>
                    </div>

                    {/* Video Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors duration-300 line-clamp-1">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {video.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {video.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {formatBengaliNumber(video.views)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {formatBengaliNumber(video.likes)}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {video.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                            #{tag}
                          </span>
                        ))}
                        {video.tags.length > 3 && (
                          <span className="text-[10px] text-gray-400">+{video.tags.length - 3}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {filteredVideos.length > 0 && (
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  {formatBengaliNumber(filteredVideos.length)} টি ভিডিও দেখানো হচ্ছে (মোট {formatBengaliNumber(videoData.length)} টি)
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden animate-scale-in">
            <div className="relative">
              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo.youtubeId)}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-xl hover:bg-black/70 transition-all duration-300 z-10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Video Details */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-3 py-1 rounded-full ${getCategoryBadge(selectedVideo.type)}`}>
                        {getCategoryLabel(selectedVideo.type)}
                      </span>
                      <span className="text-xs text-gray-500">{selectedVideo.category}</span>
                      {selectedVideo.featured && (
                        <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          ফিচার্ড
                        </span>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800">{selectedVideo.title}</h2>
                    <p className="text-gray-600 mt-2">{selectedVideo.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {selectedVideo.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {selectedVideo.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {formatBengaliNumber(selectedVideo.views)} বার দেখা
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {formatBengaliNumber(selectedVideo.likes)} লাইক
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {selectedVideo.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="p-2.5 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-all duration-300 hover:scale-105">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <a
                      href={`https://www.youtube.com/watch?v=${selectedVideo.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all duration-300 hover:scale-105"
                    >
                      <YoutubeIcon className="h-5 w-5 text-red-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-green-50/30 via-white to-red-50/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="text-center p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-purple-600">{formatBengaliNumber(videoData.filter(v => v.type === "promotional").length)}</div>
              <div className="text-xs text-gray-600 mt-1">প্রমোশনাল</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-blue-600">{formatBengaliNumber(videoData.filter(v => v.type === "academic").length)}</div>
              <div className="text-xs text-gray-600 mt-1">একাডেমিক</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-green-600">{formatBengaliNumber(videoData.filter(v => v.type === "event").length)}</div>
              <div className="text-xs text-gray-600 mt-1">ইভেন্ট</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-2xl font-bold text-orange-600">{formatBengaliNumber(videoData.filter(v => v.type === "sports").length)}</div>
              <div className="text-xs text-gray-600 mt-1">ক্রীড়া</div>
            </div>
          </div>
        </div>
      </section>

      
   
    </main>
  );
}