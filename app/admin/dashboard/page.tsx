
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  School,
  Users,
  GraduationCap,
  Megaphone,
  Award,
  FileText,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Clock,
  Eye,
  UserCheck,
  UserPlus,
  BarChart,
  PieChart,
  Activity,
  Sparkles,
  Star,
  Zap,
  CheckCircle,
  AlertCircle,
  Bell,
  MessageSquare,
  Download,
  RefreshCw,
  Settings,
  PlusCircle,
  ChevronRight,
  MoreVertical,
  X,
  Check,
  Printer,
  Share2,
  Info,
} from "lucide-react"

// ===== MOCK DATA (বর্ধিত) =====
const statsData = {
  totalClasses: 16,
  totalStudents: 4500,
  totalTeachers: 120,
  totalNotices: 8,
  totalResults: 11,
  totalApplications: 24,
}

// ৯টি কার্যক্রম (আগে ছিল ৫, যোগ করলাম ৪টি)
const recentActivities = [
  {
    id: 1,
    type: "student",
    message: "নতুন শিক্ষার্থী ভর্তি: মোঃ রহমান (১ম শ্রেণী)",
    time: "১০ মিনিট আগে",
    icon: UserPlus,
    color: "text-green-600",
    details:
      "মোঃ রহমান ১ম শ্রেণীতে ভর্তি হয়েছেন। তার পিতার নাম আব্দুল করিম, মাতার নাম সুলতানা বেগম। তিনি পলাশবাড়ী সরকারি প্রাথমিক বিদ্যালয় থেকে এসেছেন।",
  },
  {
    id: 2,
    type: "application",
    message: "নতুন ভর্তি আবেদন: সুলতানা আখতার",
    time: "২৫ মিনিট আগে",
    icon: FileText,
    color: "text-blue-600",
    details:
      "সুলতানা আখতার ৬ষ্ঠ শ্রেণীতে ভর্তি আবেদন করেছেন। আবেদন নম্বর: ২০২৬-০০২। আবেদনের অবস্থা: বিচারাধীন।",
  },
  {
    id: 3,
    type: "notice",
    message: "নতুন নোটিশ: ভর্তি বিজ্ঞপ্তি ২০২৬",
    time: "১ ঘন্টা আগে",
    icon: Megaphone,
    color: "text-purple-600",
    details:
      "ভর্তি বিজ্ঞপ্তি ২০২৬ প্রকাশিত হয়েছে। আবেদনের শেষ তারিখ ২৮ ফেব্রুয়ারি, ২০২৬। বিস্তারিত জানতে নোটিশ পেজ দেখুন।",
  },
  {
    id: 4,
    type: "result",
    message: "ফলাফল প্রকাশ: প্রথম সাময়িক পরীক্ষা ২০২৬",
    time: "২ ঘন্টা আগে",
    icon: Award,
    color: "text-red-600",
    details:
      "প্রথম সাময়িক পরীক্ষার ফলাফল প্রকাশিত হয়েছে। মোট ৪৫০ জন পরীক্ষার্থীর মধ্যে ৪৩২ জন উত্তীর্ণ হয়েছেন। উত্তীর্ণের হার ৯৬%।",
  },
  {
    id: 5,
    type: "teacher",
    message: "নতুন শিক্ষক যোগদান: মিসেস ফরিদা বেগম",
    time: "৩ ঘন্টা আগে",
    icon: GraduationCap,
    color: "text-orange-600",
    details:
      "মিসেস ফরিদা বেগম বিজ্ঞান বিভাগে শিক্ষক হিসেবে যোগদান করেছেন। তিনি রাজশাহী বিশ্ববিদ্যালয় থেকে এমএসসি করেছেন।",
  },
  // অতিরিক্ত ৪টি কার্যক্রম
  {
    id: 6,
    type: "student",
    message: "শিক্ষার্থী স্থানান্তর: রোকেয়া সুলতানা (৮ম শ্রেণী)",
    time: "৪ ঘন্টা আগে",
    icon: Users,
    color: "text-cyan-600",
    details:
      "রোকেয়া সুলতানা ৮ম শ্রেণী থেকে ৯ম শ্রেণীতে স্থানান্তরিত হয়েছেন। তার অভিভাবক অনুমোদন করেছেন।",
  },
  {
    id: 7,
    type: "result",
    message: "দ্বিতীয় সাময়িক পরীক্ষার সময়সূচী প্রকাশ",
    time: "৫ ঘন্টা আগে",
    icon: Calendar,
    color: "text-indigo-600",
    details:
      "দ্বিতীয় সাময়িক পরীক্ষার সময়সূচী প্রকাশিত হয়েছে। পরীক্ষা ১০ এপ্রিল, ২০২৬ থেকে শুরু হবে।",
  },
  {
    id: 8,
    type: "notice",
    message: "বিদ্যালয় বন্ধ ঘোষণা (শহীদ দিবস)",
    time: "৬ ঘন্টা আগে",
    icon: Bell,
    color: "text-gray-600",
    details:
      "২১ ফেব্রুয়ারি শহীদ দিবস উপলক্ষে বিদ্যালয় বন্ধ থাকবে। ২২ ফেব্রুয়ারি স্বাভাবিক ক্লাস হবে।",
  },
  {
    id: 9,
    type: "teacher",
    message: "শিক্ষক প্রশিক্ষণ কর্মশালা অনুষ্ঠিত",
    time: "৭ ঘন্টা আগে",
    icon: GraduationCap,
    color: "text-emerald-600",
    details:
      "সকল শিক্ষকের জন্য 'আধুনিক শিক্ষা পদ্ধতি' বিষয়ক প্রশিক্ষণ কর্মশালা অনুষ্ঠিত হয়েছে।",
  },
]

