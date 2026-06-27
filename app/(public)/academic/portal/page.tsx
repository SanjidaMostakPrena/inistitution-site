"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  Search,
  Download,
  Eye,
  FileText,
  Grid,
  List,
  Users,
  ArrowLeft,
  Upload,
  ChevronDown,
  BookOpen,
  GraduationCap,
  Layers,
  Award,
  TrendingUp,
  Sparkles,
  CheckCircle,
  Plus,
  Trash2,
  Edit,
  Bell,
  MapPin,
  XCircle,
  School,
  Building2,
  ClipboardList,
  PenTool,
  FlaskConical,
} from "lucide-react";

// Custom Flask component
const Flask = ({ className }: { className?: string }) => (
  <FlaskConical className={className} />
);

export default function AcademicPage() {
  const [activeTab, setActiveTab] = useState("classes");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentMonth, setCurrentMonth] = useState("জানুয়ারি");
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [notificationCount, setNotificationCount] = useState(5);
  const [expandedCurriculum, setExpandedCurriculum] = useState<number | null>(null);
  const [expandedClass, setExpandedClass] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for scroll animations
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const months = [
    "জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন",
    "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"
  ];

  const daysInMonth = 31;
  const firstDayOfMonth = 3;

  const calendarEvents = [
    { date: 5, title: "পাঠ্যক্রম পর্যালোচনা সভা", type: "meeting" },
    { date: 8, title: "এনসিটিবি কর্মশালা", type: "event" },
    { date: 12, title: "একাডেমিক কাউন্সিল সভা", type: "meeting" },
    { date: 15, title: "মধ্যবর্তী পরীক্ষা শুরু", type: "exam" },
    { date: 20, title: "বিজ্ঞান মেলা", type: "event" },
    { date: 22, title: "শিক্ষক প্রশিক্ষণ সেশন", type: "training" },
    { date: 25, title: "অভিভাবক-শিক্ষক সম্মেলন", type: "meeting" },
    { date: 28, title: "ক্রীড়া দিবস", type: "event" },
    { date: 30, title: "মেয়াদ শেষ", type: "holiday" },
  ];

  // Class & Department Data
  const classData = [
    {
      id: 1,
      name: "১ম শ্রেণী",
      level: "প্রাথমিক",
      sections: 3,
      students: 95,
      teachers: 8,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"],
      room: "১০১-১০৩",
      stream: "সাধারণ"
    },
    {
      id: 2,
      name: "২য় শ্রেণী",
      level: "প্রাথমিক",
      sections: 3,
      students: 90,
      teachers: 8,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"],
      room: "১০৪-১০৬",
      stream: "সাধারণ"
    },
    {
      id: 3,
      name: "৩য় শ্রেণী",
      level: "প্রাথমিক",
      sections: 3,
      students: 88,
      teachers: 8,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"],
      room: "১০৭-১০৯",
      stream: "সাধারণ"
    },
    {
      id: 4,
      name: "৪র্থ শ্রেণী",
      level: "প্রাথমিক",
      sections: 3,
      students: 92,
      teachers: 8,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"],
      room: "১১০-১১২",
      stream: "সাধারণ"
    },
    {
      id: 5,
      name: "৫ম শ্রেণী",
      level: "প্রাথমিক",
      sections: 3,
      students: 85,
      teachers: 8,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"],
      room: "১১৩-১১৫",
      stream: "সাধারণ"
    },
    {
      id: 6,
      name: "৬ষ্ঠ শ্রেণী",
      level: "নিম্ন মাধ্যমিক",
      sections: 4,
      students: 120,
      teachers: 12,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম", "আইসিটি"],
      room: "২০১-২০৪",
      stream: "সাধারণ"
    },
    {
      id: 7,
      name: "৭ম শ্রেণী",
      level: "নিম্ন মাধ্যমিক",
      sections: 4,
      students: 115,
      teachers: 12,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম", "আইসিটি"],
      room: "২০৫-২০৮",
      stream: "সাধারণ"
    },
    {
      id: 8,
      name: "৮ম শ্রেণী",
      level: "নিম্ন মাধ্যমিক",
      sections: 4,
      students: 118,
      teachers: 12,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম", "আইসিটি"],
      room: "২০৯-২১২",
      stream: "সাধারণ"
    },
    {
      id: 9,
      name: "৯ম শ্রেণী",
      level: "মাধ্যমিক",
      sections: 3,
      students: 90,
      teachers: 14,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম"],
      room: "৩০১-৩০৩",
      stream: "বিজ্ঞান"
    },
    {
      id: 10,
      name: "১০ম শ্রেণী",
      level: "মাধ্যমিক",
      sections: 3,
      students: 88,
      teachers: 14,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম"],
      room: "৩০৪-৩০৬",
      stream: "বিজ্ঞান"
    },
    {
      id: 11,
      name: "১১শ শ্রেণী (বিজ্ঞান)",
      level: "উচ্চ মাধ্যমিক",
      sections: 2,
      students: 60,
      teachers: 10,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "আইসিটি"],
      room: "৪০১-৪০২",
      stream: "বিজ্ঞান"
    },
    {
      id: 12,
      name: "১১শ শ্রেণী (বাণিজ্য)",
      level: "উচ্চ মাধ্যমিক",
      sections: 2,
      students: 55,
      teachers: 10,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "হিসাববিজ্ঞান", "ব্যবসায় শিক্ষা", "অর্থনীতি", "আইসিটি"],
      room: "৪০৩-৪০৪",
      stream: "বাণিজ্য"
    },
    {
      id: 13,
      name: "১১শ শ্রেণী (মানবিক)",
      level: "উচ্চ মাধ্যমিক",
      sections: 1,
      students: 30,
      teachers: 8,
      subjects: ["বাংলা", "ইংরেজি", "ইতিহাস", "ভূগোল", "রাষ্ট্রবিজ্ঞান", "সমাজবিজ্ঞান", "আইসিটি"],
      room: "৪০৫",
      stream: "মানবিক"
    },
    {
      id: 14,
      name: "১২শ শ্রেণী (বিজ্ঞান)",
      level: "উচ্চ মাধ্যমিক",
      sections: 2,
      students: 58,
      teachers: 10,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "আইসিটি"],
      room: "৪০৬-৪০৭",
      stream: "বিজ্ঞান"
    },
    {
      id: 15,
      name: "১২শ শ্রেণী (বাণিজ্য)",
      level: "উচ্চ মাধ্যমিক",
      sections: 2,
      students: 52,
      teachers: 10,
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "হিসাববিজ্ঞান", "ব্যবসায় শিক্ষা", "অর্থনীতি", "আইসিটি"],
      room: "৪০৮-৪০৯",
      stream: "বাণিজ্য"
    },
    {
      id: 16,
      name: "১২শ শ্রেণী (মানবিক)",
      level: "উচ্চ মাধ্যমিক",
      sections: 1,
      students: 28,
      teachers: 8,
      subjects: ["বাংলা", "ইংরেজি", "ইতিহাস", "ভূগোল", "রাষ্ট্রবিজ্ঞান", "সমাজবিজ্ঞান", "আইসিটি"],
      room: "৪১০",
      stream: "মানবিক"
    }
  ];

  // Department Data
  const departmentData = [
    {
      id: 1,
      name: "বিজ্ঞান বিভাগ",
      code: "বিজ্ঞান",
      head: "ড. মোঃ রহমান",
      teachers: 25,
      subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "গণিত"],
      labs: 4,
      description: "বিজ্ঞান বিভাগ - ব্যাপক বিজ্ঞান শিক্ষা প্রদান"
    },
    {
      id: 2,
      name: "চারু ও মানবিক বিভাগ",
      code: "মানবিক",
      head: "অধ্যাপক সুলতানা আহমেদ",
      teachers: 18,
      subjects: ["বাংলা", "ইংরেজি", "ইতিহাস", "ভূগোল", "রাষ্ট্রবিজ্ঞান", "সমাজবিজ্ঞান"],
      labs: 2,
      description: "চারু ও মানবিক বিভাগ - সৃজনশীলতা ও সমালোচনামূলক চিন্তা"
    },
    {
      id: 3,
      name: "বাণিজ্য বিভাগ",
      code: "বাণিজ্য",
      head: "মোঃ কামাল হোসেন",
      teachers: 15,
      subjects: ["হিসাববিজ্ঞান", "ব্যবসায় শিক্ষা", "অর্থনীতি", "গণিত"],
      labs: 1,
      description: "বাণিজ্য বিভাগ - ভবিষ্যতের ব্যবসায়ী নেতা তৈরী"
    },
    {
      id: 4,
      name: "আইসিটি বিভাগ",
      code: "আইসিটি",
      head: "মিসেস ফরিদা আখতার",
      teachers: 12,
      subjects: ["কম্পিউটার বিজ্ঞান", "আইসিটি", "প্রোগ্রামিং", "ডেটাবেস ব্যবস্থাপনা"],
      labs: 3,
      description: "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ"
    },
    {
      id: 5,
      name: "ভাষা বিভাগ",
      code: "ভাষা",
      head: "ড. আয়েশা খান",
      teachers: 10,
      subjects: ["বাংলা", "ইংরেজি", "আরবি", "উর্দু"],
      labs: 1,
      description: "ভাষা বিভাগ - ভাষাগত দক্ষতা উন্নয়ন"
    }
  ];

  const curriculumData = [
    {
      id: 1,
      title: "জাতীয় পাঠ্যক্রম ২০২৬",
      type: "nctb",
      version: "৩.০",
      date: "২০২৬-০১-১৫",
      status: "সক্রিয়",
      description: "সব স্তরের জন্য ব্যাপক জাতীয় পাঠ্যক্রম কাঠামো",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "সামাজিক অধ্যয়ন"],
      classes: ["১-১০"],
      file: "nctb-curriculum-2026.pdf",
      size: "২.৪ MB"
    },
    {
      id: 2,
      title: "প্রাথমিক শিক্ষা পাঠ্যক্রম",
      type: "primary",
      version: "২.১",
      date: "২০২৬-০১-১০",
      status: "সক্রিয়",
      description: "১ম-৫ম শ্রেণীর জন্য পাঠ্যক্রম - মৌলিক দক্ষতা",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা"],
      classes: ["১-৫"],
      file: "primary-curriculum.pdf",
      size: "১.৮ MB"
    },
    {
      id: 3,
      title: "মাধ্যমিক শিক্ষা পাঠ্যক্রম",
      type: "secondary",
      version: "২.০",
      date: "২০২৬-০১-১২",
      status: "সক্রিয়",
      description: "৬ষ্ঠ-১০ম শ্রেণীর জন্য পাঠ্যক্রম - এসএসসি প্রস্তুতি",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "ইতিহাস", "ভূগোল"],
      classes: ["৬-১০"],
      file: "secondary-curriculum.pdf",
      size: "২.১ MB"
    },
    {
      id: 4,
      title: "উচ্চ মাধ্যমিক পাঠ্যক্রম",
      type: "higher",
      version: "১.৫",
      date: "২০২৬-০১-১৪",
      status: "সক্রিয়",
      description: "১১শ-১২শ শ্রেণীর জন্য পাঠ্যক্রম - এইচএসসি প্রস্তুতি",
      subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "আইসিটি"],
      classes: ["১১-১২"],
      file: "higher-secondary-curriculum.pdf",
      size: "২.৬ MB"
    },
    {
      id: 5,
      title: "এসটিইএম শিক্ষা কাঠামো",
      type: "special",
      version: "১.০",
      date: "২০২৬-০১-১৮",
      status: "পর্যালোচনাধীন",
      description: "বিজ্ঞান, প্রযুক্তি, প্রকৌশল, গণিতে বিশেষায়িত পাঠ্যক্রম",
      subjects: ["পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "গণিত", "কম্পিউটার বিজ্ঞান", "প্রকৌশল"],
      classes: ["৬-১২"],
      file: "stem-curriculum.pdf",
      size: "৩.২ MB"
    }
  ];

  const classRoutines = [
    { 
      id: 1, 
      class: "১ম শ্রেণী", 
      file: "class-1-routine.pdf", 
      size: "২৪৫ KB", 
      date: "২০২৬-০১-১৫", 
      type: "primary",
      teacher: "মিসেস শর্মা",
      students: 35,
      room: "১০১"
    },
    { 
      id: 2, 
      class: "২য় শ্রেণী", 
      file: "class-2-routine.pdf", 
      size: "২৫৬ KB", 
      date: "২০২৬-০১-১৫", 
      type: "primary",
      teacher: "মোঃ কুমার",
      students: 32,
      room: "১০২"
    },
    { 
      id: 3, 
      class: "৩য় শ্রেণী", 
      file: "class-3-routine.pdf", 
      size: "২৩৪ KB", 
      date: "২০২৬-০১-১৫", 
      type: "primary",
      teacher: "মিসেস প্যাটেল",
      students: 30,
      room: "১০৩"
    },
    { 
      id: 4, 
      class: "৪র্থ শ্রেণী", 
      file: "class-4-routine.pdf", 
      size: "২৬৭ KB", 
      date: "২০২৬-০১-১৫", 
      type: "primary",
      teacher: "মোঃ সিং",
      students: 33,
      room: "১০৪"
    },
    { 
      id: 5, 
      class: "৫ম শ্রেণী", 
      file: "class-5-routine.pdf", 
      size: "২৭৮ KB", 
      date: "২০২৬-০১-১৫", 
      type: "primary",
      teacher: "মিসেস গুপ্ত",
      students: 31,
      room: "১০৫"
    },
    { 
      id: 6, 
      class: "৬ষ্ঠ শ্রেণী", 
      file: "class-6-routine.pdf", 
      size: "২৮৯ KB", 
      date: "২০২৬-০১-১৫", 
      type: "junior",
      teacher: "মোঃ ভার্মা",
      students: 28,
      room: "২০১"
    },
    { 
      id: 7, 
      class: "৭ম শ্রেণী", 
      file: "class-7-routine.pdf", 
      size: "৩০১ KB", 
      date: "২০২৬-০১-১৫", 
      type: "junior",
      teacher: "মিসেস রেড্ডি",
      students: 27,
      room: "২০২"
    },
    { 
      id: 8, 
      class: "৮ম শ্রেণী", 
      file: "class-8-routine.pdf", 
      size: "৩১২ KB", 
      date: "২০২৬-০১-১৫", 
      type: "junior",
      teacher: "মোঃ রাও",
      students: 29,
      room: "২০৩"
    },
    { 
      id: 9, 
      class: "৯ম শ্রেণী", 
      file: "class-9-routine.pdf", 
      size: "৩৩৪ KB", 
      date: "২০২৬-০১-১৫", 
      type: "secondary",
      teacher: "মিসেস নায়ার",
      students: 26,
      room: "৩০১"
    },
    { 
      id: 10, 
      class: "১০ম শ্রেণী", 
      file: "class-10-routine.pdf", 
      size: "৩৪৫ KB", 
      date: "২০২৬-০১-১৫", 
      type: "secondary",
      teacher: "মোঃ মেনন",
      students: 25,
      room: "৩০২"
    },
  ];

  const examRoutines = [
    { id: 1, exam: "মধ্যবর্তী পরীক্ষা", file: "mid-term-2026.pdf", size: "৪৫৬ KB", date: "২০২৬-০৩-১৫", type: "midterm" },
    { id: 2, exam: "বার্ষিক পরীক্ষা", file: "final-2026.pdf", size: "৫২৩ KB", date: "২০২৬-০৬-১৫", type: "final" },
    { id: 3, exam: "মডেল টেস্ট", file: "model-test-2026.pdf", size: "৩৮৯ KB", date: "২০২৬-০২-০১", type: "model" },
    { id: 4, exam: "ভর্তি প্রস্তুতি", file: "entrance-2026.pdf", size: "৪১২ KB", date: "২০২৬-০৪-০১", type: "entrance" },
    { id: 5, exam: "সাপ্তাহিক পরীক্ষা", file: "weekly-test.pdf", size: "২৩৪ KB", date: "২০২৬-০১-২০", type: "weekly" },
  ];

  const syllabus = [
    { id: 1, class: "১ম শ্রেণী", subject: "ইংরেজি", file: "class-1-english.pdf", size: "১৫৬ KB", date: "২০২৬-০১-১০" },
    { id: 2, class: "১ম শ্রেণী", subject: "গণিত", file: "class-1-math.pdf", size: "১৭৮ KB", date: "২০২৬-০১-১০" },
    { id: 3, class: "২য় শ্রেণী", subject: "ইংরেজি", file: "class-2-english.pdf", size: "১৬৭ KB", date: "২০২৬-০১-১০" },
    { id: 4, class: "২য় শ্রেণী", subject: "গণিত", file: "class-2-math.pdf", size: "১৮৯ KB", date: "২০২৬-০১-১০" },
    { id: 5, class: "৩য় শ্রেণী", subject: "বিজ্ঞান", file: "class-3-science.pdf", size: "২৩৪ KB", date: "২০২৬-০১-১০" },
    { id: 6, class: "৪র্থ শ্রেণী", subject: "সামাজিক অধ্যয়ন", file: "class-4-social.pdf", size: "২৪৫ KB", date: "২০২৬-০১-১০" },
    { id: 7, class: "৫ম শ্রেণী", subject: "কম্পিউটার বিজ্ঞান", file: "class-5-computer.pdf", size: "২৬৭ KB", date: "২০২৬-০১-১০" },
    { id: 8, class: "৬ষ্ঠ শ্রেণী", subject: "পদার্থবিজ্ঞান", file: "class-6-physics.pdf", size: "২৮৯ KB", date: "২০২৬-০১-১০" },
    { id: 9, class: "৭ম শ্রেণী", subject: "রসায়ন", file: "class-7-chemistry.pdf", size: "৩০১ KB", date: "২০২৬-০১-১০" },
    { id: 10, class: "৮ম শ্রেণী", subject: "জীববিজ্ঞান", file: "class-8-biology.pdf", size: "৩১২ KB", date: "২০২৬-০১-১০" },
    { id: 11, class: "৯ম শ্রেণী", subject: "গণিত", file: "class-9-math.pdf", size: "৩৩৪ KB", date: "২০২৬-০১-১০" },
    { id: 12, class: "১০ম শ্রেণী", subject: "ইংরেজি সাহিত্য", file: "class-10-english.pdf", size: "৩৪৫ KB", date: "২০২৬-০১-১০" },
  ];

  const academicActivities = [
    {
      id: 1,
      title: "পাঠ্যক্রম উন্নয়ন কর্মশালা",
      date: "২০২৬-০২-০৫",
      time: "সকাল ১০:০০ - বিকাল ৪:০০",
      location: "সম্মেলন কক্ষ",
      participants: 45,
      status: "আসন্ন",
      type: "workshop",
      description: "শিক্ষকদের জন্য বার্ষিক পাঠ্যক্রম উন্নয়ন কর্মশালা"
    },
    {
      id: 2,
      title: "এনসিটিবি পাঠ্যক্রম পর্যালোচনা সভা",
      date: "২০২৬-০২-১০",
      time: "দুপুর ২:০০ - বিকাল ৫:০০",
      location: "বোর্ড রুম",
      participants: 12,
      status: "আসন্ন",
      type: "meeting",
      description: "এনসিটিবি পাঠ্যক্রম বাস্তবায়ন পর্যালোচনা"
    },
    {
      id: 3,
      title: "শিক্ষার্থী মূল্যায়ন ও পরীক্ষা",
      date: "২০২৬-০১-২৫",
      time: "সকাল ৯:০০ - দুপুর ১:০০",
      location: "একাডেমিক ব্লক",
      participants: 30,
      status: "সম্পন্ন",
      type: "assessment",
      description: "মধ্যবর্তী মূল্যায়ন ও পরীক্ষা সেশন"
    },
    {
      id: 4,
      title: "শিক্ষক প্রশিক্ষণ কর্মসূচি",
      date: "২০২৬-০২-১৫",
      time: "সকাল ৮:৩০ - বিকাল ৩:৩০",
      location: "প্রশিক্ষণ কেন্দ্র",
      participants: 60,
      status: "আসন্ন",
      type: "training",
      description: "শিক্ষকদের জন্য পেশাগত উন্নয়ন"
    },
    {
      id: 5,
      title: "একাডেমিক কাউন্সিল সভা",
      date: "২০২৬-০১-২৮",
      time: "সকাল ১১:০০ - দুপুর ২:০০",
      location: "সিনেট হল",
      participants: 25,
      status: "সম্পন্ন",
      type: "meeting",
      description: "ত্রৈমাসিক একাডেমিক কাউন্সিল সভা"
    },
    {
      id: 6,
      title: "বিজ্ঞান ও প্রযুক্তি মেলা",
      date: "২০২৬-০৩-০১",
      time: "সকাল ১০:০০ - সন্ধ্যা ৬:০০",
      location: "প্রদর্শনী মাঠ",
      participants: 200,
      status: "আসন্ন",
      type: "event",
      description: "বার্ষিক বিজ্ঞান ও প্রযুক্তি প্রদর্শনী"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      primary: "bg-emerald-100 text-emerald-700 border-emerald-200",
      junior: "bg-blue-100 text-blue-700 border-blue-200",
      secondary: "bg-purple-100 text-purple-700 border-purple-200",
      higher: "bg-rose-100 text-rose-700 border-rose-200",
      special: "bg-indigo-100 text-indigo-700 border-indigo-200",
      nctb: "bg-red-100 text-red-700 border-red-200",
      midterm: "bg-orange-100 text-orange-700 border-orange-200",
      final: "bg-red-100 text-red-700 border-red-200",
      model: "bg-yellow-100 text-yellow-700 border-yellow-200",
      entrance: "bg-indigo-100 text-indigo-700 border-indigo-200",
      weekly: "bg-cyan-100 text-cyan-700 border-cyan-200",
      workshop: "bg-green-100 text-green-700 border-green-200",
      meeting: "bg-blue-100 text-blue-700 border-blue-200",
      training: "bg-purple-100 text-purple-700 border-purple-200",
      event: "bg-pink-100 text-pink-700 border-pink-200",
      assessment: "bg-amber-100 text-amber-700 border-amber-200",
      holiday: "bg-red-100 text-red-700 border-red-200",
    };
    return colors[type] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getTypeBadge = (type: string) => {
    const badges: Record<string, string> = {
      primary: "প্রাথমিক",
      junior: "নিম্ন মাধ্যমিক",
      secondary: "মাধ্যমিক",
      higher: "উচ্চ মাধ্যমিক",
      special: "বিশেষ কর্মসূচি",
      nctb: "এনসিটিবি",
      midterm: "মধ্যবর্তী",
      final: "বার্ষিক",
      model: "মডেল টেস্ট",
      entrance: "ভর্তি",
      weekly: "সাপ্তাহিক",
      workshop: "কর্মশালা",
      meeting: "সভা",
      training: "প্রশিক্ষণ",
      event: "অনুষ্ঠান",
      assessment: "মূল্যায়ন",
      holiday: "ছুটির দিন",
    };
    return badges[type] || type;
  };

  const getStatusColor = (status: string) => {
    return status === "সক্রিয়" ? "bg-green-100 text-green-700" :
           status === "পর্যালোচনাধীন" ? "bg-yellow-100 text-yellow-700" :
           status === "সম্পন্ন" ? "bg-blue-100 text-blue-700" :
           status === "আসন্ন" ? "bg-purple-100 text-purple-700" :
           "bg-gray-100 text-gray-700";
  };

  const getLevelColor = (level: string) => {
    return level === "প্রাথমিক" ? "bg-emerald-100 text-emerald-700" :
           level === "নিম্ন মাধ্যমিক" ? "bg-blue-100 text-blue-700" :
           level === "মাধ্যমিক" ? "bg-purple-100 text-purple-700" :
           level === "উচ্চ মাধ্যমিক" ? "bg-rose-100 text-rose-700" :
           "bg-gray-100 text-gray-700";
  };

  const getStreamColor = (stream: string) => {
    return stream === "বিজ্ঞান" ? "bg-indigo-100 text-indigo-700" :
           stream === "বাণিজ্য" ? "bg-orange-100 text-orange-700" :
           stream === "মানবিক" ? "bg-pink-100 text-pink-700" :
           "bg-gray-100 text-gray-700";
  };

  const getFilteredData = () => {
    let data = activeTab === "classes" ? classData :
               activeTab === "departments" ? departmentData :
               activeTab === "curriculum" ? curriculumData :
               activeTab === "routine" ? classRoutines :
               activeTab === "exam" ? examRoutines :
               activeTab === "syllabus" ? syllabus :
               activeTab === "activities" ? academicActivities : [];
    
    if (selectedFilter !== "all" && activeTab !== "syllabus" && activeTab !== "classes" && activeTab !== "departments") {
      data = data.filter((item: any) => item.type === selectedFilter);
    }
    if (selectedFilter !== "all" && activeTab === "classes") {
      data = data.filter((item: any) => item.level === selectedFilter);
    }
    if (selectedFilter !== "all" && activeTab === "departments") {
      data = data.filter((item: any) => item.name.includes(selectedFilter));
    }
    if (searchTerm) {
      data = data.filter((item: any) => 
        (item.class && item.class.includes(searchTerm)) ||
        (item.exam && item.exam.includes(searchTerm)) ||
        (item.subject && item.subject.includes(searchTerm)) ||
        (item.title && item.title.includes(searchTerm)) ||
        (item.status && item.status.includes(searchTerm)) ||
        (item.name && item.name.includes(searchTerm)) ||
        (item.level && item.level.includes(searchTerm)) ||
        (item.stream && item.stream.includes(searchTerm))
      );
    }
    return data;
  };

  const renderCalendar = () => {
    const days = [];
    const totalDays = daysInMonth;
    
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-12" />);
    }
    
    for (let i = 1; i <= totalDays; i++) {
      const event = calendarEvents.find(e => e.date === i);
      const isSelected = selectedDate === i;
      days.push(
        <div
          key={i}
          onClick={() => setSelectedDate(isSelected ? null : i)}
          className={`relative h-12 flex items-center justify-center rounded-xl cursor-pointer transition-all duration-300 ${
            isSelected 
              ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg scale-110" 
              : event 
                ? "bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-md" 
                : "hover:bg-green-50"
          }`}
        >
          <span className="text-sm font-medium">{i}</span>
          {event && (
            <div className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full ${
              isSelected ? "bg-white" : "bg-green-500"
            }`} />
          )}
        </div>
      );
    }
    return days;
  };

  const renderContent = () => {
    switch(activeTab) {
      case "classes":
        const classes = getFilteredData();
        return (
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="শ্রেণী বা শাখার নাম দিয়ে খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white text-sm"
                >
                  <option value="all">সব স্তর</option>
                  <option value="প্রাথমিক">প্রাথমিক</option>
                  <option value="নিম্ন মাধ্যমিক">নিম্ন মাধ্যমিক</option>
                  <option value="মাধ্যমিক">মাধ্যমিক</option>
                  <option value="উচ্চ মাধ্যমিক">উচ্চ মাধ্যমিক</option>
                </select>
                <button
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                  className="p-2.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  {viewMode === "grid" ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
                </button>
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">শ্রেণী যোগ করুন</span>
                </button>
              </div>
            </div>

            <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-4`}>
              {classes.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200 border border-transparent animate-fade-in-up animate-on-scroll"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <School className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                          {item.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getLevelColor(item.level)}`}>
                          {item.level}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getStreamColor(item.stream)}`}>
                          {item.stream}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/academic/portal/classes/${item.id}`}
                      className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-xs text-gray-500">শাখা</p>
                      <p className="font-medium">{item.sections}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">শিক্ষার্থী</p>
                      <p className="font-medium">{item.students}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">শিক্ষক</p>
                      <p className="font-medium">{item.teachers}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">কক্ষ</p>
                      <p className="font-medium">{item.room}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.subjects && item.subjects.slice(0, 4).map((subject: string, idx: number) => (
                      <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                        {subject}
                      </span>
                    ))}
                    {item.subjects && item.subjects.length > 4 && (
                      <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">
                        +{item.subjects.length - 4} আরও
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {classes.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <School className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">কোন শ্রেণী পাওয়া যায়নি</p>
                <p className="text-sm text-gray-400 mt-1">আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে দেখুন</p>
              </div>
            )}
          </div>
        );

      case "departments":
        const departments = getFilteredData();
        return (
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="বিভাগ খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white text-sm"
                >
                  <option value="all">সব বিভাগ</option>
                  <option value="বিজ্ঞান">বিজ্ঞান</option>
                  <option value="মানবিক">চারু ও মানবিক</option>
                  <option value="বাণিজ্য">বাণিজ্য</option>
                  <option value="আইসিটি">আইসিটি</option>
                  <option value="ভাষা">ভাষা</option>
                </select>
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">বিভাগ যোগ করুন</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {departments.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200 border border-transparent animate-fade-in-up animate-on-scroll"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-500">কোড: {item.code}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
                        <span className="flex items-center gap-1 text-gray-500">
                          <Users className="h-3 w-3" /> {item.teachers} জন শিক্ষক
                        </span>
                        <span className="flex items-center gap-1 text-gray-500">
                          <Flask className="h-3 w-3" /> {item.labs} টি ল্যাব
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {item.subjects && item.subjects.map((subject: string, idx: number) => (
                          <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-1 flex-shrink-0 ml-2">
                      <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500">বিভাগীয় প্রধান:</span>
                      <span className="font-medium text-gray-800">{item.head}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {departments.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Building2 className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">কোন বিভাগ পাওয়া যায়নি</p>
                <p className="text-sm text-gray-400 mt-1">আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে দেখুন</p>
              </div>
            )}
          </div>
        );

      case "curriculum":
        const curriculumItems = getFilteredData();
        return (
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="পাঠ্যক্রমের শিরোনাম বা বিষয় দিয়ে খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white text-sm"
                >
                  <option value="all">সব ধরন</option>
                  <option value="nctb">এনসিটিবি</option>
                  <option value="primary">প্রাথমিক</option>
                  <option value="secondary">মাধ্যমিক</option>
                  <option value="higher">উচ্চ মাধ্যমিক</option>
                  <option value="special">বিশেষ কর্মসূচি</option>
                </select>
                <button
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                  className="p-2.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  {viewMode === "grid" ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
                </button>
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <Upload className="h-4 w-4" />
                  <span className="hidden sm:inline">আপলোড</span>
                </button>
              </div>
            </div>

            <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-4`}>
              {curriculumItems.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200 border border-transparent animate-fade-in-up animate-on-scroll"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 text-sm truncate">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getTypeColor(item.type)}`}>
                          {getTypeBadge(item.type)}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-1 flex-shrink-0 ml-2">
                      <button 
                        onClick={() => setExpandedCurriculum(expandedCurriculum === item.id ? null : item.id)}
                        className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.subjects && item.subjects.slice(0, 4).map((subject: string, idx: number) => (
                      <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full">
                        {subject}
                      </span>
                    ))}
                    {item.subjects && item.subjects.length > 4 && (
                      <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-400 rounded-full">
                        +{item.subjects.length - 4} আরও
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-2">
                    <span>সংস্করণ: {item.version}</span>
                    <span>শ্রেণী: {item.classes.join(", ")}</span>
                    <span>{item.size}</span>
                  </div>

                  {expandedCurriculum === item.id && (
                    <div className="mt-4 pt-3 border-t border-gray-100 animate-fade-in-up">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="text-xs text-gray-500">তারিখ</p>
                          <p className="font-medium">{item.date}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">ফাইল</p>
                          <p className="font-medium text-green-600 truncate">{item.file}</p>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="flex-1 bg-green-50 text-green-700 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-green-100 transition-colors">
                          সম্পূর্ণ বিবরণ দেখুন
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {curriculumItems.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <BookOpen className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">কোন পাঠ্যক্রম পাওয়া যায়নি</p>
                <p className="text-sm text-gray-400 mt-1">আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে দেখুন</p>
              </div>
            )}
          </div>
        );

      case "calendar":
        return (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                  {currentMonth} {currentYear}
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronDown className="h-5 w-5 text-gray-600 rotate-90" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <ChevronDown className="h-5 w-5 text-gray-600 -rotate-90" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্প", "শুক্র", "শনি"].map(day => (
                  <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {renderCalendar()}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex flex-wrap items-center gap-2">
                <Bell className="h-5 w-5 text-green-600" />
                আসন্ন ইভেন্ট
                {notificationCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {notificationCount}
                  </span>
                )}
              </h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {calendarEvents.map((event, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      event.type === "holiday" ? "bg-red-50 text-red-600" :
                      event.type === "exam" ? "bg-orange-50 text-orange-600" :
                      event.type === "meeting" ? "bg-blue-50 text-blue-600" :
                      event.type === "training" ? "bg-purple-50 text-purple-600" :
                      "bg-green-50 text-green-600"
                    }`}>
                      {event.date}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors line-clamp-1">
                        {event.title}
                      </p>
                      <p className="text-xs text-gray-500">{currentMonth} {event.date}, {currentYear}</p>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all -rotate-90 flex-shrink-0" />
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 text-sm font-medium text-green-700 bg-green-50 rounded-xl hover:bg-green-100 transition-all duration-300">
                সব ইভেন্ট দেখুন
              </button>
            </div>
          </div>
        );

      case "routine":
      case "exam":
      case "syllabus":
        const data = getFilteredData();
        return (
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={activeTab === "syllabus" ? "শ্রেণী বা বিষয় দিয়ে খুঁজুন..." : "শ্রেণী দিয়ে খুঁজুন..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeTab !== "syllabus" && (
                  <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white text-sm"
                  >
                    <option value="all">সব ধরন</option>
                    {activeTab === "routine" && (
                      <>
                        <option value="primary">প্রাথমিক</option>
                        <option value="junior">নিম্ন মাধ্যমিক</option>
                        <option value="secondary">মাধ্যমিক</option>
                        <option value="higher">উচ্চ মাধ্যমিক</option>
                      </>
                    )}
                    {activeTab === "exam" && (
                      <>
                        <option value="midterm">মধ্যবর্তী</option>
                        <option value="final">বার্ষিক</option>
                        <option value="model">মডেল টেস্ট</option>
                        <option value="entrance">ভর্তি</option>
                        <option value="weekly">সাপ্তাহিক</option>
                      </>
                    )}
                  </select>
                )}
                <button
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                  className="p-2.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  {viewMode === "grid" ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
                </button>
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <Upload className="h-4 w-4" />
                  <span className="hidden sm:inline">আপলোড</span>
                </button>
              </div>
            </div>

            <div className={`grid ${viewMode === "grid" ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"} gap-4`}>
              {data.map((item: any, index: number) => (
                <div
                  key={item.id}
                  className="group bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200 border border-transparent animate-fade-in-up animate-on-scroll"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-red-500 flex-shrink-0" />
                        <h3 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors duration-300 text-sm truncate">
                          {item.class || item.exam || item.subject}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <FileText className="h-3 w-3" /> {item.size}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {item.date}
                        </span>
                        {item.type && (
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${getTypeColor(item.type)}`}>
                            {getTypeBadge(item.type)}
                          </span>
                        )}
                        {item.subject && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                            {item.subject}
                          </span>
                        )}
                      </div>
                      {item.teacher && (
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                          <Users className="h-3 w-3" />
                          <span>{item.teacher}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline" />
                          <span className="hidden sm:inline">{item.students} জন শিক্ষার্থী</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300 hidden sm:inline" />
                          <span className="hidden sm:inline">কক্ষ {item.room}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex gap-1 flex-shrink-0 ml-2">
                      <button className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {data.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">কোন আইটেম পাওয়া যায়নি</p>
                <p className="text-sm text-gray-400 mt-1">আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে দেখুন</p>
              </div>
            )}

            <div className="mt-8 text-center">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-8 py-3.5 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <Download className="h-5 w-5" />
                সব {activeTab === "routine" ? "রুটিন" : activeTab === "exam" ? "পরীক্ষার সময়সূচী" : "সিলেবাস"} ডাউনলোড করুন (ZIP)
              </button>
            </div>
          </div>
        );

      case "activities":
        const activities = getFilteredData();
        return (
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="কার্যক্রম খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white text-sm"
                >
                  <option value="all">সব কার্যক্রম</option>
                  <option value="workshop">কর্মশালা</option>
                  <option value="meeting">সভা</option>
                  <option value="training">প্রশিক্ষণ</option>
                  <option value="event">অনুষ্ঠান</option>
                  <option value="assessment">মূল্যায়ন</option>
                </select>
                <button 
                  onClick={() => setShowUploadModal(true)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">কার্যক্রম যোগ করুন</span>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {activities.map((activity: any, index: number) => (
                <div
                  key={activity.id}
                  className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 border border-transparent animate-fade-in-up animate-on-scroll"
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          activity.type === "workshop" ? "bg-green-100 text-green-600" :
                          activity.type === "meeting" ? "bg-blue-100 text-blue-600" :
                          activity.type === "training" ? "bg-purple-100 text-purple-600" :
                          activity.type === "event" ? "bg-pink-100 text-pink-600" :
                          "bg-amber-100 text-amber-600"
                        }`}>
                          {activity.type === "workshop" ? <PenTool className="h-5 w-5" /> :
                           activity.type === "meeting" ? <Users className="h-5 w-5" /> :
                           activity.type === "training" ? <GraduationCap className="h-5 w-5" /> :
                           activity.type === "event" ? <Calendar className="h-5 w-5" /> :
                           <ClipboardList className="h-5 w-5" />}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-gray-800 truncate">
                            {activity.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${getTypeColor(activity.type)}`}>
                              {getTypeBadge(activity.type)}
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusColor(activity.status)}`}>
                              {activity.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{activity.description}</p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" /> {activity.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" /> {activity.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" /> {activity.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" /> {activity.participants} জন অংশগ্রহণকারী
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button className="px-3 py-1.5 bg-green-50 text-green-600 rounded-lg text-sm font-medium hover:bg-green-100 transition-all duration-300">
                        বিস্তারিত দেখুন
                      </button>
                      <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {activities.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">কোন কার্যক্রম পাওয়া যায়নি</p>
                <p className="text-sm text-gray-400 mt-1">আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে দেখুন</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* ====== HERO SECTION ====== */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-12 md:py-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors hover:translate-x-[-4px] transition-transform"
              >
                <ArrowLeft className="h-4 w-4" /> হোমে ফিরে যান
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-3 animate-fade-in-up">
                <span className="text-yellow-300">একাডেমিক</span> পোর্টাল
              </h1>
              <p className="text-white/90 text-base md:text-lg animate-fade-in-up animation-delay-200">
                শ্রেণী ও বিভাগের তথ্য • এনসিটিবি পাঠ্যক্রম • একাডেমিক কার্যক্রম
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300">
                <div className="text-sm text-white/80">একাডেমিক বছর</div>
                <div className="font-semibold">২০২৫-২০২৬</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300">
                <div className="text-sm text-white/80">মোট শ্রেণী</div>
                <div className="font-semibold">১৬</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl hover:bg-white/30 transition-all duration-300">
                <div className="text-sm text-white/80">বিভাগ</div>
                <div className="font-semibold">৫</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {[
              { id: "classes", label: "শ্রেণীসমূহ", icon: School },
              { id: "departments", label: "বিভাগসমূহ", icon: Building2 },
              { id: "curriculum", label: "পাঠ্যক্রম", icon: BookOpen },
              { id: "calendar", label: "ক্যালেন্ডার", icon: Calendar },
              { id: "routine", label: "শ্রেণী রুটিন", icon: Clock },
              { id: "exam", label: "পরীক্ষার রুটিন", icon: FileText },
              { id: "syllabus", label: "সিলেবাস", icon: Layers },
              { id: "activities", label: "কার্যক্রম", icon: ClipboardList },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSearchTerm("");
                    setSelectedFilter("all");
                  }}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg scale-105"
                      : "text-gray-600 hover:bg-gray-100 hover:text-green-600"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mx-auto">
            {renderContent()}
          </div>
        </div>
      </section>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl transform transition-all hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <Upload className="h-5 w-5 text-green-600" />
                পিডিএফ আপলোড করুন
              </h3>
              <button 
                onClick={() => setShowUploadModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors hover:rotate-90 transition-transform"
              >
                <XCircle className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  বিভাগ নির্বাচন করুন
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300">
                  <option>শ্রেণী রুটিন</option>
                  <option>পরীক্ষার সময়সূচী</option>
                  <option>সিলেবাস</option>
                  <option>পাঠ্যক্রম ডকুমেন্ট</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  শ্রেণী/স্তর নির্বাচন করুন
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300">
                  <option>সব শ্রেণী</option>
                  <option>১ম-৫ম শ্রেণী (প্রাথমিক)</option>
                  <option>৬ষ্ঠ-১০ম শ্রেণী (মাধ্যমিক)</option>
                  <option>১১শ-১২শ শ্রেণী (উচ্চ মাধ্যমিক)</option>
                  <option>বিশেষ কর্মসূচি</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  পিডিএফ ফাইল আপলোড করুন
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-green-500 transition-colors cursor-pointer hover:bg-green-50">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2 hover:scale-110 transition-transform" />
                  <p className="text-sm text-gray-600">ক্লিক করুন বা ড্র্যাগ অ্যান্ড ড্রপ করুন</p>
                  <p className="text-xs text-gray-400">শুধুমাত্র পিডিএফ ফাইল (সর্বোচ্চ ১০MB)</p>
                  <input type="file" accept=".pdf" className="hidden" />
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                পিডিএফ আপলোড করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}