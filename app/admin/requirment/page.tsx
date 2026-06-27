"use client";

import { useState } from "react";
import {
  FileCheck,
  ShieldCheck,
  FileText,
  ClipboardList,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  X,
  Save,
  AlertCircle,
  CheckCircle,
  MinusCircle,
  ChevronDown,
  Download,
  Users,
  UserCheck,
  GraduationCap,
  Globe,
  ArrowUpRight,
  Calendar,
  Clock,
  RefreshCw, // ✅ added this missing import
} from "lucide-react";

// ===== MOCK DATA (মিউটেবল) =====
const initialRequirements = [
  {
    id: 1,
    title: "ন্যূনতম একাডেমিক যোগ্যতা",
    description: "প্রার্থীদের পূর্ববর্তী শ্রেণী ন্যূনতম প্রয়োজনীয় জিপিএ সহ সম্পন্ন করতে হবে",
    details: [
      "পূর্ববর্তী পরীক্ষায় ন্যূনতম জিপিএ ৩.০০",
      "পূর্ববর্তী শ্রেণীর সকল বিষয়ে উত্তীর্ণ",
      "একাডেমিক বহিষ্কারের কোনো ইতিহাস নেই",
      "পূর্ববর্তী বিদ্যালয়ের সুপারিশ",
    ],
    icon: "📚",
    color: "green",
    level: "সকল শ্রেণী",
  },
  {
    id: 2,
    title: "বয়সের প্রয়োজনীয়তা",
    description: "বিভিন্ন শ্রেণীতে ভর্তির জন্য বয়সের যোগ্যতার মানদণ্ড",
    details: [
      "১ম শ্রেণী: ৫-৬ বছর",
      "২য় শ্রেণী: ৬-৭ বছর",
      "৩য় শ্রেণী: ৭-৮ বছর",
      "৪র্থ শ্রেণী: ৮-৯ বছর",
      "৫ম শ্রেণী: ৯-১০ বছর",
      "৬ষ্ঠ শ্রেণী: ১০-১১ বছর",
      "৭ম শ্রেণী: ১১-১২ বছর",
      "৮ম শ্রেণী: ১২-১৩ বছর",
      "৯ম শ্রেণী: ১৩-১৪ বছর",
      "১০ম শ্রেণী: ১৪-১৫ বছর",
    ],
    icon: "🎂",
    color: "purple",
    level: "সকল শ্রেণী",
  },
  {
    id: 3,
    title: "ভাষার দক্ষতা",
    description: "বাংলা ও ইংরেজিতে দক্ষতা প্রয়োজন",
    details: [
      "বাংলা পড়া, লেখা ও বলার ক্ষমতা",
      "ইংরেজিতে মৌলিক যোগাযোগ দক্ষতা",
      "উচ্চ শ্রেণীর জন্য: ইংরেজি দক্ষতা পরীক্ষা প্রয়োজন হতে পারে",
      "অতিরিক্ত ভাষা কোর্স উপলব্ধ",
    ],
    icon: "🌍",
    color: "blue",
    level: "সকল শ্রেণী",
  },
  {
    id: 4,
    title: "পূর্ববর্তী বিদ্যালয়ের রেকর্ড",
    description: "পূর্ববর্তী প্রতিষ্ঠান থেকে সম্পূর্ণ একাডেমিক রেকর্ড",
    details: [
      "মূল ট্রান্সক্রিপ্ট/মার্কশীট",
      "বিদ্যালয় ত্যাগের সনদ",
      "চারিত্রিক সনদ",
      "স্থানান্তর সনদ (টিসি)",
      "আচরণ সনদ",
    ],
    icon: "📋",
    color: "orange",
    level: "সকল শ্রেণী",
  },
  {
    id: 5,
    title: "শারীরিক ফিটনেস",
    description: "ভালো শারীরিক ও মানসিক স্বাস্থ্য প্রয়োজন",
    details: [
      "নিবন্ধিত চিকিৎসকের কাছ থেকে শারীরিক ফিটনেস সনদ",
      "টিকা প্রদানের রেকর্ড",
      "দৃষ্টি ও শ্রবণ পরীক্ষার রিপোর্ট",
      "বিশেষ চিকিৎসা শর্তের বিবরণ",
    ],
    icon: "🏥",
    color: "red",
    level: "সকল শ্রেণী",
  },
];