// ৬টি ইভেন্ট (আগে ছিল ৩, যোগ করলাম ৩টি)
const upcomingEvents = [
  {
    id: 1,
    title: "ভর্তি পরীক্ষা ২০২৬",
    date: "১৫ মার্চ, ২০২৬",
    time: "১০:০০ AM",
    type: "exam",
    description:
      "ভর্তি পরীক্ষা অনুষ্ঠিত হবে বিদ্যালয়ের অডিটোরিয়ামে। পরীক্ষার সময়সূচী প্রকাশিত হয়েছে।",
  },
  {
    id: 2,
    title: "অভিমুখীকরণ কর্মসূচি",
    date: "২০ মার্চ, ২০২৬",
    time: "০৯:৩০ AM",
    type: "orientation",
    description:
      "নতুন শিক্ষার্থীদের জন্য অভিমুখীকরণ কর্মসূচি অনুষ্ঠিত হবে। ক্যাম্পাস ট্যুর ও শ্রেণী বরাদ্দ থাকবে।",
  },
  {
    id: 3,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    date: "২৫ মার্চ, ২০২৬",
    time: "০৮:০০ AM",
    type: "sports",
    description:
      "বার্ষিক ক্রীড়া প্রতিযোগিতায় শিক্ষার্থীরা বিভিন্ন ইভেন্টে অংশগ্রহণ করবে। পুরস্কার বিতরণী অনুষ্ঠান থাকবে।",
  },
  // অতিরিক্ত ৩টি ইভেন্ট
  {
    id: 4,
    title: "বিজ্ঞান মেলা ২০২৬",
    date: "২৮ মার্চ, ২০২৬",
    time: "০৯:০০ AM",
    type: "exam",
    description:
      "বিদ্যালয় প্রাঙ্গণে বিজ্ঞান মেলা অনুষ্ঠিত হবে। শিক্ষার্থীরা তাদের বিজ্ঞান প্রকল্প প্রদর্শন করবে।",
  },
  {
    id: 5,
    title: "মাসিক অভিভাবক সভা",
    date: "৩০ মার্চ, ২০২৬",
    time: "০৩:০০ PM",
    type: "orientation",
    description:
      "মাসিক অভিভাবক সভা অনুষ্ঠিত হবে। শিক্ষার্থীদের অগ্রগতি নিয়ে আলোচনা করা হবে।",
  },
  {
    id: 6,
    title: "বর্ষবরণ অনুষ্ঠান ১৪৩২",
    date: "১৪ এপ্রিল, ২০২৬",
    time: "১০:০০ AM",
    type: "sports",
    description:
      "বাংলা নববর্ষ ১৪৩২ উপলক্ষে সাংস্কৃতিক অনুষ্ঠান ও মঙ্গল শোভাযাত্রা।",
  },
]

