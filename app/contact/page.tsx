// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ChevronRight,
  Send,
  MessageSquare,
  Building2,
  User,
  Calendar,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 py-25 via-white to-red-50">
    

      {/* ====== যোগাযোগের তথ্য কার্ড ====== */}
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Phone className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">ফোন</h3>
                <p className="text-gray-600 text-sm">+৮৮০৫৮১-৬২৩৬২</p>
                <p className="text-xs text-gray-400 mt-1">সোম-বৃহস্পতি: সকাল ৮:০০ - বিকাল ৪:০০</p>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                  <Mail className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">ইমেইল</h3>
                <p className="text-gray-600 text-sm">psmmpghs@gmail.com</p>
                <p className="text-xs text-gray-400 mt-1">২৪ ঘণ্টার মধ্যে উত্তর</p>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                  <MapPin className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">ঠিকানা</h3>
                <p className="text-gray-600 text-sm">পলাশবাড়ী, গাইবান্ধা</p>
                <p className="text-xs text-gray-400 mt-1">বাংলাদেশ</p>
              </div>

              <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Clock className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg">অফিস সময়</h3>
                <p className="text-gray-600 text-sm">রবি - বৃহস্পতি: সকাল ৮:০০ - বিকাল ৪:০০</p>
                <p className="text-xs text-gray-400 mt-1">শুক্র - শনি: বন্ধ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== যোগাযোগ ফর্ম ও ম্যাপ ====== */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* যোগাযোগ ফর্ম - ৩ কলাম */}
              <div className="lg:col-span-3">
                <div className="bg-gradient-to-br from-green-50/50 to-red-50/50 p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-red-600 rounded-2xl flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-800">বার্তা পাঠান</h2>
                      <p className="text-sm text-gray-500">নিচের ফর্মটি পূরণ করুন, আমরা আপনার সাথে যোগাযোগ করব</p>
                    </div>
                  </div>

                  {/* সফলতা/ত্রুটি বার্তা */}
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-800">বার্তা পাঠানো হয়েছে!</p>
                        <p className="text-sm text-green-700">আমরা ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করব।</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-red-800">কিছু একটা ভুল হয়েছে</p>
                        <p className="text-sm text-red-700">দয়া করে পরে আবার চেষ্টা করুন।</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                          <User className="h-4 w-4 text-green-600" />
                          পূর্ণ নাম <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none bg-white"
                          placeholder="আপনার পূর্ণ নাম লিখুন"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                          <Mail className="h-4 w-4 text-red-600" />
                          ইমেইল ঠিকানা <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none bg-white"
                          placeholder="আপনার ইমেইল লিখুন"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                        <Phone className="h-4 w-4 text-purple-600" />
                        ফোন নম্বর
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none bg-white"
                        placeholder="আপনার ফোন নম্বর লিখুন"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-orange-600" />
                        বার্তা <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 transition-all outline-none bg-white resize-none"
                        placeholder="আপনার বার্তা এখানে লিখুন..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-200 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          পাঠানো হচ্ছে...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          বার্তা পাঠান
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* দ্রুত যোগাযোগের তথ্য - ২ কলাম */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-gradient-to-br from-green-600 to-red-600 text-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold mb-4">দ্রুত যোগাযোগ</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <Phone className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">ফোন</p>
                        <p className="text-sm opacity-90">+৮৮০৫৮১-৬২৩৬২</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">ইমেইল</p>
                        <p className="text-sm opacity-90">psmmpghs@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">ঠিকানা</p>
                        <p className="text-sm opacity-90">পলাশবাড়ী, গাইবান্ধা</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      <Clock className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">অফিস সময়</p>
                        <p className="text-sm opacity-90">রবি-বৃহস্পতি: সকাল ৮:০০ - বিকাল ৪:০০</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-green-600" />
                    ক্যাম্পাসের অবস্থান
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="font-medium text-slate-800">পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়</p>
                    <p>পলাশবাড়ী, গাইবান্ধা, বাংলাদেশ</p>
                    <div className="flex items-center gap-2 text-green-600">
                      <MapPin className="h-4 w-4" />
                      <a 
                        href="https://www.google.com/maps?q=পলাশবাড়ী+সুতি+মাহমুদ+মডেল+পাইলট+সরকারি+উচ্চ+বিদ্যালয়" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        গুগল ম্যাপে দেখুন →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== গুগল ম্যাপ ইন্টিগ্রেশন ====== */}
      <section className="py-12 bg-gradient-to-br from-green-50/50 via-white to-red-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <MapPin className="h-4 w-4" />
                আমাদের খুঁজুন
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                আমাদের অবস্থান
              </h2>
              <p className="text-gray-600 mt-2">
                আমাদের ক্যাম্পাসে আসুন — আমরা আপনাকে স্বাগত জানাতে পেরে আনন্দিত
              </p>
            </div>

            {/* গুগল ম্যাপ ইফ্রেম */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3626.123456789012!2d89.2667!3d25.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2b3b3b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2z4Ka44Ka-4Kaw4KeN4Kav4Ka-4Kay4Ka_4Ka4IOCmleCmsOCmvuCmsOCmh-CmvuCmqCDgpofgprLgpp_gprDgp43gpp_gprDgp4vgpp_gprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gpp_gprDgp4vgprDgp43gprDgp43gpp_gprDgp4vgprDgp4vgprDgp43gprDgp43gprDgp43gprD!5e0!3m2!1sbn!2sbd!4v1700000000000!5m2!1sbn!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয় - অবস্থান ম্যাপ"
              />
              
              {/* ম্যাপ ওভারলে ব্যাজ */}
              <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 text-sm">পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়</p>
                    <p className="text-xs text-gray-600">পলাশবাড়ী, গাইবান্ধা</p>
                    <a 
                      href="https://www.google.com/maps?q=পলাশবাড়ী+সুতি+মাহমুদ+মডেল+পাইলট+সরকারি+উচ্চ+বিদ্যালয়" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-green-600 font-medium hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      দিকনির্দেশনা নিন <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* নিকটবর্তী স্থান */}
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
                <div className="text-sm font-medium text-slate-800">নিকটবর্তী</div>
                <div className="text-xs text-gray-500">পলাশবাড়ী বাজার</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
                <div className="text-sm font-medium text-slate-800">হাঁটা দূরত্ব</div>
                <div className="text-xs text-gray-500">পৌরসভা থেকে ৫ মিনিট</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
                <div className="text-sm font-medium text-slate-800">পাবলিক পরিবহন</div>
                <div className="text-xs text-gray-500">বাস ও অটোরিকশা সুবিধা</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm text-center border border-gray-100">
                <div className="text-sm font-medium text-slate-800">পার্কিং</div>
                <div className="text-xs text-gray-500">স্কুল প্রাঙ্গনে উপলব্ধ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
}