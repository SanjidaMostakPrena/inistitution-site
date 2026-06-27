
"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Users,
  Award,
  BookOpen,
  Star,
  Trophy,
  UserCheck,
  Percent,
  Medal,
  Crown,
  BarChart,
  Download,
  Printer,
  Share2,
  Mail,
  Phone,
  Info,
  MessageCircle,
  ThumbsUp,
  Send,
  X,
  Check,
  Copy,
  Clock,
  Sparkles,
  FileText,
  Activity,
  GraduationCap,
} from "lucide-react";

// Complete mock data for details page
const resultData: Record<string, any> = {
  "1": {
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
    description: "প্রাথমিক বিভাগের (১ম-৫ম শ্রেণী) প্রথম সাময়িক পরীক্ষার ফলাফল। এই পরীক্ষায় বাংলা, ইংরেজি, গণিত, বিজ্ঞান এবং সামাজিক বিজ্ঞান সহ সকল প্রধান বিষয় অন্তর্ভুক্ত রয়েছে।",
    subjects: [
      { name: "বাংলা", fullMarks: 100, passMarks: 40, highest: 98, average: 82, passRate: 98 },
      { name: "ইংরেজি", fullMarks: 100, passMarks: 40, highest: 97, average: 80, passRate: 96 },
      { name: "গণিত", fullMarks: 100, passMarks: 40, highest: 100, average: 78, passRate: 95 },
      { name: "বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 96, average: 79, passRate: 97 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 95, average: 76, passRate: 94 },
    ],
    topPerformers: [
      { name: "আইশা রহমান", roll: "১০১", gpa: 5.0, grade: "এ+" },
      { name: "মো. কামাল হোসেন", roll: "১০২", gpa: 4.92, grade: "এ+" },
      { name: "সাদিয়া আক্তার", roll: "১০৩", gpa: 4.88, grade: "এ+" },
      { name: "রফিকুল ইসলাম", roll: "১০৪", gpa: 4.85, grade: "এ+" },
      { name: "নুসরাত জাহান", roll: "১০৫", gpa: 4.80, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 450,
      present: 445,
      absent: 5,
      passed: 432,
      failed: 13,
      passRate: 96,
      gradeDistribution: {
        "এ+": 45, "এ": 120, "এ-": 98, "বি+": 72, "বি": 50,
        "বি-": 30, "সি+": 17, "সি": 10, "ডি": 5, "এফ": 13,
      },
      genderBreakdown: { male: 230, female: 220 },
    },
    faculty: {
      name: "ড. মো. শাহিদুল ইসলাম",
      designation: "প্রধান পরীক্ষক",
      email: "shahidul@school.edu",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৭৮",
    },
    schedule: {
      startDate: "২০২৬-০৩-০১",
      endDate: "২০২৬-০৩-২০",
      resultPublication: "২০২৬-০৩-২৫",
    },
    remarks: "সামগ্রিক কর্মক্ষমতা চমৎকার। শিক্ষার্থীরা পূর্ববর্তী সেমিস্টারের তুলনায় উল্লেখযোগ্য উন্নতি দেখিয়েছে।",
  },
  "2": {
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
    description: "মাধ্যমিক বিভাগের (৬ষ্ঠ-১০ম শ্রেণী) প্রথম সাময়িক পরীক্ষার ফলাফল। ব্যবহারিক উপাদান সহ সকল প্রধান বিষয়ের ব্যাপক মূল্যায়ন।",
    subjects: [
      { name: "বাংলা", fullMarks: 100, passMarks: 40, highest: 99, average: 84, passRate: 97 },
      { name: "ইংরেজি", fullMarks: 100, passMarks: 40, highest: 98, average: 82, passRate: 96 },
      { name: "গণিত", fullMarks: 100, passMarks: 40, highest: 100, average: 80, passRate: 95 },
      { name: "বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 97, average: 81, passRate: 96 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 96, average: 78, passRate: 94 },
      { name: "আইসিটি", fullMarks: 100, passMarks: 40, highest: 99, average: 85, passRate: 98 },
    ],
    topPerformers: [
      { name: "তানভির আহমেদ", roll: "২০১", gpa: 5.0, grade: "এ+" },
      { name: "মোছা. শারমিন সুলতানা", roll: "২০২", gpa: 4.95, grade: "এ+" },
      { name: "মো. সোহেল রানা", roll: "২০৩", gpa: 4.90, grade: "এ+" },
      { name: "নাদিয়া আখতার", roll: "২০৪", gpa: 4.88, grade: "এ+" },
      { name: "রাশেদুল ইসলাম", roll: "২০৫", gpa: 4.85, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 700,
      present: 690,
      absent: 10,
      passed: 665,
      failed: 25,
      passRate: 95,
      gradeDistribution: {
        "এ+": 60, "এ": 180, "এ-": 150, "বি+": 110, "বি": 80,
        "বি-": 50, "সি+": 30, "সি": 15, "ডি": 8, "এফ": 25,
      },
      genderBreakdown: { male: 360, female: 340 },
    },
    faculty: {
      name: "অধ্যাপক ড. কামাল উদ্দিন",
      designation: "পরীক্ষা নিয়ন্ত্রক",
      email: "kamal@school.edu",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৭৯",
    },
    schedule: {
      startDate: "২০২৬-০৩-০২",
      endDate: "২০২৬-০৩-২২",
      resultPublication: "২০২৬-০৩-২৮",
    },
    remarks: "সন্তোষজনক কর্মক্ষমতা। কিছু শিক্ষার্থীর গণিত ও বিজ্ঞান বিষয়ে উন্নতি প্রয়োজন।",
  },
  "3": {
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
    description: "সকল শ্রেণীর মধ্যবর্তী পরীক্ষার ফলাফল। দ্বিতীয় সেমিস্টারের সকল বিষয়ের ব্যাপক মূল্যায়ন।",
    subjects: [
      { name: "বাংলা", fullMarks: 100, passMarks: 40, highest: 100, average: 86, passRate: 98 },
      { name: "ইংরেজি", fullMarks: 100, passMarks: 40, highest: 99, average: 84, passRate: 97 },
      { name: "গণিত", fullMarks: 100, passMarks: 40, highest: 100, average: 82, passRate: 96 },
      { name: "বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 98, average: 83, passRate: 97 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 97, average: 80, passRate: 95 },
      { name: "আইসিটি", fullMarks: 100, passMarks: 40, highest: 100, average: 88, passRate: 99 },
    ],
    topPerformers: [
      { name: "প্রিয়া দাস", roll: "৩০১", gpa: 5.0, grade: "এ+" },
      { name: "মো. জুবায়ের হোসেন", roll: "৩০২", gpa: 4.97, grade: "এ+" },
      { name: "সুলতানা রাজিয়া", roll: "৩০৩", gpa: 4.94, grade: "এ+" },
      { name: "কামরুল হাসান", roll: "৩০৪", gpa: 4.92, grade: "এ+" },
      { name: "ফারজানা আক্তার", roll: "৩০৫", gpa: 4.90, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 1500,
      present: 1480,
      absent: 20,
      passed: 1425,
      failed: 55,
      passRate: 95,
      gradeDistribution: {
        "এ+": 120, "এ": 380, "এ-": 300, "বি+": 220, "বি": 180,
        "বি-": 100, "সি+": 60, "সি": 40, "ডি": 20, "এফ": 55,
      },
      genderBreakdown: { male: 780, female: 720 },
    },
    faculty: {
      name: "ড. মো. আব্দুর রহিম",
      designation: "একাডেমিক পরিচালক",
      email: "rahim@school.edu",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৮০",
    },
    schedule: {
      startDate: "২০২৬-০৬-০১",
      endDate: "২০২৬-০৬-২০",
      resultPublication: "২০২৬-০৬-২৫",
    },
    remarks: "সকল শ্রেণীতে অসাধারণ কর্মক্ষমতা। শিক্ষার্থীরা সকল বিষয়ে চমৎকার অগ্রগতি দেখিয়েছে।",
  },
  "4": {
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
    description: "১ম-৮ম শ্রেণীর দ্বিতীয় সাময়িক পরীক্ষার ফলাফল। শিক্ষার্থীরা সকল বিষয়ে চমৎকার অগ্রগতি দেখিয়েছে।",
    subjects: [
      { name: "বাংলা", fullMarks: 100, passMarks: 40, highest: 100, average: 88, passRate: 99 },
      { name: "ইংরেজি", fullMarks: 100, passMarks: 40, highest: 99, average: 86, passRate: 98 },
      { name: "গণিত", fullMarks: 100, passMarks: 40, highest: 100, average: 84, passRate: 97 },
      { name: "বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 98, average: 85, passRate: 98 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 97, average: 82, passRate: 96 },
    ],
    topPerformers: [
      { name: "রফিকুল ইসলাম", roll: "৪০১", gpa: 5.0, grade: "এ+" },
      { name: "নুসরাত জাহান", roll: "৪০২", gpa: 4.95, grade: "এ+" },
      { name: "আইশা রহমান", roll: "৪০৩", gpa: 4.92, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 850,
      present: 840,
      absent: 10,
      passed: 816,
      failed: 24,
      passRate: 96,
      gradeDistribution: {
        "এ+": 85, "এ": 230, "এ-": 180, "বি+": 130, "বি": 90,
        "বি-": 50, "সি+": 30, "সি": 15, "ডি": 8, "এফ": 24,
      },
      genderBreakdown: { male: 430, female: 420 },
    },
    faculty: {
      name: "ড. মো. শাহিদুল ইসলাম",
      designation: "প্রধান পরীক্ষক",
      email: "shahidul@school.edu",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৭৮",
    },
    schedule: {
      startDate: "২০২৬-০৯-০১",
      endDate: "২০২৬-০৯-২৫",
      resultPublication: "২০২৬-০৯-৩০",
    },
    remarks: "চমৎকার কর্মক্ষমতা। শিক্ষার্থীরা গণিত ও বিজ্ঞানে উল্লেখযোগ্য উন্নতি দেখিয়েছে।",
  },
  "5": {
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
    description: "৯ম-১২শ শ্রেণীর বার্ষিক পরীক্ষার ফলাফল। সকল বিষয়ের ব্যাপক মূল্যায়ন।",
    subjects: [
      { name: "বাংলা", fullMarks: 100, passMarks: 40, highest: 99, average: 83, passRate: 97 },
      { name: "ইংরেজি", fullMarks: 100, passMarks: 40, highest: 98, average: 81, passRate: 96 },
      { name: "গণিত", fullMarks: 100, passMarks: 40, highest: 100, average: 79, passRate: 94 },
      { name: "বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 97, average: 80, passRate: 95 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 100, passMarks: 40, highest: 96, average: 77, passRate: 93 },
      { name: "আইসিটি", fullMarks: 100, passMarks: 40, highest: 99, average: 84, passRate: 98 },
    ],
    topPerformers: [
      { name: "তানভির আহমেদ", roll: "৫০১", gpa: 5.0, grade: "এ+" },
      { name: "মোছা. শারমিন সুলতানা", roll: "৫০২", gpa: 4.95, grade: "এ+" },
      { name: "মো. সোহেল রানা", roll: "৫০৩", gpa: 4.90, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 650,
      present: 635,
      absent: 15,
      passed: 611,
      failed: 24,
      passRate: 94,
      gradeDistribution: {
        "এ+": 55, "এ": 170, "এ-": 140, "বি+": 100, "বি": 70,
        "বি-": 40, "সি+": 25, "সি": 12, "ডি": 6, "এফ": 24,
      },
      genderBreakdown: { male: 330, female: 320 },
    },
    faculty: {
      name: "অধ্যাপক ড. কামাল উদ্দিন",
      designation: "পরীক্ষা নিয়ন্ত্রক",
      email: "kamal@school.edu",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৭৯",
    },
    schedule: {
      startDate: "২০২৬-১১-০১",
      endDate: "২০২৬-১১-৩০",
      resultPublication: "২০২৬-১২-০৫",
    },
    remarks: "সামগ্রিক কর্মক্ষমতা ভালো। শিক্ষার্থীদের গণিত ও সামাজিক বিজ্ঞানে বেশি মনোযোগ দিতে হবে।",
  },
  "6": {
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
    description: "২০২৫ শিক্ষাবর্ষের এসএসসি পরীক্ষার ফলাফল। ঢাকা বোর্ডের শিক্ষার্থীরা অসাধারণ কর্মক্ষমতা দেখিয়েছে।",
    subjects: [
      { name: "বাংলা", fullMarks: 100, passMarks: 33, highest: 99, average: 85, passRate: 99 },
      { name: "ইংরেজি", fullMarks: 100, passMarks: 33, highest: 98, average: 83, passRate: 98 },
      { name: "গণিত", fullMarks: 100, passMarks: 33, highest: 100, average: 81, passRate: 97 },
      { name: "বিজ্ঞান", fullMarks: 100, passMarks: 33, highest: 97, average: 82, passRate: 98 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 100, passMarks: 33, highest: 96, average: 80, passRate: 96 },
      { name: "ধর্ম", fullMarks: 100, passMarks: 33, highest: 99, average: 86, passRate: 99 },
    ],
    topPerformers: [
      { name: "মো. কামাল হোসেন", roll: "৬০১", gpa: 5.0, grade: "এ+" },
      { name: "আইশা রহমান", roll: "৬০২", gpa: 4.98, grade: "এ+" },
      { name: "সাদিয়া আক্তার", roll: "৬০৩", gpa: 4.95, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 320,
      present: 318,
      absent: 2,
      passed: 310,
      failed: 8,
      passRate: 96.87,
      gradeDistribution: {
        "এ+": 45, "এ": 110, "এ-": 80, "বি+": 45, "বি": 25,
        "বি-": 15, "সি+": 8, "সি": 4, "ডি": 2, "এফ": 8,
      },
      genderBreakdown: { male: 165, female: 155 },
    },
    faculty: {
      name: "ড. মো. আব্দুর রহিম",
      designation: "বোর্ড পরীক্ষক",
      email: "rahim@board.gov.bd",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৯০",
    },
    schedule: {
      startDate: "২০২৫-০৫-০১",
      endDate: "২০২৫-০৫-১৫",
      resultPublication: "২০২৫-০৫-২০",
    },
    remarks: "ঢাকা বোর্ডের শিক্ষার্থীদের অসাধারণ কর্মক্ষমতা। বিভাগে সর্বোচ্চ পাসের হার।",
  },
  "7": {
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
    description: "২০২৫ শিক্ষাবর্ষের এইচএসসি পরীক্ষার ফলাফল। ঢাকা বোর্ডের শিক্ষার্থীদের চমৎকার কর্মক্ষমতা।",
    subjects: [
      { name: "বাংলা", fullMarks: 100, passMarks: 33, highest: 98, average: 84, passRate: 98 },
      { name: "ইংরেজি", fullMarks: 100, passMarks: 33, highest: 97, average: 82, passRate: 97 },
      { name: "গণিত", fullMarks: 100, passMarks: 33, highest: 100, average: 80, passRate: 96 },
      { name: "পদার্থবিজ্ঞান", fullMarks: 100, passMarks: 33, highest: 96, average: 79, passRate: 95 },
      { name: "রসায়নবিজ্ঞান", fullMarks: 100, passMarks: 33, highest: 97, average: 81, passRate: 96 },
      { name: "জীববিজ্ঞান", fullMarks: 100, passMarks: 33, highest: 98, average: 83, passRate: 97 },
    ],
    topPerformers: [
      { name: "তানভির আহমেদ", roll: "৭০১", gpa: 5.0, grade: "এ+" },
      { name: "মোছা. শারমিন সুলতানা", roll: "৭০২", gpa: 4.96, grade: "এ+" },
      { name: "মো. সোহেল রানা", roll: "৭০৩", gpa: 4.93, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 280,
      present: 275,
      absent: 5,
      passed: 268,
      failed: 7,
      passRate: 95.71,
      gradeDistribution: {
        "এ+": 35, "এ": 95, "এ-": 70, "বি+": 40, "বি": 20,
        "বি-": 12, "সি+": 6, "সি": 3, "ডি": 2, "এফ": 7,
      },
      genderBreakdown: { male: 145, female: 135 },
    },
    faculty: {
      name: "অধ্যাপক ড. কামাল উদ্দিন",
      designation: "বোর্ড পরীক্ষক",
      email: "kamal@board.gov.bd",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৯১",
    },
    schedule: {
      startDate: "২০২৫-০৬-০১",
      endDate: "২০২৫-০৬-২০",
      resultPublication: "২০২৫-০৬-২৫",
    },
    remarks: "এইচএসসি পরীক্ষায় চমৎকার কর্মক্ষমতা। বিজ্ঞান বিভাগের শিক্ষার্থীরা অসাধারণ ফলাফল দেখিয়েছে।",
  },
  "8": {
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
    description: "২০২৪ শিক্ষাবর্ষের এসএসসি পরীক্ষার ফলাফল। ঢাকা বোর্ডের শিক্ষার্থীদের ধারাবাহিক কর্মক্ষমতা।",
    subjects: [
      { name: "বাংলা", fullMarks: 100, passMarks: 33, highest: 99, average: 84, passRate: 98 },
      { name: "ইংরেজি", fullMarks: 100, passMarks: 33, highest: 98, average: 82, passRate: 97 },
      { name: "গণিত", fullMarks: 100, passMarks: 33, highest: 100, average: 80, passRate: 96 },
      { name: "বিজ্ঞান", fullMarks: 100, passMarks: 33, highest: 97, average: 81, passRate: 97 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 100, passMarks: 33, highest: 96, average: 79, passRate: 95 },
    ],
    topPerformers: [
      { name: "রফিকুল ইসলাম", roll: "৮০১", gpa: 5.0, grade: "এ+" },
      { name: "নুসরাত জাহান", roll: "৮০২", gpa: 4.97, grade: "এ+" },
      { name: "আইশা রহমান", roll: "৮০৩", gpa: 4.94, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 305,
      present: 302,
      absent: 3,
      passed: 293,
      failed: 9,
      passRate: 96.06,
      gradeDistribution: {
        "এ+": 40, "এ": 105, "এ-": 75, "বি+": 42, "বি": 22,
        "বি-": 14, "সি+": 7, "সি": 4, "ডি": 2, "এফ": 9,
      },
      genderBreakdown: { male: 158, female: 147 },
    },
    faculty: {
      name: "ড. মো. আব্দুর রহিম",
      designation: "বোর্ড পরীক্ষক",
      email: "rahim@board.gov.bd",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৯০",
    },
    schedule: {
      startDate: "২০২৪-০৫-০১",
      endDate: "২০২৪-০৫-১০",
      resultPublication: "২০২৪-০৫-১৫",
    },
    remarks: "সামগ্রিক কর্মক্ষমতা ভালো। শিক্ষার্থীরা পূর্ববর্তী বছরের উচ্চমান বজায় রেখেছে।",
  },
  "9": {
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
    description: "৫ম শ্রেণীর শিক্ষার্থীদের ত্রৈমাসিক অভ্যন্তরীণ মূল্যায়ন। সকল প্রধান বিষয়ের ধারাবাহিক মূল্যায়ন।",
    subjects: [
      { name: "বাংলা", fullMarks: 50, passMarks: 20, highest: 49, average: 42, passRate: 98 },
      { name: "ইংরেজি", fullMarks: 50, passMarks: 20, highest: 48, average: 40, passRate: 96 },
      { name: "গণিত", fullMarks: 50, passMarks: 20, highest: 50, average: 39, passRate: 95 },
      { name: "বিজ্ঞান", fullMarks: 50, passMarks: 20, highest: 48, average: 41, passRate: 97 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 50, passMarks: 20, highest: 47, average: 38, passRate: 94 },
    ],
    topPerformers: [
      { name: "সাদিয়া আক্তার", roll: "৯০১", gpa: 5.0, grade: "এ+" },
      { name: "মো. কামাল হোসেন", roll: "৯০২", gpa: 4.92, grade: "এ+" },
      { name: "আইশা রহমান", roll: "৯০৩", gpa: 4.88, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 90,
      present: 89,
      absent: 1,
      passed: 87,
      failed: 2,
      passRate: 96.67,
      gradeDistribution: {
        "এ+": 15, "এ": 30, "এ-": 20, "বি+": 12, "বি": 6,
        "বি-": 3, "সি+": 1, "সি": 1, "ডি": 0, "এফ": 2,
      },
      genderBreakdown: { male: 46, female: 44 },
    },
    faculty: {
      name: "মোছা. ফাতেমা বেগম",
      designation: "শ্রেণি শিক্ষক",
      email: "fatema@school.edu",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৯২",
    },
    schedule: {
      startDate: "২০২৬-০২-০১",
      endDate: "২০২৬-০২-১৫",
      resultPublication: "২০২৬-০২-২০",
    },
    remarks: "ভালো কর্মক্ষমতা। শিক্ষার্থীরা সকল বিষয়ে ধারাবাহিক উন্নতি দেখাচ্ছে।",
  },
  "10": {
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
    description: "৮ম শ্রেণীর শিক্ষার্থীদের ত্রৈমাসিক অভ্যন্তরীণ মূল্যায়ন। সকল বিষয়ের ব্যাপক মূল্যায়ন।",
    subjects: [
      { name: "বাংলা", fullMarks: 50, passMarks: 20, highest: 49, average: 40, passRate: 97 },
      { name: "ইংরেজি", fullMarks: 50, passMarks: 20, highest: 48, average: 39, passRate: 96 },
      { name: "গণিত", fullMarks: 50, passMarks: 20, highest: 50, average: 38, passRate: 94 },
      { name: "বিজ্ঞান", fullMarks: 50, passMarks: 20, highest: 47, average: 40, passRate: 96 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 50, passMarks: 20, highest: 46, average: 37, passRate: 93 },
    ],
    topPerformers: [
      { name: "নাদিয়া আখতার", roll: "১০০১", gpa: 5.0, grade: "এ+" },
      { name: "রাশেদুল ইসলাম", roll: "১০০২", gpa: 4.92, grade: "এ+" },
      { name: "তানভির আহমেদ", roll: "১০০৩", gpa: 4.88, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 95,
      present: 94,
      absent: 1,
      passed: 91,
      failed: 3,
      passRate: 95.79,
      gradeDistribution: {
        "এ+": 12, "এ": 28, "এ-": 22, "বি+": 14, "বি": 8,
        "বি-": 5, "সি+": 2, "সি": 1, "ডি": 0, "এফ": 3,
      },
      genderBreakdown: { male: 48, female: 47 },
    },
    faculty: {
      name: "মো. কামাল হোসেন",
      designation: "শ্রেণি শিক্ষক",
      email: "kamal@school.edu",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৯৩",
    },
    schedule: {
      startDate: "২০২৬-০২-০১",
      endDate: "২০২৬-০২-২০",
      resultPublication: "২০২৬-০২-২৫",
    },
    remarks: "সন্তোষজনক কর্মক্ষমতা। কিছু শিক্ষার্থীর গণিতে অতিরিক্ত মনোযোগ প্রয়োজন।",
  },
  "11": {
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
    description: "১০ম শ্রেণীর শিক্ষার্থীদের ত্রৈমাসিক অভ্যন্তরীণ মূল্যায়ন। বোর্ড পরীক্ষার প্রস্তুতি।",
    subjects: [
      { name: "বাংলা", fullMarks: 50, passMarks: 20, highest: 50, average: 43, passRate: 99 },
      { name: "ইংরেজি", fullMarks: 50, passMarks: 20, highest: 49, average: 42, passRate: 98 },
      { name: "গণিত", fullMarks: 50, passMarks: 20, highest: 50, average: 41, passRate: 97 },
      { name: "বিজ্ঞান", fullMarks: 50, passMarks: 20, highest: 48, average: 42, passRate: 98 },
      { name: "সামাজিক বিজ্ঞান", fullMarks: 50, passMarks: 20, highest: 47, average: 40, passRate: 96 },
    ],
    topPerformers: [
      { name: "প্রিয়া দাস", roll: "১১০১", gpa: 5.0, grade: "এ+" },
      { name: "মো. জুবায়ের হোসেন", roll: "১১০২", gpa: 4.97, grade: "এ+" },
      { name: "সুলতানা রাজিয়া", roll: "১১০৩", gpa: 4.94, grade: "এ+" },
    ],
    statistics: {
      totalExaminees: 100,
      present: 99,
      absent: 1,
      passed: 96,
      failed: 3,
      passRate: 96,
      gradeDistribution: {
        "এ+": 18, "এ": 32, "এ-": 22, "বি+": 14, "বি": 6,
        "বি-": 3, "সি+": 1, "সি": 1, "ডি": 0, "এফ": 3,
      },
      genderBreakdown: { male: 52, female: 48 },
    },
    faculty: {
      name: "মোছা. সুলতানা রাজিয়া",
      designation: "শ্রেণি শিক্ষক",
      email: "sultana@school.edu",
      phone: "+৮৮০ ১৭১২-৩৪৫৬৯৪",
    },
    schedule: {
      startDate: "২০২৬-০২-০১",
      endDate: "২০২৬-০২-২৫",
      resultPublication: "২০২৬-০২-২৮",
    },
    remarks: "চমৎকার কর্মক্ষমতা। শিক্ষার্থীরা এসএসসি বোর্ড পরীক্ষার জন্য ভালোভাবে প্রস্তুত।",
  },
};

export default function ResultDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState("");
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([
    { id: 1, user: "ড. মো. শাহিদুল ইসলাম", text: "চমৎকার কর্মক্ষমতা! এভাবে চালিয়ে যান।", date: "২০২৬-০৩-২১", role: "শিক্ষক" },
    { id: 2, user: "মোছা. শারমিন সুলতানা", text: "অত্যন্ত সহায়ক ফলাফল। ধন্যবাদ!", date: "২০২৬-০৩-২২", role: "শিক্ষার্থী" },
  ]);

  useEffect(() => {
    setTimeout(() => {
      const data = resultData[id];
      if (data) {
        setResult(data);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const getGradeColor = (grade: string) => {
    const colors: Record<string, string> = {
      "এ+": "bg-emerald-100 text-emerald-700",
      "এ": "bg-green-100 text-green-700",
      "এ-": "bg-lime-100 text-lime-700",
      "বি+": "bg-blue-100 text-blue-700",
      "বি": "bg-cyan-100 text-cyan-700",
      "বি-": "bg-sky-100 text-sky-700",
      "সি+": "bg-yellow-100 text-yellow-700",
      "সি": "bg-orange-100 text-orange-700",
      "ডি": "bg-red-100 text-red-700",
      "এফ": "bg-rose-100 text-rose-700",
    };
    return colors[grade] || "bg-gray-100 text-gray-700";
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

  const getCategoryBadge = (category: string) => {
    const badges: Record<string, string> = {
      examination: "📝 পরীক্ষা",
      board: "🎯 বোর্ড ফলাফল",
      internal: "📊 অভ্যন্তরীণ মূল্যায়ন",
    };
    return badges[category] || category;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      examination: "bg-red-100 text-red-700",
      board: "bg-yellow-100 text-yellow-700",
      internal: "bg-blue-100 text-blue-700",
    };
    return colors[category] || "bg-gray-100 text-gray-700";
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `${result?.title} - ${result?.class} এর ফলাফল দেখুন`;
    
    const shareUrls: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent("পরীক্ষার ফলাফল")}&body=${encodeURIComponent(text + "\n\n" + url)}`,
    };

    if (platform === "copy") {
      handleCopyLink();
      return;
    }

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  const handleFeedbackSubmit = () => {
    if (feedbackText.trim() && rating > 0) {
      alert(`মতামত জমা দেওয়া হয়েছে!\nরেটিং: ${rating} তারা\nমতামত: ${feedbackText}`);
      setFeedbackText("");
      setRating(0);
    }
  };

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      const newComment = {
        id: comments.length + 1,
        user: "বর্তমান ব্যবহারকারী",
        text: commentText,
        date: new Date().toISOString().split("T")[0],
        role: "শিক্ষার্থী",
      };
      setComments([...comments, newComment]);
      setCommentText("");
    }
  };

  const handleBack = () => {
    router.push("/result");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-red-50">
        <div className="text-center px-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-3 sm:mb-4"></div>
          <p className="text-sm sm:text-base text-gray-600">ফলাফল লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-red-50">
        <div className="text-center px-4">
          <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">📄</div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">ফলাফল পাওয়া যায়নি</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">আপনি যে ফলাফল খুঁজছেন তা বিদ্যমান নেই।</p>
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-600 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" /> ফলাফলে ফিরুন
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      
      {/* হেডার সেকশন */}
      <section className="bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-3 sm:px-4">
          
          {/* ব্যাক বাটন */}
          <div className="mb-3 sm:mb-4">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-white/80 hover:text-white transition-colors group text-sm sm:text-base"
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:-translate-x-1 transition-transform" />
              ফলাফলে ফিরুন
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 sm:gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold ${getTypeColor(result.type)}`}>
                  {getTypeBadge(result.type)}
                </span>
                <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold ${getGradeColor(result.grade)}`}>
                  গ্রেড: {result.grade}
                </span>
                <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold ${getCategoryColor(result.category)}`}>
                  {getCategoryBadge(result.category)}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold break-words">{result.title}</h1>
              <p className="text-white/80 mt-0.5 sm:mt-1 text-sm sm:text-base">{result.class}</p>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-2 sm:mt-3 text-xs sm:text-sm">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4" /> {result.date}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4" /> {result.totalStudents} শিক্ষার্থী
                </span>
                <span className="flex items-center gap-1">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4" /> {result.passRate} পাসের হার
                </span>
                {result.semester && (
                  <span className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" /> {result.semester}
                  </span>
                )}
                {result.board && (
                  <span className="flex items-center gap-1">
                    <GraduationCap className="h-3 w-3 sm:h-4 sm:w-4" /> {result.board}
                  </span>
                )}
                {result.assessmentType && (
                  <span className="flex items-center gap-1">
                    <Activity className="h-3 w-3 sm:h-4 sm:w-4" /> {result.assessmentType}
                  </span>
                )}
                {result.gpa && (
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4" /> জিপিএ: {result.gpa}
                  </span>
                )}
              </div>
            </div>
           
          </div>
        </div>
      </section>

      {/* শেয়ার মোডাল */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-4 sm:p-6 animate-scale-in">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-800">ফলাফল শেয়ার করুন</h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors hover:rotate-90 duration-300"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">অন্যদের সাথে এই ফলাফল শেয়ার করুন</p>
            <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-3 sm:mb-4">
              <button
                onClick={() => handleShare("facebook")}
                className="flex flex-col items-center gap-0.5 sm:gap-1 p-2 sm:p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all hover:scale-105"
              >
                <span className="text-xl sm:text-2xl">📘</span>
                <span className="text-[10px] sm:text-xs text-gray-600">ফেসবুক</span>
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="flex flex-col items-center gap-0.5 sm:gap-1 p-2 sm:p-3 bg-sky-50 hover:bg-sky-100 rounded-xl transition-all hover:scale-105"
              >
                <span className="text-xl sm:text-2xl">🐦</span>
                <span className="text-[10px] sm:text-xs text-gray-600">টুইটার</span>
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="flex flex-col items-center gap-0.5 sm:gap-1 p-2 sm:p-3 bg-indigo-50 hover:bg-indigo-100 rounded-xl transition-all hover:scale-105"
              >
                <span className="text-xl sm:text-2xl">🔗</span>
                <span className="text-[10px] sm:text-xs text-gray-600">লিংকডইন</span>
              </button>
              <button
                onClick={() => handleShare("email")}
                className="flex flex-col items-center gap-0.5 sm:gap-1 p-2 sm:p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all hover:scale-105"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
                <span className="text-[10px] sm:text-xs text-gray-600">ইমেইল</span>
              </button>
            </div>
            <div className="flex items-center gap-2 p-1.5 sm:p-2 bg-gray-50 rounded-lg">
              <input
                type="text"
                value={typeof window !== "undefined" ? window.location.href : ""}
                readOnly
                className="flex-1 bg-transparent text-xs sm:text-sm text-gray-600 outline-none min-w-0"
              />
              <button
                onClick={handleCopyLink}
                className="p-1.5 hover:bg-gray-200 rounded-lg transition-colors hover:scale-105 flex-shrink-0"
              >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-500" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ট্যাব */}
      <div className="bg-white shadow-sm sticky top-16 lg:top-20 z-10">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex gap-0.5 sm:gap-1 overflow-x-auto py-2 sm:py-3 scrollbar-hide">
            {[
              { id: "overview", label: "সারাংশ", icon: <Info className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
              { id: "subjects", label: "বিষয় বিশ্লেষণ", icon: <BookOpen className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
              { id: "statistics", label: "পরিসংখ্যান", icon: <BarChart className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
              { id: "performers", label: "শীর্ষ স্থান", icon: <Trophy className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
              { id: "comments", label: "মন্তব্য", icon: <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-1 sm:gap-2 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-green-500 to-red-500 text-white shadow-lg scale-105"
                    : "text-gray-600 hover:bg-gray-100 hover:scale-105"
                }`}
              >
                {tab.icon} <span className="hidden xs:inline">{tab.label}</span>
                <span className="xs:hidden">
                  {tab.id === "overview" ? "সারাংশ" :
                   tab.id === "subjects" ? "বিষয়" :
                   tab.id === "statistics" ? "পরিসংখ্যান" :
                   tab.id === "performers" ? "শীর্ষ" :
                   "মন্তব্য"}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* মূল কন্টেন্ট */}
      <section className="py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-5xl mx-auto">
            {/* সারাংশ ট্যাব */}
            {activeTab === "overview" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 animate-fade-in-up">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">বিবরণ</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{result.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 text-center hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in-up animation-delay-100">
                    <div className="text-lg sm:text-2xl font-bold text-green-600">{result.totalStudents}</div>
                    <div className="text-[10px] sm:text-sm text-gray-500">মোট শিক্ষার্থী</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 text-center hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in-up animation-delay-200">
                    <div className="text-lg sm:text-2xl font-bold text-blue-600">{result.passed}</div>
                    <div className="text-[10px] sm:text-sm text-gray-500">উত্তীর্ণ</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 text-center hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in-up animation-delay-300">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-600">{result.passRate}</div>
                    <div className="text-[10px] sm:text-sm text-gray-500">পাসের হার</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 text-center hover:shadow-md transition-all hover:-translate-y-1 animate-fade-in-up animation-delay-400">
                    <div className="text-lg sm:text-2xl font-bold text-purple-600">{result.grade}</div>
                    <div className="text-[10px] sm:text-sm text-gray-500">সামগ্রিক গ্রেড</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 animate-fade-in-up">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3">পরীক্ষার সময়সূচী</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-green-50 rounded-xl">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      <div>
                        <div className="text-[10px] sm:text-xs text-gray-500">শুরু তারিখ</div>
                        <div className="text-xs sm:text-sm font-semibold">{result.schedule.startDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-red-50 rounded-xl">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-red-600" />
                      <div>
                        <div className="text-[10px] sm:text-xs text-gray-500">শেষ তারিখ</div>
                        <div className="text-xs sm:text-sm font-semibold">{result.schedule.endDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-blue-50 rounded-xl">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                      <div>
                        <div className="text-[10px] sm:text-xs text-gray-500">ফলাফল প্রকাশ</div>
                        <div className="text-xs sm:text-sm font-semibold">{result.schedule.resultPublication}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 animate-fade-in-up">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3">পরীক্ষা বিভাগ</h2>
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <UserCheck className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-base font-semibold text-gray-800 break-words">{result.faculty.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{result.faculty.designation}</div>
                      <div className="flex flex-wrap gap-2 sm:gap-3 mt-1 text-xs sm:text-sm text-gray-500">
                        <span className="flex items-center gap-1 min-w-0">
                          <Mail className="h-3 w-3 flex-shrink-0" /> <span className="truncate">{result.faculty.email}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3 flex-shrink-0" /> {result.faculty.phone}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {result.remarks && (
                  <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-2xl shadow-sm p-4 sm:p-6 border border-green-100 animate-fade-in-up">
                    <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2">মন্তব্য</h2>
                    <p className="text-sm sm:text-base text-gray-700">{result.remarks}</p>
                  </div>
                )}
              </div>
            )}

            {/* বিষয় বিশ্লেষণ ট্যাব */}
            {activeTab === "subjects" && (
              <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 animate-fade-in-up">
                <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">বিষয়ভিত্তিক কর্মক্ষমতা</h2>
                <div className="space-y-3 sm:space-y-4">
                  {result.subjects.map((subject: any, index: number) => (
                    <div key={index} className="p-3 sm:p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all hover:-translate-y-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <span className="font-medium text-gray-800 text-sm sm:text-base">{subject.name}</span>
                        <span className="text-xs sm:text-sm text-gray-500">
                          গড়: {subject.average}% | পাস: {subject.passRate}%
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                          <span className="text-gray-500 w-14 sm:w-16">পাসের হার</span>
                          <div className="flex-1 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-green-500 rounded-full transition-all duration-1000"
                              style={{ width: `${subject.passRate}%` }}
                            />
                          </div>
                          <span className="font-medium text-gray-700 w-10 sm:w-12 text-right">{subject.passRate}%</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                          <span className="text-gray-500 w-14 sm:w-16">গড়</span>
                          <div className="flex-1 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                              style={{ width: `${subject.average}%` }}
                            />
                          </div>
                          <span className="font-medium text-gray-700 w-10 sm:w-12 text-right">{subject.average}%</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                          <span className="text-gray-500 w-14 sm:w-16">সর্বোচ্চ</span>
                          <div className="flex-1 h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-500 rounded-full transition-all duration-1000"
                              style={{ width: `${subject.highest}%` }}
                            />
                          </div>
                          <span className="font-medium text-gray-700 w-10 sm:w-12 text-right">{subject.highest}%</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap justify-end gap-3 sm:gap-4 mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-gray-400">
                        <span>পূর্ণ নম্বর: {subject.fullMarks}</span>
                        <span>পাস নম্বর: {subject.passMarks}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* পরিসংখ্যান ট্যাব */}
            {activeTab === "statistics" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 animate-fade-in-up">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">গ্রেড বিতরণ</h2>
                  <div className="space-y-1.5 sm:space-y-2">
                    {Object.entries(result.statistics.gradeDistribution).map(([grade, count]) => (
                      <div key={grade} className="flex items-center gap-2 sm:gap-3">
                        <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold w-8 sm:w-10 text-center ${getGradeColor(grade)}`}>
                          {grade}
                        </span>
                        <div className="flex-1 h-4 sm:h-5 md:h-6 bg-gray-100 rounded-full overflow-hidden relative">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              grade === "এ+" ? "bg-emerald-500" :
                              grade === "এ" ? "bg-green-500" :
                              grade === "এ-" ? "bg-lime-500" :
                              grade === "বি+" ? "bg-blue-500" :
                              grade === "বি" ? "bg-cyan-500" :
                              grade === "বি-" ? "bg-sky-500" :
                              grade === "সি+" ? "bg-yellow-500" :
                              grade === "সি" ? "bg-orange-500" :
                              grade === "ডি" ? "bg-red-500" :
                              "bg-rose-500"
                            }`}
                            style={{
                              width: `${(count as number / result.statistics.totalExaminees) * 100}%`,
                            }}
                          />
                          <span className="absolute right-1.5 sm:right-2 top-1/2 -translate-y-1/2 text-[10px] sm:text-xs font-medium text-gray-700">
                            {count}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-gray-500 w-12 sm:w-14 text-right">
                          {((count as number / result.statistics.totalExaminees) * 100).toFixed(1)}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4">
                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 text-center animate-fade-in-up animation-delay-100">
                    <div className="text-lg sm:text-2xl font-bold text-green-600">{result.statistics.totalExaminees}</div>
                    <div className="text-[10px] sm:text-sm text-gray-500">মোট পরীক্ষার্থী</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 text-center animate-fade-in-up animation-delay-200">
                    <div className="text-lg sm:text-2xl font-bold text-blue-600">{result.statistics.present}</div>
                    <div className="text-[10px] sm:text-sm text-gray-500">উপস্থিত</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 text-center animate-fade-in-up animation-delay-300">
                    <div className="text-lg sm:text-2xl font-bold text-red-600">{result.statistics.absent}</div>
                    <div className="text-[10px] sm:text-sm text-gray-500">অনুপস্থিত</div>
                  </div>
                  <div className="bg-white rounded-2xl shadow-sm p-3 sm:p-4 text-center animate-fade-in-up animation-delay-400">
                    <div className="text-lg sm:text-2xl font-bold text-yellow-600">{result.statistics.passRate}%</div>
                    <div className="text-[10px] sm:text-sm text-gray-500">পাসের হার</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 animate-fade-in-up">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">লিঙ্গভিত্তিক বিভাজন</h2>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                    <div className="bg-blue-50 rounded-xl p-3 sm:p-4 text-center hover:shadow-md transition-all hover:-translate-y-0.5">
                      <div className="text-lg sm:text-2xl font-bold text-blue-600">{result.statistics.genderBreakdown.male}</div>
                      <div className="text-[10px] sm:text-sm text-gray-500">ছাত্র</div>
                    </div>
                    <div className="bg-pink-50 rounded-xl p-3 sm:p-4 text-center hover:shadow-md transition-all hover:-translate-y-0.5">
                      <div className="text-lg sm:text-2xl font-bold text-pink-600">{result.statistics.genderBreakdown.female}</div>
                      <div className="text-[10px] sm:text-sm text-gray-500">ছাত্রী</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* শীর্ষ স্থান ট্যাব */}
            {activeTab === "performers" && (
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl shadow-sm p-4 sm:p-6 border-2 border-yellow-200 animate-fade-in-up">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
                  <h2 className="text-base sm:text-lg font-bold text-gray-800">শীর্ষ স্থান অর্জনকারী</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {result.topPerformers.map((performer: any, index: number) => (
                    <div
                      key={index}
                      className={`bg-white rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 ${
                        index === 0 ? "border-2 border-yellow-400" :
                        index === 1 ? "border-2 border-gray-300" :
                        "border-2 border-amber-600"
                      }`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-[10px] sm:text-sm flex-shrink-0 ${
                          index === 0 ? "bg-yellow-500" :
                          index === 1 ? "bg-gray-400" :
                          "bg-amber-600"
                        }`}>
                          #{index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm sm:text-base font-semibold text-gray-800 break-words">{performer.name}</div>
                          <div className="text-xs sm:text-sm text-gray-500">রোল: {performer.roll}</div>
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-1">
                            <span className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold ${getGradeColor(performer.grade)}`}>
                              {performer.grade}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-green-600">জিপিএ: {performer.gpa}</span>
                          </div>
                        </div>
                        {index === 0 && <Medal className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 flex-shrink-0" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* মন্তব্য ট্যাব */}
            {activeTab === "comments" && (
              <div className="space-y-4 sm:space-y-6">
                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 animate-fade-in-up">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">মন্তব্য ও মতামত</h2>
                  <div className="space-y-3 sm:space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="p-3 sm:p-4 bg-gray-50 rounded-xl hover:shadow-sm transition-all">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div className="min-w-0">
                            <div className="text-sm sm:text-base font-semibold text-gray-800 break-words">{comment.user}</div>
                            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mt-0.5">
                              <span className="px-1.5 sm:px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-[10px] sm:text-xs">
                                {comment.role}
                              </span>
                              <span className="text-[10px] sm:text-xs text-gray-500">{comment.date}</span>
                            </div>
                          </div>
                          <ThumbsUp className="h-4 w-4 text-gray-400 hover:text-green-500 cursor-pointer transition-colors flex-shrink-0" />
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 animate-fade-in-up">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">মন্তব্য যোগ করুন</h2>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <input
                      type="text"
                      placeholder="আপনার মন্তব্য লিখুন..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    />
                    <button
                      onClick={handleCommentSubmit}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-green-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105 text-sm sm:text-base flex items-center justify-center gap-1.5"
                    >
                      <Send className="h-4 w-4" /> <span>পাঠান</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 animate-fade-in-up">
                  <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">এই ফলাফল রেট দিন</h2>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-all hover:scale-110"
                      >
                        <Star
                          className={`h-6 w-6 sm:h-8 sm:w-8 ${
                            star <= (hoverRating || rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          } transition-colors`}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <input
                      type="text"
                      placeholder="আপনার মতামত শেয়ার করুন..."
                      value={feedbackText}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      className="flex-1 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm sm:text-base"
                    />
                    <button
                      onClick={handleFeedbackSubmit}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all hover:scale-105 text-sm sm:text-base"
                    >
                      মতামত জমা দিন
                    </button>
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