// শ্রেণী পারফরম্যান্স (অপরিবর্তিত)
const classPerformance = [
  {
    name: "প্রাথমিক",
    students: 450,
    passRate: 95,
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান"],
    passRates: [96, 94, 93, 97],
  },
  {
    name: "নিম্ন মাধ্যমিক",
    students: 353,
    passRate: 90,
    subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ইতিহাস"],
    passRates: [91, 89, 88, 92, 90],
  },
  {
    name: "মাধ্যমিক",
    students: 178,
    passRate: 96,
    subjects: [
      "বাংলা",
      "ইংরেজি",
      "গণিত",
      "পদার্থবিজ্ঞান",
      "রসায়ন",
      "জীববিজ্ঞান",
    ],
    passRates: [97, 95, 96, 97, 94, 95],
  },
  {
    name: "উচ্চ মাধ্যমিক",
    students: 153,
    passRate: 92,
    subjects: [
      "বাংলা",
      "ইংরেজি",
      "গণিত",
      "পদার্থবিজ্ঞান",
      "রসায়ন",
      "জীববিজ্ঞান",
      "আইসিটি",
    ],
    passRates: [93, 91, 92, 94, 90, 93, 92],
  },
]

// ৮টি আবেদন (আগে ছিল ৪, যোগ করলাম ৪টি)
const recentApplications = [
  {
    id: 1,
    name: "মোঃ রহমান",
    class: "১ম শ্রেণী",
    status: "pending",
    date: "২০২৬-০২-২৮",
    father: "আব্দুল করিম",
    mother: "সুলতানা বেগম",
    contact: "০১৭১২৩৪৫৬৭৮",
  },
  {
    id: 2,
    name: "সুলতানা আখতার",
    class: "৬ষ্ঠ শ্রেণী",
    status: "pending",
    date: "২০২৬-০২-২৭",
    father: "মোঃ রফিক",
    mother: "আয়েশা খাতুন",
    contact: "০১৭৮৭৬৫৪৩২১",
  },
  {
    id: 3,
    name: "কামাল হোসেন",
    class: "৯ম শ্রেণী",
    status: "approved",
    date: "২০২৬-০২-২৬",
    father: "মোঃ জসিম",
    mother: "রহিমা বেগম",
    contact: "০১৯১২৩৪৫৬৭৮",
  },
  {
    id: 4,
    name: "ফাতেমা বেগম",
    class: "১১শ শ্রেণী",
    status: "rejected",
    date: "২০২৬-০২-২৫",
    father: "মোঃ ইউসুফ",
    mother: "মরিয়ম খাতুন",
    contact: "০১৭৫৪৩২১০৯৮",
  },
  // অতিরিক্ত ৪টি আবেদন
  {
    id: 5,
    name: "আব্দুল্লাহ আল-মামুন",
    class: "২য় শ্রেণী",
    status: "pending",
    date: "২০২৬-০২-২৪",
    father: "মোঃ নুরুল ইসলাম",
    mother: "আমেনা বেগম",
    contact: "০১৭১১১২২৩৩৪",
  },
  {
    id: 6,
    name: "নুসরাত জাহান",
    class: "৭ম শ্রেণী",
    status: "approved",
    date: "২০২৬-০২-২৩",
    father: "মোঃ আলম",
    mother: "জেসমিন আক্তার",
    contact: "০১৭২২৩৩৪৪৫৫",
  },
  {
    id: 7,
    name: "রিফাত আরা",
    class: "১০ম শ্রেণী",
    status: "pending",
    date: "২০২৬-০২-২২",
    father: "মোঃ শাহিন",
    mother: "শিরিন আক্তার",
    contact: "০১৭৩৩৪৪৫৫৬৬",
  },
  {
    id: 8,
    name: "মেহেদী হাসান",
    class: "১২শ শ্রেণী",
    status: "rejected",
    date: "২০২৬-০২-২১",
    father: "মোঃ জাকির",
    mother: "রহিমা খাতুন",
    contact: "০১৭৪৪৫৫৬৬৭৭",
  },
]