const initialEligibility = [
  {
    id: 1,
    level: "প্রাথমিক স্তর (১ম-৫ম শ্রেণী)",
    criteria: [
      "পূর্ববর্তী শ্রেণী সফলভাবে সম্পন্ন",
      "বয়স: ৫-১০ বছর",
      "মৌলিক সাক্ষরতা ও গণনা দক্ষতা",
      "অভিভাবকের সম্মতি",
      "ক্যাচমেন্ট এলাকায় বসবাস (পছন্দনীয়)",
    ],
    seats: 150,
    status: "খোলা",
  },
  {
    id: 2,
    level: "নিম্ন মাধ্যমিক (৬ষ্ঠ-৮ম শ্রেণী)",
    criteria: [
      "পঞ্চম শ্রেণী ন্যূনতম জিপিএ ৩.০০ সহ উত্তীর্ণ",
      "বয়স: ১০-১৩ বছর",
      "বাংলা, ইংরেজি, গণিতে শক্তিশালী ভিত্তি",
      "ভালো আচরণ রেকর্ড",
      "ভর্তি পরীক্ষায় উত্তীর্ণ",
    ],
    seats: 120,
    status: "খোলা",
  },
  {
    id: 3,
    level: "মাধ্যমিক স্তর (৯ম-১০ম শ্রেণী)",
    criteria: [
      "অষ্টম শ্রেণী ন্যূনতম জিপিএ ৩.৫০ সহ উত্তীর্ণ",
      "বয়স: ১৩-১৫ বছর",
      "মূল বিষয়ে দক্ষতা",
      "পূর্ববর্তী বিদ্যালয়ের সুপারিশ",
      "ভর্তি পরীক্ষায় উত্তীর্ণ",
    ],
    seats: 90,
    status: "সীমিত",
  },
  {
    id: 4,
    level: "উচ্চ মাধ্যমিক (১১শ-১২শ শ্রেণী)",
    criteria: [
      "এসএসসি/সমমান ন্যূনতম জিপিএ ৪.০০ সহ উত্তীর্ণ",
      "বয়স: ১৫-১৭ বছর",
      "শাখাভিত্তিক প্রয়োজনীয়তা",
      "বিষয় সমন্বয়ের যোগ্যতা",
      "ভর্তি পরীক্ষায় উত্তীর্ণ",
    ],
    seats: 60,
    status: "খোলা",
  },
];

const initialDocuments = [
  {
    id: 1,
    category: "একাডেমিক নথিপত্র",
    items: [
      { name: "জন্ম সনদ", required: true, format: "মূল + ২ কপি" },
      { name: "পূর্ববর্তী বিদ্যালয়ের ট্রান্সক্রিপ্ট", required: true, format: "মূল + ২ কপি" },
      { name: "বিদ্যালয় ত্যাগের সনদ", required: true, format: "মূল" },
      { name: "স্থানান্তর সনদ", required: true, format: "মূল" },
      { name: "আচরণ সনদ", required: true, format: "মূল" },
      { name: "চারিত্রিক সনদ", required: true, format: "মূল" },
    ],
    icon: "📄",
  },
  {
    id: 2,
    category: "ব্যক্তিগত নথিপত্র",
    items: [
      { name: "জাতীয় আইডি/পাসপোর্ট (অভিভাবক)", required: true, format: "কপি" },
      { name: "পাসপোর্ট সাইজের ছবি", required: true, format: "৮ কপি" },
      { name: "অভিভাবকের যোগাযোগের তথ্য", required: true, format: "লিখিত" },
      { name: "শারীরিক ফিটনেস সনদ", required: true, format: "মূল" },
      { name: "টিকা প্রদানের রেকর্ড", required: true, format: "কপি" },
    ],
    icon: "🪪",
  },
  {
    id: 3,
    category: "অতিরিক্ত নথিপত্র",
    items: [
      { name: "অতিরিক্ত কার্যক্রমের সনদ", required: false, format: "কপি" },
      { name: "বিশেষ প্রতিভা/প্রতিবন্ধী রিপোর্ট", required: false, format: "মূল" },
      { name: "পূর্ববর্তী বিদ্যালয় থেকে স্থানান্তর (প্রযোজ্য হলে)", required: false, format: "মূল" },
      { name: "আর্থিক সহায়তা আবেদন", required: false, format: "ফর্ম" },
    ],
    icon: "📎",
  },
];

