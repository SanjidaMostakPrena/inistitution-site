"use client";

import { useState } from "react";
import {
  Award,
  FileText,
  Users,
  UserCheck,
  Percent,
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  Grid,
  List,
  X,
  Save,
  AlertCircle,
  Download,
  Printer,
  Share2,
  Calendar,
  BookOpen,
  Star,
  Trophy,
  Activity,
  Filter,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  GraduationCap,
} from "lucide-react";

// ===== MOCK DATA (initially from public page) =====
const initialResults = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
];

// ===== HELPER FUNCTIONS =====
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

const getCategoryBadge = (category: string) => {
  const badges: Record<string, string> = {
    examination: "📝 পরীক্ষা",
    board: "🎯 বোর্ড",
    internal: "📊 অভ্যন্তরীণ",
  };
  return badges[category] || category;
};

const getGradeColor = (grade: string) => {
  const colors: Record<string, string> = {
    "এ+": "bg-emerald-100 text-emerald-700 border-emerald-200",
    "এ": "bg-green-100 text-green-700 border-green-200",
    "এ-": "bg-lime-100 text-lime-700 border-lime-200",
    "বি+": "bg-blue-100 text-blue-700 border-blue-200",
  };
  return colors[grade] || "bg-gray-100 text-gray-700";
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

// ===== MAIN COMPONENT =====
export default function AdminResults() {
  const [results, setResults] = useState(initialResults);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [editFormData, setEditFormData] = useState<any>({});
  const [addFormData, setAddFormData] = useState<any>({});

  // Stats
  const totalResults = results.length;
  const totalStudents = results.reduce((acc, r) => acc + r.totalStudents, 0);
  const totalPassed = results.reduce((acc, r) => acc + r.passed, 0);
  const overallPassRate = totalStudents > 0 ? `${Math.round((totalPassed / totalStudents) * 100)}%` : "০%";

  // Filtered results
  const filteredResults = results.filter((r) => {
    const matchSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        r.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = filterCategory === "all" || r.category === filterCategory;
    const matchType = filterType === "all" || r.type === filterType;
    return matchSearch && matchCategory && matchType;
  });

  // Modal handlers
  const openViewModal = (item: any) => {
    setSelectedItem(item);
    setViewModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setSelectedItem(item);
    setEditFormData({ ...item });
    setEditModalOpen(true);
  };

  const openDeleteModal = (item: any) => {
    setSelectedItem(item);
    setDeleteModalOpen(true);
  };

  const openAddModal = () => {
    setAddFormData({
      title: "",
      class: "",
      type: "primary",
      category: "examination",
      date: new Date().toISOString().split("T")[0],
      totalStudents: 0,
      passed: 0,
      grade: "এ",
      semester: "",
      board: "",
      gpa: "",
      assessmentType: "",
      file: "",
      size: "",
      passRate: "০%",
    });
    setAddModalOpen(true);
  };

  // CRUD operations
  const handleAddSave = () => {
    const newId = Math.max(0, ...results.map(r => r.id)) + 1;
    // Calculate pass rate if not provided
    let passRate = addFormData.passRate;
    if (!passRate || passRate === "০%") {
      const total = Number(addFormData.totalStudents) || 0;
      const passed = Number(addFormData.passed) || 0;
      passRate = total > 0 ? `${Math.round((passed / total) * 100)}%` : "০%";
    }
    const newItem = { ...addFormData, id: newId, passRate };
    setResults([newItem, ...results]);
    setAddModalOpen(false);
    alert("নতুন ফলাফল যোগ করা হয়েছে (ডেমো)");
  };

  const handleEditSave = () => {
    // Calculate pass rate if changed
    let passRate = editFormData.passRate;
    if (!passRate || passRate === "০%") {
      const total = Number(editFormData.totalStudents) || 0;
      const passed = Number(editFormData.passed) || 0;
      passRate = total > 0 ? `${Math.round((passed / total) * 100)}%` : "০%";
    }
    const updatedItem = { ...editFormData, passRate };
    const updatedResults = results.map((r) =>
      r.id === updatedItem.id ? updatedItem : r
    );
    setResults(updatedResults);
    setEditModalOpen(false);
    alert("ফলাফল আপডেট করা হয়েছে (ডেমো)");
  };

  const handleDeleteConfirm = () => {
    const updatedResults = results.filter((r) => r.id !== selectedItem.id);
    setResults(updatedResults);
    setDeleteModalOpen(false);
    alert("ফলাফল ডিলিট করা হয়েছে (ডেমো)");
  };

  // ===== MODAL RENDERERS =====
  const renderViewModal = () => {
    if (!selectedItem) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />
              ফলাফলের বিবরণ
            </h3>
            <button onClick={() => setViewModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div><strong>শিরোনাম:</strong> {selectedItem.title}</div>
            <div><strong>শ্রেণী:</strong> {selectedItem.class}</div>
            <div><strong>ক্যাটাগরি:</strong> {getCategoryBadge(selectedItem.category)}</div>
            <div><strong>ধরন:</strong> {getTypeBadge(selectedItem.type)}</div>
            <div><strong>তারিখ:</strong> {selectedItem.date}</div>
            <div><strong>মোট শিক্ষার্থী:</strong> {selectedItem.totalStudents}</div>
            <div><strong>উত্তীর্ণ:</strong> {selectedItem.passed}</div>
            <div><strong>পাসের হার:</strong> {selectedItem.passRate}</div>
            <div><strong>গ্রেড:</strong> <span className={`px-2 py-1 rounded ${getGradeColor(selectedItem.grade)}`}>{selectedItem.grade}</span></div>
            {selectedItem.semester && <div><strong>সেমিস্টার:</strong> {selectedItem.semester}</div>}
            {selectedItem.board && <div><strong>বোর্ড:</strong> {selectedItem.board}</div>}
            {selectedItem.gpa && <div><strong>জিপিএ:</strong> {selectedItem.gpa}</div>}
            {selectedItem.assessmentType && <div><strong>মূল্যায়নের ধরন:</strong> {selectedItem.assessmentType}</div>}
            {selectedItem.file && <div><strong>ফাইল:</strong> {selectedItem.file} ({selectedItem.size})</div>}
          </div>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-green-700 transition-colors hover:scale-105">
              <Download className="h-4 w-4" /> ডাউনলোড
            </button>
            <button onClick={() => setViewModalOpen(false)} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors">
              বন্ধ করুন
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderAddModal = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setAddFormData({ ...addFormData, [name]: value });
    };
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Plus className="h-5 w-5 text-green-600" />
              নতুন ফলাফল যোগ করুন
            </h3>
            <button onClick={() => setAddModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">শিরোনাম</label>
              <input name="title" value={addFormData.title || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">শ্রেণী</label>
              <input name="class" value={addFormData.class || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ক্যাটাগরি</label>
                <select name="category" value={addFormData.category || "examination"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                  <option value="examination">পরীক্ষা</option>
                  <option value="board">বোর্ড</option>
                  <option value="internal">অভ্যন্তরীণ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ধরন</label>
                <select name="type" value={addFormData.type || "primary"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                  <option value="primary">প্রাথমিক</option>
                  <option value="secondary">মাধ্যমিক</option>
                  <option value="board">বোর্ড</option>
                  <option value="internal">অভ্যন্তরীণ</option>
                  <option value="all">সকল শ্রেণী</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">তারিখ</label>
              <input type="date" name="date" value={addFormData.date || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">মোট শিক্ষার্থী</label>
                <input type="number" name="totalStudents" value={addFormData.totalStudents || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">উত্তীর্ণ</label>
                <input type="number" name="passed" value={addFormData.passed || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">গ্রেড</label>
              <select name="grade" value={addFormData.grade || "এ"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                <option value="এ+">এ+</option>
                <option value="এ">এ</option>
                <option value="এ-">এ-</option>
                <option value="বি+">বি+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">সেমিস্টার (যদি প্রযোজ্য)</label>
              <input name="semester" value={addFormData.semester || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ফাইল নাম</label>
              <input name="file" value={addFormData.file || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" placeholder="উদা: result-2026.pdf" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ফাইল সাইজ</label>
              <input name="size" value={addFormData.size || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" placeholder="উদা: ৪৫৬ কেবি" />
            </div>
            {addFormData.category === "board" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">বোর্ড</label>
                  <input name="board" value={addFormData.board || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">জিপিএ</label>
                  <input name="gpa" value={addFormData.gpa || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
                </div>
              </>
            )}
            {addFormData.category === "internal" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">মূল্যায়নের ধরন</label>
                <input name="assessmentType" value={addFormData.assessmentType || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
            )}
          </div>
          <button onClick={handleAddSave} className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2">
            <Save className="h-4 w-4" /> যোগ করুন
          </button>
        </div>
      </div>
    );
  };

  const renderEditModal = () => {
    if (!selectedItem) return null;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setEditFormData({ ...editFormData, [name]: value });
    };
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 animate-scale-in">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Edit className="h-5 w-5 text-green-600" />
              ফলাফল সম্পাদনা
            </h3>
            <button onClick={() => setEditModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
              <X className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">শিরোনাম</label>
              <input name="title" value={editFormData.title || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">শ্রেণী</label>
              <input name="class" value={editFormData.class || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">ক্যাটাগরি</label>
                <select name="category" value={editFormData.category || "examination"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                  <option value="examination">পরীক্ষা</option>
                  <option value="board">বোর্ড</option>
                  <option value="internal">অভ্যন্তরীণ</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">ধরন</label>
                <select name="type" value={editFormData.type || "primary"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                  <option value="primary">প্রাথমিক</option>
                  <option value="secondary">মাধ্যমিক</option>
                  <option value="board">বোর্ড</option>
                  <option value="internal">অভ্যন্তরীণ</option>
                  <option value="all">সকল শ্রেণী</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">তারিখ</label>
              <input type="date" name="date" value={editFormData.date || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">মোট শিক্ষার্থী</label>
                <input type="number" name="totalStudents" value={editFormData.totalStudents || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">উত্তীর্ণ</label>
                <input type="number" name="passed" value={editFormData.passed || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">গ্রেড</label>
              <select name="grade" value={editFormData.grade || "এ"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500">
                <option value="এ+">এ+</option>
                <option value="এ">এ</option>
                <option value="এ-">এ-</option>
                <option value="বি+">বি+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">সেমিস্টার (যদি প্রযোজ্য)</label>
              <input name="semester" value={editFormData.semester || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ফাইল নাম</label>
              <input name="file" value={editFormData.file || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">ফাইল সাইজ</label>
              <input name="size" value={editFormData.size || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
            </div>
            {editFormData.category === "board" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">বোর্ড</label>
                  <input name="board" value={editFormData.board || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">জিপিএ</label>
                  <input name="gpa" value={editFormData.gpa || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
                </div>
              </>
            )}
            {editFormData.category === "internal" && (
              <div>
                <label className="block text-sm font-medium text-gray-700">মূল্যায়নের ধরন</label>
                <input name="assessmentType" value={editFormData.assessmentType || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-green-500" />
              </div>
            )}
          </div>
          <button onClick={handleEditSave} className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2">
            <Save className="h-4 w-4" /> আপডেট করুন
          </button>
        </div>
      </div>
    );
  };

  const renderDeleteModal = () => {
    if (!selectedItem) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
        <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl animate-scale-in">
          <div className="flex items-center gap-3 text-red-600 mb-4">
            <AlertCircle className="h-8 w-8" />
            <h3 className="text-xl font-bold">নিশ্চিত করুন</h3>
          </div>
          <p className="text-gray-600 mb-6">
            আপনি কি <span className="font-semibold text-slate-800">{selectedItem.title}</span> ডিলিট করতে চান?
            এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।
          </p>
          <div className="flex gap-3">
            <button onClick={() => setDeleteModalOpen(false)} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">
              বাতিল
            </button>
            <button onClick={handleDeleteConfirm} className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors">
              ডিলিট
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ===== MAIN RENDER =====
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 flex items-center gap-2">
              <Award className="h-7 w-7 text-green-600" />
              ফলাফল ব্যবস্থাপনা
            </h1>
            <p className="text-gray-500 mt-1">পরীক্ষার ফলাফল, বোর্ড ফলাফল ও মূল্যায়ন পরিচালনা করুন</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={openAddModal} className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg">
              <Plus className="h-4 w-4" /> নতুন ফলাফল
            </button>
            <button className="p-2.5 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              <RefreshCw className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">মোট ফলাফল</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalResults}</p></div>
            <div className="p-3 bg-blue-50 rounded-xl"><Award className="h-6 w-6 text-blue-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">মোট শিক্ষার্থী</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalStudents}</p></div>
            <div className="p-3 bg-green-50 rounded-xl"><Users className="h-6 w-6 text-green-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">মোট উত্তীর্ণ</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalPassed}</p></div>
            <div className="p-3 bg-purple-50 rounded-xl"><UserCheck className="h-6 w-6 text-purple-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">উত্তীর্ণের হার</p><p className="text-2xl font-bold text-green-600 mt-1">{overallPassRate}</p></div>
            <div className="p-3 bg-orange-50 rounded-xl"><Percent className="h-6 w-6 text-orange-600" /></div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex-1 min-w-[200px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="শিরোনাম বা শ্রেণী অনুসন্ধান..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
          >
            <option value="all">সকল ক্যাটাগরি</option>
            <option value="examination">পরীক্ষা</option>
            <option value="board">বোর্ড</option>
            <option value="internal">অভ্যন্তরীণ</option>
          </select>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm bg-white"
          >
            <option value="all">সকল ধরন</option>
            <option value="primary">প্রাথমিক</option>
            <option value="secondary">মাধ্যমিক</option>
            <option value="board">বোর্ড</option>
            <option value="internal">অভ্যন্তরীণ</option>
            <option value="all">সকল শ্রেণী</option>
          </select>
          <button
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
            className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300"
          >
            {viewMode === "grid" ? <List className="h-5 w-5 text-gray-600" /> : <Grid className="h-5 w-5 text-gray-600" />}
          </button>
        </div>
      </div>

      {/* Results Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResults.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-xl ${result.category === "board" ? "bg-yellow-100" : result.category === "internal" ? "bg-blue-100" : "bg-red-100"}`}>
                    {result.category === "board" ? <Trophy className="h-5 w-5 text-yellow-600" /> :
                     result.category === "internal" ? <Activity className="h-5 w-5 text-blue-600" /> :
                     <FileText className="h-5 w-5 text-red-600" />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-800 text-sm line-clamp-2">{result.title}</h3>
                    <p className="text-xs text-gray-500">{result.class}</p>
                    <div className="flex flex-wrap items-center gap-1 mt-1">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${getTypeColor(result.type)}`}>
                        {getTypeBadge(result.type)}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {getCategoryBadge(result.category)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-lg ${getGradeColor(result.grade)} font-bold text-sm flex-shrink-0`}>
                  {result.grade}
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-[10px] text-gray-500">
                <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {result.date}</span>
                <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {result.totalStudents}</span>
                <span className="flex items-center gap-1 text-green-600 font-medium"><Percent className="h-3 w-3" /> {result.passRate}</span>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end gap-1.5">
                <button onClick={() => openViewModal(result)} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110" title="বিস্তারিত"><Eye className="h-4 w-4" /></button>
                <button onClick={() => openEditModal(result)} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110" title="সম্পাদনা"><Edit className="h-4 w-4" /></button>
                <button onClick={() => openDeleteModal(result)} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110" title="ডিলিট"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শিরোনাম</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">শ্রেণী</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ক্যাটাগরি</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">পাসের হার</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">গ্রেড</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">একশন</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredResults.map((result) => (
                  <tr key={result.id} className="hover:bg-green-50/50 transition-colors duration-200 group">
                    <td className="px-4 py-3 font-medium text-slate-800 group-hover:text-green-700 transition-colors">{result.title}</td>
                    <td className="px-4 py-3 text-slate-700">{result.class}</td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-gray-100 text-gray-600">
                        {getCategoryBadge(result.category)}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-green-600">{result.passRate}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${getGradeColor(result.grade)}`}>
                        {result.grade}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <button onClick={() => openViewModal(result)} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                        <button onClick={() => openEditModal(result)} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                        <button onClick={() => openDeleteModal(result)} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredResults.length === 0 && (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
            <Award className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">কোন ফলাফল পাওয়া যায়নি</h3>
          <p className="text-gray-500 max-w-md mx-auto">আপনার অনুসন্ধান বা ফিল্টারের সাথে মেলে এমন কোনো ফলাফল নেই।</p>
        </div>
      )}

      {/* Modals */}
      {viewModalOpen && renderViewModal()}
      {editModalOpen && renderEditModal()}
      {addModalOpen && renderAddModal()}
      {deleteModalOpen && renderDeleteModal()}
    </div>
  );
}