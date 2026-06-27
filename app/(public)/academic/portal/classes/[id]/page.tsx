"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Users,
  BookOpen,
  GraduationCap,
  Award,
  TrendingUp,
  CheckCircle,
  Download,
  Eye,
  FileText,
  Grid,
  List,
  Search,
  Plus,
  Edit,
  Trash2,
  School,
  User,
  Mail,
  Phone,
  MapPin,
  Building2,
  UserCheck,
  UserPlus,
  BarChart,
  PieChart,
  Settings,
  MoreVertical,
  ChevronDown,
  XCircle,
  Upload,
  FlaskConical,
  PenTool,
  ClipboardList,
  Layers,
  Bell,
} from "lucide-react";

// Mock class data (same as in academic page)
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

// Mock student data for each class
const studentData: Record<number, any[]> = {
  1: [
    { id: 1, name: "মোঃ রহমান", roll: 1, gender: "পুরুষ", attendance: 95, marks: 85 },
    { id: 2, name: "সুলতানা আখতার", roll: 2, gender: "নারী", attendance: 92, marks: 88 },
    { id: 3, name: "কামাল হোসেন", roll: 3, gender: "পুরুষ", attendance: 88, marks: 78 },
    { id: 4, name: "ফাতেমা বেগম", roll: 4, gender: "নারী", attendance: 96, marks: 92 },
    { id: 5, name: "রহিম আলী", roll: 5, gender: "পুরুষ", attendance: 85, marks: 72 },
    { id: 6, name: "আয়েশা খান", roll: 6, gender: "নারী", attendance: 90, marks: 86 },
    { id: 7, name: "সোহেল রানা", roll: 7, gender: "পুরুষ", attendance: 82, marks: 68 },
    { id: 8, name: "নুসরাত জাহান", roll: 8, gender: "নারী", attendance: 94, marks: 90 },
  ],
  2: [
    { id: 9, name: "আব্দুল করিম", roll: 1, gender: "পুরুষ", attendance: 93, marks: 82 },
    { id: 10, name: "রোকেয়া সুলতানা", roll: 2, gender: "নারী", attendance: 91, marks: 87 },
  ],
  3: [
    { id: 11, name: "মামুনুর রশিদ", roll: 1, gender: "পুরুষ", attendance: 89, marks: 75 },
  ],
};

// Mock teacher data
const teacherData: Record<number, any[]> = {
  1: [
    { id: 1, name: "মোঃ কামাল হোসেন", subject: "বাংলা", email: "kamal@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৭৮" },
    { id: 2, name: "মিসেস সুলতানা আখতার", subject: "ইংরেজি", email: "sultana@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৭৯" },
    { id: 3, name: "মোঃ রহমান", subject: "গণিত", email: "rahman@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮০" },
    { id: 4, name: "মিসেস ফরিদা বেগম", subject: "বিজ্ঞান", email: "farida@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮১" },
    { id: 5, name: "মোঃ রহিম আলী", subject: "ধর্ম", email: "rahim@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮২" },
    { id: 6, name: "মিসেস আয়েশা খান", subject: "চারু ও কারুকলা", email: "ayesha@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮৩" },
    { id: 7, name: "মোঃ সোহেল রানা", subject: "শারীরিক শিক্ষা", email: "sohel@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮৪" },
    { id: 8, name: "মিসেস নুসরাত জাহান", subject: "আইসিটি", email: "nusrat@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮৫" },
  ],
  2: [
    { id: 9, name: "মোঃ আব্দুল করিম", subject: "বাংলা", email: "karim@school.edu", phone: "+৮৮০১৭১২৩৪৫৬৮৬" },
  ],
};

// Mock class routine
const classRoutine: Record<number, any[]> = {
  1: [
    { day: "রবিবার", periods: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "ধর্ম", "চারু ও কারুকলা"] },
    { day: "সোমবার", periods: ["ইংরেজি", "গণিত", "বাংলা", "বিজ্ঞান", "চারু ও কারুকলা", "শারীরিক শিক্ষা"] },
    { day: "মঙ্গলবার", periods: ["গণিত", "বাংলা", "ইংরেজি", "ধর্ম", "বিজ্ঞান", "চারু ও কারুকলা"] },
    { day: "বুধবার", periods: ["বিজ্ঞান", "ধর্ম", "গণিত", "ইংরেজি", "বাংলা", "শারীরিক শিক্ষা"] },
    { day: "বৃহস্পতিবার", periods: ["বাংলা", "ইংরেজি", "গণিত", "বিজ্ঞান", "আইসিটি", "চারু ও কারুকলা"] },
  ],
};

// Mock exam results
const examResults: Record<number, any[]> = {
  1: [
    { subject: "বাংলা", average: 78, passRate: 95, topScore: 98 },
    { subject: "ইংরেজি", average: 82, passRate: 92, topScore: 97 },
    { subject: "গণিত", average: 75, passRate: 88, topScore: 95 },
    { subject: "বিজ্ঞান", average: 80, passRate: 90, topScore: 96 },
  ],
};