const initialGuidelines = [
  {
    id: 1,
    step: "ধাপ ১: আবেদন জমা",
    description: "সঠিক তথ্য সহ অনলাইন আবেদন ফর্ম পূরণ করুন",
    details: [
      "ভর্তি পোর্টালে যান",
      "অ্যাকাউন্ট তৈরি করুন বা লগইন করুন",
      "ব্যক্তিগত ও একাডেমিক তথ্য পূরণ করুন",
      "প্রয়োজনীয় নথিপত্র আপলোড করুন",
      "আবেদন ফি পরিশোধ করুন",
    ],
    icon: "📝",
    color: "green",
  },
  {
    id: 2,
    step: "ধাপ ২: নথিপত্র যাচাইকরণ",
    description: "জমা দেওয়া সকল নথিপত্র ভর্তি অফিস দ্বারা যাচাই করা হবে",
    details: [
      "নথিপত্রের সত্যতা যাচাই",
      "একাডেমিক রেকর্ড যাচাই",
      "বয়সের যোগ্যতা যাচাই",
      "আবাসিক স্থিতি নিশ্চিতকরণ",
    ],
    icon: "🔍",
    color: "purple",
  },
  {
    id: 3,
    step: "ধাপ ৩: ভর্তি পরীক্ষা",
    description: "যোগ্য প্রার্থীদের জন্য লিখিত পরীক্ষা এবং/অথবা সাক্ষাৎকার",
    details: [
      "বিষয়ভিত্তিক লিখিত পরীক্ষা",
      "ভর্তি কমিটির সাথে সাক্ষাৎকার",
      "অতিরিক্ত কার্যক্রমের মূল্যায়ন",
      "অভিভাবক/প্রহরীর সাক্ষাৎকার",
    ],
    icon: "📝",
    color: "blue",
  },
  {
    id: 4,
    step: "ধাপ ৪: চূড়ান্ত নির্বাচন",
    description: "মেধাভিত্তিক নির্বাচন এবং ভর্তি প্রস্তাব",
    details: [
      "মেধা তালিকা প্রকাশ",
      "ভর্তি প্রস্তাব পত্র",
      "ফি প্রদান এবং নিশ্চিতকরণ",
      "অভিমুখীকরণ কর্মসূচি",
    ],
    icon: "🎉",
    color: "orange",
  },
  {
    id: 5,
    step: "ধাপ ৫: নিবন্ধন",
    description: "নিবন্ধন এবং অভিমুখীকরণ প্রক্রিয়া সম্পন্ন করুন",
    details: [
      "মূল নথিপত্র জমা দিন",
      "টিউশন ফি পরিশোধ করুন",
      "নিবন্ধন সম্পন্ন করুন",
      "শিক্ষার্থী আইডি ও উপকরণ সংগ্রহ করুন",
      "অভিমুখীকরণ অধিবেশনে যোগ দিন",
    ],
    icon: "🎓",
    color: "green",
  },
];

// ===== HELPER FUNCTIONS =====
const getStatusColor = (status: string) => {
  return status === "খোলা" ? "bg-green-100 text-green-700" :
         status === "সীমিত" ? "bg-yellow-100 text-yellow-700" :
         status === "বন্ধ" ? "bg-red-100 text-red-700" :
         "bg-gray-100 text-gray-700";
};

const getColorClass = (color: string) => {
  const colors: Record<string, string> = {
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    red: "bg-red-100 text-red-700 border-red-200",
    emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
    pink: "bg-pink-100 text-pink-700 border-pink-200",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
  };
  return colors[color] || "bg-gray-100 text-gray-700 border-gray-200";
};

