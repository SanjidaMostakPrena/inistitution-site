
"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  Download,
  FileText,
  File,
  Calendar,
  Clock,
  BookOpen,
  BookMarked,
  Award,
  Megaphone,
  Search,
  Grid,
  List,
  ArrowLeft,
  Eye,
  ChevronRight,
  Sparkles,
  Trophy,
  ExternalLink,
  X,
  Filter,
  ChevronDown,
} from "lucide-react";

// ====== ডাইনামিক ডেটা ======
const DOWNLOAD_DATA = {
  hero: {
    title: "ডাউনলোড ও সম্পদ",
    subtitle: "সকল গুরুত্বপূর্ণ নথি, ফর্ম, প্রসপেক্টাস, রুটিন, সিলেবাস, নোটিশ এবং ফলাফল অ্যাক্সেস ও ডাউনলোড করুন।",
    stats: [
      { label: "মোট ফাইল", value: 27, icon: File },
      { label: "মোট ডাউনলোড", value: 48500, icon: Download },
      { label: "বিভাগ", value: 8, icon: Grid },
    ],
    featured: {
      label: "সর্বোচ্চ ডাউনলোড",
      value: "ফলাফল পিডিএফ",
      subValue: "২১,৫০০ ডাউনলোড",
    },
    newest: {
      label: "সর্বশেষ",
      value: "ভর্তি ফর্ম",
      subValue: "আপডেট জানুয়ারি ২০২৬",
    },
  },
  categories: [
    { id: "all", label: "সব ডাউনলোড", icon: <Download className="h-4 w-4" />, color: "from-green-500 to-green-700" },
    { id: "forms", label: "ভর্তি ফর্ম", icon: <FileText className="h-4 w-4" />, color: "from-blue-500 to-blue-700" },
    { id: "prospectus", label: "প্রসপেক্টাস", icon: <BookOpen className="h-4 w-4" />, color: "from-green-500 to-green-700" },
    { id: "calendar", label: "একাডেমিক ক্যালেন্ডার", icon: <Calendar className="h-4 w-4" />, color: "from-purple-500 to-purple-700" },
    { id: "routine", label: "ক্লাস রুটিন", icon: <Clock className="h-4 w-4" />, color: "from-orange-500 to-orange-700" },
    { id: "exam", label: "পরীক্ষার রুটিন", icon: <File className="h-4 w-4" />, color: "from-red-500 to-red-700" },
    { id: "syllabus", label: "সিলেবাস", icon: <BookMarked className="h-4 w-4" />, color: "from-indigo-500 to-indigo-700" },
    { id: "notices", label: "নোটিশ", icon: <Megaphone className="h-4 w-4" />, color: "from-yellow-500 to-yellow-700" },
    { id: "results", label: "ফলাফল পিডিএফ", icon: <Award className="h-4 w-4" />, color: "from-pink-500 to-pink-700" },
  ],
  items: [
    {
      id: 1,
      title: "অনলাইন ভর্তি ফর্ম ২০২৬",
      category: "forms",
      file: "admission-form-2026.pdf",
      size: "৪৫৬ কেবি",
      date: "১৫ জানুয়ারি, ২০২৬",
      downloads: 1250,
      description: "২০২৬ শিক্ষাবর্ষের জন্য অনলাইন ভর্তি আবেদন ফর্ম। ডিজিটালভাবে পূরণ করুন এবং জমা দিন।",
      icon: <FileText className="h-6 w-6" />,
      color: "from-blue-500 to-blue-700",
      badge: "জনপ্রিয়",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 2,
      title: "ভর্তি ফর্ম (মুদ্রণযোগ্য সংস্করণ)",
      category: "forms",
      file: "admission-form-print.pdf",
      size: "৫২৩ কেবি",
      date: "১০ জানুয়ারি, ২০২৬",
      downloads: 890,
      description: "অফলাইন জমা দেওয়ার জন্য ভর্তি ফর্মের মুদ্রণযোগ্য সংস্করণ।",
      icon: <FileText className="h-6 w-6" />,
      color: "from-blue-500 to-blue-700",
      badge: "নতুন",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 3,
      title: "বৃত্তি আবেদন ফর্ম",
      category: "forms",
      file: "scholarship-form-2026.pdf",
      size: "৩৪৫ কেবি",
      date: "২০ জানুয়ারি, ২০২৬",
      downloads: 560,
      description: "মেধাভিত্তিক বৃত্তির জন্য আবেদন ফর্ম। আর্থিক সহায়তার জন্য আবেদন করুন।",
      icon: <FileText className="h-6 w-6" />,
      color: "from-blue-500 to-blue-700",
      badge: "",
      version: "v1.5",
      language: "বাংলা",
    },
    {
      id: 4,
      title: "একাডেমিক প্রসপেক্টাস ২০২৬",
      category: "prospectus",
      file: "prospectus-2026.pdf",
      size: "২.৪ এমবি",
      date: "১ জানুয়ারি, ২০২৬",
      downloads: 2100,
      description: "প্রোগ্রামের বিবরণ, ভর্তি তথ্য এবং সুবিধাসম্বলিত সম্পূর্ণ একাডেমিক প্রসপেক্টাস।",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-green-500 to-green-700",
      badge: "বৈশিষ্ট্যযুক্ত",
      version: "v3.0",
      language: "বাংলা",
    },
    {
      id: 5,
      title: "প্রসপেক্টাস (ইংরেজি সংস্করণ)",
      category: "prospectus",
      file: "prospectus-en-2026.pdf",
      size: "২.১ এমবি",
      date: "৫ জানুয়ারি, ২০২৬",
      downloads: 1560,
      description: "ইংরেজি সংস্করণে সম্পূর্ণ একাডেমিক প্রসপেক্টাস।",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-green-500 to-green-700",
      badge: "",
      version: "v3.0",
      language: "ইংরেজি",
    },
    {
      id: 6,
      title: "বার্ষিক একাডেমিক ক্যালেন্ডার ২০২৬",
      category: "calendar",
      file: "academic-calendar-2026.pdf",
      size: "১.৮ এমবি",
      date: "১ জানুয়ারি, ২০২৬",
      downloads: 3200,
      description: "সকল গুরুত্বপূর্ণ তারিখ, ছুটি এবং ইভেন্টসহ সম্পূর্ণ বার্ষিক একাডেমিক ক্যালেন্ডার।",
      icon: <Calendar className="h-6 w-6" />,
      color: "from-purple-500 to-purple-700",
      badge: "জনপ্রিয়",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 7,
      title: "একাডেমিক ক্যালেন্ডার (সংক্ষিপ্ত)",
      category: "calendar",
      file: "calendar-summary-2026.pdf",
      size: "৫৬৭ কেবি",
      date: "১০ জানুয়ারি, ২০২৬",
      downloads: 1890,
      description: "মূল একাডেমিক তারিখ এবং গুরুত্বপূর্ণ ইভেন্টের দ্রুত তথ্যসূত্র।",
      icon: <Calendar className="h-6 w-6" />,
      color: "from-purple-500 to-purple-700",
      badge: "",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 8,
      title: "ক্লাস রুটিন - প্রাথমিক (১ম-৫ম শ্রেণী)",
      category: "routine",
      file: "routine-primary-2026.pdf",
      size: "৪৫৬ কেবি",
      date: "১৫ জানুয়ারি, ২০২৬",
      downloads: 980,
      description: "প্রাথমিক স্তরের (১ম-৫ম শ্রেণী) সাপ্তাহিক ক্লাস রুটিন। ২০২৬ সেশনের জন্য আপডেট করা হয়েছে।",
      icon: <Clock className="h-6 w-6" />,
      color: "from-orange-500 to-orange-700",
      badge: "",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 9,
      title: "ক্লাস রুটিন - নিম্ন মাধ্যমিক (৬ষ্ঠ-৮ম শ্রেণী)",
      category: "routine",
      file: "routine-junior-2026.pdf",
      size: "৫২৩ কেবি",
      date: "১৫ জানুয়ারি, ২০২৬",
      downloads: 870,
      description: "নিম্ন মাধ্যমিক স্তরের (৬ষ্ঠ-৮ম শ্রেণী) সাপ্তাহিক ক্লাস রুটিন।",
      icon: <Clock className="h-6 w-6" />,
      color: "from-orange-500 to-orange-700",
      badge: "",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 10,
      title: "ক্লাস রুটিন - মাধ্যমিক (৯ম-১০ম শ্রেণী)",
      category: "routine",
      file: "routine-secondary-2026.pdf",
      size: "৫৮৯ কেবি",
      date: "১৫ জানুয়ারি, ২০২৬",
      downloads: 760,
      description: "মাধ্যমিক স্তরের (৯ম-১০ম শ্রেণী) সাপ্তাহিক ক্লাস রুটিন।",
      icon: <Clock className="h-6 w-6" />,
      color: "from-orange-500 to-orange-700",
      badge: "",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 11,
      title: "ক্লাস রুটিন - উচ্চ মাধ্যমিক (১১শ-১২শ শ্রেণী)",
      category: "routine",
      file: "routine-higher-2026.pdf",
      size: "৬৪৫ কেবি",
      date: "১৫ জানুয়ারি, ২০২৬",
      downloads: 680,
      description: "উচ্চ মাধ্যমিক স্তরের (১১শ-১২শ শ্রেণী) সাপ্তাহিক ক্লাস রুটিন।",
      icon: <Clock className="h-6 w-6" />,
      color: "from-orange-500 to-orange-700",
      badge: "",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 12,
      title: "প্রথম সাময়িক পরীক্ষার রুটিন ২০২৬",
      category: "exam",
      file: "exam-1st-term-2026.pdf",
      size: "৬৭৮ কেবি",
      date: "২০ ফেব্রুয়ারি, ২০২৬",
      downloads: 1450,
      description: "প্রথম সাময়িক পরীক্ষার বিস্তারিত সময়সূচী। বিষয়ভিত্তিক সময় অন্তর্ভুক্ত।",
      icon: <File className="h-6 w-6" />,
      color: "from-red-500 to-red-700",
      badge: "",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 13,
      title: "মধ্যবর্তী পরীক্ষার রুটিন ২০২৬",
      category: "exam",
      file: "exam-mid-term-2026.pdf",
      size: "৭২৩ কেবি",
      date: "১৫ মে, ২০২৬",
      downloads: 1320,
      description: "আসন পরিকল্পনাসহ মধ্যবর্তী পরীক্ষার বিস্তারিত সময়সূচী।",
      icon: <File className="h-6 w-6" />,
      color: "from-red-500 to-red-700",
      badge: "",
      version: "v1.5",
      language: "বাংলা",
    },
    {
      id: 14,
      title: "বার্ষিক পরীক্ষার রুটিন ২০২৬",
      category: "exam",
      file: "exam-final-2026.pdf",
      size: "৭৮৯ কেবি",
      date: "২০ অক্টোবর, ২০২৬",
      downloads: 2100,
      description: "সকল নির্দেশনাসহ বার্ষিক পরীক্ষার বিস্তারিত সময়সূচী।",
      icon: <File className="h-6 w-6" />,
      color: "from-red-500 to-red-700",
      badge: "জনপ্রিয়",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 15,
      title: "ব্যবহারিক পরীক্ষার সময়সূচী",
      category: "exam",
      file: "exam-practical-2026.pdf",
      size: "৪৫৬ কেবি",
      date: "১ নভেম্বর, ২০২৬",
      downloads: 890,
      description: "ল্যাব বরাদ্দের বিবরণসহ ব্যবহারিক পরীক্ষার সময়সূচী।",
      icon: <File className="h-6 w-6" />,
      color: "from-red-500 to-red-700",
      badge: "",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 16,
      title: "প্রাথমিক স্তরের সিলেবাস (১ম-৫ম শ্রেণী)",
      category: "syllabus",
      file: "syllabus-primary-2026.pdf",
      size: "১.২ এমবি",
      date: "১০ জানুয়ারি, ২০২৬",
      downloads: 1100,
      description: "প্রাথমিক স্তরের ক্লাসগুলির (১ম-৫ম শ্রেণী) সম্পূর্ণ সিলেবাস। সকল বিষয় অন্তর্ভুক্ত।",
      icon: <BookMarked className="h-6 w-6" />,
      color: "from-indigo-500 to-indigo-700",
      badge: "",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 17,
      title: "নিম্ন মাধ্যমিক সিলেবাস (৬ষ্ঠ-৮ম শ্রেণী)",
      category: "syllabus",
      file: "syllabus-junior-2026.pdf",
      size: "১.৪ এমবি",
      date: "১০ জানুয়ারি, ২০২৬",
      downloads: 980,
      description: "নিম্ন মাধ্যমিক স্তরের ক্লাসগুলির (৬ষ্ঠ-৮ম শ্রেণী) সম্পূর্ণ সিলেবাস।",
      icon: <BookMarked className="h-6 w-6" />,
      color: "from-indigo-500 to-indigo-700",
      badge: "",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 18,
      title: "মাধ্যমিক সিলেবাস (৯ম-১০ম শ্রেণী)",
      category: "syllabus",
      file: "syllabus-secondary-2026.pdf",
      size: "১.৬ এমবি",
      date: "১০ জানুয়ারি, ২০২৬",
      downloads: 870,
      description: "মাধ্যমিক স্তরের ক্লাসগুলির (৯ম-১০ম শ্রেণী) সম্পূর্ণ সিলেবাস।",
      icon: <BookMarked className="h-6 w-6" />,
      color: "from-indigo-500 to-indigo-700",
      badge: "",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 19,
      title: "উচ্চ মাধ্যমিক সিলেবাস (১১শ-১২শ শ্রেণী)",
      category: "syllabus",
      file: "syllabus-higher-2026.pdf",
      size: "১.৮ এমবি",
      date: "১০ জানুয়ারি, ২০২৬",
      downloads: 760,
      description: "উচ্চ মাধ্যমিক স্তরের ক্লাসগুলির (১১শ-১২শ শ্রেণী) সম্পূর্ণ সিলেবাস।",
      icon: <BookMarked className="h-6 w-6" />,
      color: "from-indigo-500 to-indigo-700",
      badge: "",
      version: "v2.0",
      language: "বাংলা",
    },
    {
      id: 20,
      title: "ভর্তি নোটিশ ২০২৬",
      category: "notices",
      file: "notice-admission-2026.pdf",
      size: "২৩৪ কেবি",
      date: "৫ জানুয়ারি, ২০২৬",
      downloads: 2300,
      description: "২০২৬ শিক্ষাবর্ষের জন্য অফিসিয়াল ভর্তি নোটিশ। গুরুত্বপূর্ণ তারিখ অন্তর্ভুক্ত।",
      icon: <Megaphone className="h-6 w-6" />,
      color: "from-yellow-500 to-yellow-700",
      badge: "বৈশিষ্ট্যযুক্ত",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 21,
      title: "পরীক্ষার সময়সূচী নোটিশ",
      category: "notices",
      file: "notice-exam-2026.pdf",
      size: "২৬৭ কেবি",
      date: "১ ফেব্রুয়ারি, ২০২৬",
      downloads: 1560,
      description: "পরীক্ষার সময়সূচী, নির্দেশিকা এবং গুরুত্বপূর্ণ নির্দেশাবলী সংক্রান্ত নোটিশ।",
      icon: <Megaphone className="h-6 w-6" />,
      color: "from-yellow-500 to-yellow-700",
      badge: "",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 22,
      title: "ছুটির নোটিশ ২০২৬",
      category: "notices",
      file: "notice-holiday-2026.pdf",
      size: "১৮৯ কেবি",
      date: "২০ জানুয়ারি, ২০২৬",
      downloads: 1200,
      description: "২০২৬ শিক্ষাবর্ষের জন্য অফিসিয়াল ছুটির সময়সূচী।",
      icon: <Megaphone className="h-6 w-6" />,
      color: "from-yellow-500 to-yellow-700",
      badge: "",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 23,
      title: "প্রথম সাময়িক পরীক্ষার ফলাফল ২০২৬",
      category: "results",
      file: "result-1st-term-2026.pdf",
      size: "৭৮৯ কেবি",
      date: "২৫ মার্চ, ২০২৬",
      downloads: 3400,
      description: "প্রথম সাময়িক পরীক্ষার সম্পূর্ণ ফলাফল পত্র। সকল শ্রেণী অন্তর্ভুক্ত।",
      icon: <Award className="h-6 w-6" />,
      color: "from-pink-500 to-pink-700",
      badge: "জনপ্রিয়",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 24,
      title: "মধ্যবর্তী পরীক্ষার ফলাফল ২০২৬",
      category: "results",
      file: "result-mid-term-2026.pdf",
      size: "৮২৩ কেবি",
      date: "২০ জুন, ২০২৬",
      downloads: 2900,
      description: "মধ্যবর্তী পরীক্ষার সম্পূর্ণ ফলাফল পত্র।",
      icon: <Award className="h-6 w-6" />,
      color: "from-pink-500 to-pink-700",
      badge: "",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 25,
      title: "বার্ষিক পরীক্ষার ফলাফল ২০২৬",
      category: "results",
      file: "result-final-2026.pdf",
      size: "৯৪৫ কেবি",
      date: "৩০ নভেম্বর, ২০২৬",
      downloads: 4500,
      description: "বার্ষিক পরীক্ষার সম্পূর্ণ ফলাফল পত্র। বার্ষিক ফলাফল প্রকাশিত।",
      icon: <Award className="h-6 w-6" />,
      color: "from-pink-500 to-pink-700",
      badge: "বৈশিষ্ট্যযুক্ত",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 26,
      title: "বোর্ড ফলাফল ২০২৫ (এসএসসি)",
      category: "results",
      file: "result-ssc-2025.pdf",
      size: "১.২ এমবি",
      date: "১৫ মে, ২০২৫",
      downloads: 5600,
      description: "২০২৫ সালের এসএসসি বোর্ড পরীক্ষার ফলাফল। সম্পূর্ণ পরিসংখ্যান অন্তর্ভুক্ত।",
      icon: <Award className="h-6 w-6" />,
      color: "from-pink-500 to-pink-700",
      badge: "জনপ্রিয়",
      version: "v1.0",
      language: "বাংলা",
    },
    {
      id: 27,
      title: "বোর্ড ফলাফল ২০২৫ (এইচএসসি)",
      category: "results",
      file: "result-hsc-2025.pdf",
      size: "১.৪ এমবি",
      date: "২০ জুন, ২০২৫",
      downloads: 4800,
      description: "২০২৫ সালের এইচএসসি বোর্ড পরীক্ষার ফলাফল। সম্পূর্ণ বিশ্লেষণ অন্তর্ভুক্ত।",
      icon: <Award className="h-6 w-6" />,
      color: "from-pink-500 to-pink-700",
      badge: "",
      version: "v1.0",
      language: "বাংলা",
    },
  ],
  features: [
    {
      icon: Download,
      title: "সহজ ডাউনলোড",
      description: "সকল ফাইলের জন্য এক-ক্লিক ডাউনলোড। কোন নিবন্ধনের প্রয়োজন নেই।",
      color: "green",
    },
    {
      icon: File,
      title: "পিডিএফ ফরম্যাট",
      description: "সকল ফাইল উচ্চমানের পিডিএফ ফরম্যাটে। প্রিন্ট-বান্ধব এবং নিরাপদ।",
      color: "blue",
    },
    {
      icon: Sparkles,
      title: "নিয়মিত আপডেট",
      description: "ফাইলগুলি নিয়মিত আপডেট করা হয়। সর্বদা সর্বশেষ সংস্করণ পান।",
      color: "purple",
    },
  ],
  cta: {
    title: "কিছু খুঁজে পেতে সাহায্য প্রয়োজন?",
    subtitle: "যেকোনো ফাইল বা নথির জন্য আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন",
    buttonText: "যোগাযোগ করুন",
    buttonLink: "/contact",
  },
};

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [items, setItems] = useState(DOWNLOAD_DATA.items);
  const [categories, setCategories] = useState(DOWNLOAD_DATA.categories);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const updatedCategories = categories.map(cat => {
      if (cat.id === "all") {
        return { ...cat, count: items.length };
      }
      return { ...cat, count: items.filter(item => item.category === cat.id).length };
    });
    setCategories(updatedCategories);
  }, [items]);

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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      forms: "bg-blue-100 text-blue-700 border-blue-200",
      prospectus: "bg-green-100 text-green-700 border-green-200",
      calendar: "bg-purple-100 text-purple-700 border-purple-200",
      routine: "bg-orange-100 text-orange-700 border-orange-200",
      exam: "bg-red-100 text-red-700 border-red-200",
      syllabus: "bg-indigo-100 text-indigo-700 border-indigo-200",
      notices: "bg-yellow-100 text-yellow-700 border-yellow-200",
      results: "bg-pink-100 text-pink-700 border-pink-200",
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      forms: "ভর্তি ফর্ম",
      prospectus: "প্রসপেক্টাস",
      calendar: "একাডেমিক ক্যালেন্ডার",
      routine: "ক্লাস রুটিন",
      exam: "পরীক্ষার রুটিন",
      syllabus: "সিলেবাস",
      notices: "নোটিশ",
      results: "ফলাফল পিডিএফ",
    };
    return labels[category] || category;
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "বৈশিষ্ট্যযুক্ত":
        return "bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 shadow-md";
      case "জনপ্রিয়":
        return "bg-gradient-to-r from-green-400 to-green-500 text-green-900 shadow-md";
      case "নতুন":
        return "bg-gradient-to-r from-blue-400 to-blue-500 text-blue-900 shadow-md";
      default:
        return "";
    }
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.title.includes(searchTerm) ||
                         item.description.includes(searchTerm) ||
                         item.category.includes(searchTerm);
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalDownloads = items.reduce((sum, item) => sum + item.downloads, 0);
  const totalFiles = items.length;

  const handleDownload = (item: any) => {
    console.log(`ডাউনলোড হচ্ছে: ${item.title}`);
  };

  const handlePreview = (item: any) => {
    console.log(`প্রিভিউ হচ্ছে: ${item.title}`);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
  };

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* ====== হিরো সেকশন ====== */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-12 md:py-16 lg:py-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant" />
        <div className="absolute -top-20 -right-20 w-48 md:w-64 h-48 md:h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-3 md:mb-4 transition-all duration-300 group bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full hover:bg-white/20 text-xs md:text-sm hover:scale-105"
          >
            <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 group-hover:-translate-x-1 transition-transform" /> 
            হোমে ফিরুন
          </Link>
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 md:gap-6">
            <div className="max-w-3xl w-full">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium mb-2 md:mb-3 border border-white/10 flex-wrap hover:bg-white/30 transition-all duration-300">
                <Download className="h-3 w-3 md:h-4 md:w-4 animate-spin-slow" />
                ডাউনলোড বিভাগ
                <span className="w-px h-3 md:h-4 bg-white/30 mx-1 md:mx-2" />
                <span className="text-yellow-300 font-bold">{totalFiles}</span> ফাইল উপলব্ধ
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-1 md:mb-2 animate-fade-in-up">
                <span className="text-yellow-300">ডাউনলোড</span> ও সম্পদ
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl animate-fade-in-up animation-delay-200">
                সকল গুরুত্বপূর্ণ নথি, ফর্ম, প্রসপেক্টাস, রুটিন, সিলেবাস, নোটিশ এবং ফলাফল অ্যাক্সেস ও ডাউনলোড করুন।
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3 mt-3 md:mt-4">
                {DOWNLOAD_DATA.hero.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-white/10 flex-1 sm:flex-none min-w-[70px] hover:bg-white/30 transition-all duration-300">
                      <div className="text-[8px] md:text-xs text-white/80 font-medium flex items-center gap-0.5 md:gap-1">
                        <Icon className="h-2.5 w-2.5 md:h-3.5 md:w-3.5" />
                        {stat.label}
                      </div>
                      <div className="font-bold text-sm md:text-xl">{stat.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm px-3 py-2 md:px-5 md:py-3 rounded-xl border border-white/10 text-center flex-1 sm:flex-none min-w-[100px] hover:bg-white/20 transition-all duration-300">
                <div className="text-[8px] md:text-xs text-white/70 font-medium">{DOWNLOAD_DATA.hero.featured.label}</div>
                <div className="text-yellow-300 font-bold text-sm md:text-base mt-0.5">{DOWNLOAD_DATA.hero.featured.value}</div>
                <div className="text-[8px] md:text-xs text-white/60">{DOWNLOAD_DATA.hero.featured.subValue}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-3 py-2 md:px-5 md:py-3 rounded-xl border border-white/10 text-center flex-1 sm:flex-none min-w-[100px] hover:bg-white/20 transition-all duration-300">
                <div className="text-[8px] md:text-xs text-white/70 font-medium">{DOWNLOAD_DATA.hero.newest.label}</div>
                <div className="text-yellow-300 font-bold text-sm md:text-base mt-0.5">{DOWNLOAD_DATA.hero.newest.value}</div>
                <div className="text-[8px] md:text-xs text-white/60">{DOWNLOAD_DATA.hero.newest.subValue}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== দ্রুত পরিসংখ্যান ====== */}
      <section className="py-2 md:py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-1.5 md:gap-2 max-w-6xl mx-auto">
            {categories.filter(cat => cat.id !== "all").map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-center p-1.5 md:p-2.5 rounded-lg md:rounded-xl transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat.id
                    ? `bg-gradient-to-br ${cat.color} text-white shadow-lg scale-105`
                    : "bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-green-600 hover:scale-105"
                }`}
              >
                <div className="flex justify-center text-xs md:text-base">{cat.icon}</div>
                <div className="text-[8px] md:text-[10px] lg:text-xs font-medium mt-0.5 md:mt-1 line-clamp-1">{cat.label}</div>
                <div className={`text-[8px] md:text-[10px] ${selectedCategory === cat.id ? "text-white/80" : "text-gray-400"}`}>
                  {cat.count}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ====== অনুসন্ধান ও ফিল্টার ====== */}
      <section className="py-2 md:py-3 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-20 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 items-stretch sm:items-center justify-between">
            <div className="hidden md:flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-2.5 py-1.5 lg:px-3.5 lg:py-2 rounded-lg lg:rounded-xl text-[10px] lg:text-xs font-medium transition-all duration-300 flex items-center gap-1 lg:gap-1.5 whitespace-nowrap ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-green-600 hover:scale-105"
                  }`}
                >
                  {category.icon}
                  <span className="hidden lg:inline">{category.label}</span>
                  <span className="lg:hidden">{category.label.split(" ")[0]}</span>
                  <span className={`text-[8px] ${selectedCategory === category.id ? "bg-white/20" : "bg-gray-200"} px-1 py-0.5 rounded-full`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="md:hidden flex gap-2 w-full">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex-1 px-3 py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 flex items-center justify-center gap-1.5 hover:bg-green-50 hover:text-green-600 transition-colors hover:scale-105"
              >
                <Filter className="h-3.5 w-3.5" />
                ফিল্টার
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
              </button>
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="অনুসন্ধান..."
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
                  placeholder="ফাইল অনুসন্ধান..."
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
            <div className="md:hidden mt-2 p-2.5 bg-gray-50 rounded-lg border border-gray-200 animate-fade-in-up">
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
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : "bg-white text-gray-600 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    {category.icon}
                    {category.label}
                    <span className={`text-[8px] ${selectedCategory === category.id ? "bg-white/20" : "bg-gray-200"} px-1 py-0.5 rounded-full`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ====== ডাউনলোড আইটেম ====== */}
      <section className="py-4 md:py-6 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {filteredItems.length === 0 ? (
              <div className="text-center py-8 md:py-12">
                <div className="text-4xl md:text-5xl mb-3">📂</div>
                <h3 className="text-base md:text-lg font-semibold text-slate-800">কোন ফাইল পাওয়া যায়নি</h3>
                <p className="text-gray-500 mt-1 text-xs md:text-sm">আপনার অনুসন্ধান বা ফিল্টার মানদণ্ড সামঞ্জস্য করুন</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 px-4 md:px-5 py-1.5 md:py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 text-xs md:text-sm shadow-md hover:shadow-lg"
                >
                  ফিল্টার清除 করুন
                </button>
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 mb-3">
                  <p className="text-[10px] md:text-xs text-gray-500">
                    <span className="font-semibold text-gray-700">{filteredItems.length}</span> টি ফাইল দেখানো হচ্ছে
                    <span className="font-semibold text-gray-700">{items.length}</span> টি ফাইলের মধ্যে
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-500">
                    মোট ডাউনলোড: <span className="font-semibold text-gray-700">{filteredItems.reduce((sum, i) => sum + i.downloads, 0).toLocaleString()}</span>
                  </p>
                </div>

                <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" : "grid-cols-1"} gap-3 md:gap-4`}>
                  {filteredItems.map((item, index) => (
                    <div
                      key={item.id}
                      className={`bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-1 md:hover:-translate-y-2 animate-fade-in-up animate-on-scroll border border-gray-100/50 ${
                        viewMode === "list" ? "flex flex-col sm:flex-row sm:items-center p-3 md:p-4" : "p-3 md:p-4 lg:p-5"
                      }`}
                      style={{ animationDelay: `${(index + 1) * 50}ms` }}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {viewMode === "list" ? (
                        <>
                          <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                            <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${item.color} rounded-lg md:rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-1 md:gap-1.5 flex-wrap">
                                <h3 className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors text-xs md:text-sm">
                                  {item.title}
                                </h3>
                                {item.badge && (
                                  <span className={`text-[7px] md:text-[9px] px-1.5 md:px-2 py-0.5 rounded-full font-semibold ${getBadgeColor(item.badge)}`}>
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] md:text-xs text-gray-600 line-clamp-1">{item.description}</p>
                              <div className="flex flex-wrap items-center gap-1 md:gap-2 mt-0.5 text-[8px] md:text-[10px] text-gray-500">
                                <span className={`px-1 md:px-1.5 py-0.5 rounded-full border ${getCategoryColor(item.category)}`}>
                                  {getCategoryLabel(item.category)}
                                </span>
                                <span className="flex items-center gap-0.5">
                                  <File className="h-2.5 w-2.5" /> {item.size}
                                </span>
                                <span className="flex items-center gap-0.5">
                                  <Calendar className="h-2.5 w-2.5" /> {item.date}
                                </span>
                                <span className="flex items-center gap-0.5">
                                  <Download className="h-2.5 w-2.5" /> {item.downloads.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-1.5 mt-2 sm:mt-0 sm:ml-3">
                            <button
                              onClick={() => handlePreview(item)}
                              className="p-1.5 md:p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110 hover:shadow-md"
                              title="প্রিভিউ"
                            >
                              <Eye className="h-3 w-3 md:h-3.5 md:w-3.5" />
                            </button>
                            <button
                              onClick={() => handleDownload(item)}
                              className="p-1.5 md:p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110 hover:shadow-md"
                              title="ডাউনলোড"
                            >
                              <Download className="h-3 w-3 md:h-3.5 md:w-3.5" />
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-start justify-between">
                            <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${item.color} rounded-lg md:rounded-xl flex items-center justify-center text-white mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                              {item.icon}
                            </div>
                            {item.badge && (
                              <span className={`text-[7px] md:text-[9px] px-1.5 md:px-2 py-0.5 rounded-full font-semibold ${getBadgeColor(item.badge)}`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors text-sm md:text-base">
                            {item.title}
                          </h3>
                          <p className="text-[10px] md:text-xs text-gray-600 mt-0.5 line-clamp-2">{item.description}</p>
                          <div className="flex flex-wrap items-center gap-1 md:gap-1.5 mt-1.5 md:mt-2 text-[8px] md:text-[10px] text-gray-500">
                            <span className={`px-1 md:px-1.5 py-0.5 rounded-full border ${getCategoryColor(item.category)}`}>
                              {getCategoryLabel(item.category)}
                            </span>
                            <span className="flex items-center gap-0.5">
                              <File className="h-2.5 w-2.5" /> {item.size}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-2 md:mt-3 pt-2 md:pt-3 border-t border-gray-100">
                            <span className="text-[8px] md:text-[10px] text-gray-500 flex items-center gap-0.5">
                              <Download className="h-2.5 w-2.5" /> {item.downloads.toLocaleString()} ডাউনলোড
                            </span>
                            <span className="text-[8px] md:text-[10px] text-gray-400">
                              <Calendar className="h-2.5 w-2.5 inline mr-0.5" />
                              {item.date}
                            </span>
                          </div>
                          <div className="flex gap-1.5 mt-2">
                            <button
                              onClick={() => handlePreview(item)}
                              className="flex-1 py-1.5 md:py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center justify-center gap-1 text-[10px] md:text-xs font-medium"
                            >
                              <Eye className="h-3 w-3 md:h-3.5 md:w-3.5" /> প্রিভিউ
                            </button>
                            <button
                              onClick={() => handleDownload(item)}
                              className="flex-1 py-1.5 md:py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-105 hover:shadow-md flex items-center justify-center gap-1 text-[10px] md:text-xs font-medium"
                            >
                              <Download className="h-3 w-3 md:h-3.5 md:w-3.5" /> ডাউনলোড
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {filteredItems.length > 0 && (
              <div className="mt-4 md:mt-6 text-center">
                <p className="text-[10px] md:text-xs text-gray-500">
                  {filteredItems.length} টি ফাইল দেখানো হচ্ছে {items.length} টি ফাইলের মধ্যে
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ====== বৈশিষ্ট্য ====== */}
      <section className="py-6 md:py-10 bg-gradient-to-br from-green-50/30 via-white to-red-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4 md:mb-6 animate-fade-in-up">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-slate-800">আমাদের থেকে কেন ডাউনলোড করবেন?</h2>
            <p className="text-gray-600 mt-1 text-xs md:text-sm">আপনার প্রয়োজনীয় সবকিছু এক জায়গায়, সংগঠিত এবং আপডেটেড</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {DOWNLOAD_DATA.features.map((feature, index) => {
              const Icon = feature.icon;
              const colorMap = {
                green: "bg-green-100 group-hover:bg-green-500 text-green-600 group-hover:text-white",
                blue: "bg-blue-100 group-hover:bg-blue-500 text-blue-600 group-hover:text-white",
                purple: "bg-purple-100 group-hover:bg-purple-500 text-purple-600 group-hover:text-white",
              };
              return (
                <div key={index} className="bg-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group animate-fade-in-up animate-on-scroll">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3 transition-colors duration-300 ${colorMap[feature.color as keyof typeof colorMap]}`}>
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>
                  <h3 className="font-semibold text-slate-800 text-sm md:text-base">{feature.title}</h3>
                  <p className="text-[10px] md:text-xs text-gray-600 mt-1 md:mt-1.5">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

     
    </main>
  );
}