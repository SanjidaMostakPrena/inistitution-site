"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Camera,
  Calendar,
  Users,
  Trophy,
  Music,
  Heart,
  Star,
  Sparkles,
  ArrowLeft,
  Search,
  Filter,
  Grid,
  List,
  ChevronRight,
  Download,
  Share2,
  Eye,
  X,
  Play,
  Clock,
  MapPin,
  User,
  Tag,
  ChevronDown,
  Image as ImageIcon,
  Video,
  Award,
  BookOpen,
  GraduationCap,
  Palette,
  Mic,
  Gift,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Wind,
  Thermometer,
  Compass,
  MapPin as MapPinIcon,
  Globe,
  Lock,
  Unlock,
  Mail,
  Phone,
  MessageSquare,
  Video as VideoIcon,
  Camera as CameraIcon,
  Image as ImageIcon2,
  Music as MusicIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
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
  Laptop as LaptopIcon,
  Watch,
  Headphones,
  Mic as MicIcon,
  MicOff,
  Radio,
  Wifi as WifiIcon,
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
  XCircle,
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
  Trophy as TrophyIcon,
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
  Bus as BusIcon,
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
  ClipboardList,
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
  Tally1,
  Tally2,
  Tally3,
  Tally4,
  Tally5,
  Sigma,
  Percent,
  Divide,
  Equal,
  Minus,
  X as XIcon,
  Infinity,
  Pi,
  Superscript,
  Subscript,
  Table,
  Columns,
  Rows,
  Sheet,
  Grid2x2,
  Grid3x3,
  Layout,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  LayoutPanelLeft,
  LayoutPanelTop,
  LayoutTemplate,
  PanelLeft,
  PanelRight,
  PanelTop,
  PanelsTopLeft,
  Sidebar,
  SidebarClose,
  SidebarOpen,
  Split,
  SplitSquareHorizontal,
  SplitSquareVertical,
  SquareCode,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquareDashedKanban,
  SquareDashedMousePointer,
  SquareFunction,
  SquareKanban,
  SquareLibrary,
  SquareM,
  SquareMenu,
  SquareMinus,
  SquarePlus,
  SquarePower,
  SquareRadical,
  SquareStack,
  SquareTerminal,
  SquareUser,
  SquareUserRound,
  SquareX,
  Squircle,
  StepBack,
  StepForward,
  Sticker,
  StickyNote,
  StopCircle,
  Store,
  StretchHorizontal,
  StretchVertical,
  Strikethrough,
  Subtitles,
  SunDim,
  SunMedium,
  Sunrise,
  Sunset,
  SwatchBook,
  SwissFranc,
  Sword,
  Syringe,
  Table2,
  TableCellsMerge,
  TableCellsSplit,
  TableColumnsSplit,
  TableOfContents,
  TableProperties,
  TabletSmartphone,
  Tangent,
  Tent,
  TentTree,
  TerminalSquare,
  TestTube,
  TestTubeDiagonal,
  TestTubes,
  Text,
  TextCursor,
  TextCursorInput,
  TextQuote,
  TextSearch,
  TextSelect,
  Theater,
  Ticket,
  TicketCheck,
  TicketMinus,
  TicketPercent,
  TicketPlus,
  TicketSlash,
  TicketX,
  Timer,
  TimerOff,
  TimerReset,
  ToggleLeft,
  ToggleRight,
  Tornado,
  Torus,
  Touchpad,
  TouchpadOff,
  TowerControl,
  ToyBrick,
  Tractor,
  TrafficCone,
  TrainFront,
  TrainTrack,
  TramFront,
  Transgender,
  Trash,
  TreeDeciduous,
  TreePalm,
  TreePine,
  Trees,
  TrendingDown,
  TriangleAlert,
  TriangleRight,
  Truck,
  Turtle,
  Tv,
  TvMinimal,
  TvMinimalPlay,

  Type,
  TypeOutline,
  
  Umbrella,
  UmbrellaOff,
  Underline,
  Undo,
  Undo2,
  UndoDot,
  UnfoldHorizontal,
  UnfoldVertical,
  Ungroup,
  University,
  Unlink,
  Unlink2,
  Unplug,
  Usb,
  User as UserIcon,
  User2,
  UserCheck,
  UserCog,
  UserMinus,
  UserPlus,
  UserRound,
  UserRoundCheck,
  UserRoundCog,
  UserRoundMinus,
  UserRoundPlus,
  UserRoundSearch,
  UserRoundX,
  UserSearch,
  UserX,
  UsersRound,
  UtensilsCrossed,
  UtilityPole,
  Variable,
  Vault,
  Vegan,
  VenetianMask,
  Vibrate,
  VideoOff,
  Videotape,
  View,
  Voicemail,
  Volume,
  Volume1,
  Vote,
  Wallet,
  WalletCards,
  WalletMinimal,
  Wallpaper,
  Wand,
  WandSparkles,
  Warehouse,
  WashingMachine,
  Waypoints,
  Webcam,
  Webhook,
  Weight,
  Wheat,
  WifiOff,
  Wine,
  WineOff,
  Workflow,
  Wrench,
  XOctagon,
  XSquare,
  ZapOff,
  ZoomIn,
  ZoomOut,
  Building,
  School,
  Building2,
} from "lucide-react";