// ===== MAIN COMPONENT =====
export default function AdmissionManagement() {
  const [activeTab, setActiveTab] = useState("requirements");
  const [searchTerm, setSearchTerm] = useState("");

  // State for each category
  const [requirements, setRequirements] = useState(initialRequirements);
  const [eligibility, setEligibility] = useState(initialEligibility);
  const [documents, setDocuments] = useState(initialDocuments);
  const [guidelines, setGuidelines] = useState(initialGuidelines);

  // Modal states
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [editFormData, setEditFormData] = useState<any>({});
  const [addFormData, setAddFormData] = useState<any>({});
  const [modalType, setModalType] = useState<"requirement" | "eligibility" | "document" | "guideline">("requirement");

  // Stats
  const totalRequirements = requirements.length;
  const totalEligibility = eligibility.length;
  const totalDocuments = documents.length;
  const totalGuidelines = guidelines.length;

  // Filtered data
  const filteredRequirements = requirements.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.level.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredEligibility = eligibility.filter((item) =>
    item.level.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDocuments = documents.filter((item) =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredGuidelines = guidelines.filter((item) =>
    item.step.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Modal handlers
  const openViewModal = (item: any, type: any) => {
    setSelectedItem(item);
    setModalType(type);
    setViewModalOpen(true);
  };

  const openEditModal = (item: any, type: any) => {
    setSelectedItem(item);
    setModalType(type);
    setEditFormData({ ...item });
    setEditModalOpen(true);
  };

  const openDeleteModal = (item: any, type: any) => {
    setSelectedItem(item);
    setModalType(type);
    setDeleteModalOpen(true);
  };

  const openAddModal = (type: any) => {
    setModalType(type);
    setAddFormData({});
    setAddModalOpen(true);
  };

  // CRUD operations
  const handleEditSave = () => {
    console.log("Saving edit:", editFormData);
    // Update the appropriate state
    if (modalType === "requirement") {
      setRequirements(requirements.map((item) =>
        item.id === editFormData.id ? editFormData : item
      ));
    } else if (modalType === "eligibility") {
      setEligibility(eligibility.map((item) =>
        item.id === editFormData.id ? editFormData : item
      ));
    } else if (modalType === "document") {
      setDocuments(documents.map((item) =>
        item.id === editFormData.id ? editFormData : item
      ));
    } else if (modalType === "guideline") {
      setGuidelines(guidelines.map((item) =>
        item.id === editFormData.id ? editFormData : item
      ));
    }
    setEditModalOpen(false);
    alert("ডেটা আপডেট করা হয়েছে (ডেমো)");
  };

  const handleAddSave = () => {
    console.log("Adding new:", addFormData);
    const newId = Math.max(0, ...(
      modalType === "requirement" ? requirements :
      modalType === "eligibility" ? eligibility :
      modalType === "document" ? documents :
      guidelines
    ).map(item => item.id)) + 1;
    const newItem = { ...addFormData, id: newId };
    if (modalType === "requirement") {
      setRequirements([...requirements, newItem]);
    } else if (modalType === "eligibility") {
      setEligibility([...eligibility, newItem]);
    } else if (modalType === "document") {
      setDocuments([...documents, newItem]);
    } else if (modalType === "guideline") {
      setGuidelines([...guidelines, newItem]);
    }
    setAddModalOpen(false);
    alert("নতুন আইটেম যোগ করা হয়েছে (ডেমো)");
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting:", selectedItem);
    if (modalType === "requirement") {
      setRequirements(requirements.filter((item) => item.id !== selectedItem.id));
    } else if (modalType === "eligibility") {
      setEligibility(eligibility.filter((item) => item.id !== selectedItem.id));
    } else if (modalType === "document") {
      setDocuments(documents.filter((item) => item.id !== selectedItem.id));
    } else if (modalType === "guideline") {
      setGuidelines(guidelines.filter((item) => item.id !== selectedItem.id));
    }
    setDeleteModalOpen(false);
    alert("আইটেম ডিলিট করা হয়েছে (ডেমো)");
  };

  // ===== RENDER FUNCTIONS =====
  const renderRequirements = () => (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="প্রয়োজনীয়তা খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => openAddModal("requirement")}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
        >
          <Plus className="h-4 w-4" /> নতুন প্রয়োজনীয়তা
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRequirements.map((item) => (
          <div key={item.id} className="group bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-200 border border-transparent">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getColorClass(item.color)} inline-block mt-1`}>
                    {item.level}
                  </span>
                </div>
              </div>
              <div className="flex gap-1">
                <button onClick={() => openViewModal(item, "requirement")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110" title="বিস্তারিত"><Eye className="h-4 w-4" /></button>
                <button onClick={() => openEditModal(item, "requirement")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110" title="সম্পাদনা"><Edit className="h-4 w-4" /></button>
                <button onClick={() => openDeleteModal(item, "requirement")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110" title="ডিলিট"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">{item.description}</p>
            <div className="mt-3 flex flex-wrap gap-1">
              {item.details.slice(0, 3).map((d, idx) => (
                <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{d}</span>
              ))}
              {item.details.length > 3 && <span className="text-[10px] text-gray-400">+{item.details.length - 3} আরো</span>}
            </div>
          </div>
        ))}
      </div>
      {filteredRequirements.length === 0 && <div className="text-center py-16"><FileCheck className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">কোন প্রয়োজনীয়তা পাওয়া যায়নি</p></div>}
    </div>
  );

  const renderEligibility = () => (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="যোগ্যতা খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => openAddModal("eligibility")}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
        >
          <Plus className="h-4 w-4" /> নতুন যোগ্যতা
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEligibility.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 border border-transparent">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.level}</h3>
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                {item.status}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">আসন: {item.seats}</p>
            <ul className="mt-3 space-y-1">
              {item.criteria.slice(0, 3).map((c, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                  <ShieldCheck className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
              {item.criteria.length > 3 && <li className="text-xs text-gray-400">+{item.criteria.length - 3} আরো</li>}
            </ul>
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end gap-2">
              <button onClick={() => openViewModal(item, "eligibility")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
              <button onClick={() => openEditModal(item, "eligibility")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
              <button onClick={() => openDeleteModal(item, "eligibility")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
      {filteredEligibility.length === 0 && <div className="text-center py-16"><ShieldCheck className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">কোন যোগ্যতা পাওয়া যায়নি</p></div>}
    </div>
  );

  const renderDocuments = () => (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="নথিপত্র খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => openAddModal("document")}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
        >
          <Plus className="h-4 w-4" /> নতুন নথিপত্র
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDocuments.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 border border-transparent">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{item.icon}</span>
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.category}</h3>
            </div>
            <ul className="space-y-1.5">
              {item.items.slice(0, 4).map((it, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs">
                  {it.required ? (
                    <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <MinusCircle className="h-3.5 w-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="text-gray-700">{it.name}</p>
                    <p className="text-[10px] text-gray-400">{it.format}</p>
                  </div>
                </li>
              ))}
              {item.items.length > 4 && <li className="text-xs text-gray-400">+{item.items.length - 4} আরো</li>}
            </ul>
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end gap-2">
              <button onClick={() => openViewModal(item, "document")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
              <button onClick={() => openEditModal(item, "document")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
              <button onClick={() => openDeleteModal(item, "document")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
            </div>
          </div>
        ))}
      </div>
      {filteredDocuments.length === 0 && <div className="text-center py-16"><FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">কোন নথিপত্র পাওয়া যায়নি</p></div>}
    </div>
  );

  const renderGuidelines = () => (
    <div>
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="নির্দেশিকা খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <button
          onClick={() => openAddModal("guideline")}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 flex items-center gap-2 shadow-lg"
        >
          <Plus className="h-4 w-4" /> নতুন নির্দেশিকা
        </button>
      </div>

      <div className="space-y-4">
        {filteredGuidelines.map((item) => (
          <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 border border-transparent">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{item.step}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                  <ul className="mt-2 space-y-1">
                    {item.details.slice(0, 3).map((d, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <ChevronDown className="h-3 w-3 text-green-500 -rotate-90 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                    {item.details.length > 3 && <li className="text-xs text-gray-400">+{item.details.length - 3} আরো</li>}
                  </ul>
                </div>
              </div>
              <div className="flex gap-1">
                <button onClick={() => openViewModal(item, "guideline")} className="p-1.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-110"><Eye className="h-4 w-4" /></button>
                <button onClick={() => openEditModal(item, "guideline")} className="p-1.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-all duration-300 hover:scale-110"><Edit className="h-4 w-4" /></button>
                <button onClick={() => openDeleteModal(item, "guideline")} className="p-1.5 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all duration-300 hover:scale-110"><Trash2 className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredGuidelines.length === 0 && <div className="text-center py-16"><ClipboardList className="h-12 w-12 text-gray-300 mx-auto mb-4" /><p className="text-gray-500">কোন নির্দেশিকা পাওয়া যায়নি</p></div>}
    </div>
  );

  // ===== MODALS =====
  const renderViewModal = () => {
    if (!selectedItem) return null;
    let content = null;
    if (modalType === "requirement") {
      const item = selectedItem;
      content = (
        <div className="space-y-3">
          <p><strong>শিরোনাম:</strong> {item.title}</p>
          <p><strong>বিবরণ:</strong> {item.description}</p>
          <p><strong>স্তর:</strong> {item.level}</p>
          <p><strong>আইকন:</strong> {item.icon}</p>
          <p><strong>রং:</strong> {item.color}</p>
          <p><strong>বিস্তারিত:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {item.details.map((d: string, idx: number) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      );
    } else if (modalType === "eligibility") {
      const item = selectedItem;
      content = (
        <div className="space-y-3">
          <p><strong>স্তর:</strong> {item.level}</p>
          <p><strong>আসন:</strong> {item.seats}</p>
          <p><strong>স্ট্যাটাস:</strong> {item.status}</p>
          <p><strong>শর্তাবলী:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {item.criteria.map((c: string, idx: number) => (
              <li key={idx}>{c}</li>
            ))}
          </ul>
        </div>
      );
    } else if (modalType === "document") {
      const item = selectedItem;
      content = (
        <div className="space-y-3">
          <p><strong>ক্যাটাগরি:</strong> {item.category}</p>
          <p><strong>আইকন:</strong> {item.icon}</p>
          <p><strong>আইটেমসমূহ:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {item.items.map((it: any, idx: number) => (
              <li key={idx}>{it.name} ({it.format}) {it.required ? "★প্রয়োজনীয়" : "(ঐচ্ছিক)"}</li>
            ))}
          </ul>
        </div>
      );
    } else if (modalType === "guideline") {
      const item = selectedItem;
      content = (
        <div className="space-y-3">
          <p><strong>ধাপ:</strong> {item.step}</p>
          <p><strong>বিবরণ:</strong> {item.description}</p>
          <p><strong>আইকন:</strong> {item.icon}</p>
          <p><strong>রং:</strong> {item.color}</p>
          <p><strong>বিস্তারিত:</strong></p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {item.details.map((d: string, idx: number) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>
      );
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
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
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        setEditFormData({
          ...editFormData,
          [parent]: {
            ...editFormData[parent],
            [child]: value,
          },
        });
      } else {
        setEditFormData({ ...editFormData, [name]: value });
      }
    };

    let fields = null;
    if (modalType === "requirement") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">শিরোনাম</label><input name="title" value={editFormData.title || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">বিবরণ</label><textarea name="description" value={editFormData.description || ""} onChange={handleChange} rows={3} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">স্তর</label><input name="level" value={editFormData.level || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আইকন</label><input name="icon" value={editFormData.icon || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">রং</label><select name="color" value={editFormData.color || "green"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl">
            <option value="green">সবুজ</option><option value="purple">বেগুনি</option><option value="blue">নীল</option>
            <option value="orange">কমলা</option><option value="red">লাল</option><option value="emerald">পান্না</option>
            <option value="pink">গোলাপি</option><option value="indigo">নীলাভ</option>
          </select></div>
          <div><label className="block text-sm font-medium text-gray-700">বিস্তারিত (কমা দিয়ে আলাদা করুন)</label>
            <input name="details" value={editFormData.details ? editFormData.details.join(", ") : ""} onChange={(e) => setEditFormData({ ...editFormData, details: e.target.value.split(",").map(s => s.trim()) })} className="w-full px-3 py-2 border rounded-xl" />
          </div>
        </>
      );
    } else if (modalType === "eligibility") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">স্তর</label><input name="level" value={editFormData.level || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আসন</label><input name="seats" type="number" value={editFormData.seats || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">স্ট্যাটাস</label><select name="status" value={editFormData.status || "খোলা"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl">
            <option value="খোলা">খোলা</option><option value="সীমিত">সীমিত</option><option value="বন্ধ">বন্ধ</option>
          </select></div>
          <div><label className="block text-sm font-medium text-gray-700">শর্তাবলী (কমা দিয়ে আলাদা করুন)</label>
            <input name="criteria" value={editFormData.criteria ? editFormData.criteria.join(", ") : ""} onChange={(e) => setEditFormData({ ...editFormData, criteria: e.target.value.split(",").map(s => s.trim()) })} className="w-full px-3 py-2 border rounded-xl" />
          </div>
        </>
      );
    } else if (modalType === "document") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">ক্যাটাগরি</label><input name="category" value={editFormData.category || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আইকন</label><input name="icon" value={editFormData.icon || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আইটেম (JSON ফরম্যাটে)</label>
            <textarea name="items" value={JSON.stringify(editFormData.items || [], null, 2)} onChange={(e) => {
              try { setEditFormData({ ...editFormData, items: JSON.parse(e.target.value) }); } catch (e) {}
            }} rows={5} className="w-full px-3 py-2 border rounded-xl font-mono text-xs" />
          </div>
        </>
      );
    } else if (modalType === "guideline") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">ধাপ</label><input name="step" value={editFormData.step || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">বিবরণ</label><textarea name="description" value={editFormData.description || ""} onChange={handleChange} rows={3} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আইকন</label><input name="icon" value={editFormData.icon || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">রং</label><select name="color" value={editFormData.color || "green"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl">
            <option value="green">সবুজ</option><option value="purple">বেগুনি</option><option value="blue">নীল</option>
            <option value="orange">কমলা</option><option value="red">লাল</option>
          </select></div>
          <div><label className="block text-sm font-medium text-gray-700">বিস্তারিত (কমা দিয়ে আলাদা করুন)</label>
            <input name="details" value={editFormData.details ? editFormData.details.join(", ") : ""} onChange={(e) => setEditFormData({ ...editFormData, details: e.target.value.split(",").map(s => s.trim()) })} className="w-full px-3 py-2 border rounded-xl" />
          </div>
        </>
      );
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800">সম্পাদনা করুন</h3>
            <button onClick={() => setEditModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors"><X className="h-6 w-6 text-gray-400" /></button>
          </div>
          <div className="space-y-4">{fields}</div>
          <button onClick={handleEditSave} className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"><Save className="h-4 w-4" /> সংরক্ষণ করুন</button>
        </div>
      </div>
    );
  };

  const renderAddModal = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setAddFormData({ ...addFormData, [name]: value });
    };

    let fields = null;
    if (modalType === "requirement") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">শিরোনাম</label><input name="title" value={addFormData.title || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">বিবরণ</label><textarea name="description" value={addFormData.description || ""} onChange={handleChange} rows={3} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">স্তর</label><input name="level" value={addFormData.level || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আইকন (ইমোজি)</label><input name="icon" value={addFormData.icon || "📚"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">রং</label><select name="color" value={addFormData.color || "green"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl">
            <option value="green">সবুজ</option><option value="purple">বেগুনি</option><option value="blue">নীল</option>
            <option value="orange">কমলা</option><option value="red">লাল</option><option value="emerald">পান্না</option>
            <option value="pink">গোলাপি</option><option value="indigo">নীলাভ</option>
          </select></div>
          <div><label className="block text-sm font-medium text-gray-700">বিস্তারিত (কমা দিয়ে আলাদা করুন)</label>
            <input name="details" value={addFormData.details ? addFormData.details.join(", ") : ""} onChange={(e) => setAddFormData({ ...addFormData, details: e.target.value.split(",").map(s => s.trim()) })} className="w-full px-3 py-2 border rounded-xl" />
          </div>
        </>
      );
    } else if (modalType === "eligibility") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">স্তর</label><input name="level" value={addFormData.level || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আসন</label><input name="seats" type="number" value={addFormData.seats || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">স্ট্যাটাস</label><select name="status" value={addFormData.status || "খোলা"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl">
            <option value="খোলা">খোলা</option><option value="সীমিত">সীমিত</option><option value="বন্ধ">বন্ধ</option>
          </select></div>
          <div><label className="block text-sm font-medium text-gray-700">শর্তাবলী (কমা দিয়ে আলাদা করুন)</label>
            <input name="criteria" value={addFormData.criteria ? addFormData.criteria.join(", ") : ""} onChange={(e) => setAddFormData({ ...addFormData, criteria: e.target.value.split(",").map(s => s.trim()) })} className="w-full px-3 py-2 border rounded-xl" />
          </div>
        </>
      );
    } else if (modalType === "document") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">ক্যাটাগরি</label><input name="category" value={addFormData.category || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আইকন</label><input name="icon" value={addFormData.icon || "📄"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আইটেম (JSON ফরম্যাটে)</label>
            <textarea name="items" value={JSON.stringify(addFormData.items || [{name:"", required:true, format:""}], null, 2)} onChange={(e) => {
              try { setAddFormData({ ...addFormData, items: JSON.parse(e.target.value) }); } catch (e) {}
            }} rows={5} className="w-full px-3 py-2 border rounded-xl font-mono text-xs" />
          </div>
        </>
      );
    } else if (modalType === "guideline") {
      fields = (
        <>
          <div><label className="block text-sm font-medium text-gray-700">ধাপ</label><input name="step" value={addFormData.step || ""} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">বিবরণ</label><textarea name="description" value={addFormData.description || ""} onChange={handleChange} rows={3} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">আইকন</label><input name="icon" value={addFormData.icon || "📝"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl" /></div>
          <div><label className="block text-sm font-medium text-gray-700">রং</label><select name="color" value={addFormData.color || "green"} onChange={handleChange} className="w-full px-3 py-2 border rounded-xl">
            <option value="green">সবুজ</option><option value="purple">বেগুনি</option><option value="blue">নীল</option>
            <option value="orange">কমলা</option><option value="red">লাল</option>
          </select></div>
          <div><label className="block text-sm font-medium text-gray-700">বিস্তারিত (কমা দিয়ে আলাদা করুন)</label>
            <input name="details" value={addFormData.details ? addFormData.details.join(", ") : ""} onChange={(e) => setAddFormData({ ...addFormData, details: e.target.value.split(",").map(s => s.trim()) })} className="w-full px-3 py-2 border rounded-xl" />
          </div>
        </>
      );
    }
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-800">নতুন যোগ করুন</h3>
            <button onClick={() => setAddModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-lg transition-colors"><X className="h-6 w-6 text-gray-400" /></button>
          </div>
          <div className="space-y-4">{fields}</div>
          <button onClick={handleAddSave} className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"><Plus className="h-4 w-4" /> যোগ করুন</button>
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
          <p className="text-gray-600 mb-6">আপনি কি <span className="font-semibold text-slate-800">{selectedItem.title || selectedItem.level || selectedItem.step || selectedItem.category}</span> ডিলিট করতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।</p>
          <div className="flex gap-3">
            <button onClick={() => setDeleteModalOpen(false)} className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors">বাতিল</button>
            <button onClick={handleDeleteConfirm} className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-xl font-medium hover:bg-red-700 transition-colors">ডিলিট</button>
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
              <FileCheck className="h-7 w-7 text-green-600" />
              ভর্তি ব্যবস্থাপনা
            </h1>
            <p className="text-gray-500 mt-1">ভর্তি সংক্রান্ত প্রয়োজনীয়তা, যোগ্যতা, নথিপত্র ও নির্দেশিকা পরিচালনা করুন</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2.5 bg-white rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
              <Download className="h-5 w-5 text-gray-600" />
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
            <div><p className="text-sm text-gray-500 font-medium">প্রয়োজনীয়তা</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalRequirements}</p></div>
            <div className="p-3 bg-blue-50 rounded-xl"><FileCheck className="h-6 w-6 text-blue-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">যোগ্যতা</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalEligibility}</p></div>
            <div className="p-3 bg-green-50 rounded-xl"><ShieldCheck className="h-6 w-6 text-green-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">নথিপত্র</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalDocuments}</p></div>
            <div className="p-3 bg-purple-50 rounded-xl"><FileText className="h-6 w-6 text-purple-600" /></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-500 font-medium">নির্দেশিকা</p><p className="text-2xl font-bold text-slate-800 mt-1">{totalGuidelines}</p></div>
            <div className="p-3 bg-orange-50 rounded-xl"><ClipboardList className="h-6 w-6 text-orange-600" /></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-4 mb-6">
        {[
          { id: "requirements", label: "প্রয়োজনীয়তা", icon: FileCheck },
          { id: "eligibility", label: "যোগ্যতা", icon: ShieldCheck },
          { id: "documents", label: "নথিপত্র", icon: FileText },
          { id: "guidelines", label: "নির্দেশিকা", icon: ClipboardList },
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

      {/* Content */}
      {activeTab === "requirements" && renderRequirements()}
      {activeTab === "eligibility" && renderEligibility()}
      {activeTab === "documents" && renderDocuments()}
      {activeTab === "guidelines" && renderGuidelines()}

      {/* Modals */}
      {viewModalOpen && renderViewModal()}
      {editModalOpen && renderEditModal()}
      {addModalOpen && renderAddModal()}
      {deleteModalOpen && renderDeleteModal()}
    </div>
  );
}