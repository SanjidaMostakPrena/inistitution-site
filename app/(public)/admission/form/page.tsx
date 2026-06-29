
// "use client";

// import Link from "next/link";
// import { useState, useRef, useEffect } from "react";
// import {
//   ArrowLeft,
//   User,
//   Calendar,
//   School,
//   Building2,
//   Users,
//   Phone,
//   MapPin,
//   Upload,
//   Camera,
//   CheckCircle,
//   AlertCircle,
//   ChevronRight,
//   Mail,
//   FileText,
//   UserCheck,
//   Clock,
//   Award,
//   BookOpen,
//   GraduationCap,
//   Sparkles,
//   Shield,
//   Star,
//   Heart,
//   X,
//   Image as ImageIcon,
// } from "lucide-react";

// export default function AdmissionFormPage() {
//   const [formData, setFormData] = useState({
//     studentName: "",
//     dateOfBirth: "",
//     classApplying: "",
//     previousInstitution: "",
//     fatherName: "",
//     motherName: "",
//     guardianContact: "",
//     email: "",
//     address: "",
//     photograph: null as File | null,
//   });

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [touched, setTouched] = useState<Record<string, boolean>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [currentStep, setCurrentStep] = useState(1);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const classes = [
//     "১ম শ্রেণী",
//     "২য় শ্রেণী",
//     "৩য় শ্রেণী",
//     "৪র্থ শ্রেণী",
//     "৫ম শ্রেণী",
//     "৬ষ্ঠ শ্রেণী",
//     "৭ম শ্রেণী",
//     "৮ম শ্রেণী",
//     "৯ম শ্রেণী",
//     "১০ম শ্রেণী",
//     "১১শ শ্রেণী (বিজ্ঞান)",
//     "১১শ শ্রেণী (বাণিজ্য)",
//     "১১শ শ্রেণী (কলা)",
//     "১২শ শ্রেণী (বিজ্ঞান)",
//     "১২শ শ্রেণী (বাণিজ্য)",
//     "১২শ শ্রেণী (কলা)",
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     if (errors[name]) {
//       setErrors((prev) => {
//         const newErrors = { ...prev };
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     validateField(name);
//   };

//   const validateField = (fieldName: string) => {
//     const newErrors: Record<string, string> = {};
    
//     switch (fieldName) {
//       case "studentName":
//         if (!formData.studentName.trim()) {
//           newErrors.studentName = "শিক্ষার্থীর নাম প্রয়োজন";
//         }
//         break;
//       case "dateOfBirth":
//         if (!formData.dateOfBirth) {
//           newErrors.dateOfBirth = "জন্ম তারিখ প্রয়োজন";
//         }
//         break;
//       case "classApplying":
//         if (!formData.classApplying) {
//           newErrors.classApplying = "দয়া করে একটি শ্রেণী নির্বাচন করুন";
//         }
//         break;
//       case "fatherName":
//         if (!formData.fatherName.trim()) {
//           newErrors.fatherName = "পিতার নাম প্রয়োজন";
//         }
//         break;
//       case "motherName":
//         if (!formData.motherName.trim()) {
//           newErrors.motherName = "মাতার নাম প্রয়োজন";
//         }
//         break;
//       case "guardianContact":
//         if (!formData.guardianContact.trim()) {
//           newErrors.guardianContact = "যোগাযোগ নম্বর প্রয়োজন";
//         } else if (!/^[0-9+\-\s()]{11,15}$/.test(formData.guardianContact)) {
//           newErrors.guardianContact = "দয়া করে একটি বৈধ ফোন নম্বর দিন (১১-১৫ সংখ্যা)";
//         }
//         break;
//       case "email":
//         if (!formData.email.trim()) {
//           newErrors.email = "ইমেইল ঠিকানা প্রয়োজন";
//         } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//           newErrors.email = "দয়া করে একটি বৈধ ইমেইল ঠিকানা দিন";
//         }
//         break;
//       case "address":
//         if (!formData.address.trim()) {
//           newErrors.address = "ঠিকানা প্রয়োজন";
//         }
//         break;
//       case "photograph":
//         if (!formData.photograph) {
//           newErrors.photograph = "দয়া করে একটি ছবি আপলোড করুন";
//         }
//         break;
//     }

//     setErrors((prev) => ({ ...prev, ...newErrors }));
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateForm = () => {
//     const fields = ["studentName", "dateOfBirth", "classApplying", "fatherName", "motherName", "guardianContact", "email", "address", "photograph"];
//     let isValid = true;
//     const newErrors: Record<string, string> = {};
    
//     fields.forEach((field) => {
//       setTouched((prev) => ({ ...prev, [field]: true }));
      
//       switch (field) {
//         case "studentName":
//           if (!formData.studentName.trim()) {
//             newErrors.studentName = "শিক্ষার্থীর নাম প্রয়োজন";
//             isValid = false;
//           }
//           break;
//         case "dateOfBirth":
//           if (!formData.dateOfBirth) {
//             newErrors.dateOfBirth = "জন্ম তারিখ প্রয়োজন";
//             isValid = false;
//           }
//           break;
//         case "classApplying":
//           if (!formData.classApplying) {
//             newErrors.classApplying = "দয়া করে একটি শ্রেণী নির্বাচন করুন";
//             isValid = false;
//           }
//           break;
//         case "fatherName":
//           if (!formData.fatherName.trim()) {
//             newErrors.fatherName = "পিতার নাম প্রয়োজন";
//             isValid = false;
//           }
//           break;
//         case "motherName":
//           if (!formData.motherName.trim()) {
//             newErrors.motherName = "মাতার নাম প্রয়োজন";
//             isValid = false;
//           }
//           break;
//         case "guardianContact":
//           if (!formData.guardianContact.trim()) {
//             newErrors.guardianContact = "যোগাযোগ নম্বর প্রয়োজন";
//             isValid = false;
//           } else if (!/^[0-9+\-\s()]{11,15}$/.test(formData.guardianContact)) {
//             newErrors.guardianContact = "দয়া করে একটি বৈধ ফোন নম্বর দিন";
//             isValid = false;
//           }
//           break;
//         case "email":
//           if (!formData.email.trim()) {
//             newErrors.email = "ইমেইল ঠিকানা প্রয়োজন";
//             isValid = false;
//           } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//             newErrors.email = "দয়া করে একটি বৈধ ইমেইল ঠিকানা দিন";
//             isValid = false;
//           }
//           break;
//         case "address":
//           if (!formData.address.trim()) {
//             newErrors.address = "ঠিকানা প্রয়োজন";
//             isValid = false;
//           }
//           break;
//         case "photograph":
//           if (!formData.photograph) {
//             newErrors.photograph = "দয়া করে একটি ছবি আপলোড করুন";
//             isValid = false;
//           }
//           break;
//       }
//     });

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
//       if (!validTypes.includes(file.type)) {
//         setErrors((prev) => ({ ...prev, photograph: "দয়া করে একটি বৈধ ছবি আপলোড করুন (JPEG, PNG, GIF, WEBP)" }));
//         return;
//       }
//       if (file.size > 5 * 1024 * 1024) {
//         setErrors((prev) => ({ ...prev, photograph: "ফাইলের সাইজ ৫এমবি এর কম হওয়া উচিত" }));
//         return;
//       }
//       setFormData((prev) => ({ ...prev, photograph: file }));
//       setPreviewUrl(URL.createObjectURL(file));
//       setTouched((prev) => ({ ...prev, photograph: true }));
//       if (errors.photograph) {
//         const newErrors = { ...errors };
//         delete newErrors.photograph;
//         setErrors(newErrors);
//       }
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setIsSubmitting(true);
//       setTimeout(() => {
//         setIsSubmitting(false);
//         setIsSubmitted(true);
//         setFormData({
//           studentName: "",
//           dateOfBirth: "",
//           classApplying: "",
//           previousInstitution: "",
//           fatherName: "",
//           motherName: "",
//           guardianContact: "",
//           email: "",
//           address: "",
//           photograph: null,
//         });
//         setPreviewUrl(null);
//         setTouched({});
//         setErrors({});
//         setCurrentStep(1);
//         if (fileInputRef.current) {
//           fileInputRef.current.value = "";
//         }
//       }, 2000);
//     }
//   };

//   const isFieldValid = (fieldName: string) => {
//     return touched[fieldName] && !errors[fieldName] && formData[fieldName as keyof typeof formData];
//   };

//   const isFieldInvalid = (fieldName: string) => {
//     return touched[fieldName] && errors[fieldName];
//   };

//   if (isSubmitted) {
//     return (
//       <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
//         <div className="container mx-auto px-4 py-12 md:py-20">
//           <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 text-center animate-fade-in-up">
//             <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
//               <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
//             </div>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
//               আবেদন জমা দেওয়া হয়েছে! 🎉
//             </h1>
//             <p className="text-gray-600 text-base sm:text-lg mb-2">
//               আমাদের প্রতিষ্ঠানে আবেদন করার জন্য ধন্যবাদ।
//             </p>
//             <p className="text-gray-500 mb-6 text-sm sm:text-base">
//               আপনার আবেদন পেয়েছি। আমাদের ভর্তি দল এটি পর্যালোচনা করবে এবং শীঘ্রই আপনার সাথে যোগাযোগ করবে।
//             </p>
//             <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-left">
//               <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
//                 <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
//                 পরবর্তী পদক্ষেপসমূহ:
//               </h3>
//               <ul className="space-y-2 text-xs sm:text-sm text-green-700">
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
//                   নিশ্চিতকরণ ইমেইলের জন্য অপেক্ষা করুন
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
//                   ভর্তি পরীক্ষার জন্য প্রস্তুত হন (যদি প্রযোজ্য হয়)
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
//                   যাচাইয়ের জন্য আপনার নথিপত্র প্রস্তুত রাখুন
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
//                   আরও নির্দেশনার জন্য আপনার ইমেইল চেক করুন
//                 </li>
//               </ul>
//             </div>
//             <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
//               <Link
//                 href="/"
//                 className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
//               >
//                 হোমে যান
//               </Link>
//               <button
//                 onClick={() => setIsSubmitted(false)}
//                 className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
//               >
//                 আরেকটি আবেদন জমা দিন
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
//       {/* হিরো সেকশন */}
//       <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-12 md:py-16">
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant" />
//         <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        
//         <div className="container mx-auto px-4 relative z-10">
//           <Link href="/admission/requirment" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group">
//             <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
//             একাডেমিক তথ্যে ফিরুন
//           </Link>
//           <div className="max-w-3xl">
//             <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 hover:bg-white/30 transition-all duration-300 hover:scale-105">
//               <FileText className="h-3 w-3 sm:h-4 sm:w-4 animate-spin-slow" />
//               অনলাইন ভর্তি ফর্ম
//             </div>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 animate-fade-in-up">
//               আপনার <span className="text-yellow-300">ভর্তি</span> যাত্রা শুরু করুন
//             </h1>
//             <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
//               ভর্তির জন্য আবেদন করতে নিচের ফর্মটি পূরণ করুন। <span className="text-red-300">*</span> চিহ্নিত ক্ষেত্রগুলো আবশ্যক।
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ফর্ম সেকশন */}
//       <section className="py-8 sm:py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             {/* অগ্রগতি সূচক */}
//             <div className="mb-6 sm:mb-8">
//               <div className="flex items-center justify-between max-w-xs sm:max-w-md mx-auto">
//                 <div className="flex flex-col items-center">
//                   <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
//                     currentStep >= 1 ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200" : "bg-gray-200 text-gray-500"
//                   }`}>
//                     ১
//                   </div>
//                   <span className="text-[10px] sm:text-xs text-gray-500 mt-1">ব্যক্তিগত তথ্য</span>
//                 </div>
//                 <div className="flex-1 h-0.5 bg-gray-200 mx-1 sm:mx-2">
//                   <div className={`h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500 ${
//                     currentStep >= 2 ? "w-full" : "w-0"
//                   }`} />
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
//                     currentStep >= 2 ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200" : "bg-gray-200 text-gray-500"
//                   }`}>
//                     ২
//                   </div>
//                   <span className="text-[10px] sm:text-xs text-gray-500 mt-1">অভিভাবক তথ্য</span>
//                 </div>
//                 <div className="flex-1 h-0.5 bg-gray-200 mx-1 sm:mx-2">
//                   <div className={`h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500 ${
//                     currentStep >= 3 ? "w-full" : "w-0"
//                   }`} />
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
//                     currentStep >= 3 ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200" : "bg-gray-200 text-gray-500"
//                   }`}>
//                     ৩
//                   </div>
//                   <span className="text-[10px] sm:text-xs text-gray-500 mt-1">নথিপত্র</span>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
//               <div className="bg-gradient-to-r from-green-50 to-red-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
//                 <h2 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
//                   <User className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
//                   ভর্তি আবেদন ফর্ম
//                 </h2>
//                 <p className="text-xs sm:text-sm text-gray-500">সব আবশ্যক ক্ষেত্র সাবধানে পূরণ করুন</p>
//               </div>

//               <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8" noValidate>
//                 {/* শিক্ষার্থীর তথ্য - ধাপ ১ */}
//                 <div className="mb-6 sm:mb-8">
//                   <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
//                     <User className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
//                     শিক্ষার্থীর তথ্য
//                   </h3>
//                   <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
//                     <div>
//                       <label htmlFor="studentName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                         শিক্ষার্থীর নাম <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <User className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
//                           isFieldValid("studentName") ? "text-green-500" : isFieldInvalid("studentName") ? "text-red-500" : "text-gray-400"
//                         }`} />
//                         <input
//                           id="studentName"
//                           type="text"
//                           name="studentName"
//                           value={formData.studentName}
//                           onChange={handleInputChange}
//                           onBlur={handleBlur}
//                           placeholder="শিক্ষার্থীর পূর্ণ নাম"
//                           aria-required="true"
//                           aria-invalid={!!errors.studentName}
//                           aria-describedby={errors.studentName ? "studentName-error" : undefined}
//                           className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
//                             isFieldValid("studentName")
//                               ? "border-green-500 focus:ring-green-200"
//                               : isFieldInvalid("studentName")
//                               ? "border-red-500 focus:ring-red-200"
//                               : "border-gray-200 focus:ring-green-200 focus:border-green-500"
//                           }`}
//                         />
//                       </div>
//                       {errors.studentName && (
//                         <p id="studentName-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
//                           <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
//                           {errors.studentName}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="dateOfBirth" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                         জন্ম তারিখ <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <Calendar className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
//                           isFieldValid("dateOfBirth") ? "text-green-500" : isFieldInvalid("dateOfBirth") ? "text-red-500" : "text-gray-400"
//                         }`} />
//                         <input
//                           id="dateOfBirth"
//                           type="date"
//                           name="dateOfBirth"
//                           value={formData.dateOfBirth}
//                           onChange={handleInputChange}
//                           onBlur={handleBlur}
//                           aria-required="true"
//                           aria-invalid={!!errors.dateOfBirth}
//                           aria-describedby={errors.dateOfBirth ? "dateOfBirth-error" : undefined}
//                           className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
//                             isFieldValid("dateOfBirth")
//                               ? "border-green-500 focus:ring-green-200"
//                               : isFieldInvalid("dateOfBirth")
//                               ? "border-red-500 focus:ring-red-200"
//                               : "border-gray-200 focus:ring-green-200 focus:border-green-500"
//                           }`}
//                         />
//                       </div>
//                       {errors.dateOfBirth && (
//                         <p id="dateOfBirth-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
//                           <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
//                           {errors.dateOfBirth}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="classApplying" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                         যে শ্রেণীতে আবেদন <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <School className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
//                           isFieldValid("classApplying") ? "text-green-500" : isFieldInvalid("classApplying") ? "text-red-500" : "text-gray-400"
//                         }`} />
//                         <select
//                           id="classApplying"
//                           name="classApplying"
//                           value={formData.classApplying}
//                           onChange={handleInputChange}
//                           onBlur={handleBlur}
//                           aria-required="true"
//                           aria-invalid={!!errors.classApplying}
//                           aria-describedby={errors.classApplying ? "classApplying-error" : undefined}
//                           className={`w-full pl-9 sm:pl-10 pr-8 sm:pr-10 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 appearance-none ${
//                             isFieldValid("classApplying")
//                               ? "border-green-500 focus:ring-green-200"
//                               : isFieldInvalid("classApplying")
//                               ? "border-red-500 focus:ring-red-200"
//                               : "border-gray-200 focus:ring-green-200 focus:border-green-500"
//                           }`}
//                         >
//                           <option value="">শ্রেণী নির্বাচন করুন</option>
//                           {classes.map((cls) => (
//                             <option key={cls} value={cls}>
//                               {cls}
//                             </option>
//                           ))}
//                         </select>
//                       </div>
//                       {errors.classApplying && (
//                         <p id="classApplying-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
//                           <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
//                           {errors.classApplying}
//                         </p>
//                       )}
//                     </div>

//                     <div>
//                       <label htmlFor="previousInstitution" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                         পূর্ববর্তী প্রতিষ্ঠান
//                       </label>
//                       <div className="relative">
//                         <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
//                         <input
//                           id="previousInstitution"
//                           type="text"
//                           name="previousInstitution"
//                           value={formData.previousInstitution}
//                           onChange={handleInputChange}
//                           onBlur={handleBlur}
//                           placeholder="পূর্ববর্তী বিদ্যালয়/কলেজের নাম"
//                           className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 transition-all duration-300"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-4 flex justify-end">
//                     <button
//                       type="button"
//                       onClick={() => {
//                         if (validateField("studentName") && validateField("dateOfBirth") && validateField("classApplying")) {
//                           setCurrentStep(2);
//                         }
//                       }}
//                       className="inline-flex items-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
//                     >
//                       পরবর্তী ধাপ <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* অভিভাবক/প্রহরীর তথ্য - ধাপ ২ */}
//                 {currentStep >= 2 && (
//                   <div className="mb-6 sm:mb-8 animate-fade-in-up">
//                     <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
//                       <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
//                       অভিভাবক/প্রহরীর তথ্য
//                     </h3>
//                     <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
//                       <div>
//                         <label htmlFor="fatherName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                           পিতার নাম <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           id="fatherName"
//                           type="text"
//                           name="fatherName"
//                           value={formData.fatherName}
//                           onChange={handleInputChange}
//                           onBlur={handleBlur}
//                           placeholder="পিতার পূর্ণ নাম"
//                           aria-required="true"
//                           aria-invalid={!!errors.fatherName}
//                           aria-describedby={errors.fatherName ? "fatherName-error" : undefined}
//                           className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
//                             isFieldValid("fatherName")
//                               ? "border-green-500 focus:ring-green-200"
//                               : isFieldInvalid("fatherName")
//                               ? "border-red-500 focus:ring-red-200"
//                               : "border-gray-200 focus:ring-green-200 focus:border-green-500"
//                           }`}
//                         />
//                         {errors.fatherName && (
//                           <p id="fatherName-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
//                             <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
//                             {errors.fatherName}
//                           </p>
//                         )}
//                       </div>

//                       <div>
//                         <label htmlFor="motherName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                           মাতার নাম <span className="text-red-500">*</span>
//                         </label>
//                         <input
//                           id="motherName"
//                           type="text"
//                           name="motherName"
//                           value={formData.motherName}
//                           onChange={handleInputChange}
//                           onBlur={handleBlur}
//                           placeholder="মাতার পূর্ণ নাম"
//                           aria-required="true"
//                           aria-invalid={!!errors.motherName}
//                           aria-describedby={errors.motherName ? "motherName-error" : undefined}
//                           className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
//                             isFieldValid("motherName")
//                               ? "border-green-500 focus:ring-green-200"
//                               : isFieldInvalid("motherName")
//                               ? "border-red-500 focus:ring-red-200"
//                               : "border-gray-200 focus:ring-green-200 focus:border-green-500"
//                           }`}
//                         />
//                         {errors.motherName && (
//                           <p id="motherName-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
//                             <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
//                             {errors.motherName}
//                           </p>
//                         )}
//                       </div>

//                       <div>
//                         <label htmlFor="guardianContact" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                           অভিভাবকের যোগাযোগ <span className="text-red-500">*</span>
//                         </label>
//                         <div className="relative">
//                           <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
//                             isFieldValid("guardianContact") ? "text-green-500" : isFieldInvalid("guardianContact") ? "text-red-500" : "text-gray-400"
//                           }`} />
//                           <input
//                             id="guardianContact"
//                             type="tel"
//                             name="guardianContact"
//                             value={formData.guardianContact}
//                             onChange={handleInputChange}
//                             onBlur={handleBlur}
//                             placeholder="+৮৮০ ১২৩৪-৫৬৭৮৯০"
//                             aria-required="true"
//                             aria-invalid={!!errors.guardianContact}
//                             aria-describedby={errors.guardianContact ? "guardianContact-error" : undefined}
//                             className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
//                               isFieldValid("guardianContact")
//                                 ? "border-green-500 focus:ring-green-200"
//                                 : isFieldInvalid("guardianContact")
//                                 ? "border-red-500 focus:ring-red-200"
//                                 : "border-gray-200 focus:ring-green-200 focus:border-green-500"
//                             }`}
//                           />
//                         </div>
//                         {errors.guardianContact && (
//                           <p id="guardianContact-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
//                             <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
//                             {errors.guardianContact}
//                           </p>
//                         )}
//                       </div>

//                       <div>
//                         <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                           ইমেইল ঠিকানা <span className="text-red-500">*</span>
//                         </label>
//                         <div className="relative">
//                           <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
//                             isFieldValid("email") ? "text-green-500" : isFieldInvalid("email") ? "text-red-500" : "text-gray-400"
//                           }`} />
//                           <input
//                             id="email"
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleInputChange}
//                             onBlur={handleBlur}
//                             placeholder="example@email.com"
//                             aria-required="true"
//                             aria-invalid={!!errors.email}
//                             aria-describedby={errors.email ? "email-error" : undefined}
//                             className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
//                               isFieldValid("email")
//                                 ? "border-green-500 focus:ring-green-200"
//                                 : isFieldInvalid("email")
//                                 ? "border-red-500 focus:ring-red-200"
//                                 : "border-gray-200 focus:ring-green-200 focus:border-green-500"
//                             }`}
//                           />
//                         </div>
//                         {errors.email && (
//                           <p id="email-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
//                             <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
//                             {errors.email}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <div className="mt-4">
//                       <label htmlFor="address" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                         ঠিকানা <span className="text-red-500">*</span>
//                       </label>
//                       <div className="relative">
//                         <MapPin className={`absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 ${
//                           isFieldValid("address") ? "text-green-500" : isFieldInvalid("address") ? "text-red-500" : "text-gray-400"
//                         }`} />
//                         <textarea
//                           id="address"
//                           name="address"
//                           value={formData.address}
//                           onChange={handleInputChange}
//                           onBlur={handleBlur}
//                           rows={3}
//                           placeholder="বাড়ি নং, রাস্তা, এলাকা, শহর, জেলা"
//                           aria-required="true"
//                           aria-invalid={!!errors.address}
//                           aria-describedby={errors.address ? "address-error" : undefined}
//                           className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
//                             isFieldValid("address")
//                               ? "border-green-500 focus:ring-green-200"
//                               : isFieldInvalid("address")
//                               ? "border-red-500 focus:ring-red-200"
//                               : "border-gray-200 focus:ring-green-200 focus:border-green-500"
//                           }`}
//                         />
//                       </div>
//                       {errors.address && (
//                         <p id="address-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
//                           <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
//                           {errors.address}
//                         </p>
//                       )}
//                     </div>

//                     <div className="mt-4 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//                       <button
//                         type="button"
//                         onClick={() => setCurrentStep(1)}
//                         className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
//                       >
//                         পূর্ববর্তী ধাপ
//                       </button>
//                       <button
//                         type="button"
//                         onClick={() => {
//                           if (validateField("fatherName") && validateField("motherName") && validateField("guardianContact") && validateField("email") && validateField("address")) {
//                             setCurrentStep(3);
//                           }
//                         }}
//                         className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
//                       >
//                         পরবর্তী ধাপ <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* ছবি আপলোড - ধাপ ৩ */}
//                 {currentStep >= 3 && (
//                   <div className="mb-6 sm:mb-8 animate-fade-in-up">
//                     <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
//                       <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
//                       ছবি আপলোড
//                     </h3>
//                     <div>
//                       <label htmlFor="photograph" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
//                         সাম্প্রতিক ছবি <span className="text-red-500">*</span>
//                       </label>
//                       <div
//                         className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer hover:bg-gray-50 transition-all duration-300 ${
//                           errors.photograph && touched.photograph
//                             ? "border-red-500 bg-red-50"
//                             : previewUrl
//                             ? "border-green-500 bg-green-50"
//                             : "border-gray-300 hover:border-green-400"
//                         }`}
//                         onClick={() => fileInputRef.current?.click()}
//                         role="button"
//                         tabIndex={0}
//                         onKeyDown={(e) => {
//                           if (e.key === "Enter" || e.key === " ") {
//                             e.preventDefault();
//                             fileInputRef.current?.click();
//                           }
//                         }}
//                       >
//                         <input
//                           id="photograph"
//                           type="file"
//                           ref={fileInputRef}
//                           accept="image/*"
//                           onChange={handleFileChange}
//                           className="hidden"
//                           aria-required="true"
//                           aria-invalid={!!errors.photograph}
//                           aria-describedby={errors.photograph ? "photograph-error" : undefined}
//                         />
//                         {previewUrl ? (
//                           <div className="flex flex-col items-center">
//                             <img
//                               src={previewUrl}
//                               alt="ছবির প্রিভিউ"
//                               className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-green-400 shadow-lg"
//                             />
//                             <p className="mt-3 text-xs sm:text-sm text-green-600 font-medium">
//                               ✓ ছবি সফলভাবে আপলোড হয়েছে
//                             </p>
//                             <button
//                               type="button"
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 setPreviewUrl(null);
//                                 setFormData((prev) => ({ ...prev, photograph: null }));
//                                 if (fileInputRef.current) {
//                                   fileInputRef.current.value = "";
//                                 }
//                                 setErrors((prev) => {
//                                   const newErrors = { ...prev };
//                                   delete newErrors.photograph;
//                                   return newErrors;
//                                 });
//                               }}
//                               className="mt-2 text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
//                             >
//                               <X className="h-3 w-3 sm:h-4 sm:w-4" />
//                               ছবি সরান
//                             </button>
//                           </div>
//                         ) : (
//                           <div className="flex flex-col items-center">
//                             <Upload className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mb-3" />
//                             <p className="text-sm sm:text-base text-gray-600 font-medium">ছবি আপলোড করতে ক্লিক করুন</p>
//                             <p className="text-xs sm:text-sm text-gray-400 mt-1">
//                               JPEG, PNG, GIF, WEBP (সর্বোচ্চ ৫এমবি)
//                             </p>
//                           </div>
//                         )}
//                       </div>
//                       {errors.photograph && (
//                         <p id="photograph-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
//                           <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
//                           {errors.photograph}
//                         </p>
//                       )}
//                     </div>

//                     <div className="mt-4">
//                       <button
//                         type="button"
//                         onClick={() => setCurrentStep(2)}
//                         className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
//                       >
//                         পূর্ববর্তী ধাপ
//                       </button>
//                     </div>
//                   </div>
//                 )}

//                 {/* জমা বাটন */}
//                 {currentStep >= 3 && (
//                   <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-gray-100">
//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className={`flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibong hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base ${
//                         isSubmitting ? "opacity-70 cursor-not-allowed" : ""
//                       }`}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                           জমা দেওয়া হচ্ছে...
//                         </>
//                       ) : (
//                         <>
//                           <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
//                           আবেদন জমা দিন
//                         </>
//                       )}
//                     </button>
//                     <Link
//                       href="/admission"
//                       className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
//                     >
//                       বাতিল করুন
//                     </Link>
//                   </div>
//                 )}

//                 <p className="mt-4 text-[10px] sm:text-xs text-gray-500 text-center">
//                   <Shield className="h-3 w-3 inline mr-1" />
//                   আপনার তথ্য নিরাপদ এবং শুধুমাত্র ভর্তির উদ্দেশ্যে ব্যবহার করা হবে।
//                 </p>
//               </form>
//             </div>

//             {/* ভর্তি প্রয়োজনীয়তা */}
//             <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//               <div className="bg-green-50 p-3 sm:p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
//                   <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
//                 </div>
//                 <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">প্রয়োজনীয় নথিপত্র</h4>
//                 <p className="text-[10px] sm:text-xs text-gray-500 mt-1">জন্ম সনদ, টিসি, ছবি</p>
//               </div>
//               <div className="bg-blue-50 p-3 sm:p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
//                   <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />
//                 </div>
//                 <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">প্রক্রিয়াকরণ সময়</h4>
//                 <p className="text-[10px] sm:text-xs text-gray-500 mt-1">৩-৫ কার্যদিবস</p>
//               </div>
//               <div className="bg-purple-50 p-3 sm:p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
//                   <Award className="h-5 w-5 sm:h-6 sm:w-6 text-purple-700" />
//                 </div>
//                 <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">ভর্তি পরীক্ষা</h4>
//                 <p className="text-[10px] sm:text-xs text-gray-500 mt-1">পরে জানানো হবে</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

     
//     </main>
//   );
// }
// app/admission/form/page.tsx (অথবা যেখানে ফর্ম আছে)
"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  User,
  Calendar,
  School,
  Building2,
  Users,
  Phone,
  MapPin,
  Upload,
  Camera,
  CheckCircle,
  AlertCircle,
  ChevronRight,
  Mail,
  FileText,
  UserCheck,
  Clock,
  Award,
  BookOpen,
  GraduationCap,
  Sparkles,
  Shield,
  Star,
  Heart,
  X,
  Image as ImageIcon,
} from "lucide-react";
import { useApplications } from "@/app/context/ApplicationContext"; // ← কনটেক্সট হুক ইম্পোর্ট