// ===== HELPER =====
const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
    case "approved":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    case "rejected":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
  }
}

export default function AdminDashboard() {
  const [greeting, setGreeting] = useState("")
  const [currentTime, setCurrentTime] = useState("")
  const [showToast, setShowToast] = useState<{
    message: string
    type: "success" | "info" | "error"
  } | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)

  // State for "Show All" toggles
  const [showAllActivities, setShowAllActivities] = useState(false)
  const [showAllEvents, setShowAllEvents] = useState(false)
  const [showAllApplications, setShowAllApplications] = useState(false)

  // Modal states
  const [detailModalOpen, setDetailModalOpen] = useState(false)
  const [detailModalData, setDetailModalData] = useState<any>(null)
  const [detailModalType, setDetailModalType] = useState<
    "activity" | "event" | "class" | "application"
  >("activity")
  const [settingsModalOpen, setSettingsModalOpen] = useState(false)

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("শুভ সকাল")
    else if (hour < 18) setGreeting("শুভ বিকেল")
    else setGreeting("শুভ সন্ধ্যা")

    const now = new Date()
    setCurrentTime(
      now.toLocaleString("bn-BD", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    )
  }, [])

  const totalStudents = statsData.totalStudents
  const totalPassed = Math.round(totalStudents * 0.94)
  const overallPassRate = `${Math.round((totalPassed / totalStudents) * 100)}%`

  // Handlers
  const handleRefresh = () => {
    setShowToast({ message: "ড্যাশবোর্ড রিফ্রেশ করা হয়েছে", type: "success" })
    setTimeout(() => setShowToast(null), 3000)
  }

  const handleDownload = () => {
    setShowToast({ message: "রিপোর্ট ডাউনলোড শুরু হয়েছে", type: "info" })
    setTimeout(() => setShowToast(null), 3000)
  }

  const handleSettings = () => {
    setSettingsModalOpen(true)
  }

  const closeSettingsModal = () => {
    setSettingsModalOpen(false)
  }

  const handleMoreAction = (id: number, action: string) => {
    setDropdownOpen(null)
    if (action === "বিস্তারিত") {
      const activity = recentActivities.find((a) => a.id === id)
      if (activity) {
        setDetailModalData(activity)
        setDetailModalType("activity")
        setDetailModalOpen(true)
        return
      }
    }
    setShowToast({ message: `"${action}" একশন নেওয়া হয়েছে`, type: "success" })
    setTimeout(() => setShowToast(null), 3000)
  }

  const toggleDropdown = (id: number) => {
    setDropdownOpen(dropdownOpen === id ? null : id)
  }

  const openDetailModal = (
    data: any,
    type: "activity" | "event" | "class" | "application"
  ) => {
    setDetailModalData(data)
    setDetailModalType(type)
    setDetailModalOpen(true)
  }

  // Toggle show all
  const toggleShowAllActivities = () => setShowAllActivities(!showAllActivities)
  const toggleShowAllEvents = () => setShowAllEvents(!showAllEvents)
  const toggleShowAllApplications = () =>
    setShowAllApplications(!showAllApplications)

  // Determine which items to show
  const displayedActivities = showAllActivities
    ? recentActivities
    : recentActivities.slice(0, 5)
  const displayedEvents = showAllEvents
    ? upcomingEvents
    : upcomingEvents.slice(0, 3)
  const displayedApplications = showAllApplications
    ? recentApplications
    : recentApplications.slice(0, 4)

  // Render detail content
  const renderDetailContent = () => {
    if (!detailModalData) return null
    if (detailModalType === "activity") {
      return (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">কার্যক্রমের বিবরণ</p>
          <p className="text-gray-700">{detailModalData.details}</p>
          <p className="text-xs text-gray-400">সময়: {detailModalData.time}</p>
        </div>
      )
    } else if (detailModalType === "event") {
      return (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">ইভেন্টের বিবরণ</p>
          <p className="text-gray-700">{detailModalData.description}</p>
          <p className="text-xs text-gray-400">
            তারিখ: {detailModalData.date} • সময়: {detailModalData.time}
          </p>
        </div>
      )
    } else if (detailModalType === "class") {
      return (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            শ্রেণীর বিস্তারিত পারফরম্যান্স
          </p>
          <p className="font-semibold">
            শিক্ষার্থী: {detailModalData.students} জন
          </p>
          <p className="font-semibold">
            পাসের হার: {detailModalData.passRate}%
          </p>
          <div className="mt-2">
            <p className="text-sm font-medium">বিষয়ভিত্তিক ফলাফল:</p>
            <div className="mt-1 space-y-1">
              {detailModalData.subjects.map((sub: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <span className="w-24 text-gray-600">{sub}</span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-red-400"
                      style={{ width: `${detailModalData.passRates[idx]}%` }}
                    />
                  </div>
                  <span className="text-xs font-medium">
                    {detailModalData.passRates[idx]}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    } else if (detailModalType === "application") {
      return (
        <div className="space-y-3">
          <p className="text-sm text-gray-500">আবেদনের বিস্তারিত</p>
          <p>
            <span className="font-medium">নাম:</span> {detailModalData.name}
          </p>
          <p>
            <span className="font-medium">শ্রেণী:</span> {detailModalData.class}
          </p>
          <p>
            <span className="font-medium">পিতা:</span> {detailModalData.father}
          </p>
          <p>
            <span className="font-medium">মাতা:</span> {detailModalData.mother}
          </p>
          <p>
            <span className="font-medium">যোগাযোগ:</span>{" "}
            {detailModalData.contact}
          </p>
          <p>
            <span className="font-medium">তারিখ:</span> {detailModalData.date}
          </p>
          <p>
            <span className="font-medium">স্ট্যাটাস:</span>{" "}
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-medium ${getStatusColor(detailModalData.status)}`}
            >
              {detailModalData.status === "pending"
                ? "বিচারাধীন"
                : detailModalData.status === "approved"
                  ? "অ্যাপ্রুভড"
                  : "রিজেক্টেড"}
            </span>
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-900">
      {/* Toast Notification */}
      {showToast && (
        <div className="animate-fade-in-up fixed right-6 bottom-6 z-50">
          <div
            className={`flex items-center gap-3 rounded-xl px-6 py-3 text-white shadow-2xl ${
              showToast.type === "success"
                ? "bg-green-600"
                : showToast.type === "error"
                  ? "bg-red-600"
                  : "bg-blue-600"
            }`}
          >
            {showToast.type === "success" && (
              <CheckCircle className="h-5 w-5" />
            )}
            {showToast.type === "error" && <AlertCircle className="h-5 w-5" />}
            {showToast.type === "info" && <Info className="h-5 w-5" />}
            <span className="text-sm font-medium">{showToast.message}</span>
            <button
              onClick={() => setShowToast(null)}
              className="ml-2 hover:opacity-80"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {settingsModalOpen && (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="animate-scale-in w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">
                <Settings className="h-5 w-5 text-green-600" />
                সেটিংস
              </h3>
              <button
                onClick={closeSettingsModal}
                className="rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 dark:bg-gray-700/50">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  ডার্ক মোড
                </span>
                <button className="rounded-lg bg-green-100 px-3 py-1 text-sm font-medium text-green-700 transition-colors hover:bg-green-200">
                  টগল করুন
                </button>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 dark:bg-gray-700/50">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  নোটিফিকেশন
                </span>
                <button className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-200">
                  সেটিংস
                </button>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3 dark:bg-gray-700/50">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  ভাষা
                </span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  বাংলা
                </span>
              </div>
            </div>
            <button
              onClick={closeSettingsModal}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-green-500 to-green-600 py-2.5 font-medium text-white transition-all duration-300 hover:from-green-600 hover:to-green-700"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {detailModalOpen && detailModalData && (
        <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="animate-scale-in max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800 dark:text-white">
                <Info className="h-5 w-5 text-green-600" />
                বিস্তারিত তথ্য
              </h3>
              <button
                onClick={() => setDetailModalOpen(false)}
                className="rounded-lg p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            <div className="mb-4 border-b border-gray-200 pb-3 dark:border-gray-700">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                {detailModalType === "activity"
                  ? detailModalData.message
                  : detailModalType === "event"
                    ? detailModalData.title
                    : detailModalType === "class"
                      ? detailModalData.name
                      : detailModalData.name}
              </h4>
            </div>
            {renderDetailContent()}
            <button
              onClick={() => setDetailModalOpen(false)}
              className="mt-4 w-full rounded-xl bg-gray-200 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              বন্ধ করুন
            </button>
          </div>
        </div>
      )}

      {/* Welcome Header */}
      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="flex items-center gap-2 text-2xl font-bold text-slate-800 md:text-3xl dark:text-white">
              <LayoutDashboard className="h-7 w-7 text-green-600 dark:text-green-400" />
              ড্যাশবোর্ড ওভারভিউ
            </h1>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              {greeting}! আজ {currentTime}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="rounded-xl border border-gray-200 bg-white p-2.5 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <RefreshCw className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={handleDownload}
              className="rounded-xl border border-gray-200 bg-white p-2.5 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Download className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button
              onClick={handleSettings}
              className="rounded-xl bg-gradient-to-r from-green-500 to-green-600 p-2.5 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-green-600 hover:to-green-700"
            >
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid (Same as before, unchanged) */}
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {/* ... (keep as before) ... */}
        <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                শ্রেণী
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800 dark:text-white">
                {statsData.totalClasses}
              </p>
            </div>
            <div className="rounded-xl bg-blue-50 p-3 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/30">
              <School className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
            <ArrowUpRight className="h-3 w-3" /> <span>গত মাসে +২</span>
          </div>
        </div>
        <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                শিক্ষার্থী
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800 dark:text-white">
                {statsData.totalStudents}
              </p>
            </div>
            <div className="rounded-xl bg-green-50 p-3 transition-transform duration-300 group-hover:scale-110 dark:bg-green-900/30">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
            <ArrowUpRight className="h-3 w-3" /> <span>গত মাসে +১৫</span>
          </div>
        </div>
        <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                শিক্ষক
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800 dark:text-white">
                {statsData.totalTeachers}
              </p>
            </div>
            <div className="rounded-xl bg-purple-50 p-3 transition-transform duration-300 group-hover:scale-110 dark:bg-purple-900/30">
              <GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
            <ArrowUpRight className="h-3 w-3" /> <span>গত মাসে +৩</span>
          </div>
        </div>
        <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                নোটিশ
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800 dark:text-white">
                {statsData.totalNotices}
              </p>
            </div>
            <div className="rounded-xl bg-orange-50 p-3 transition-transform duration-300 group-hover:scale-110 dark:bg-orange-900/30">
              <Megaphone className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
            <ArrowUpRight className="h-3 w-3" /> <span>গত সপ্তাহে +৩</span>
          </div>
        </div>
        <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                ফলাফল
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800 dark:text-white">
                {statsData.totalResults}
              </p>
            </div>
            <div className="rounded-xl bg-red-50 p-3 transition-transform duration-300 group-hover:scale-110 dark:bg-red-900/30">
              <Award className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
            <ArrowUpRight className="h-3 w-3" /> <span>গত মাসে +৪</span>
          </div>
        </div>
        <div className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                আবেদন
              </p>
              <p className="mt-1 text-2xl font-bold text-slate-800 dark:text-white">
                {statsData.totalApplications}
              </p>
            </div>
            <div className="rounded-xl bg-indigo-50 p-3 transition-transform duration-300 group-hover:scale-110 dark:bg-indigo-900/30">
              <FileText className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-red-600 dark:text-red-400">
            <ArrowUpRight className="h-3 w-3" /> <span>বিচারাধীন: ১২</span>
          </div>
        </div>
      </div>

      {/* Charts & Performance */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Class-wise Performance */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg lg:col-span-2 dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white">
              <BarChart className="h-5 w-5 text-green-600 dark:text-green-400" />
              শ্রেণীভিত্তিক পারফরম্যান্স
            </h3>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              পাসের হার
            </span>
          </div>
          <div className="space-y-4">
            {classPerformance.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="w-24 text-sm font-medium text-slate-700 dark:text-gray-300">
                  {item.name}
                </span>
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-green-400 to-red-400 transition-all duration-1000"
                    style={{ width: `${item.passRate}%` }}
                  />
                </div>
                <span className="min-w-[50px] text-right text-sm font-semibold text-slate-800 dark:text-white">
                  {item.passRate}%
                </span>
                <span className="min-w-[60px] text-xs text-gray-400 dark:text-gray-500">
                  {item.students} জন
                </span>
                <button
                  onClick={() => openDetailModal(item, "class")}
                  className="rounded-lg bg-blue-50 p-1.5 text-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
                  title="বিস্তারিত"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white">
            <PieChart className="h-5 w-5 text-green-600 dark:text-green-400" />
            দ্রুত পরিসংখ্যান
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-green-50 p-3 dark:bg-green-900/20">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                মোট শিক্ষার্থী
              </span>
              <span className="text-lg font-bold text-green-700 dark:text-green-400">
                {statsData.totalStudents}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-blue-50 p-3 dark:bg-blue-900/20">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                মোট উত্তীর্ণ
              </span>
              <span className="text-lg font-bold text-blue-700 dark:text-blue-400">
                {totalPassed}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-yellow-50 p-3 dark:bg-yellow-900/20">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                উত্তীর্ণের হার
              </span>
              <span className="text-lg font-bold text-yellow-700 dark:text-yellow-400">
                {overallPassRate}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-purple-50 p-3 dark:bg-purple-900/20">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                পেন্ডিং আবেদন
              </span>
              <span className="text-lg font-bold text-purple-700 dark:text-purple-400">
                {
                  recentApplications.filter((a) => a.status === "pending")
                    .length
                }
              </span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-red-50 p-3 dark:bg-red-900/20">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                আজকের ইভেন্ট
              </span>
              <span className="text-lg font-bold text-red-700 dark:text-red-400">
                {upcomingEvents.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity & Upcoming Events */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity with "সব দেখুন" toggle */}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white">
              <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
              সাম্প্রতিক কার্যক্রম
            </h3>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              লাইভ আপডেট
            </span>
          </div>
          <div className="space-y-3">
            {displayedActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <div
                  className={`rounded-xl bg-gray-100 p-2 dark:bg-gray-700 ${activity.color}`}
                >
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {activity.message}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
                    {activity.time}
                  </p>
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown(activity.id)}
                    className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                  >
                    <MoreVertical className="h-4 w-4" />
                  </button>
                  {dropdownOpen === activity.id && (
                    <div className="animate-fade-in-up absolute right-0 z-10 mt-2 w-48 rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                      <button
                        onClick={() =>
                          handleMoreAction(activity.id, "বিস্তারিত")
                        }
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                      >
                        <Eye className="h-4 w-4" /> বিস্তারিত
                      </button>
                      <button
                        onClick={() => handleMoreAction(activity.id, "শেয়ার")}
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                      >
                        <Share2 className="h-4 w-4" /> শেয়ার
                      </button>
                      <button
                        onClick={() => handleMoreAction(activity.id, "প্রিন্ট")}
                        className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                      >
                        <Printer className="h-4 w-4" /> প্রিন্ট
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-end border-t border-gray-100 pt-4 dark:border-gray-700">
            <button
              onClick={toggleShowAllActivities}
              className="flex items-center gap-1 text-xs text-green-600 transition-all hover:gap-2 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
            >
              {showAllActivities ? "সংক্ষিপ্ত দেখুন" : "সব দেখুন"}{" "}
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Upcoming Events & Quick Actions */}
        <div className="space-y-6">
          {/* Upcoming Events with "সব দেখুন" toggle */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white">
                <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
                আসন্ন ইভেন্ট
              </h3>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                আজ থেকে
              </span>
            </div>
            <div className="space-y-3">
              {displayedEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 p-3 transition-colors duration-200 hover:border-green-200 dark:border-gray-700 dark:hover:border-green-700"
                >
                  <div
                    className={`rounded-xl p-2 ${
                      event.type === "exam"
                        ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                        : event.type === "orientation"
                          ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                    }`}
                  >
                    <Calendar className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-700 dark:text-gray-300">
                      {event.title}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {event.date} • {event.time}
                    </p>
                  </div>
                  <button
                    onClick={() => openDetailModal(event, "event")}
                    className="rounded-lg bg-blue-50 p-1.5 text-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
                    title="বিস্তারিত"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-end border-t border-gray-100 pt-4 dark:border-gray-700">
              <button
                onClick={toggleShowAllEvents}
                className="flex items-center gap-1 text-xs text-green-600 transition-all hover:gap-2 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
              >
                {showAllEvents ? "সংক্ষিপ্ত দেখুন" : "সব দেখুন"}{" "}
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-green-50 to-red-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:from-green-900/20 dark:to-red-900/20">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white">
              <Zap className="h-5 w-5 text-yellow-500 dark:text-yellow-400" />
              দ্রুত অ্যাকশন
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/admin/students/add"
                className="group rounded-xl bg-white p-3 text-center transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800"
              >
                <UserPlus className="mx-auto mb-1 h-6 w-6 text-green-600 transition-transform group-hover:scale-110 dark:text-green-400" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  শিক্ষার্থী যোগ
                </span>
              </Link>
              <Link
                href="/admin/notices/add"
                className="group rounded-xl bg-white p-3 text-center transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800"
              >
                <Megaphone className="mx-auto mb-1 h-6 w-6 text-orange-600 transition-transform group-hover:scale-110 dark:text-orange-400" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  নতুন নোটিশ
                </span>
              </Link>
              <Link
                href="/admin/results/add"
                className="group rounded-xl bg-white p-3 text-center transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800"
              >
                <Award className="mx-auto mb-1 h-6 w-6 text-red-600 transition-transform group-hover:scale-110 dark:text-red-400" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  ফলাফল যোগ
                </span>
              </Link>
              <Link
                href="/admin/applications"
                className="group rounded-xl bg-white p-3 text-center transition-all hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800"
              >
                <FileText className="mx-auto mb-1 h-6 w-6 text-indigo-600 transition-transform group-hover:scale-110 dark:text-indigo-400" />
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  আবেদন দেখুন
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Applications Table with "সব দেখুন" toggle */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-slate-800 dark:text-white">
            <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
            সাম্প্রতিক ভর্তি আবেদন
          </h3>
          <button
            onClick={toggleShowAllApplications}
            className="flex items-center gap-1 text-sm text-green-600 transition-all hover:gap-2 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300"
          >
            {showAllApplications ? "সংক্ষিপ্ত দেখুন" : "সব দেখুন"}{" "}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700/50">
                <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                  নাম
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                  শ্রেণী
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                  তারিখ
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                  স্ট্যাটাস
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                  একশন
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {displayedApplications.map((app) => (
                <tr
                  key={app.id}
                  className="transition-colors duration-200 hover:bg-green-50/50 dark:hover:bg-green-900/10"
                >
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-gray-200">
                    {app.name}
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-gray-300">
                    {app.class}
                  </td>
                  <td className="px-4 py-3 text-slate-700 dark:text-gray-300">
                    {app.date}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${getStatusColor(app.status)}`}
                    >
                      {app.status === "pending" && "বিচারাধীন"}
                      {app.status === "approved" && "অ্যাপ্রুভড"}
                      {app.status === "rejected" && "রিজেক্টেড"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => openDetailModal(app, "application")}
                      className="rounded-lg bg-blue-50 p-1.5 text-blue-600 transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
                      title="বিস্তারিত"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
