"use client";

import { useState } from "react";
import Link from "next/link";
import {
  School,
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  BarChart,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  User,
  Mail,
  Phone,
  MapPin,
  Award,
  CheckCircle,
  XCircle,
  Grid,
  List,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  UserPlus,
  UserCheck,
  Layers,
  TrendingUp,
  Clock,
  Filter,
  X,
  Download,
  RefreshCw,
  ChevronRight,
  Save,
  AlertCircle,
} from "lucide-react";

// ===== MOCK DATA =====
const classData = [
  { id: 1, name: "১ম শ্রেণী", level: "প্রাথমিক", sections: 3, students: 95, teachers: 8, subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"], room: "১০১-১০৩", stream: "সাধারণ", attendance: 92, passRate: 95 },
  { id: 2, name: "২য় শ্রেণী", level: "প্রাথমিক", sections: 3, students: 90, teachers: 8, subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"], room: "১০৪-১০৬", stream: "সাধারণ", attendance: 88, passRate: 93 },
  { id: 3, name: "৩য় শ্রেণী", level: "প্রাথমিক", sections: 3, students: 88, teachers: 8, subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"], room: "১০৭-১০৯", stream: "সাধারণ", attendance: 90, passRate: 94 },
  { id: 4, name: "৪র্থ শ্রেণী", level: "প্রাথমিক", sections: 3, students: 92, teachers: 8, subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"], room: "১১০-১১২", stream: "সাধারণ", attendance: 86, passRate: 91 },
  { id: 5, name: "৫ম শ্রেণী", level: "প্রাথমিক", sections: 3, students: 85, teachers: 8, subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা", "শারীরিক শিক্ষা"], room: "১১৩-১১৫", stream: "সাধারণ", attendance: 94, passRate: 97 },
  { id: 6, name: "৬ষ্ঠ শ্রেণী", level: "নিম্ন মাধ্যমিক", sections: 4, students: 120, teachers: 12, subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম", "আইসিটি"], room: "২০১-২০৪", stream: "সাধারণ", attendance: 89, passRate: 90 },
  { id: 7, name: "৭ম শ্রেণী", level: "নিম্ন মাধ্যমিক", sections: 4, students: 115, teachers: 12, subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম", "আইসিটি"], room: "২০৫-২০৮", stream: "সাধারণ", attendance: 91, passRate: 92 },
  { id: 8, name: "৮ম শ্রেণী", level: "নিম্ন মাধ্যমিক", sections: 4, students: 118, teachers: 12, subjects: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম", "আইসিটি"], room: "২০৯-২১২", stream: "সাধারণ", attendance: 87, passRate: 89 },
  { id: 9, name: "৯ম শ্রেণী", level: "মাধ্যমিক", sections: 3, students: 90, teachers: 14, subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম"], room: "৩০১-৩০৩", stream: "বিজ্ঞান", attendance: 93, passRate: 96 },
  { id: 10, name: "১০ম শ্রেণী", level: "মাধ্যমিক", sections: 3, students: 88, teachers: 14, subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "ইতিহাস", "ভূগোল", "ধর্ম"], room: "৩০৪-৩০৬", stream: "বিজ্ঞান", attendance: 95, passRate: 98 },
  { id: 11, name: "১১শ শ্রেণী (বিজ্ঞান)", level: "উচ্চ মাধ্যমিক", sections: 2, students: 60, teachers: 10, subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "আইসিটি"], room: "৪০১-৪০২", stream: "বিজ্ঞান", attendance: 88, passRate: 91 },
  { id: 12, name: "১১শ শ্রেণী (বাণিজ্য)", level: "উচ্চ মাধ্যমিক", sections: 2, students: 55, teachers: 10, subjects: ["বাংলা", "ইংরেজি", "গণিত", "হিসাববিজ্ঞান", "ব্যবসায় শিক্ষা", "অর্থনীতি", "আইসিটি"], room: "৪০৩-৪০৪", stream: "বাণিজ্য", attendance: 86, passRate: 88 },
  { id: 13, name: "১১শ শ্রেণী (মানবিক)", level: "উচ্চ মাধ্যমিক", sections: 1, students: 30, teachers: 8, subjects: ["বাংলা", "ইংরেজি", "ইতিহাস", "ভূগোল", "রাষ্ট্রবিজ্ঞান", "সমাজবিজ্ঞান", "আইসিটি"], room: "৪০৫", stream: "মানবিক", attendance: 92, passRate: 94 },
  { id: 14, name: "১২শ শ্রেণী (বিজ্ঞান)", level: "উচ্চ মাধ্যমিক", sections: 2, students: 58, teachers: 10, subjects: ["বাংলা", "ইংরেজি", "গণিত", "পদার্থবিজ্ঞান", "রসায়ন", "জীববিজ্ঞান", "আইসিটি"], room: "৪০৬-৪০৭", stream: "বিজ্ঞান", attendance: 90, passRate: 93 },
  { id: 15, name: "১২শ শ্রেণী (বাণিজ্য)", level: "উচ্চ মাধ্যমিক", sections: 2, students: 52, teachers: 10, subjects: ["বাংলা", "ইংরেজি", "গণিত", "হিসাববিজ্ঞান", "ব্যবসায় শিক্ষা", "অর্থনীতি", "আইসিটি"], room: "৪০৮-৪০৯", stream: "বাণিজ্য", attendance: 85, passRate: 87 },
  { id: 16, name: "১২শ শ্রেণী (মানবিক)", level: "উচ্চ মাধ্যমিক", sections: 1, students: 28, teachers: 8, subjects: ["বাংলা", "ইংরেজি", "ইতিহাস", "ভূগোল", "রাষ্ট্রবিজ্ঞান", "সমাজবিজ্ঞান", "আইসিটি"], room: "৪১০", stream: "মানবিক", attendance: 93, passRate: 96 },
];

const allStudents = [
  { id: 1, name: "মোঃ রহমান", roll: 1, class: "১ম শ্রেণী", gender: "পুরুষ", attendance: 95, marks: 85, email: "rahman@email.com", phone: "01712345678", address: "গাইবান্ধা" },
  { id: 2, name: "সুলতানা আখতার", roll: 2, class: "১ম শ্রেণী", gender: "নারী", attendance: 92, marks: 88, email: "sultana@email.com", phone: "01712345679", address: "পলাশবাড়ী" },
  { id: 3, name: "কামাল হোসেন", roll: 3, class: "১ম শ্রেণী", gender: "পুরুষ", attendance: 88, marks: 78, email: "kamal@email.com", phone: "01712345680", address: "গাইবান্ধা" },
  { id: 4, name: "ফাতেমা বেগম", roll: 4, class: "১ম শ্রেণী", gender: "নারী", attendance: 96, marks: 92, email: "fatema@email.com", phone: "01712345681", address: "পলাশবাড়ী" },
  { id: 5, name: "আব্দুল করিম", roll: 1, class: "২য় শ্রেণী", gender: "পুরুষ", attendance: 93, marks: 82, email: "karim@email.com", phone: "01712345682", address: "গাইবান্ধা" },
  { id: 6, name: "রোকেয়া সুলতানা", roll: 2, class: "২য় শ্রেণী", gender: "নারী", attendance: 91, marks: 87, email: "rokeya@email.com", phone: "01712345683", address: "পলাশবাড়ী" },
  { id: 7, name: "মামুনুর রশিদ", roll: 1, class: "৩য় শ্রেণী", gender: "পুরুষ", attendance: 89, marks: 75, email: "mamun@email.com", phone: "01712345684", address: "গাইবান্ধা" },
  { id: 8, name: "রহিম আলী", roll: 5, class: "১ম শ্রেণী", gender: "পুরুষ", attendance: 85, marks: 72, email: "rahim@email.com", phone: "01712345685", address: "পলাশবাড়ী" },
  { id: 9, name: "আয়েশা খান", roll: 6, class: "১ম শ্রেণী", gender: "নারী", attendance: 90, marks: 86, email: "ayesha@email.com", phone: "01712345686", address: "গাইবান্ধা" },
  { id: 10, name: "সোহেল রানা", roll: 7, class: "১ম শ্রেণী", gender: "পুরুষ", attendance: 82, marks: 68, email: "sohel@email.com", phone: "01712345687", address: "পলাশবাড়ী" },
];

const allTeachers = [
  { id: 1, name: "মোঃ কামাল হোসেন", subject: "বাংলা", email: "kamal@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৭৮", class: "১ম শ্রেণী", experience: "১২ বছর" },
  { id: 2, name: "মিসেস সুলতানা আখতার", subject: "ইংরেজি", email: "sultana@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৭৯", class: "১ম শ্রেণী", experience: "১০ বছর" },
  { id: 3, name: "মোঃ রহমান", subject: "গণিত", email: "rahman@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮০", class: "১ম শ্রেণী", experience: "৮ বছর" },
  { id: 4, name: "মিসেস ফরিদা বেগম", subject: "বিজ্ঞান", email: "farida@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮১", class: "১ম শ্রেণী", experience: "১৫ বছর" },
  { id: 5, name: "মোঃ আব্দুল করিম", subject: "বাংলা", email: "karim@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮৬", class: "২য় শ্রেণী", experience: "৭ বছর" },
  { id: 6, name: "মিসেস রোকেয়া সুলতানা", subject: "ইংরেজি", email: "rokeya@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮৭", class: "২য় শ্রেণী", experience: "৯ বছর" },
  { id: 7, name: "মোঃ রহিম আলী", subject: "ধর্ম", email: "rahim@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮২", class: "১ম শ্রেণী", experience: "১১ বছর" },
  { id: 8, name: "মিসেস আয়েশা খান", subject: "চারু ও কারুকলা", email: "ayesha@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮৩", class: "১ম শ্রেণী", experience: "৬ বছর" },
  { id: 9, name: "মোঃ সোহেল রানা", subject: "শারীরিক শিক্ষা", email: "sohel@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮৪", class: "১ম শ্রেণী", experience: "১৩ বছর" },
  { id: 10, name: "মিসেস নুসরাত জাহান", subject: "আইসিটি", email: "nusrat@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮৫", class: "১ম শ্রেণী", experience: "৫ বছর" },
];

const examResults = [
  { id: 1, subject: "বাংলা", average: 78, passRate: 95, topScore: 98, class: "১ম শ্রেণী" },
  { id: 2, subject: "ইংরেজি", average: 82, passRate: 92, topScore: 97, class: "১ম শ্রেণী" },
  { id: 3, subject: "গণিত", average: 75, passRate: 88, topScore: 95, class: "১ম শ্রেণী" },
  { id: 4, subject: "বিজ্ঞান", average: 80, passRate: 90, topScore: 96, class: "১ম শ্রেণী" },
  { id: 5, subject: "বাংলা", average: 76, passRate: 93, topScore: 97, class: "২য় শ্রেণী" },
  { id: 6, subject: "ইংরেজি", average: 80, passRate: 90, topScore: 96, class: "২য় শ্রেণী" },
  { id: 7, subject: "গণিত", average: 73, passRate: 85, topScore: 94, class: "২য় শ্রেণী" },
  { id: 8, subject: "বিজ্ঞান", average: 78, passRate: 88, topScore: 95, class: "২য় শ্রেণী" },
];

const classRoutine = {
  "১ম শ্রেণী": [
    { day: "রবিবার", periods: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা"] },
    { day: "সোমবার", periods: ["ইংরেজি", "গণিত", "বাংলা", "বিজ্ঞান", "চারু ও কারুকলা", "শারীরিক শিক্ষা"] },
    { day: "মঙ্গলবার", periods: ["গণিত", "বাংলা", "ইংরেজি", "ধর্ম", "বিজ্ঞান", "চারু ও কারুকলা"] },
    { day: "বুধবার", periods: ["বিজ্ঞান", "ধর্ম", "গণিত", "ইংরেজি", "বাংলা", "শারীরিক শিক্ষা"] },
    { day: "বৃহস্পতিবার", periods: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "আইসিটি", "চারু ও কারুকলা"] },
  ],
  "২য় শ্রেণী": [
    { day: "রবিবার", periods: ["ইংরেজি", "গণিত", "বাংলা", "বিজ্ঞান", "ধর্ম", "শারীরিক শিক্ষা"] },
    { day: "সোমবার", periods: ["গণিত", "বাংলা", "ইংরেজি", "চারু ও কারুকলা", "বিজ্ঞান", "আইসিটি"] },
    { day: "মঙ্গলবার", periods: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি", "ধর্ম", "চারু ও কারুকলা"] },
    { day: "বুধবার", periods: ["বিজ্ঞান", "ইংরেজি", "বাংলা", "গণিত", "শারীরিক শিক্ষা", "ধর্ম"] },
    { day: "বৃহস্পতিবার", periods: ["গণিত", "ধর্ম", "বাংলা", "ইংরেজি", "বিজ্ঞান", "আইসিটি"] },
  ],
};

// ===== HELPER FUNCTIONS =====
const getLevelColor = (level: string) => {
  const map: Record<string, string> = {
    "প্রাথমিক": "bg-emerald-100 text-emerald-700",
    "নিম্ন মাধ্যমিক": "bg-blue-100 text-blue-700",
    "মাধ্যমিক": "bg-purple-100 text-purple-700",
    "উচ্চ মাধ্যমিক": "bg-rose-100 text-rose-700",
  };
  return map[level] || "bg-gray-100 text-gray-700";
};

const getStreamColor = (stream: string) => {
  const map: Record<string, string> = {
    "বিজ্ঞান": "bg-indigo-100 text-indigo-700",
    "বাণিজ্য": "bg-orange-100 text-orange-700",
    "মানবিক": "bg-pink-100 text-pink-700",
    "সাধারণ": "bg-gray-100 text-gray-700",
  };
  return map[stream] || "bg-gray-100 text-gray-700";
};

const getAttendanceColor = (attendance: number) => {
  if (attendance >= 90) return "text-green-600";
  if (attendance >= 75) return "text-yellow-600";
  return "text-red-600";
};

const getGrade = (marks: number) => {
  if (marks >= 80) return { grade: "A+", color: "text-green-600" };
  if (marks >= 70) return { grade: "A", color: "text-blue-600" };
  if (marks >= 60) return { grade: "B", color: "text-yellow-600" };
  if (marks >= 50) return { grade: "C", color: "text-orange-600" };
  return { grade: "D", color: "text-red-600" };
};

// ===== MAIN COMPONENT =====
export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const [filterStream, setFilterStream] = useState<string>("all");
  const [filterClass, setFilterClass] = useState<string>("all");
  const [filterSubject, setFilterSubject] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedClass, setSelectedClass] = useState<string>("১ম শ্রেণী");

  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [editFormData, setEditFormData] = useState<any>({});
  const [modalType, setModalType] = useState<"class" | "student" | "teacher" | "result">("class");

  // Stats
  const totalClasses = classData.length;
  const totalStudents = allStudents.length;
  const totalTeachers = allTeachers.length;
  const avgAttendance = Math.round(allStudents.reduce((sum, s) => sum + s.attendance, 0) / allStudents.length);

  // Filtered data
  const filteredClasses = classData.filter((c) => {
    const matchSearch = c.name.includes(searchTerm) || c.level.includes(searchTerm);
    const matchLevel = filterLevel === "all" || c.level === filterLevel;
    const matchStream = filterStream === "all" || c.stream === filterStream;
    return matchSearch && matchLevel && matchStream;
  });

  const filteredStudents = allStudents.filter((s) => {
    const matchSearch = s.name.includes(searchTerm) || s.roll.toString().includes(searchTerm) || s.class.includes(searchTerm);
    const matchClass = filterClass === "all" || s.class === filterClass;
    return matchSearch && matchClass;
  });

  const filteredTeachers = allTeachers.filter((t) => {
    const matchSearch = t.name.includes(searchTerm) || t.subject.includes(searchTerm) || t.class.includes(searchTerm);
    const matchSubject = filterSubject === "all" || t.subject === filterSubject;
    return matchSearch && matchSubject;
  });

  const filteredResults = examResults.filter((r) => {
    return r.class.includes(searchTerm) || r.subject.includes(searchTerm);
  });

  const classNames = Array.from(new Set(allStudents.map(s => s.class)));
  const subjects = Array.from(new Set(allTeachers.map(t => t.subject)));
  const levels = ["প্রাথমিক", "নিম্ন মাধ্যমিক", "মাধ্যমিক", "উচ্চ মাধ্যমিক"];
  const streams = ["বিজ্ঞান", "বাণিজ্য", "মানবিক", "সাধারণ"];

  // Modal handlers
  const openViewModal = (item: any, type: "class" | "student" | "teacher" | "result") => {
    setSelectedItem(item);
    setModalType(type);
    setViewModalOpen(true);
  };

  const openEditModal = (item: any, type: "class" | "student" | "teacher" | "result") => {
    setSelectedItem(item);
    setModalType(type);
    setEditFormData(item);
    setEditModalOpen(true);
  };

  const openDeleteModal = (item: any, type: "class" | "student" | "teacher" | "result") => {
    setSelectedItem(item);
    setModalType(type);
    setDeleteModalOpen(true);
  };

  const handleEditSave = () => {
    console.log("Saving edit:", editFormData);
    setEditModalOpen(false);
    alert("ডেটা আপডেট করা হয়েছে (ডেমো)");
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting:", selectedItem);
    setDeleteModalOpen(false);
    alert("আইটেম ডিলিট করা হয়েছে (ডেমো)");
  };

  // ===== RENDER: OVERVIEW =====
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">মোট শ্রেণী</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalClasses}</p></div>
            <div className="p-3 bg-blue-50 rounded-xl"><School className="h-6 w-6 text-blue-600" /></div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600"><ArrowUpRight className="h-3 w-3" /> <span>গত বছর থেকে +২</span></div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">মোট শিক্ষার্থী</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalStudents}</p></div>
            <div className="p-3 bg-green-50 rounded-xl"><Users className="h-6 w-6 text-green-600" /></div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600"><ArrowUpRight className="h-3 w-3" /> <span>গত মাসে +১২ জন</span></div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">মোট শিক্ষক</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalTeachers}</p></div>
            <div className="p-3 bg-purple-50 rounded-xl"><GraduationCap className="h-6 w-6 text-purple-600" /></div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600"><ArrowUpRight className="h-3 w-3" /> <span>গত বছর থেকে +৩ জন</span></div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">গড় উপস্থিতি</p><p className="text-2xl font-bold text-slate-800 mt-1">{avgAttendance}%</p></div>
            <div className="p-3 bg-orange-50 rounded-xl"><TrendingUp className="h-6 w-6 text-orange-600" /></div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600"><ArrowUpRight className="h-3 w-3" /> <span>গত মাসে +৫%</span></div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <button onClick={() => setActiveTab("students")} className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-green-200 hover:-translate-y-0.5">
          <Users className="h-6 w-6 text-green-600 mx-auto mb-2" /><p className="text-sm font-medium text-gray-700 text-center">শিক্ষার্থী দেখুন</p>
        </button>
        <button onClick={() => setActiveTab("teachers")} className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-green-200 hover:-translate-y-0.5">
          <GraduationCap className="h-6 w-6 text-blue-600 mx-auto mb-2" /><p className="text-sm font-medium text-gray-700 text-center">শিক্ষক দেখুন</p>
        </button>
        <button onClick={() => setActiveTab("results")} className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-green-200 hover:-translate-y-0.5">
          <BarChart className="h-6 w-6 text-purple-600 mx-auto mb-2" /><p className="text-sm font-medium text-gray-700 text-center">ফলাফল দেখুন</p>
        </button>
        <button onClick={() => setActiveTab("routine")} className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-green-200 hover:-translate-y-0.5">
          <Calendar className="h-6 w-6 text-orange-600 mx-auto mb-2" /><p className="text-sm font-medium text-gray-700 text-center">রুটিন দেখুন</p>
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4">সাম্প্রতিক কার্যক্রম</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-sm"><span className="w-2 h-2 rounded-full bg-green-500"></span> নতুন শিক্ষার্থী ভর্তি: মোঃ রহমান (১ম শ্রেণী)</li>
          <li className="flex items-center gap-3 text-sm"><span className="w-2 h-2 rounded-full bg-blue-500"></span> শিক্ষকের প্রোফাইল আপডেট: মিসেস সুলতানা আখতার</li>
          <li className="flex items-center gap-3 text-sm"><span className="w-2 h-2 rounded-full bg-purple-500"></span> বিজ্ঞান মেলা ২০২৬-এর সময়সূচি প্রকাশ</li>
        </ul>
      </div>
    </div>
  );

  // ===== RENDER: CLASSES =====
  const renderClasses = () => (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="শ্রেণী বা স্তর দিয়ে খুঁজুন..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        </div>
        <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)} className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white">
          <option value="all">সকল স্তর</option>{levels.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <select value={filterStream} onChange={(e) => setFilterStream(e.target.value)} className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white">
          <option value="all">সকল শাখা</option>{streams.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <button onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")} className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300">
          {viewMode === "grid" ? <List className="h-5 w-5 text-gray-600" /> : <Grid className="h-5 w-5 text-gray-600" />}
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredClasses.map((cls) => (
            <div key={cls.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-200">
              <div className="relative p-5 pb-3 bg-gradient-to-br from-green-50 to-red-50 border-b border-gray-100">
                <div className="flex items-start justify-between">
                  <div><h3 className="font-bold text-slate-800 group-hover:text-green-700 transition-colors text-base">{cls.name}</h3><div className="flex flex-wrap items-center gap-1.5 mt-1"><span className={`text-[10px] px-2 py-0.5 rounded-full ${getLevelColor(cls.level)}`}>{cls.level}</span><span className={`text-[10px] px-2 py-0.5 rounded-full ${getStreamColor(cls.stream)}`}>{cls.stream}</span></div></div>
                  <span className="text-[10px] text-gray-400 bg-white/80 px-2 py-0.5 rounded">{cls.sections} শাখা</span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-sm"><span className="text-gray-500">শিক্ষার্থী</span><span className="font-semibold text-slate-800">{cls.students} জন</span></div>
                <div className="flex items-center justify-between text-sm"><span className="text-gray-500">শিক্ষক</span><span className="font-semibold text-slate-800">{cls.teachers} জন</span></div>
                <div className="flex items-center justify-between text-sm"><span className="text-gray-500">কক্ষ</span><span className="font-medium text-slate-700">{cls.room}</span></div>
                <div className="flex items-center justify-between text-sm"><span className="text-gray-500">উপস্থিতি</span><span className={`font-semibold ${getAttendanceColor(cls.attendance)}`}>{cls.attendance}%</span></div>
                <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-3 mt-1"><span className="text-gray-500">পাসের হার</span><span className={`font-bold ${cls.passRate >= 90 ? "text-green-600" : cls.passRate >= 80 ? "text-yellow-600" : "text-red-600"}`}>{cls.passRate}%</span></div>
              </div>
              <div className="px-5 pb-4 pt-1 flex items-center justify-between">
                <span className="text-xs text-gray-400">{cls.subjects.length} টি বিষয়</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => openViewModal(cls, "class")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110" title="বিস্তারিত"><Eye className="h-4 w-4" /></button>
                  <button onClick={() => openEditModal(cls, "class")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110" title="সম্পাদনা"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => openDeleteModal(cls, "class")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110" title="ডিলিট"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শ্রেণী</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">স্তর</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শাখা</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শিক্ষার্থী</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শিক্ষক</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">উপস্থিতি</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">একশন</th>
            </tr></thead>
            <tbody className="divide-y divide-gray-100">
              {filteredClasses.map((cls) => (
                <tr key={cls.id} className="hover:bg-green-50/50 transition-colors duration-200 group">
                  <td className="px-4 py-3 font-medium text-slate-800 group-hover:text-green-700 transition-colors">{cls.name}</td>
                  <td className="px-4 py-3"><span className={`inline-block px-2 py-0.5 rounded-full text-xs ${getLevelColor(cls.level)}`}>{cls.level}</span></td>
                  <td className="px-4 py-3"><span className={`inline-block px-2 py-0.5 rounded-full text-xs ${getStreamColor(cls.stream)}`}>{cls.stream}</span></td>
                  <td className="px-4 py-3 font-medium text-slate-700">{cls.students}</td>
                  <td className="px-4 py-3 text-slate-700">{cls.teachers}</td>
                  <td className={`px-4 py-3 font-medium ${getAttendanceColor(cls.attendance)}`}>{cls.attendance}%</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => openViewModal(cls, "class")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                      <button onClick={() => openEditModal(cls, "class")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                      <button onClick={() => openDeleteModal(cls, "class")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {filteredClasses.length === 0 && <div className="text-center py-16"><School className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">কোন শ্রেণী পাওয়া যায়নি</p></div>}
    </div>
  );

  // ===== RENDER: STUDENTS =====
  const renderStudents = () => (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="নাম, রোল বা শ্রেণী..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        </div>
        <select value={filterClass} onChange={(e) => setFilterClass(e.target.value)} className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white">
          <option value="all">সকল শ্রেণী</option>{classNames.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")} className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300">
          {viewMode === "grid" ? <List className="h-5 w-5 text-gray-600" /> : <Grid className="h-5 w-5 text-gray-600" />}
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStudents.map((s) => {
            const grade = getGrade(s.marks);
            return (
              <div key={s.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-200 p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-700 font-bold text-lg flex-shrink-0">{s.name.charAt(0)}</div>
                    <div><h3 className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors">{s.name}</h3><p className="text-sm text-gray-500">রোল: {s.roll}</p></div>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => openViewModal(s, "student")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                    <button onClick={() => openEditModal(s, "student")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                    <button onClick={() => openDeleteModal(s, "student")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm"><span className="text-gray-500">শ্রেণী</span><span className="font-medium text-slate-700">{s.class}</span></div>
                  <div className="flex items-center justify-between text-sm"><span className="text-gray-500">লিঙ্গ</span><span className="font-medium text-slate-700">{s.gender}</span></div>
                  <div className="flex items-center justify-between text-sm"><span className="text-gray-500">উপস্থিতি</span><span className={`font-medium ${getAttendanceColor(s.attendance)}`}>{s.attendance}%</span></div>
                  <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-2"><span className="text-gray-500">নম্বর</span><span className={`font-bold ${grade.color}`}>{grade.grade} ({s.marks}%)</span></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">নাম</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">রোল</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শ্রেণী</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">লিঙ্গ</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">উপস্থিতি</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">একশন</th>
            </tr></thead>
            <tbody className="divide-y divide-gray-100">
              {filteredStudents.map((s) => {
                const grade = getGrade(s.marks);
                return (
                  <tr key={s.id} className="hover:bg-green-50/50 transition-colors duration-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{s.name}</td>
                    <td className="px-4 py-3 text-slate-700">{s.roll}</td>
                    <td className="px-4 py-3 text-slate-700">{s.class}</td>
                    <td className="px-4 py-3 text-slate-700">{s.gender}</td>
                    <td className={`px-4 py-3 font-medium ${getAttendanceColor(s.attendance)}`}>{s.attendance}%</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => openViewModal(s, "student")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                        <button onClick={() => openEditModal(s, "student")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                        <button onClick={() => openDeleteModal(s, "student")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {filteredStudents.length === 0 && <div className="text-center py-16"><Users className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">কোন শিক্ষার্থী পাওয়া যায়নি</p></div>}
    </div>
  );

  // ===== RENDER: TEACHERS =====
  const renderTeachers = () => (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="নাম, বিষয় বা শ্রেণী..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        </div>
        <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)} className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white">
          <option value="all">সকল বিষয়</option>{subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <button onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")} className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300">
          {viewMode === "grid" ? <List className="h-5 w-5 text-gray-600" /> : <Grid className="h-5 w-5 text-gray-600" />}
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTeachers.map((t) => (
            <div key={t.id} className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-200 p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg flex-shrink-0">{t.name.charAt(0)}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-800 group-hover:text-green-700 transition-colors">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.subject}</p>
                  <p className="text-xs text-gray-400">{t.class}</p>
                  <div className="mt-2 space-y-1 text-xs text-gray-500"><p className="flex items-center gap-2"><Mail className="h-3 w-3" /> {t.email}</p><p className="flex items-center gap-2"><Phone className="h-3 w-3" /> {t.phone}</p></div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => openViewModal(t, "teacher")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                  <button onClick={() => openEditModal(t, "teacher")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => openDeleteModal(t, "teacher")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">নাম</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">বিষয়</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শ্রেণী</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">অভিজ্ঞতা</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">একশন</th>
            </tr></thead>
            <tbody className="divide-y divide-gray-100">
              {filteredTeachers.map((t) => (
                <tr key={t.id} className="hover:bg-green-50/50 transition-colors duration-200">
                  <td className="px-4 py-3 font-medium text-slate-800">{t.name}</td>
                  <td className="px-4 py-3 text-slate-700">{t.subject}</td>
                  <td className="px-4 py-3 text-slate-700">{t.class}</td>
                  <td className="px-4 py-3 text-slate-700">{t.experience}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => openViewModal(t, "teacher")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                      <button onClick={() => openEditModal(t, "teacher")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                      <button onClick={() => openDeleteModal(t, "teacher")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {filteredTeachers.length === 0 && <div className="text-center py-16"><GraduationCap className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">কোন শিক্ষক পাওয়া যায়নি</p></div>}
    </div>
  );

  // ===== RENDER: RESULTS =====
  const renderResults = () => (
    <div>
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input type="text" placeholder="বিষয় বা শ্রেণী দিয়ে খুঁজুন..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResults.map((r) => (
          <div key={r.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-800">{r.subject}</h3>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">{r.class}</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm"><span className="text-gray-500">গড় নম্বর</span><span className="font-medium">{r.average}%</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">পাসের হার</span><span className={`font-medium ${r.passRate >= 90 ? "text-green-600" : "text-yellow-600"}`}>{r.passRate}%</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500">সর্বোচ্চ নম্বর</span><span className="font-medium text-blue-600">{r.topScore}%</span></div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end gap-2">
              <button onClick={() => openViewModal(r, "result")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
              <button onClick={() => openEditModal(r, "result")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
              <button onClick={() => openDeleteModal(r, "result")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
      {filteredResults.length === 0 && <div className="text-center py-16"><BarChart className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">কোন ফলাফল পাওয়া যায়নি</p></div>}
    </div>
  );

  // ===== RENDER: ROUTINE =====
  const renderRoutine = () => {
    const routine = classRoutine[selectedClass] || [];
    return (
      <div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">শ্রেণী নির্বাচন করুন</label>
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white w-full sm:w-auto">
            {Object.keys(classRoutine).map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {routine.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">দিন</th>
                  {routine[0].periods.map((_, idx) => <th key={idx} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">পর্ব {idx+1}</th>)}
                </tr></thead>
                <tbody className="divide-y divide-gray-100">
                  {routine.map((row, idx) => (
                    <tr key={idx} className="hover:bg-green-50/50 transition-colors duration-200">
                      <td className="px-4 py-3 font-medium text-slate-800">{row.day}</td>
                      {row.periods.map((p, pIdx) => <td key={pIdx} className="px-4 py-3 text-slate-700">{p}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-16"><Calendar className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">এই শ্রেণীর জন্য কোনো রুটিন নেই</p></div>
        )}
      </div>
    );
  };

  // ===== MODALS =====
  const renderViewModal = () => {
    if (!selectedItem) return null;
    let content = null;
    if (modalType === "class") {
      const c = selectedItem;
      content = (
        <div className="space-y-3">
          <p><strong>নাম:</strong> {c.name}</p>
          <p><strong>স্তর:</strong> {c.level}</p>
          <p><strong>শাখা:</strong> {c.stream}</p>
          <p><strong>শিক্ষার্থী:</strong> {c.students} জন</p>
          <p><strong>শিক্ষক:</strong> {c.teachers} জন</p>
          <p><strong>কক্ষ:</strong> {c.room}</p>
          <p><strong>উপস্থিতি:</strong> {c.attendance}%</p>
          <p><strong>পাসের হার:</strong> {c.passRate}%</p>
          <p><strong>বিষয়:</strong> {c.subjects.join(", ")}</p>
        </div>
      );
    } else if (modalType === "student") {
      const s = selectedItem;
      const grade = getGrade(s.marks);
      content = (
        <div className="space-y-3">
          <p><strong>নাম:</strong> {s.name}</p>
          <p><strong>রোল:</strong> {s.roll}</p>
          <p><strong>শ্রেণী:</strong> {s.class}</p>
          <p><strong>লিঙ্গ:</strong> {s.gender}</p>
          <p><strong>ইমেইল:</strong> {s.email}</p>
          <p><strong>ফোন:</strong> {s.phone}</p>
          <p><strong>ঠিকানা:</strong> {s.address}</p>
          <p><strong>উপস্থিতি:</strong> {s.attendance}%</p>
          <p><strong>নম্বর:</strong> {s.marks}% ({grade.grade})</p>
        </div>
      );
    } else if (modalType === "teacher") {
      const t = selectedItem;
      content = (
        <div className="space-y-3">
          <p><strong>নাম:</strong> {t.name}</p>
          <p><strong>বিষয়:</strong> {t.subject}</p>
          <p><strong>শ্রেণী:</strong> {t.class}</p>
          <p><strong>ইমেইল:</strong> {t.email}</p>
          <p><strong>ফোন:</strong> {t.phone}</p>
          <p><strong>অভিজ্ঞতা:</strong> {t.experience}</p>
        </div>
      );
    } else if (modalType === "result") {
      const r = selectedItem;
      content = (
        <div className="space-y-3">
          <p><strong>বিষয়:</strong> {r.subject}</p>
          <p><strong>শ্রেণী:</strong> {r.class}</p>
          <p><strong>গড় নম্বর:</strong> {r.average}%</p>
          <p><strong>পাসের হার:</strong> {r.passRate}%</p>
          <p><strong>সর্বোচ্চ নম্বর:</strong> {r.topScore}%</p>
        </div>
      );
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800">বিস্তারিত তথ্য</h3>
            <button onClick={() => setViewModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors"><X className="h-6 w-6 text-gray-400" /></button>
          </div>
          {content}
          <button onClick={() => setViewModalOpen(false)} className="mt-4 w-full bg-gray-200 text-gray-700 py-2 rounded-xl font-medium hover:bg-gray-300 transition-colors">বন্ধ করুন</button>
        </div>
      </div>
    );
  };

  const renderEditModal = () => {
    if (!selectedItem) return null;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
    };
    let fields = null;
    if (modalType === "class") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">শ্রেণীর নাম</label><input name="name" value={editFormData.name || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">স্তর</label><input name="level" value={editFormData.level || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">শাখা</label><input name="stream" value={editFormData.stream || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">শিক্ষার্থী সংখ্যা</label><input name="students" type="number" value={editFormData.students || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">শিক্ষক সংখ্যা</label><input name="teachers" type="number" value={editFormData.teachers || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">কক্ষ</label><input name="room" value={editFormData.room || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
        </>
      );
    } else if (modalType === "student") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">নাম</label><input name="name" value={editFormData.name || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">রোল</label><input name="roll" type="number" value={editFormData.roll || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">শ্রেণী</label><input name="class" value={editFormData.class || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">লিঙ্গ</label><select name="gender" value={editFormData.gender || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl"><option value="পুরুষ">পুরুষ</option><option value="নারী">নারী</option></select></div>
          <div><label className="block text-sm font-medium text-gray-700">ইমেইল</label><input name="email" value={editFormData.email || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">ফোন</label><input name="phone" value={editFormData.phone || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
        </>
      );
    } else if (modalType === "teacher") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">নাম</label><input name="name" value={editFormData.name || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">বিষয়</label><input name="subject" value={editFormData.subject || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">শ্রেণী</label><input name="class" value={editFormData.class || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">ইমেইল</label><input name="email" value={editFormData.email || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">ফোন</label><input name="phone" value={editFormData.phone || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
        </>
      );
    } else if (modalType === "result") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">বিষয়</label><input name="subject" value={editFormData.subject || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">শ্রেণী</label><input name="class" value={editFormData.class || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">গড় নম্বর</label><input name="average" type="number" value={editFormData.average || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">পাসের হার</label><input name="passRate" type="number" value={editFormData.passRate || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
        </>
      );
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800">সম্পাদনা করুন</h3>
            <button onClick={() => setEditModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors"><X className="h-6 w-6 text-gray-400" /></button>
          </div>
          <div className="space-y-3">{fields}</div>
          <button onClick={handleEditSave} className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"><Save className="h-4 w-4" /> সংরক্ষণ করুন</button>
        </div>
      </div>
    );
  };

  const renderDeleteModal = () => {
    if (!selectedItem) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl">
          <div className="flex items-center gap-3 text-red-600 mb-4">
            <AlertCircle className="h-8 w-8" />
            <h3 className="text-xl font-bold">নিশ্চিত করুন</h3>
          </div>
          <p className="text-gray-600 mb-6">আপনি কি <span className="font-semibold text-slate-800">{selectedItem.name || selectedItem.subject}</span> ডিলিট করতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।</p>
          <div className="flex gap-3">
            <button onClick={() => setDeleteModalOpen(false)} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">বাতিল</button>
            <button onClick={handleDeleteConfirm} className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors">ডিলিট</button>
          </div>
        </div>
      </div>
    );
  };

  // ===== MAIN RETURN =====
  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-6">
        {[
          { id: "overview", label: "ওভারভিউ", icon: School },
          { id: "classes", label: "শ্রেণী", icon: Layers },
          { id: "students", label: "শিক্ষার্থী", icon: Users },
          { id: "teachers", label: "শিক্ষক", icon: GraduationCap },
          { id: "results", label: "ফলাফল", icon: BarChart },
          { id: "routine", label: "রুটিন", icon: Calendar },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSearchTerm(""); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg"
                  : "text-gray-600 hover:bg-gray-100 hover:text-green-600"
              }`}
            >
              <Icon className={`h-4 w-4 ${activeTab === tab.id ? "text-white" : "text-gray-400"}`} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {activeTab === "overview" && renderOverview()}
      {activeTab === "classes" && renderClasses()}
      {activeTab === "students" && renderStudents()}
      {activeTab === "teachers" && renderTeachers()}
      {activeTab === "results" && renderResults()}
      {activeTab === "routine" && renderRoutine()}

      {viewModalOpen && renderViewModal()}
      {editModalOpen && renderEditModal()}
      {deleteModalOpen && renderDeleteModal()}
    </div>
  );
}