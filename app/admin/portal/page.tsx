
"use client";

import { useState, useEffect } from "react";
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
  CalendarPlus,
} from "lucide-react";

// ===== TYPE DEFINITIONS =====
type Routine = Record<string, { day: string; periods: string[] }[]>;

interface ClassItem {
  id: number;
  name: string;
  level: string;
  sections: number;
  students: number;
  teachers: number;
  subjects: string[];
  room: string;
  stream: string;
  attendance: number;
  passRate: number;
}

interface Student {
  id: number;
  name: string;
  roll: number;
  class: string;
  gender: string;
  attendance: number;
  marks: number;
  email: string;
  phone: string;
  address: string;
}

interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
  phone: string;
  class: string;
  experience: string;
}

interface Result {
  id: number;
  subject: string;
  average: number;
  passRate: number;
  topScore: number;
  class: string;
}

// ===== INITIAL MOCK DATA =====
const initialClassData: ClassItem[] = [
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

const initialStudents: Student[] = [
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

const initialTeachers: Teacher[] = [
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

const initialResults: Result[] = [
  { id: 1, subject: "বাংলা", average: 78, passRate: 95, topScore: 98, class: "১ম শ্রেণী" },
  { id: 2, subject: "ইংরেজি", average: 82, passRate: 92, topScore: 97, class: "১ম শ্রেণী" },
  { id: 3, subject: "গণিত", average: 75, passRate: 88, topScore: 95, class: "১ম শ্রেণী" },
  { id: 4, subject: "বিজ্ঞান", average: 80, passRate: 90, topScore: 96, class: "১ম শ্রেণী" },
  { id: 5, subject: "বাংলা", average: 76, passRate: 93, topScore: 97, class: "২য় শ্রেণী" },
  { id: 6, subject: "ইংরেজি", average: 80, passRate: 90, topScore: 96, class: "২য় শ্রেণী" },
  { id: 7, subject: "গণিত", average: 73, passRate: 85, topScore: 94, class: "২য় শ্রেণী" },
  { id: 8, subject: "বিজ্ঞান", average: 78, passRate: 88, topScore: 95, class: "২য় শ্রেণী" },
];

const initialRoutine: Routine = {
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
const toBanglaNumber = (num: number | string): string => {
  const banglaDigits = "০১২৩৪৫৬৭৮৯";
  return num.toString().replace(/\d/g, (digit) => banglaDigits[parseInt(digit)]);
};

const getLevelColor = (level: string) => {
  const map: Record<string, string> = {
    "প্রাথমিক": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    "নিম্ন মাধ্যমিক": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    "মাধ্যমিক": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
    "উচ্চ মাধ্যমিক": "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  };
  return map[level] || "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
};

const getStreamColor = (stream: string) => {
  const map: Record<string, string> = {
    "বিজ্ঞান": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
    "বাণিজ্য": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
    "মানবিক": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
    "সাধারণ": "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300",
  };
  return map[stream] || "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300";
};

const getAttendanceColor = (attendance: number) => {
  if (attendance >= 90) return "text-green-600 dark:text-green-400";
  if (attendance >= 75) return "text-yellow-600 dark:text-yellow-400";
  return "text-red-600 dark:text-red-400";
};

const getGrade = (marks: number) => {
  if (marks >= 80) return { grade: "A+", color: "text-green-600 dark:text-green-400" };
  if (marks >= 70) return { grade: "A", color: "text-blue-600 dark:text-blue-400" };
  if (marks >= 60) return { grade: "B", color: "text-yellow-600 dark:text-yellow-400" };
  if (marks >= 50) return { grade: "C", color: "text-orange-600 dark:text-orange-400" };
  return { grade: "D", color: "text-red-600 dark:text-red-400" };
};

// ===== MAIN COMPONENT =====
export default function AdminDashboard() {
  // ===== Dark/Light Mode State (sync with header) =====
  const [isDark, setIsDark] = useState(false);

  // Load dark mode preference from localStorage (same as header)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ===== STATE for data =====
  const [classData, setClassData] = useState<ClassItem[]>(initialClassData);
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [teachers, setTeachers] = useState<Teacher[]>(initialTeachers);
  const [results, setResults] = useState<Result[]>(initialResults);
  const [routine, setRoutine] = useState<Routine>(initialRoutine);

  // ===== UI STATE =====
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState<string>("all");
  const [filterStream, setFilterStream] = useState<string>("all");
  const [filterClass, setFilterClass] = useState<string>("all");
  const [filterSubject, setFilterSubject] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedClass, setSelectedClass] = useState<string>("১ম শ্রেণী");

  // ===== MODAL STATES =====
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [editFormData, setEditFormData] = useState<any>({});
  const [modalType, setModalType] = useState<"class" | "student" | "teacher" | "result">("class");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [addModalType, setAddModalType] = useState<"class" | "student" | "teacher" | "result" | "routine">("class");
  const [addFormData, setAddFormData] = useState<any>({});

  // ===== STATS =====
  const totalClasses = classData.length;
  const totalStudents = students.length;
  const totalTeachers = teachers.length;
  const avgAttendance = students.length
    ? Math.round(students.reduce((sum, s) => sum + s.attendance, 0) / students.length)
    : 0;

  // ===== FILTERED DATA =====
  const filteredClasses = classData.filter((c: ClassItem) => {
    const matchSearch = c.name.includes(searchTerm) || c.level.includes(searchTerm);
    const matchLevel = filterLevel === "all" || c.level === filterLevel;
    const matchStream = filterStream === "all" || c.stream === filterStream;
    return matchSearch && matchLevel && matchStream;
  });

  const filteredStudents = students.filter((s: Student) => {
    const matchSearch = s.name.includes(searchTerm) || s.roll.toString().includes(searchTerm) || s.class.includes(searchTerm);
    const matchClass = filterClass === "all" || s.class === filterClass;
    return matchSearch && matchClass;
  });

  const filteredTeachers = teachers.filter((t: Teacher) => {
    const matchSearch = t.name.includes(searchTerm) || t.subject.includes(searchTerm) || t.class.includes(searchTerm);
    const matchSubject = filterSubject === "all" || t.subject === filterSubject;
    return matchSearch && matchSubject;
  });

  const filteredResults = results.filter((r: Result) => {
    return r.class.includes(searchTerm) || r.subject.includes(searchTerm);
  });

  const classNames = Array.from(new Set(students.map((s: Student) => s.class)));
  const subjects = Array.from(new Set(teachers.map((t: Teacher) => t.subject)));
  const levels = ["প্রাথমিক", "নিম্ন মাধ্যমিক", "মাধ্যমিক", "উচ্চ মাধ্যমিক"];
  const streams = ["বিজ্ঞান", "বাণিজ্য", "মানবিক", "সাধারণ"];

  // ===== MODAL HANDLERS =====
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
    if (modalType === "class") {
      setClassData(classData.map((c: ClassItem) => c.id === editFormData.id ? editFormData : c));
    } else if (modalType === "student") {
      setStudents(students.map((s: Student) => s.id === editFormData.id ? editFormData : s));
    } else if (modalType === "teacher") {
      setTeachers(teachers.map((t: Teacher) => t.id === editFormData.id ? editFormData : t));
    } else if (modalType === "result") {
      setResults(results.map((r: Result) => r.id === editFormData.id ? editFormData : r));
    }
    setEditModalOpen(false);
    alert("ডেটা আপডেট করা হয়েছে");
  };

  const handleDeleteConfirm = () => {
    if (modalType === "class") {
      setClassData(classData.filter((c: ClassItem) => c.id !== selectedItem.id));
    } else if (modalType === "student") {
      setStudents(students.filter((s: Student) => s.id !== selectedItem.id));
    } else if (modalType === "teacher") {
      setTeachers(teachers.filter((t: Teacher) => t.id !== selectedItem.id));
    } else if (modalType === "result") {
      setResults(results.filter((r: Result) => r.id !== selectedItem.id));
    }
    setDeleteModalOpen(false);
    alert("আইটেম ডিলিট করা হয়েছে");
  };

  // ===== ADD MODAL HANDLERS =====
  const openAddModal = (type: "class" | "student" | "teacher" | "result" | "routine") => {
    setAddModalType(type);
    setAddFormData({});
    setAddModalOpen(true);
  };

  const handleAddFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAddFormData({ ...addFormData, [e.target.name]: e.target.value });
  };

  const handleAddSubmit = () => {
    if (addModalType === "class") {
      if (!addFormData.name || !addFormData.level || !addFormData.stream) {
        alert("দয়া করে নাম, স্তর ও শাখা পূরণ করুন");
        return;
      }
      const newClass: ClassItem = {
        id: classData.length + 1,
        name: addFormData.name,
        level: addFormData.level,
        sections: parseInt(addFormData.sections) || 1,
        students: parseInt(addFormData.students) || 0,
        teachers: parseInt(addFormData.teachers) || 0,
        subjects: addFormData.subjects ? addFormData.subjects.split(",").map((s: string) => s.trim()) : [],
        room: addFormData.room || "",
        stream: addFormData.stream,
        attendance: parseInt(addFormData.attendance) || 0,
        passRate: parseInt(addFormData.passRate) || 0,
      };
      setClassData([...classData, newClass]);
    } else if (addModalType === "student") {
      if (!addFormData.name || !addFormData.class || !addFormData.roll) {
        alert("দয়া করে নাম, শ্রেণী ও রোল পূরণ করুন");
        return;
      }
      const newStudent: Student = {
        id: students.length + 1,
        name: addFormData.name,
        roll: parseInt(addFormData.roll),
        class: addFormData.class,
        gender: addFormData.gender || "পুরুষ",
        attendance: parseInt(addFormData.attendance) || 0,
        marks: parseInt(addFormData.marks) || 0,
        email: addFormData.email || "",
        phone: addFormData.phone || "",
        address: addFormData.address || "",
      };
      setStudents([...students, newStudent]);
    } else if (addModalType === "teacher") {
      if (!addFormData.name || !addFormData.subject || !addFormData.class) {
        alert("দয়া করে নাম, বিষয় ও শ্রেণী পূরণ করুন");
        return;
      }
      const newTeacher: Teacher = {
        id: teachers.length + 1,
        name: addFormData.name,
        subject: addFormData.subject,
        email: addFormData.email || "",
        phone: addFormData.phone || "",
        class: addFormData.class,
        experience: addFormData.experience || "০ বছর",
      };
      setTeachers([...teachers, newTeacher]);
    } else if (addModalType === "result") {
      if (!addFormData.subject || !addFormData.class) {
        alert("দয়া করে বিষয় ও শ্রেণী পূরণ করুন");
        return;
      }
      const newResult: Result = {
        id: results.length + 1,
        subject: addFormData.subject,
        class: addFormData.class,
        average: parseInt(addFormData.average) || 0,
        passRate: parseInt(addFormData.passRate) || 0,
        topScore: parseInt(addFormData.topScore) || 0,
      };
      setResults([...results, newResult]);
    } else if (addModalType === "routine") {
      if (!addFormData.className) {
        alert("দয়া করে শ্রেণীর নাম দিন");
        return;
      }
      if (!routine[addFormData.className]) {
        setRoutine({
          ...routine,
          [addFormData.className]: [
            { day: "রবিবার", periods: ["", "", "", "", "", ""] },
            { day: "সোমবার", periods: ["", "", "", "", "", ""] },
            { day: "মঙ্গলবার", periods: ["", "", "", "", "", ""] },
            { day: "বুধবার", periods: ["", "", "", "", "", ""] },
            { day: "বৃহস্পতিবার", periods: ["", "", "", "", "", ""] },
          ]
        });
      } else {
        alert("এই শ্রেণীর রুটিন ইতিমধ্যে আছে");
        return;
      }
    }
    setAddModalOpen(false);
    alert("সফলভাবে যোগ করা হয়েছে");
  };

  // ===== RENDER FUNCTIONS =====
  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">মোট শ্রেণী</p><p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{toBanglaNumber(totalClasses)}</p></div>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl"><School className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400"><ArrowUpRight className="h-3 w-3" /> <span>গত বছর থেকে +২</span></div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">মোট শিক্ষার্থী</p><p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{toBanglaNumber(totalStudents)}</p></div>
            <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-xl"><Users className="h-6 w-6 text-green-600 dark:text-green-400" /></div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400"><ArrowUpRight className="h-3 w-3" /> <span>গত মাসে +১২ জন</span></div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">মোট শিক্ষক</p><p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{toBanglaNumber(totalTeachers)}</p></div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl"><GraduationCap className="h-6 w-6 text-purple-600 dark:text-purple-400" /></div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400"><ArrowUpRight className="h-3 w-3" /> <span>গত বছর থেকে +৩ জন</span></div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 dark:text-gray-400 font-medium">গড় উপস্থিতি</p><p className="text-2xl font-bold text-slate-800 dark:text-white mt-1">{toBanglaNumber(avgAttendance)}%</p></div>
            <div className="p-3 bg-orange-50 dark:bg-orange-900/30 rounded-xl"><TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" /></div>
          </div>
          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 dark:text-green-400"><ArrowUpRight className="h-3 w-3" /> <span>গত মাসে +৫%</span></div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <button onClick={() => setActiveTab("students")} className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-green-200 dark:hover:border-green-700 hover:-translate-y-0.5">
          <Users className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" /><p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">শিক্ষার্থী দেখুন</p>
        </button>
        <button onClick={() => setActiveTab("teachers")} className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-green-200 dark:hover:border-green-700 hover:-translate-y-0.5">
          <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" /><p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">শিক্ষক দেখুন</p>
        </button>
        <button onClick={() => setActiveTab("results")} className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-green-200 dark:hover:border-green-700 hover:-translate-y-0.5">
          <BarChart className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" /><p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">ফলাফল দেখুন</p>
        </button>
        <button onClick={() => setActiveTab("routine")} className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all hover:border-green-200 dark:hover:border-green-700 hover:-translate-y-0.5">
          <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400 mx-auto mb-2" /><p className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">রুটিন দেখুন</p>
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">সাম্প্রতিক কার্যক্রম</h3>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"><span className="w-2 h-2 rounded-full bg-green-500"></span> নতুন শিক্ষার্থী ভর্তি: মোঃ রহমান (১ম শ্রেণী)</li>
          <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"><span className="w-2 h-2 rounded-full bg-blue-500"></span> শিক্ষকের প্রোফাইল আপডেট: মিসেস সুলতানা আখতার</li>
          <li className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"><span className="w-2 h-2 rounded-full bg-purple-500"></span> বিজ্ঞান মেলা ২০২৬-এর সময়সূচি প্রকাশ</li>
        </ul>
      </div>
    </div>
  );

  const renderClasses = () => (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">শ্রেণী তালিকা</h2>
        <button onClick={() => openAddModal("class")} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg">
          <Plus className="h-4 w-4" /> নতুন শ্রেণী
        </button>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <input type="text" placeholder="শ্রেণী বা স্তর দিয়ে খুঁজুন..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white" />
        </div>
        <select value={filterLevel} onChange={(e) => setFilterLevel(e.target.value)} className="px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white dark:bg-gray-800 dark:text-white">
          <option value="all">সকল স্তর</option>{levels.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
        <select value={filterStream} onChange={(e) => setFilterStream(e.target.value)} className="px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white dark:bg-gray-800 dark:text-white">
          <option value="all">সকল শাখা</option>{streams.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <button onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")} className="p-2.5 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
          {viewMode === "grid" ? <List className="h-5 w-5 text-gray-600 dark:text-gray-400" /> : <Grid className="h-5 w-5 text-gray-600 dark:text-gray-400" />}
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredClasses.map((cls: ClassItem) => (
            <div key={cls.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-200 dark:hover:border-green-700">
              <div className="relative p-5 pb-3 bg-gradient-to-br from-green-50 to-red-50 dark:from-green-900/20 dark:to-red-900/20 border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-start justify-between">
                  <div><h3 className="font-bold text-slate-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors text-base">{cls.name}</h3><div className="flex flex-wrap items-center gap-1.5 mt-1"><span className={`text-[10px] px-2 py-0.5 rounded-full ${getLevelColor(cls.level)}`}>{cls.level}</span><span className={`text-[10px] px-2 py-0.5 rounded-full ${getStreamColor(cls.stream)}`}>{cls.stream}</span></div></div>
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 bg-white/80 dark:bg-gray-900/80 px-2 py-0.5 rounded">{toBanglaNumber(cls.sections)} শাখা</span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">শিক্ষার্থী</span><span className="font-semibold text-slate-800 dark:text-white">{toBanglaNumber(cls.students)} জন</span></div>
                <div className="flex items-center justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">শিক্ষক</span><span className="font-semibold text-slate-800 dark:text-white">{toBanglaNumber(cls.teachers)} জন</span></div>
                <div className="flex items-center justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">কক্ষ</span><span className="font-medium text-slate-700 dark:text-gray-300">{cls.room}</span></div>
                <div className="flex items-center justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">উপস্থিতি</span><span className={`font-semibold ${getAttendanceColor(cls.attendance)}`}>{toBanglaNumber(cls.attendance)}%</span></div>
                <div className="flex items-center justify-between text-sm border-t border-gray-100 dark:border-gray-700 pt-3 mt-1"><span className="text-gray-500 dark:text-gray-400">পাসের হার</span><span className={`font-bold ${cls.passRate >= 90 ? "text-green-600 dark:text-green-400" : cls.passRate >= 80 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400"}`}>{toBanglaNumber(cls.passRate)}%</span></div>
              </div>
              <div className="px-5 pb-4 pt-1 flex items-center justify-between">
                <span className="text-xs text-gray-400 dark:text-gray-500">{toBanglaNumber(cls.subjects.length)} টি বিষয়</span>
                <div className="flex items-center gap-2">
                  <button onClick={() => openViewModal(cls, "class")} className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110" title="বিস্তারিত"><Eye className="h-4 w-4" /></button>
                  <button onClick={() => openEditModal(cls, "class")} className="p-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110" title="সম্পাদনা"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => openDeleteModal(cls, "class")} className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110" title="ডিলিট"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শ্রেণী</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">স্তর</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শাখা</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শিক্ষার্থী</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শিক্ষক</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">উপস্থিতি</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">একশন</th>
            </tr></thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredClasses.map((cls: ClassItem) => (
                <tr key={cls.id} className="hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-200 group">
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{cls.name}</td>
                  <td className="px-4 py-3"><span className={`inline-block px-2 py-0.5 rounded-full text-xs ${getLevelColor(cls.level)}`}>{cls.level}</span></td>
                  <td className="px-4 py-3"><span className={`inline-block px-2 py-0.5 rounded-full text-xs ${getStreamColor(cls.stream)}`}>{cls.stream}</span></td>
                  <td className="px-4 py-3 font-medium text-slate-700 dark:text-gray-300">{toBanglaNumber(cls.students)}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{toBanglaNumber(cls.teachers)}</td>
                  <td className={`px-4 py-3 font-medium ${getAttendanceColor(cls.attendance)}`}>{toBanglaNumber(cls.attendance)}%</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => openViewModal(cls, "class")} className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                      <button onClick={() => openEditModal(cls, "class")} className="p-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                      <button onClick={() => openDeleteModal(cls, "class")} className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {filteredClasses.length === 0 && <div className="text-center py-16"><School className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" /><p className="text-gray-500 dark:text-gray-400">কোন শ্রেণী পাওয়া যায়নি</p></div>}
    </div>
  );

  const renderStudents = () => (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">শিক্ষার্থী তালিকা</h2>
        <button onClick={() => openAddModal("student")} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg">
          <UserPlus className="h-4 w-4" /> নতুন শিক্ষার্থী
        </button>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <input type="text" placeholder="নাম, রোল বা শ্রেণী..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white" />
        </div>
        <select value={filterClass} onChange={(e) => setFilterClass(e.target.value)} className="px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white dark:bg-gray-800 dark:text-white">
          <option value="all">সকল শ্রেণী</option>{classNames.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <button onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")} className="p-2.5 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
          {viewMode === "grid" ? <List className="h-5 w-5 text-gray-600 dark:text-gray-400" /> : <Grid className="h-5 w-5 text-gray-600 dark:text-gray-400" />}
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredStudents.map((s: Student) => {
            const grade = getGrade(s.marks);
            return (
              <div key={s.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-200 dark:hover:border-green-700 p-5">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-800/30 dark:to-green-700/30 flex items-center justify-center text-green-700 dark:text-green-400 font-bold text-lg flex-shrink-0">{s.name.charAt(0)}</div>
                    <div><h3 className="font-semibold text-slate-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{s.name}</h3><p className="text-sm text-gray-500 dark:text-gray-400">রোল: {toBanglaNumber(s.roll)}</p></div>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => openViewModal(s, "student")} className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                    <button onClick={() => openEditModal(s, "student")} className="p-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                    <button onClick={() => openDeleteModal(s, "student")} className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">শ্রেণী</span><span className="font-medium text-slate-700 dark:text-gray-300">{s.class}</span></div>
                  <div className="flex items-center justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">লিঙ্গ</span><span className="font-medium text-slate-700 dark:text-gray-300">{s.gender}</span></div>
                  <div className="flex items-center justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">উপস্থিতি</span><span className={`font-medium ${getAttendanceColor(s.attendance)}`}>{toBanglaNumber(s.attendance)}%</span></div>
                  <div className="flex items-center justify-between text-sm border-t border-gray-100 dark:border-gray-700 pt-2"><span className="text-gray-500 dark:text-gray-400">নম্বর</span><span className={`font-bold ${grade.color}`}>{grade.grade} ({toBanglaNumber(s.marks)}%)</span></div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">নাম</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">রোল</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শ্রেণী</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">লিঙ্গ</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">উপস্থিতি</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">একশন</th>
            </tr></thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredStudents.map((s: Student) => {
                const grade = getGrade(s.marks);
                return (
                  <tr key={s.id} className="hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-200">
                    <td className="px-4 py-3 font-medium text-slate-800 dark:text-white">{s.name}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{toBanglaNumber(s.roll)}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{s.class}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{s.gender}</td>
                    <td className={`px-4 py-3 font-medium ${getAttendanceColor(s.attendance)}`}>{toBanglaNumber(s.attendance)}%</td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => openViewModal(s, "student")} className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                        <button onClick={() => openEditModal(s, "student")} className="p-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                        <button onClick={() => openDeleteModal(s, "student")} className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {filteredStudents.length === 0 && <div className="text-center py-16"><Users className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" /><p className="text-gray-500 dark:text-gray-400">কোন শিক্ষার্থী পাওয়া যায়নি</p></div>}
    </div>
  );

  const renderTeachers = () => (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">শিক্ষক তালিকা</h2>
        <button onClick={() => openAddModal("teacher")} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg">
          <UserPlus className="h-4 w-4" /> নতুন শিক্ষক
        </button>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <input type="text" placeholder="নাম, বিষয় বা শ্রেণী..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white" />
        </div>
        <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)} className="px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white dark:bg-gray-800 dark:text-white">
          <option value="all">সকল বিষয়</option>{subjects.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <button onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")} className="p-2.5 border border-gray-200 dark:border-gray-600 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300">
          {viewMode === "grid" ? <List className="h-5 w-5 text-gray-600 dark:text-gray-400" /> : <Grid className="h-5 w-5 text-gray-600 dark:text-gray-400" />}
        </button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTeachers.map((t: Teacher) => (
            <div key={t.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-green-200 dark:hover:border-green-700 p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-800/30 dark:to-blue-700/30 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-lg flex-shrink-0">{t.name.charAt(0)}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-800 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">{t.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.subject}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{t.class}</p>
                  <div className="mt-2 space-y-1 text-xs text-gray-500 dark:text-gray-400"><p className="flex items-center gap-2"><Mail className="h-3 w-3" /> {t.email}</p><p className="flex items-center gap-2"><Phone className="h-3 w-3" /> {t.phone}</p></div>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => openViewModal(t, "teacher")} className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                  <button onClick={() => openEditModal(t, "teacher")} className="p-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                  <button onClick={() => openDeleteModal(t, "teacher")} className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead><tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">নাম</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">বিষয়</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">শ্রেণী</th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">অভিজ্ঞতা</th>
              <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">একশন</th>
            </tr></thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {filteredTeachers.map((t: Teacher) => (
                <tr key={t.id} className="hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-200">
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-white">{t.name}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{t.subject}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{t.class}</td>
                  <td className="px-4 py-3 text-slate-700 dark:text-gray-300">{t.experience.replace(/\d+/, (m: string) => toBanglaNumber(m))}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button onClick={() => openViewModal(t, "teacher")} className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                      <button onClick={() => openEditModal(t, "teacher")} className="p-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                      <button onClick={() => openDeleteModal(t, "teacher")} className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {filteredTeachers.length === 0 && <div className="text-center py-16"><GraduationCap className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" /><p className="text-gray-500 dark:text-gray-400">কোন শিক্ষক পাওয়া যায়নি</p></div>}
    </div>
  );

  const renderResults = () => (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">ফলাফল তালিকা</h2>
        <button onClick={() => openAddModal("result")} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg">
          <Plus className="h-4 w-4" /> নতুন ফলাফল
        </button>
      </div>
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
        <input type="text" placeholder="বিষয় বা শ্রেণী দিয়ে খুঁজুন..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent dark:bg-gray-800 dark:text-white" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResults.map((r: Result) => (
          <div key={r.id} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-800 dark:text-white">{r.subject}</h3>
              <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full">{r.class}</span>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">গড় নম্বর</span><span className="font-medium text-slate-700 dark:text-gray-300">{toBanglaNumber(r.average)}%</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">পাসের হার</span><span className={`font-medium ${r.passRate >= 90 ? "text-green-600 dark:text-green-400" : "text-yellow-600 dark:text-yellow-400"}`}>{toBanglaNumber(r.passRate)}%</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">সর্বোচ্চ নম্বর</span><span className="font-medium text-blue-600 dark:text-blue-400">{toBanglaNumber(r.topScore)}%</span></div>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-end gap-2">
              <button onClick={() => openViewModal(r, "result")} className="p-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
              <button onClick={() => openEditModal(r, "result")} className="p-1.5 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/50 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
              <button onClick={() => openDeleteModal(r, "result")} className="p-1.5 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/50 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
      {filteredResults.length === 0 && <div className="text-center py-16"><BarChart className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" /><p className="text-gray-500 dark:text-gray-400">কোন ফলাফল পাওয়া যায়নি</p></div>}
    </div>
  );

  const renderRoutine = () => {
    const routineData = routine[selectedClass] || [];
    return (
      <div>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">ক্লাস রুটিন</h2>
          <button onClick={() => openAddModal("routine")} className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all shadow-md hover:shadow-lg">
            <CalendarPlus className="h-4 w-4" /> নতুন রুটিন
          </button>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">শ্রেণী নির্বাচন করুন</label>
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="px-4 py-2.5 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white dark:bg-gray-800 dark:text-white w-full sm:w-auto">
            {Object.keys(routine).map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {routineData.length > 0 ? (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">দিন</th>
                  {routineData[0]?.periods.map((_: any, idx: number) => (
                    <th key={idx} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">পর্ব {toBanglaNumber(idx+1)}</th>
                  ))}
                </tr></thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                  {routineData.map((row: any, idx: number) => (
                    <tr key={idx} className="hover:bg-green-50/50 dark:hover:bg-green-900/10 transition-colors duration-200">
                      <td className="px-4 py-3 font-medium text-slate-800 dark:text-white">{row.day}</td>
                      {row.periods.map((p: string, pIdx: number) => (
                        <td key={pIdx} className="px-4 py-3 text-slate-700 dark:text-gray-300">{p}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-16"><Calendar className="h-12 w-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" /><p className="text-gray-500 dark:text-gray-400">এই শ্রেণীর জন্য কোনো রুটিন নেই</p></div>
        )}
      </div>
    );
  };

  // ===== MODALS =====
  const renderViewModal = () => {
    if (!selectedItem) return null;
    let content = null;
    if (modalType === "class") {
      const c = selectedItem as ClassItem;
      content = (
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p><strong>নাম:</strong> {c.name}</p>
          <p><strong>স্তর:</strong> {c.level}</p>
          <p><strong>শাখা:</strong> {c.stream}</p>
          <p><strong>শিক্ষার্থী:</strong> {toBanglaNumber(c.students)} জন</p>
          <p><strong>শিক্ষক:</strong> {toBanglaNumber(c.teachers)} জন</p>
          <p><strong>কক্ষ:</strong> {c.room}</p>
          <p><strong>উপস্থিতি:</strong> {toBanglaNumber(c.attendance)}%</p>
          <p><strong>পাসের হার:</strong> {toBanglaNumber(c.passRate)}%</p>
          <p><strong>বিষয়:</strong> {c.subjects.join(", ")}</p>
        </div>
      );
    } else if (modalType === "student") {
      const s = selectedItem as Student;
      const grade = getGrade(s.marks);
      content = (
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p><strong>নাম:</strong> {s.name}</p>
          <p><strong>রোল:</strong> {toBanglaNumber(s.roll)}</p>
          <p><strong>শ্রেণী:</strong> {s.class}</p>
          <p><strong>লিঙ্গ:</strong> {s.gender}</p>
          <p><strong>ইমেইল:</strong> {s.email}</p>
          <p><strong>ফোন:</strong> {s.phone}</p>
          <p><strong>ঠিকানা:</strong> {s.address}</p>
          <p><strong>উপস্থিতি:</strong> {toBanglaNumber(s.attendance)}%</p>
          <p><strong>নম্বর:</strong> {toBanglaNumber(s.marks)}% ({grade.grade})</p>
        </div>
      );
    } else if (modalType === "teacher") {
      const t = selectedItem as Teacher;
      content = (
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p><strong>নাম:</strong> {t.name}</p>
          <p><strong>বিষয়:</strong> {t.subject}</p>
          <p><strong>শ্রেণী:</strong> {t.class}</p>
          <p><strong>ইমেইল:</strong> {t.email}</p>
          <p><strong>ফোন:</strong> {t.phone}</p>
          <p><strong>অভিজ্ঞতা:</strong> {t.experience.replace(/\d+/, (m: string) => toBanglaNumber(m))}</p>
        </div>
      );
    } else if (modalType === "result") {
      const r = selectedItem as Result;
      content = (
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
          <p><strong>বিষয়:</strong> {r.subject}</p>
          <p><strong>শ্রেণী:</strong> {r.class}</p>
          <p><strong>গড় নম্বর:</strong> {toBanglaNumber(r.average)}%</p>
          <p><strong>পাসের হার:</strong> {toBanglaNumber(r.passRate)}%</p>
          <p><strong>সর্বোচ্চ নম্বর:</strong> {toBanglaNumber(r.topScore)}%</p>
        </div>
      );
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">বিস্তারিত তথ্য</h3>
            <button onClick={() => setViewModalOpen(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"><X className="h-6 w-6 text-gray-400 dark:text-gray-500" /></button>
          </div>
          {content}
          <button onClick={() => setViewModalOpen(false)} className="mt-4 w-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 rounded-xl font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">বন্ধ করুন</button>
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
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শ্রেণীর নাম</label><input name="name" value={editFormData.name || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">স্তর</label><input name="level" value={editFormData.level || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শাখা</label><input name="stream" value={editFormData.stream || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শিক্ষার্থী সংখ্যা</label><input name="students" type="number" value={editFormData.students || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শিক্ষক সংখ্যা</label><input name="teachers" type="number" value={editFormData.teachers || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">কক্ষ</label><input name="room" value={editFormData.room || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
        </>
      );
    } else if (modalType === "student") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">নাম</label><input name="name" value={editFormData.name || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">রোল</label><input name="roll" type="number" value={editFormData.roll || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শ্রেণী</label><input name="class" value={editFormData.class || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">লিঙ্গ</label><select name="gender" value={editFormData.gender || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"><option value="পুরুষ">পুরুষ</option><option value="নারী">নারী</option></select></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ইমেইল</label><input name="email" value={editFormData.email || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ফোন</label><input name="phone" value={editFormData.phone || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
        </>
      );
    } else if (modalType === "teacher") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">নাম</label><input name="name" value={editFormData.name || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">বিষয়</label><input name="subject" value={editFormData.subject || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শ্রেণী</label><input name="class" value={editFormData.class || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ইমেইল</label><input name="email" value={editFormData.email || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ফোন</label><input name="phone" value={editFormData.phone || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
        </>
      );
    } else if (modalType === "result") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">বিষয়</label><input name="subject" value={editFormData.subject || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শ্রেণী</label><input name="class" value={editFormData.class || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">গড় নম্বর</label><input name="average" type="number" value={editFormData.average || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">পাসের হার</label><input name="passRate" type="number" value={editFormData.passRate || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
        </>
      );
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">সম্পাদনা করুন</h3>
            <button onClick={() => setEditModalOpen(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"><X className="h-6 w-6 text-gray-400 dark:text-gray-500" /></button>
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
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-sm w-full p-6 shadow-2xl">
          <div className="flex items-center gap-3 text-red-600 dark:text-red-400 mb-4">
            <AlertCircle className="h-8 w-8" />
            <h3 className="text-xl font-bold">নিশ্চিত করুন</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-6">আপনি কি <span className="font-semibold text-slate-800 dark:text-white">{selectedItem.name || selectedItem.subject}</span> ডিলিট করতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।</p>
          <div className="flex gap-3">
            <button onClick={() => setDeleteModalOpen(false)} className="flex-1 px-4 py-2.5 border border-gray-200 dark:border-gray-700 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">বাতিল</button>
            <button onClick={handleDeleteConfirm} className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors">ডিলিট</button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddModal = () => {
    if (!addModalOpen) return null;
    let fields = null;
    if (addModalType === "class") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শ্রেণীর নাম *</label><input name="name" value={addFormData.name || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="যেমন: ৩য় শ্রেণী" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">স্তর *</label><select name="level" value={addFormData.level || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"><option value="">নির্বাচন করুন</option>{levels.map((l) => <option key={l} value={l}>{l}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শাখা *</label><select name="stream" value={addFormData.stream || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"><option value="">নির্বাচন করুন</option>{streams.map((s) => <option key={s} value={s}>{s}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শাখা সংখ্যা</label><input name="sections" type="number" value={addFormData.sections || 1} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শিক্ষার্থী সংখ্যা</label><input name="students" type="number" value={addFormData.students || 0} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শিক্ষক সংখ্যা</label><input name="teachers" type="number" value={addFormData.teachers || 0} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">কক্ষ</label><input name="room" value={addFormData.room || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="যেমন: ১০১" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">বিষয়সমূহ (কমা দিয়ে আলাদা)</label><input name="subjects" value={addFormData.subjects || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="বাংলা, ইংরেজি, গণিত" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">উপস্থিতি (%)</label><input name="attendance" type="number" value={addFormData.attendance || 0} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">পাসের হার (%)</label><input name="passRate" type="number" value={addFormData.passRate || 0} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
        </>
      );
    } else if (addModalType === "student") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">নাম *</label><input name="name" value={addFormData.name || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">রোল *</label><input name="roll" type="number" value={addFormData.roll || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শ্রেণী *</label><select name="class" value={addFormData.class || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"><option value="">নির্বাচন করুন</option>{classNames.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">লিঙ্গ</label><select name="gender" value={addFormData.gender || "পুরুষ"} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"><option value="পুরুষ">পুরুষ</option><option value="নারী">নারী</option></select></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ইমেইল</label><input name="email" value={addFormData.email || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ফোন</label><input name="phone" value={addFormData.phone || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ঠিকানা</label><input name="address" value={addFormData.address || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">উপস্থিতি (%)</label><input name="attendance" type="number" value={addFormData.attendance || 0} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">প্রাপ্ত নম্বর (%)</label><input name="marks" type="number" value={addFormData.marks || 0} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
        </>
      );
    } else if (addModalType === "teacher") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">নাম *</label><input name="name" value={addFormData.name || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">বিষয় *</label><input name="subject" value={addFormData.subject || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শ্রেণী *</label><select name="class" value={addFormData.class || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"><option value="">নির্বাচন করুন</option>{classNames.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ইমেইল</label><input name="email" value={addFormData.email || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">ফোন</label><input name="phone" value={addFormData.phone || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">অভিজ্ঞতা</label><input name="experience" value={addFormData.experience || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="যেমন: ৫ বছর" /></div>
        </>
      );
    } else if (addModalType === "result") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">বিষয় *</label><input name="subject" value={addFormData.subject || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শ্রেণী *</label><select name="class" value={addFormData.class || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white"><option value="">নির্বাচন করুন</option>{classNames.map((c) => <option key={c} value={c}>{c}</option>)}</select></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">গড় নম্বর (%)</label><input name="average" type="number" value={addFormData.average || 0} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">পাসের হার (%)</label><input name="passRate" type="number" value={addFormData.passRate || 0} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">সর্বোচ্চ নম্বর (%)</label><input name="topScore" type="number" value={addFormData.topScore || 0} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" /></div>
        </>
      );
    } else if (addModalType === "routine") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700 dark:text-gray-300">শ্রেণীর নাম *</label><input name="className" value={addFormData.className || ""} onChange={handleAddFormChange} className="w-full px-3 py-2 border rounded-xl dark:bg-gray-700 dark:border-gray-600 dark:text-white" placeholder="যেমন: ৩য় শ্রেণী" /></div>
          <p className="text-xs text-gray-500 dark:text-gray-400">দ্রষ্টব্য: নতুন শ্রেণীর জন্য একটি খালি রুটিন তৈরি হবে। আপনি পরে সম্পাদনা করতে পারবেন।</p>
        </>
      );
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-md w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              {addModalType === "class" && "নতুন শ্রেণী যোগ করুন"}
              {addModalType === "student" && "নতুন শিক্ষার্থী যোগ করুন"}
              {addModalType === "teacher" && "নতুন শিক্ষক যোগ করুন"}
              {addModalType === "result" && "নতুন ফলাফল যোগ করুন"}
              {addModalType === "routine" && "নতুন রুটিন যোগ করুন"}
            </h3>
            <button onClick={() => setAddModalOpen(false)} className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"><X className="h-6 w-6 text-gray-400 dark:text-gray-500" /></button>
          </div>
          <div className="space-y-3">{fields}</div>
          <button onClick={handleAddSubmit} className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"><Plus className="h-4 w-4" /> যোগ করুন</button>
        </div>
      </div>
    );
  };

  // ===== MAIN RETURN =====
  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
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
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-600 dark:hover:text-green-400"
              }`}
            >
              <Icon className={`h-4 w-4 ${activeTab === tab.id ? "text-white" : "text-gray-400 dark:text-gray-500"}`} />
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
      {renderAddModal()}
    </div>
  );
}