export default function PhotoGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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

  // Gallery Data with local images
  const galleryData = [
    // Academic Activities
    {
      id: 1,
      title: "বিজ্ঞান মেলা ২০২৫",
      category: "academic",
      subCategory: "বিজ্ঞান প্রদর্শনী",
      date: "২০২৫-০২-১৫",
      location: "স্কুল অডিটোরিয়াম",
      image: "/image/image1.webp",
      description: "শিক্ষার্থীদের উদ্ভাবনী বিজ্ঞান প্রকল্প প্রদর্শনী।",
      photographer: "মোঃ রহমান",
      tags: ["বিজ্ঞান", "প্রকল্প", "উদ্যান"],
      likes: 245,
      views: 1250,
    },
    {
      id: 2,
      title: "শ্রেণীকক্ষের শিক্ষা সেশন",
      category: "academic",
      subCategory: "শিক্ষা",
      date: "২০২৫-০২-১০",
      location: "শ্রেণীকক্ষ ৩০১",
      image: "/image/image2.webp",
      description: "আধুনিক শিক্ষা পদ্ধতিতে ইন্টারেক্টিভ শিক্ষা সেশন।",
      photographer: "মিসেস সুলতানা",
      tags: ["শিক্ষা", "শ্রেণীকক্ষ", "পাঠ"],
      likes: 189,
      views: 980,
    },
    {
      id: 3,
      title: "লাইব্রেরি পাঠঘন্টা",
      category: "academic",
      subCategory: "পাঠ",
      date: "২০২৫-০২-০৮",
      location: "কেন্দ্রীয় লাইব্রেরি",
      image: "/image/image12.webp",
      description: "শিক্ষার্থীরা লাইব্রেরিতে তাদের পাঠঘন্টা উপভোগ করছে।",
      photographer: "মোঃ করিম",
      tags: ["পাঠ", "লাইব্রেরি", "জ্ঞান"],
      likes: 156,
      views: 890,
    },

    // Events and Programs
    {
      id: 4,
      title: "বার্ষিক সাংস্কৃতিক অনুষ্ঠান",
      category: "events",
      subCategory: "সাংস্কৃতিক",
      date: "২০২৫-০১-২০",
      location: "প্রধান অডিটোরিয়াম",
      image: "/image/image4.jpg",
      description: "শিক্ষার্থীদের সাংস্কৃতিক নৃত্য ও গানের অনুষ্ঠান।",
      photographer: "মিসেস আহমেদ",
      tags: ["সাংস্কৃতিক", "নৃত্য", "গান"],
      likes: 320,
      views: 2100,
    },
    {
      id: 5,
      title: "বার্ষিক দিবস উদযাপন",
      category: "events",
      subCategory: "উদযাপন",
      date: "২০২৫-০১-২৫",
      location: "স্কুল মাঠ",
      image: "/image/image3.webp",
      description: "শিক্ষার্থী, শিক্ষক ও অভিভাবকদের সাথে বার্ষিক দিবস উদযাপন।",
      photographer: "মোঃ হোসেন",
      tags: ["বার্ষিক দিবস", "উদযাপন", "উৎসব"],
      likes: 456,
      views: 3200,
    },
   
    // Sports Competitions
    {
      id: 7,
      title: "আন্তঃস্কুল ক্রিকেট টুর্নামেন্ট",
      category: "sports",
      subCategory: "ক্রিকেট",
      date: "২০২৫-০২-০৫",
      location: "ক্রীড়া কমপ্লেক্স",
      image: "/image/image7.jpg",
      description: "বার্ষিক টুর্নামেন্টে স্কুল দলের মধ্যে উত্তেজনাপূর্ণ ক্রিকেট ম্যাচ।",
      photographer: "মোঃ আলী",
      tags: ["ক্রিকেট", "ক্রীড়া", "টুর্নামেন্ট"],
      likes: 567,
      views: 4100,
    },
    {
      id: 8,
      title: "ফুটবল টুর্নামেন্ট ফাইনাল",
      category: "sports",
      subCategory: "ফুটবল",
      date: "২০২৫-০২-১২",
      location: "ফুটবল মাঠ",
      image: "/image/image8.jpg",
      description: "হাউস টিমের মধ্যে উত্তেজনাপূর্ণ ফুটবল ফাইনাল ম্যাচ।",
      photographer: "মোঃ হাসান",
      tags: ["ফুটবল", "ক্রীড়া", "প্রতিযোগিতা"],
      likes: 432,
      views: 2890,
    },
 
    {
      id: 10,
      title: "বাস্কেটবল চ্যাম্পিয়নশিপ",
      category: "sports",
      subCategory: "বাস্কেটবল",
      date: "২০২৫-০২-১৮",
      location: "বাস্কেটবল কোর্ট",
      image: "/image/image10.jpg",
      description: "তীব্র বাস্কেটবল চ্যাম্পিয়নশিপ ম্যাচ।",
      photographer: "মিসেস আখতার",
      tags: ["বাস্কেটবল", "ক্রীড়া", "চ্যাম্পিয়নশিপ"],
      likes: 298,
      views: 1780,
    },

    // Celebrations
    {
      id: 11,
      title: "স্বাধীনতা দিবস উদযাপন",
      category: "celebrations",
      subCategory: "জাতীয় দিবস",
      date: "২০২৫-০৩-২৬",
      location: "স্কুল ক্যাম্পাস",
      image: "/image/image11.jpg",
      description: "বাংলাদেশের স্বাধীনতা দিবস উপলক্ষে দেশাত্মবোধক উদযাপন।",
      photographer: "মোঃ রহমান",
      tags: ["স্বাধীনতা", "দেশাত্মবোধক", "উদযাপন"],
      likes: 678,
      views: 5200,
    },
    {
      id: 12,
      title: "বিজয় দিবস উদযাপন",
      category: "celebrations",
      subCategory: "জাতীয় দিবস",
      date: "২০২৫-১২-১৬",
      location: "স্কুল মাঠ",
      image: "/image/image3.webp",
      description: "পতাকা উত্তোলন ও সাংস্কৃতিক অনুষ্ঠানের মাধ্যমে বিজয় দিবস উদযাপন।",
      photographer: "মিসেস সুলতানা",
      tags: ["বিজয় দিবস", "দেশাত্মবোধক", "উদযাপন"],
      likes: 543,
      views: 4300,
    },
   
    {
      id: 14,
      title: "বার্ষিক পিকনিক",
      category: "celebrations",
      subCategory: "পিকনিক",
      date: "২০২৫-০৩-১০",
      location: "পার্ক",
      image: "/image/image1.webp",
      description: "শিক্ষার্থীরা তাদের বার্ষিক স্কুল পিকনিক উপভোগ করছে।",
      photographer: "মোঃ হোসেন",
      tags: ["পিকনিক", "আনন্দ", "আউটডোর"],
      likes: 389,
      views: 2700,
    },
    {
      id: 15,
      title: "নববর্ষ উদযাপন",
      category: "celebrations",
      subCategory: "নববর্ষ",
      date: "২০২৬-০১-০১",
      location: "স্কুল ক্যাম্পাস",
      image: "/image/image4.jpg",
      description: "আনন্দ ও উৎসাহের সাথে নববর্ষ বরণ।",
      photographer: "মিসেস খান",
      tags: ["নববর্ষ", "উদযাপন", "উৎসব"],
      likes: 456,
      views: 3100,
    },
    {
      id: 16,
      title: "সাংস্কৃতিক উৎসব",
      category: "events",
      subCategory: "সাংস্কৃতিক",
      date: "২০২৫-০১-৩০",
      location: "স্কুল মাঠ",
      image: "/image/image5.webp",
      description: "বিভিন্ন ঐতিহ্য প্রদর্শনকারী রঙিন সাংস্কৃতিক উৎসব।",
      photographer: "মিসেস আহমেদ",
      tags: ["সাংস্কৃতিক", "উৎসব", "বৈচিত্র্য"],
      likes: 512,
      views: 3800,
    },
  ];

  const categories = [
    { id: "all", label: "সব ছবি", icon: <Camera className="h-4 w-4" /> },
    { id: "academic", label: "একাডেমিক কার্যক্রম", icon: <BookOpen className="h-4 w-4" /> },
    { id: "events", label: "ইভেন্ট ও প্রোগ্রাম", icon: <Calendar className="h-4 w-4" /> },
    { id: "sports", label: "ক্রীড়া প্রতিযোগিতা", icon: <Trophy className="h-4 w-4" /> },
    { id: "celebrations", label: "উদযাপন", icon: <Sparkles className="h-4 w-4" /> },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "academic":
        return <BookOpen className="h-3 w-3" />;
      case "events":
        return <Calendar className="h-3 w-3" />;
      case "sports":
        return <Trophy className="h-3 w-3" />;
      case "celebrations":
        return <Sparkles className="h-3 w-3" />;
      default:
        return <Camera className="h-3 w-3" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "bg-blue-500";
      case "events":
        return "bg-purple-500";
      case "sports":
        return "bg-orange-500";
      case "celebrations":
        return "bg-pink-500";
      default:
        return "bg-gray-500";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "academic":
        return "একাডেমিক";
      case "events":
        return "ইভেন্ট";
      case "sports":
        return "ক্রীড়া";
      case "celebrations":
        return "উদযাপন";
      default:
        return category;
    }
  };

  const filteredGallery = galleryData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openModal = (image: any) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-12 md:py-16 lg:py-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5" />
        <div className="absolute -top-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-3 md:mb-4 transition-colors group bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-white/20 text-xs md:text-sm">
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 group-hover:-translate-x-1 transition-transform" /> 
            হোমে ফিরে যান
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium mb-2 md:mb-3 border border-white/10">
                <Camera className="h-3 w-3 md:h-4 md:w-4 animate-spin-slow" />
                ছবি গ্যালারি
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-1 md:mb-2 animate-fade-in-up">
                আমাদের <span className="text-yellow-300">স্মৃতি</span>
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg animate-fade-in-up animation-delay-200">
                শিক্ষা, বিকাশ ও উদযাপনের মুহূর্তগুলো ক্যাপচার করা
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-white/10 text-center min-w-[80px]">
                <div className="text-[8px] md:text-xs text-white/80 font-medium">মোট ছবি</div>
                <div className="font-bold text-sm md:text-lg">{galleryData.length}</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-2 md:px-4 md:py-2.5 rounded-xl border border-white/10 text-center min-w-[80px]">
                <div className="text-[8px] md:text-xs text-white/80 font-medium">বিভাগ</div>
                <div className="font-bold text-sm md:text-lg">৪</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Filters */}
      <section className="py-2 md:py-3 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-16 lg:top-20 z-20 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 items-stretch sm:items-center justify-between">
            <div className="hidden md:flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-2.5 py-1.5 lg:px-3.5 lg:py-2 rounded-lg lg:rounded-xl text-[10px] lg:text-xs font-medium transition-all duration-300 flex items-center gap-1 lg:gap-1.5 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-green-600 hover:scale-105"
                  }`}
                >
                  {category.icon}
                  <span className="hidden lg:inline">{category.label}</span>
                  <span className="lg:hidden">{category.label.split(" ")[0]}</span>
                </button>
              ))}
            </div>

            <div className="md:hidden flex gap-2 w-full">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex-1 px-3 py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 flex items-center justify-center gap-1.5 hover:bg-green-50 hover:text-green-600 transition-colors"
              >
                <Filter className="h-3.5 w-3.5" />
                ফিল্টার
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
              </button>
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-xs"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ছবি খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-xs w-full sm:w-40 lg:w-52"
                />
              </div>
              <button
                onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                className="p-1.5 bg-gray-100 rounded-lg hover:bg-green-100 hover:text-green-600 transition-all duration-300 hover:scale-105"
              >
                {viewMode === "grid" ? <List className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {isFilterOpen && (
            <div className="md:hidden mt-2 p-2.5 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex flex-wrap gap-1.5">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      setIsFilterOpen(false);
                    }}
                    className={`px-2.5 py-1.5 rounded-lg text-[10px] font-medium transition-all duration-300 flex items-center gap-1.5 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                        : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    {category.icon}
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mx-auto">
            {filteredGallery.length === 0 ? (
              <div className="text-center py-8 md:py-12">
                <div className="text-4xl md:text-5xl mb-3">📸</div>
                <h3 className="text-base md:text-lg font-semibold text-slate-800">কোন ছবি পাওয়া যায়নি</h3>
                <p className="text-gray-500 mt-1 text-xs md:text-sm">আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে দেখুন</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 mb-3">
                  <p className="text-[10px] md:text-xs text-gray-500">
                    দেখাচ্ছে <span className="font-semibold text-gray-700">{filteredGallery.length}</span> টি{" "}
                    <span className="font-semibold text-gray-700">{galleryData.length}</span> টি ছবির মধ্যে
                  </p>
                </div>

                <div className={`grid ${viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-3 md:gap-4`}>
                  {filteredGallery.map((item, index) => (
                    <div
                      key={item.id}
                      className={`group relative rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                        viewMode === "grid" ? "aspect-square" : "aspect-[16/9]"
                      } animate-fade-in-up animate-on-scroll`}
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                      onClick={() => openModal(item)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-2 left-2 z-10">
                        <span className={`${getCategoryColor(item.category)} text-white text-[8px] md:text-xs px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full flex items-center gap-1 md:gap-1.5`}>
                          {getCategoryIcon(item.category)}
                          {getCategoryLabel(item.category)}
                        </span>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-2 md:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                        <h3 className="text-xs md:text-sm lg:text-base font-bold line-clamp-1">{item.title}</h3>
                        <p className="text-[8px] md:text-xs text-white/80 line-clamp-1 md:line-clamp-2 mt-0.5 md:mt-1">{item.description}</p>
                        <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mt-1 md:mt-1.5 text-[8px] md:text-xs text-white/70">
                          <span className="flex items-center gap-0.5">
                            <Calendar className="h-2.5 w-2.5 md:h-3 md:w-3" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <Eye className="h-2.5 w-2.5 md:h-3 md:w-3" />
                            {item.views}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <Heart className="h-2.5 w-2.5 md:h-3 md:w-3" />
                            {item.likes}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-0.5 md:gap-1 mt-1">
                          {item.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="text-[6px] md:text-[8px] bg-white/20 px-1 md:px-1.5 py-0.5 rounded-full">
                              #{tag}
                            </span>
                          ))}
                          {item.tags.length > 2 && (
                            <span className="text-[6px] md:text-[8px] bg-white/20 px-1 md:px-1.5 py-0.5 rounded-full">
                              +{item.tags.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {filteredGallery.length > 0 && (
              <div className="mt-4 md:mt-6 text-center">
                <p className="text-[10px] md:text-xs text-gray-500">
                  {filteredGallery.length} টি ছবি দেখাচ্ছে (মোট {galleryData.length} টি)
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-xl md:rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-hidden animate-scale-in">
            <div className="relative">
              <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] bg-gray-900">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 md:top-4 md:right-4 p-1.5 md:p-2 bg-black/50 text-white rounded-lg md:rounded-xl hover:bg-black/70 transition-all duration-300"
                >
                  <X className="h-4 w-4 md:h-5 md:w-5" />
                </button>
              </div>

              <div className="p-4 md:p-6 lg:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 md:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                      <span className={`${getCategoryColor(selectedImage.category)} text-white text-[8px] md:text-xs px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full flex items-center gap-1 md:gap-1.5`}>
                        {getCategoryIcon(selectedImage.category)}
                        {getCategoryLabel(selectedImage.category)}
                      </span>
                      <span className="text-[8px] md:text-xs text-gray-500">{selectedImage.subCategory}</span>
                    </div>
                    <h2 className="text-base md:text-xl lg:text-2xl font-bold text-slate-800">{selectedImage.title}</h2>
                    <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">{selectedImage.description}</p>
                    
                    <div className="flex flex-wrap items-center gap-1.5 md:gap-3 mt-1.5 md:mt-2 text-[8px] md:text-xs text-gray-500">
                      <span className="flex items-center gap-0.5 md:gap-1">
                        <Calendar className="h-3 w-3 md:h-4 md:w-4" />
                        {selectedImage.date}
                      </span>
                      <span className="flex items-center gap-0.5 md:gap-1">
                        <MapPin className="h-3 w-3 md:h-4 md:w-4" />
                        {selectedImage.location}
                      </span>
                      <span className="flex items-center gap-0.5 md:gap-1">
                        <User className="h-3 w-3 md:h-4 md:w-4" />
                        {selectedImage.photographer}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-0.5 md:gap-1 mt-1.5 md:mt-2">
                      {selectedImage.tags.map((tag: string, idx: number) => (
                        <span key={idx} className="text-[7px] md:text-xs bg-gray-100 text-gray-600 px-1.5 md:px-2.5 py-0.5 md:py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 md:gap-5 mt-1.5 md:mt-2 text-[8px] md:text-xs text-gray-500">
                      <span className="flex items-center gap-0.5 md:gap-1">
                        <Eye className="h-3 w-3 md:h-4 md:w-4" />
                        {selectedImage.views} বার দেখা
                      </span>
                      <span className="flex items-center gap-0.5 md:gap-1">
                        <Heart className="h-3 w-3 md:h-4 md:w-4" />
                        {selectedImage.likes} লাইক
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-1.5 md:gap-2">
                    <button className="p-1.5 md:p-2.5 bg-green-50 text-green-600 rounded-lg md:rounded-xl hover:bg-green-100 transition-all duration-300 hover:scale-105">
                      <Download className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </button>
                    <button className="p-1.5 md:p-2.5 bg-blue-50 text-blue-600 rounded-lg md:rounded-xl hover:bg-blue-100 transition-all duration-300 hover:scale-105">
                      <Share2 className="h-3.5 w-3.5 md:h-4 md:w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

  
    </main>
  );
}