export default function AdmissionFormPage() {
  // কনটেক্সট থেকে addApplication নিন
  const { addApplication } = useApplications();

  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    classApplying: "",
    previousInstitution: "",
    fatherName: "",
    motherName: "",
    guardianContact: "",
    email: "",
    address: "",
    photograph: null as File | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const classes = [
    "১ম শ্রেণী",
    "২য় শ্রেণী",
    "৩য় শ্রেণী",
    "৪র্থ শ্রেণী",
    "৫ম শ্রেণী",
    "৬ষ্ঠ শ্রেণী",
    "৭ম শ্রেণী",
    "৮ম শ্রেণী",
    "৯ম শ্রেণী",
    "১০ম শ্রেণী",
    "১১শ শ্রেণী (বিজ্ঞান)",
    "১১শ শ্রেণী (বাণিজ্য)",
    "১১শ শ্রেণী (কলা)",
    "১২শ শ্রেণী (বিজ্ঞান)",
    "১২শ শ্রেণী (বাণিজ্য)",
    "১২শ শ্রেণী (কলা)",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name);
  };

  const validateField = (fieldName: string) => {
    const newErrors: Record<string, string> = {};
    
    switch (fieldName) {
      case "studentName":
        if (!formData.studentName.trim()) {
          newErrors.studentName = "শিক্ষার্থীর নাম প্রয়োজন";
        }
        break;
      case "dateOfBirth":
        if (!formData.dateOfBirth) {
          newErrors.dateOfBirth = "জন্ম তারিখ প্রয়োজন";
        }
        break;
      case "classApplying":
        if (!formData.classApplying) {
          newErrors.classApplying = "দয়া করে একটি শ্রেণী নির্বাচন করুন";
        }
        break;
      case "fatherName":
        if (!formData.fatherName.trim()) {
          newErrors.fatherName = "পিতার নাম প্রয়োজন";
        }
        break;
      case "motherName":
        if (!formData.motherName.trim()) {
          newErrors.motherName = "মাতার নাম প্রয়োজন";
        }
        break;
      case "guardianContact":
        if (!formData.guardianContact.trim()) {
          newErrors.guardianContact = "যোগাযোগ নম্বর প্রয়োজন";
        } else if (!/^[0-9+\-\s()]{11,15}$/.test(formData.guardianContact)) {
          newErrors.guardianContact = "দয়া করে একটি বৈধ ফোন নম্বর দিন (১১-১৫ সংখ্যা)";
        }
        break;
      case "email":
        if (!formData.email.trim()) {
          newErrors.email = "ইমেইল ঠিকানা প্রয়োজন";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "দয়া করে একটি বৈধ ইমেইল ঠিকানা দিন";
        }
        break;
      case "address":
        if (!formData.address.trim()) {
          newErrors.address = "ঠিকানা প্রয়োজন";
        }
        break;
      case "photograph":
        if (!formData.photograph) {
          newErrors.photograph = "দয়া করে একটি ছবি আপলোড করুন";
        }
        break;
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = () => {
    const fields = ["studentName", "dateOfBirth", "classApplying", "fatherName", "motherName", "guardianContact", "email", "address", "photograph"];
    let isValid = true;
    const newErrors: Record<string, string> = {};
    
    fields.forEach((field) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      
      switch (field) {
        case "studentName":
          if (!formData.studentName.trim()) {
            newErrors.studentName = "শিক্ষার্থীর নাম প্রয়োজন";
            isValid = false;
          }
          break;
        case "dateOfBirth":
          if (!formData.dateOfBirth) {
            newErrors.dateOfBirth = "জন্ম তারিখ প্রয়োজন";
            isValid = false;
          }
          break;
        case "classApplying":
          if (!formData.classApplying) {
            newErrors.classApplying = "দয়া করে একটি শ্রেণী নির্বাচন করুন";
            isValid = false;
          }
          break;
        case "fatherName":
          if (!formData.fatherName.trim()) {
            newErrors.fatherName = "পিতার নাম প্রয়োজন";
            isValid = false;
          }
          break;
        case "motherName":
          if (!formData.motherName.trim()) {
            newErrors.motherName = "মাতার নাম প্রয়োজন";
            isValid = false;
          }
          break;
        case "guardianContact":
          if (!formData.guardianContact.trim()) {
            newErrors.guardianContact = "যোগাযোগ নম্বর প্রয়োজন";
            isValid = false;
          } else if (!/^[0-9+\-\s()]{11,15}$/.test(formData.guardianContact)) {
            newErrors.guardianContact = "দয়া করে একটি বৈধ ফোন নম্বর দিন";
            isValid = false;
          }
          break;
        case "email":
          if (!formData.email.trim()) {
            newErrors.email = "ইমেইল ঠিকানা প্রয়োজন";
            isValid = false;
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "দয়া করে একটি বৈধ ইমেইল ঠিকানা দিন";
            isValid = false;
          }
          break;
        case "address":
          if (!formData.address.trim()) {
            newErrors.address = "ঠিকানা প্রয়োজন";
            isValid = false;
          }
          break;
        case "photograph":
          if (!formData.photograph) {
            newErrors.photograph = "দয়া করে একটি ছবি আপলোড করুন";
            isValid = false;
          }
          break;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"];
      if (!validTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, photograph: "দয়া করে একটি বৈধ ছবি আপলোড করুন (JPEG, PNG, GIF, WEBP)" }));
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, photograph: "ফাইলের সাইজ ৫এমবি এর কম হওয়া উচিত" }));
        return;
      }
      setFormData((prev) => ({ ...prev, photograph: file }));
      setPreviewUrl(URL.createObjectURL(file));
      setTouched((prev) => ({ ...prev, photograph: true }));
      if (errors.photograph) {
        const newErrors = { ...errors };
        delete newErrors.photograph;
        setErrors(newErrors);
      }
    }
  };

  // ===== সংশোধিত handleSubmit =====
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      // নতুন অ্যাপ্লিকেশন অবজেক্ট তৈরি করুন (id, status, submittedAt বাদ)
      const newApplication = {
        studentName: formData.studentName,
        dateOfBirth: formData.dateOfBirth,
        classApplying: formData.classApplying,
        previousInstitution: formData.previousInstitution || "",
        fatherName: formData.fatherName,
        motherName: formData.motherName,
        guardianContact: formData.guardianContact,
        email: formData.email,
        address: formData.address,
        photograph: previewUrl, // string (URL) অথবা null
      };

      // কনটেক্সটে যোগ করুন
      addApplication(newApplication);

      // সিমুলেটেড সাবমিশন ডিলে
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // ফর্ম রিসেট করুন
        setFormData({
          studentName: "",
          dateOfBirth: "",
          classApplying: "",
          previousInstitution: "",
          fatherName: "",
          motherName: "",
          guardianContact: "",
          email: "",
          address: "",
          photograph: null,
        });
        setPreviewUrl(null);
        setTouched({});
        setErrors({});
        setCurrentStep(1);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }, 2000);
    }
  };

  const isFieldValid = (fieldName: string) => {
    return touched[fieldName] && !errors[fieldName] && formData[fieldName as keyof typeof formData];
  };

  const isFieldInvalid = (fieldName: string) => {
    return touched[fieldName] && errors[fieldName];
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 text-center animate-fade-in-up">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3">
              আবেদন জমা দেওয়া হয়েছে! 🎉
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-2">
              আমাদের প্রতিষ্ঠানে আবেদন করার জন্য ধন্যবাদ।
            </p>
            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              আপনার আবেদন পেয়েছি। আমাদের ভর্তি দল এটি পর্যালোচনা করবে এবং শীঘ্রই আপনার সাথে যোগাযোগ করবে।
            </p>
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 text-left">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2 text-sm sm:text-base">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                পরবর্তী পদক্ষেপসমূহ:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-green-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  নিশ্চিতকরণ ইমেইলের জন্য অপেক্ষা করুন
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  ভর্তি পরীক্ষার জন্য প্রস্তুত হন (যদি প্রযোজ্য হয়)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  যাচাইয়ের জন্য আপনার নথিপত্র প্রস্তুত রাখুন
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                  আরও নির্দেশনার জন্য আপনার ইমেইল চেক করুন
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                হোমে যান
              </Link>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
              >
                আরেকটি আবেদন জমা দিন
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* হিরো সেকশন */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-12 md:py-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant" />
        <div className="absolute -top-20 -right-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/admission/requirment" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" /> 
            একাডেমিক তথ্যে ফিরুন
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 hover:bg-white/30 transition-all duration-300 hover:scale-105">
              <FileText className="h-3 w-3 sm:h-4 sm:w-4 animate-spin-slow" />
              অনলাইন ভর্তি ফর্ম
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 animate-fade-in-up">
              আপনার <span className="text-yellow-300">ভর্তি</span> যাত্রা শুরু করুন
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl animate-fade-in-up animation-delay-200">
              ভর্তির জন্য আবেদন করতে নিচের ফর্মটি পূরণ করুন। <span className="text-red-300">*</span> চিহ্নিত ক্ষেত্রগুলো আবশ্যক।
            </p>
          </div>
        </div>
      </section>

      {/* ফর্ম সেকশন */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* অগ্রগতি সূচক */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between max-w-xs sm:max-w-md mx-auto">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                    currentStep >= 1 ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200" : "bg-gray-200 text-gray-500"
                  }`}>
                    ১
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-500 mt-1">ব্যক্তিগত তথ্য</span>
                </div>
                <div className="flex-1 h-0.5 bg-gray-200 mx-1 sm:mx-2">
                  <div className={`h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500 ${
                    currentStep >= 2 ? "w-full" : "w-0"
                  }`} />
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                    currentStep >= 2 ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200" : "bg-gray-200 text-gray-500"
                  }`}>
                    ২
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-500 mt-1">অভিভাবক তথ্য</span>
                </div>
                <div className="flex-1 h-0.5 bg-gray-200 mx-1 sm:mx-2">
                  <div className={`h-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500 ${
                    currentStep >= 3 ? "w-full" : "w-0"
                  }`} />
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 ${
                    currentStep >= 3 ? "bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-200" : "bg-gray-200 text-gray-500"
                  }`}>
                    ৩
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-500 mt-1">নথিপত্র</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-red-50 px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100">
                <h2 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-2">
                  <User className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  ভর্তি আবেদন ফর্ম
                </h2>
                <p className="text-xs sm:text-sm text-gray-500">সব আবশ্যক ক্ষেত্র সাবধানে পূরণ করুন</p>
              </div>

              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8" noValidate>
                {/* শিক্ষার্থীর তথ্য - ধাপ ১ */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
                    <User className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    শিক্ষার্থীর তথ্য
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="studentName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                        শিক্ষার্থীর নাম <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
                          isFieldValid("studentName") ? "text-green-500" : isFieldInvalid("studentName") ? "text-red-500" : "text-gray-400"
                        }`} />
                        <input
                          id="studentName"
                          type="text"
                          name="studentName"
                          value={formData.studentName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="শিক্ষার্থীর পূর্ণ নাম"
                          aria-required="true"
                          aria-invalid={!!errors.studentName}
                          aria-describedby={errors.studentName ? "studentName-error" : undefined}
                          className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                            isFieldValid("studentName")
                              ? "border-green-500 focus:ring-green-200"
                              : isFieldInvalid("studentName")
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-200 focus:ring-green-200 focus:border-green-500"
                          }`}
                        />
                      </div>
                      {errors.studentName && (
                        <p id="studentName-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                          {errors.studentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="dateOfBirth" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                        জন্ম তারিখ <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
                          isFieldValid("dateOfBirth") ? "text-green-500" : isFieldInvalid("dateOfBirth") ? "text-red-500" : "text-gray-400"
                        }`} />
                        <input
                          id="dateOfBirth"
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          aria-required="true"
                          aria-invalid={!!errors.dateOfBirth}
                          aria-describedby={errors.dateOfBirth ? "dateOfBirth-error" : undefined}
                          className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                            isFieldValid("dateOfBirth")
                              ? "border-green-500 focus:ring-green-200"
                              : isFieldInvalid("dateOfBirth")
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-200 focus:ring-green-200 focus:border-green-500"
                          }`}
                        />
                      </div>
                      {errors.dateOfBirth && (
                        <p id="dateOfBirth-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                          {errors.dateOfBirth}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="classApplying" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                        যে শ্রেণীতে আবেদন <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <School className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
                          isFieldValid("classApplying") ? "text-green-500" : isFieldInvalid("classApplying") ? "text-red-500" : "text-gray-400"
                        }`} />
                        <select
                          id="classApplying"
                          name="classApplying"
                          value={formData.classApplying}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          aria-required="true"
                          aria-invalid={!!errors.classApplying}
                          aria-describedby={errors.classApplying ? "classApplying-error" : undefined}
                          className={`w-full pl-9 sm:pl-10 pr-8 sm:pr-10 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 appearance-none ${
                            isFieldValid("classApplying")
                              ? "border-green-500 focus:ring-green-200"
                              : isFieldInvalid("classApplying")
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-200 focus:ring-green-200 focus:border-green-500"
                          }`}
                        >
                          <option value="">শ্রেণী নির্বাচন করুন</option>
                          {classes.map((cls) => (
                            <option key={cls} value={cls}>
                              {cls}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.classApplying && (
                        <p id="classApplying-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                          {errors.classApplying}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="previousInstitution" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                        পূর্ববর্তী প্রতিষ্ঠান
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                        <input
                          id="previousInstitution"
                          type="text"
                          name="previousInstitution"
                          value={formData.previousInstitution}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="পূর্ববর্তী বিদ্যালয়/কলেজের নাম"
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        if (validateField("studentName") && validateField("dateOfBirth") && validateField("classApplying")) {
                          setCurrentStep(2);
                        }
                      }}
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                      পরবর্তী ধাপ <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </div>

                {/* অভিভাবক/প্রহরীর তথ্য - ধাপ ২ */}
                {currentStep >= 2 && (
                  <div className="mb-6 sm:mb-8 animate-fade-in-up">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      অভিভাবক/প্রহরীর তথ্য
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="fatherName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                          পিতার নাম <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fatherName"
                          type="text"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="পিতার পূর্ণ নাম"
                          aria-required="true"
                          aria-invalid={!!errors.fatherName}
                          aria-describedby={errors.fatherName ? "fatherName-error" : undefined}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                            isFieldValid("fatherName")
                              ? "border-green-500 focus:ring-green-200"
                              : isFieldInvalid("fatherName")
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-200 focus:ring-green-200 focus:border-green-500"
                          }`}
                        />
                        {errors.fatherName && (
                          <p id="fatherName-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                            {errors.fatherName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="motherName" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                          মাতার নাম <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="motherName"
                          type="text"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder="মাতার পূর্ণ নাম"
                          aria-required="true"
                          aria-invalid={!!errors.motherName}
                          aria-describedby={errors.motherName ? "motherName-error" : undefined}
                          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                            isFieldValid("motherName")
                              ? "border-green-500 focus:ring-green-200"
                              : isFieldInvalid("motherName")
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-200 focus:ring-green-200 focus:border-green-500"
                          }`}
                        />
                        {errors.motherName && (
                          <p id="motherName-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                            {errors.motherName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="guardianContact" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                          অভিভাবকের যোগাযোগ <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
                            isFieldValid("guardianContact") ? "text-green-500" : isFieldInvalid("guardianContact") ? "text-red-500" : "text-gray-400"
                          }`} />
                          <input
                            id="guardianContact"
                            type="tel"
                            name="guardianContact"
                            value={formData.guardianContact}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="+৮৮০ ১২৩৪-৫৬৭৮৯০"
                            aria-required="true"
                            aria-invalid={!!errors.guardianContact}
                            aria-describedby={errors.guardianContact ? "guardianContact-error" : undefined}
                            className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                              isFieldValid("guardianContact")
                                ? "border-green-500 focus:ring-green-200"
                                : isFieldInvalid("guardianContact")
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-200 focus:ring-green-200 focus:border-green-500"
                            }`}
                          />
                        </div>
                        {errors.guardianContact && (
                          <p id="guardianContact-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                            {errors.guardianContact}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                          ইমেইল ঠিকানা <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 ${
                            isFieldValid("email") ? "text-green-500" : isFieldInvalid("email") ? "text-red-500" : "text-gray-400"
                          }`} />
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder="example@email.com"
                            aria-required="true"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                            className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 ${
                              isFieldValid("email")
                                ? "border-green-500 focus:ring-green-200"
                                : isFieldInvalid("email")
                                ? "border-red-500 focus:ring-red-200"
                                : "border-gray-200 focus:ring-green-200 focus:border-green-500"
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mt-4">
                      <label htmlFor="address" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                        ঠিকানা <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className={`absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 ${
                          isFieldValid("address") ? "text-green-500" : isFieldInvalid("address") ? "text-red-500" : "text-gray-400"
                        }`} />
                        <textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          rows={3}
                          placeholder="বাড়ি নং, রাস্তা, এলাকা, শহর, জেলা"
                          aria-required="true"
                          aria-invalid={!!errors.address}
                          aria-describedby={errors.address ? "address-error" : undefined}
                          className={`w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                            isFieldValid("address")
                              ? "border-green-500 focus:ring-green-200"
                              : isFieldInvalid("address")
                              ? "border-red-500 focus:ring-red-200"
                              : "border-gray-200 focus:ring-green-200 focus:border-green-500"
                          }`}
                        />
                      </div>
                      {errors.address && (
                        <p id="address-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
                      >
                        পূর্ববর্তী ধাপ
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (validateField("fatherName") && validateField("motherName") && validateField("guardianContact") && validateField("email") && validateField("address")) {
                            setCurrentStep(3);
                          }
                        }}
                        className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium hover:bg-green-700 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                      >
                        পরবর্তী ধাপ <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ছবি আপলোড - ধাপ ৩ */}
                {currentStep >= 3 && (
                  <div className="mb-6 sm:mb-8 animate-fade-in-up">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
                      <Camera className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                      ছবি আপলোড
                    </h3>
                    <div>
                      <label htmlFor="photograph" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5">
                        সাম্প্রতিক ছবি <span className="text-red-500">*</span>
                      </label>
                      <div
                        className={`border-2 border-dashed rounded-xl p-6 sm:p-8 text-center cursor-pointer hover:bg-gray-50 transition-all duration-300 ${
                          errors.photograph && touched.photograph
                            ? "border-red-500 bg-red-50"
                            : previewUrl
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 hover:border-green-400"
                        }`}
                        onClick={() => fileInputRef.current?.click()}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            fileInputRef.current?.click();
                          }
                        }}
                      >
                        <input
                          id="photograph"
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                          aria-required="true"
                          aria-invalid={!!errors.photograph}
                          aria-describedby={errors.photograph ? "photograph-error" : undefined}
                        />
                        {previewUrl ? (
                          <div className="flex flex-col items-center">
                            <img
                              src={previewUrl}
                              alt="ছবির প্রিভিউ"
                              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-green-400 shadow-lg"
                            />
                            <p className="mt-3 text-xs sm:text-sm text-green-600 font-medium">
                              ✓ ছবি সফলভাবে আপলোড হয়েছে
                            </p>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setPreviewUrl(null);
                                setFormData((prev) => ({ ...prev, photograph: null }));
                                if (fileInputRef.current) {
                                  fileInputRef.current.value = "";
                                }
                                setErrors((prev) => {
                                  const newErrors = { ...prev };
                                  delete newErrors.photograph;
                                  return newErrors;
                                });
                              }}
                              className="mt-2 text-xs sm:text-sm text-red-500 hover:text-red-700 font-medium flex items-center gap-1"
                            >
                              <X className="h-3 w-3 sm:h-4 sm:w-4" />
                              ছবি সরান
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center">
                            <Upload className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400 mb-3" />
                            <p className="text-sm sm:text-base text-gray-600 font-medium">ছবি আপলোড করতে ক্লিক করুন</p>
                            <p className="text-xs sm:text-sm text-gray-400 mt-1">
                              JPEG, PNG, GIF, WEBP (সর্বোচ্চ ৫এমবি)
                            </p>
                          </div>
                        )}
                      </div>
                      {errors.photograph && (
                        <p id="photograph-error" className="mt-1 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                          {errors.photograph}
                        </p>
                      )}
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
                      >
                        পূর্ববর্তী ধাপ
                      </button>
                    </div>
                  </div>
                )}

                {/* জমা বাটন */}
                {currentStep >= 3 && (
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-gray-100">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          জমা দেওয়া হচ্ছে...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                          আবেদন জমা দিন
                        </>
                      )}
                    </button>
                    <Link
                      href="/admission"
                      className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                    >
                      বাতিল করুন
                    </Link>
                  </div>
                )}

                <p className="mt-4 text-[10px] sm:text-xs text-gray-500 text-center">
                  <Shield className="h-3 w-3 inline mr-1" />
                  আপনার তথ্য নিরাপদ এবং শুধুমাত্র ভর্তির উদ্দেশ্যে ব্যবহার করা হবে।
                </p>
              </form>
            </div>

            {/* ভর্তি প্রয়োজনীয়তা */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-green-50 p-3 sm:p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
                </div>
                <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">প্রয়োজনীয় নথিপত্র</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">জন্ম সনদ, টিসি, ছবি</p>
              </div>
              <div className="bg-blue-50 p-3 sm:p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-200 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-700" />
                </div>
                <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">প্রক্রিয়াকরণ সময়</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">৩-৫ কার্যদিবস</p>
              </div>
              <div className="bg-purple-50 p-3 sm:p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-purple-700" />
                </div>
                <h4 className="font-semibold text-slate-800 text-xs sm:text-sm">ভর্তি পরীক্ষা</h4>
                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">পরে জানানো হবে</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}