export default function ClassDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const classId = parseInt(params.id as string);
  
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState("grid");
  const [showAddModal, setShowAddModal] = useState(false);
  
  const classInfo = classData.find(c => c.id === classId);
  const students = studentData[classId] || [];
  const teachers = teacherData[classId] || [];
  const routine = classRoutine[classId] || [];
  const results = examResults[classId] || [];

  useEffect(() => {
    if (!classInfo) {
      router.push("/academic/portal");
    }
  }, [classInfo, router]);

  if (!classInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">শ্রেণীর তথ্য লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

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

  const filteredStudents = students.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.roll.toString().includes(searchTerm)
  );

  const renderContent = () => {
    switch(activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">মোট শিক্ষার্থী</p>
                    <p className="text-xl font-bold text-gray-800">{classInfo.students}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-50 rounded-xl">
                    <UserCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">শিক্ষক</p>
                    <p className="text-xl font-bold text-gray-800">{classInfo.teachers}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-50 rounded-xl">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">বিষয়</p>
                    <p className="text-xl font-bold text-gray-800">{classInfo.subjects.length}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-50 rounded-xl">
                    <Layers className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">শাখা</p>
                    <p className="text-xl font-bold text-gray-800">{classInfo.sections}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Class Info */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">শ্রেণীর তথ্য</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">শ্রেণীর নাম</p>
                  <p className="font-medium text-gray-800">{classInfo.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">স্তর</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(classInfo.level)}`}>
                    {classInfo.level}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">শাখা</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStreamColor(classInfo.stream)}`}>
                    {classInfo.stream}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">কক্ষ</p>
                  <p className="font-medium text-gray-800">{classInfo.room}</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500">বিষয়সমূহ</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {classInfo.subjects.map((subject, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Class Routine Preview */}
            {routine.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">শ্রেণীর রুটিন</h3>
                  <button className="text-sm text-green-600 hover:text-green-700 font-medium">
                    সম্পূর্ণ রুটিন দেখুন →
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left text-gray-600 font-semibold">দিন</th>
                        {routine[0]?.periods.map((p: string, idx: number) => (
                          <th key={idx} className="px-4 py-2 text-left text-gray-600 font-semibold">পর্ব {idx + 1}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {routine.map((row, idx) => (
                        <tr key={idx} className="border-t border-gray-100 hover:bg-green-50 transition-colors">
                          <td className="px-4 py-2 font-medium text-gray-700">{row.day}</td>
                          {row.periods.map((period: string, pIdx: number) => (
                            <td key={pIdx} className="px-4 py-2 text-gray-600">{period}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <button 
                onClick={() => setActiveTab("students")}
                className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-green-200 hover:-translate-y-0.5"
              >
                <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 text-center">শিক্ষার্থী দেখুন</p>
              </button>
              <button 
                onClick={() => setActiveTab("teachers")}
                className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-green-200 hover:-translate-y-0.5"
              >
                <UserCheck className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 text-center">শিক্ষক দেখুন</p>
              </button>
              <button 
                onClick={() => setActiveTab("results")}
                className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-green-200 hover:-translate-y-0.5"
              >
                <BarChart className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 text-center">পরীক্ষার ফলাফল</p>
              </button>
              <button 
                className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-green-200 hover:-translate-y-0.5"
              >
                <Download className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-gray-700 text-center">প্রতিবেদন ডাউনলোড</p>
              </button>
            </div>
          </div>
        );

      case "students":
        return (
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="নাম বা রোল নম্বর দিয়ে খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
                  className="p-2.5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  {viewMode === "grid" ? <List className="h-5 w-5" /> : <Grid className="h-5 w-5" />}
                </button>
                <button 
                  onClick={() => setShowAddModal(true)}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">শিক্ষার্থী যোগ করুন</span>
                </button>
              </div>
            </div>

            <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"} gap-4`}>
              {filteredStudents.map((student) => {
                const grade = getGrade(student.marks);
                return (
                  <div
                    key={student.id}
                    className="group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200 border border-transparent"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-700 font-semibold">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                              {student.name}
                            </h4>
                            <p className="text-sm text-gray-500">রোল: {student.roll}</p>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
                          <span className="flex items-center gap-1 text-gray-500">
                            <User className="h-3 w-3" /> {student.gender}
                          </span>
                          <span className={`flex items-center gap-1 ${getAttendanceColor(student.attendance)}`}>
                            <CheckCircle className="h-3 w-3" /> {student.attendance}% উপস্থিতি
                          </span>
                          <span className={`flex items-center gap-1 font-medium ${grade.color}`}>
                            <Award className="h-3 w-3" /> {grade.grade} ({student.marks}%)
                          </span>
                        </div>
                      </div>
                      <button className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredStudents.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <Users className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">কোন শিক্ষার্থী পাওয়া যায়নি</p>
                <p className="text-sm text-gray-400 mt-1">আপনার অনুসন্ধান পরিবর্তন করে দেখুন</p>
              </div>
            )}
          </div>
        );

      case "teachers":
        return (
          <div>
            <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
              <div className="flex-1 min-w-[200px]">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="শিক্ষক খুঁজুন..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
              <button 
                onClick={() => setShowAddModal(true)}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">শিক্ষক যোগ করুন</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200 border border-transparent"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-semibold text-lg flex-shrink-0">
                      {teacher.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                        {teacher.name}
                      </h4>
                      <p className="text-sm text-gray-500">{teacher.subject}</p>
                      <div className="mt-2 space-y-1 text-sm text-gray-500">
                        <p className="flex items-center gap-2">
                          <Mail className="h-3 w-3" /> {teacher.email}
                        </p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-3 w-3" /> {teacher.phone}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      <button className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {teachers.length === 0 && (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <UserCheck className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 font-medium">কোন শিক্ষক নিয়োগ দেওয়া হয়নি</p>
                <p className="text-sm text-gray-400 mt-1">এই শ্রেণীতে এখনো কোন শিক্ষক নেই</p>
              </div>
            )}
          </div>
        );

      case "results":
        return (
          <div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">পরীক্ষার ফলাফল</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {results.map((result, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-xl">
                    <p className="text-sm text-gray-500">{result.subject}</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">গড়</span>
                        <span className="font-medium">{result.average}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">পাসের হার</span>
                        <span className="font-medium text-green-600">{result.passRate}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">সর্বোচ্চ নম্বর</span>
                        <span className="font-medium text-blue-600">{result.topScore}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">শিক্ষার্থীদের ফলাফল</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left text-gray-600 font-semibold">রোল</th>
                      <th className="px-4 py-2 text-left text-gray-600 font-semibold">নাম</th>
                      <th className="px-4 py-2 text-left text-gray-600 font-semibold">উপস্থিতি</th>
                      <th className="px-4 py-2 text-left text-gray-600 font-semibold">নম্বর</th>
                      <th className="px-4 py-2 text-left text-gray-600 font-semibold">গ্রেড</th>
                      <th className="px-4 py-2 text-left text-gray-600 font-semibold">একশন</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => {
                      const grade = getGrade(student.marks);
                      return (
                        <tr key={student.id} className="border-t border-gray-100 hover:bg-green-50 transition-colors">
                          <td className="px-4 py-2 text-gray-600">{student.roll}</td>
                          <td className="px-4 py-2 font-medium text-gray-800">{student.name}</td>
                          <td className={`px-4 py-2 ${getAttendanceColor(student.attendance)}`}>
                            {student.attendance}%
                          </td>
                          <td className="px-4 py-2 font-medium">{student.marks}%</td>
                          <td className={`px-4 py-2 font-medium ${grade.color}`}>{grade.grade}</td>
                          <td className="px-4 py-2">
                            <button className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300">
                              <Eye className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Header - Full hero section restored */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-12 md:py-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-soft" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Link 
                href="/academic/portal"
                className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all duration-300 hover:scale-105"
              >
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">{classInfo.name}</h1>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full border border-white/30 ${getLevelColor(classInfo.level)}`}>
                    {classInfo.level}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border border-white/30 ${getStreamColor(classInfo.stream)}`}>
                    {classInfo.stream}
                  </span>
                  <span className="text-sm text-white/80">• {classInfo.students} জন শিক্ষার্থী</span>
                </div>
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
              { id: "overview", label: "ওভারভিউ", icon: School },
              { id: "students", label: "শিক্ষার্থী", icon: Users },
              { id: "teachers", label: "শিক্ষক", icon: UserCheck },
              { id: "results", label: "ফলাফল", icon: BarChart },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
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

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in-up">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <UserPlus className="h-5 w-5 text-green-600" />
                নতুন {activeTab === "students" ? "শিক্ষার্থী" : "শিক্ষক"} যোগ করুন
              </h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <XCircle className="h-6 w-6 text-gray-400" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">পূর্ণ নাম</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="পূর্ণ নাম লিখুন"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল</label>
                <input 
                  type="email" 
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  placeholder="ইমেইল ঠিকানা লিখুন"
                />
              </div>
              {activeTab === "students" ? (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">রোল নম্বর</label>
                    <input 
                      type="number" 
                      className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="রোল নম্বর লিখুন"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">লিঙ্গ</label>
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300">
                      <option>পুরুষ</option>
                      <option>নারী</option>
                      <option>অন্যান্য</option>
                    </select>
                  </div>
                </>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">বিষয়</label>
                  <select className="w-full px-3 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300">
                    {classInfo.subjects.map((subject, idx) => (
                      <option key={idx}>{subject}</option>
                    ))}
                  </select>
                </div>
              )}
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-[1.02] shadow-lg">
                {activeTab === "students" ? "শিক্ষার্থী" : "শিক্ষক"} যোগ করুন
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}