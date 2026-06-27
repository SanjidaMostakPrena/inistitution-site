
'use client'
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  Building2,
  Users,
  Award,
  Target,
  Eye,
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  School,
  User,
  Briefcase,
  GraduationCap,
  Quote,
  Mail,
  Phone,
  MapPin,
  Star,
  Heart,
  Lightbulb,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Crown,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

    const elements = document.querySelectorAll(".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      
      {/* ====== প্রতিষ্ঠানের প্রোফাইল ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
                <Building2 className="h-4 w-4" />
                প্রতিষ্ঠানের প্রোফাইল
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
                এক নজরে আমাদের প্রতিষ্ঠান
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়ের ঐতিহ্য, মূল্যবোধ ও শ্রেষ্ঠত্ব আবিষ্কার করুন
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative animate-fade-in-left animation-delay-200">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-smooth hover:scale-[1.02]">
                  <Image
                    src="/image/pilot.jpg"
                    alt="পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয় ক্যাম্পাস"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg hover:bg-white transition-smooth hover:scale-105">
                      <div className="flex items-center gap-4">
                        <div className="bg-green-600 p-3 rounded-lg">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-800">প্রতিষ্ঠিত</p>
                          <p className="text-xs text-gray-600">১৯৮৫ • ৪০+ বছর</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-smooth hover:scale-105 hover:rotate-3">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8" />
                    <div>
                      <p className="text-sm font-semibold">শ্রেষ্ঠ প্রতিষ্ঠান</p>
                      <p className="text-xs opacity-80">পুরস্কার বিজয়ী</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-fade-in-right animation-delay-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 hover:text-green-700 transition-colors duration-300">ভূমিকা</h3>
                    <p className="text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                      পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয় একটি উন্নত শিক্ষাপ্রতিষ্ঠান 
                      যা মানসম্মত শিক্ষা প্রদান এবং সামগ্রিক উন্নয়নে নিবেদিত। ১৯৮৫ সালে প্রতিষ্ঠার পর থেকে 
                      আমরা তরুণ মেধাবীদের লালন-পালন এবং তাদের উজ্জ্বল ভবিষ্যতের জন্য প্রস্তুত করতে প্রতিশ্রুতিবদ্ধ।
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-red-50 p-4 rounded-xl hover:shadow-lg transition-smooth hover:scale-105">
                      <div className="text-2xl font-bold text-green-600">৪০+</div>
                      <div className="text-sm text-gray-600">শ্রেষ্ঠত্বের বছর</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-red-50 p-4 rounded-xl hover:shadow-lg transition-smooth hover:scale-105">
                      <div className="text-2xl font-bold text-green-600">৫০+</div>
                      <div className="text-sm text-gray-600">একাডেমিক কোর্স</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-red-50 p-4 rounded-xl hover:shadow-lg transition-smooth hover:scale-105">
                      <div className="text-2xl font-bold text-green-600">৯৫%</div>
                      <div className="text-sm text-gray-600">সাফল্যের হার</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-red-50 p-4 rounded-xl hover:shadow-lg transition-smooth hover:scale-105">
                      <div className="text-2xl font-bold text-green-600">২০০+</div>
                      <div className="text-sm text-gray-600">দক্ষ শিক্ষক</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 bg-gradient-to-br from-green-100 to-green-200 p-4 rounded-xl text-center hover:shadow-lg transition-smooth hover:scale-105">
                      <span className="block text-3xl font-bold text-green-700">#১</span>
                      <span className="text-xs text-green-700 font-medium">জেলায় র্যাঙ্ক</span>
                    </div>
                    <div className="flex-1 bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-xl text-center hover:shadow-lg transition-smooth hover:scale-105">
                      <span className="block text-3xl font-bold text-red-700">এ+</span>
                      <span className="text-xs text-red-700 font-medium">অর্জিত গ্রেড</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ইতিহাসের সময়রেখা ====== */}
      <section className="py-16 bg-gradient-to-br from-green-50/50 via-white to-red-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
                <Calendar className="h-4 w-4" />
                আমাদের ইতিহাস
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
                শ্রেষ্ঠত্বের উত্তরাধিকার
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                আমাদের প্রতিষ্ঠানকে গঠন করা মাইলফলকগুলোর যাত্রা
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 via-red-400 to-green-400"></div>
              
              <div className="space-y-12">
                {/* Timeline Item 1 */}
                <div className="relative flex items-center justify-between md:justify-normal animate-fade-in-up animation-delay-100 animate-on-scroll">
                  <div className="w-5/12 hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-600 ring-4 ring-white shadow-lg flex items-center justify-center z-10 hover:scale-110 transition-smooth">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-1 hover:scale-[1.02] border-l-4 border-green-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-xl hover:bg-green-200 transition-smooth hover:scale-105">
                        <School className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-green-600">১৯৮৫</span>
                        <h3 className="font-bold text-slate-800 text-lg">ভিত্তি স্থাপন</h3>
                        <p className="text-gray-600 text-sm">মানসম্মত শিক্ষা প্রদানের লক্ষ্যে পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয় প্রতিষ্ঠিত হয়।</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative flex items-center justify-between md:justify-normal animate-fade-in-up animation-delay-200 animate-on-scroll">
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-1 hover:scale-[1.02] border-l-4 border-red-500 md:order-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-xl hover:bg-red-200 transition-smooth hover:scale-105">
                        <Users className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-red-600">১৯৯৫</span>
                        <h3 className="font-bold text-slate-800 text-lg">সম্প্রসারণ ও প্রবৃদ্ধি</h3>
                        <p className="text-gray-600 text-sm">বিদ্যালয় নতুন সুবিধা এবং শিক্ষার্থী সংখ্যা বৃদ্ধির সাথে সম্প্রসারিত হয়।</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 ring-4 ring-white shadow-lg flex items-center justify-center z-10 hover:scale-110 transition-smooth">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="w-5/12 hidden md:block"></div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative flex items-center justify-between md:justify-normal animate-fade-in-up animation-delay-300 animate-on-scroll">
                  <div className="w-5/12 hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-600 ring-4 ring-white shadow-lg flex items-center justify-center z-10 hover:scale-110 transition-smooth">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-1 hover:scale-[1.02] border-l-4 border-green-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-xl hover:bg-green-200 transition-smooth hover:scale-105">
                        <Award className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-green-600">২০০৫</span>
                        <h3 className="font-bold text-slate-800 text-lg">স্বীকৃতি ও পুরস্কার</h3>
                        <p className="text-gray-600 text-sm">একাডেমিক শ্রেষ্ঠত্ব এবং উদ্ভাবনের জন্য একাধিক পুরস্কার অর্জন।</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="relative flex items-center justify-between md:justify-normal animate-fade-in-up animation-delay-400 animate-on-scroll">
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-1 hover:scale-[1.02] border-l-4 border-red-500 md:order-1">
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 p-3 rounded-xl hover:bg-red-200 transition-smooth hover:scale-105">
                        <Building2 className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-red-600">২০১৫</span>
                        <h3 className="font-bold text-slate-800 text-lg">আধুনিক অবকাঠামো</h3>
                        <p className="text-gray-600 text-sm">আধুনিক ল্যাব, গ্রন্থাগার এবং সুবিধাসম্পন্ন অত্যাধুনিক ক্যাম্পাস।</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-600 ring-4 ring-white shadow-lg flex items-center justify-center z-10 hover:scale-110 transition-smooth">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="w-5/12 hidden md:block"></div>
                </div>

                {/* Timeline Item 5 */}
                <div className="relative flex items-center justify-between md:justify-normal animate-fade-in-up animation-delay-500 animate-on-scroll">
                  <div className="w-5/12 hidden md:block"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-600 ring-4 ring-white shadow-lg flex items-center justify-center z-10 hover:scale-110 transition-smooth">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="w-full md:w-5/12 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-1 hover:scale-[1.02] border-l-4 border-green-500">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 p-3 rounded-xl hover:bg-green-200 transition-smooth hover:scale-105">
                        <Globe className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-green-600">২০২৪</span>
                        <h3 className="font-bold text-slate-800 text-lg">ডিজিটাল রূপান্তর</h3>
                        <p className="text-gray-600 text-sm">স্মার্ট ক্লাসরুম, অনলাইন লার্নিং প্ল্যাটফর্ম এবং ডিজিটাল সম্পদ।</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== লক্ষ্য ও দৃষ্টিভঙ্গি ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
                <Target className="h-4 w-4" />
                লক্ষ্য ও দৃষ্টিভঙ্গি
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
                আমাদের নির্দেশক নীতি
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                শিক্ষা, উদ্ভাবন এবং চরিত্র গঠনের মাধ্যমে ভবিষ্যৎ গঠন
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] overflow-hidden animate-fade-in-up animation-delay-100 animate-on-scroll">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/50 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-smooth">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">আমাদের দৃষ্টিভঙ্গি</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    একটি বিশ্বব্যাপী স্বীকৃত প্রতিষ্ঠান হিসেবে যা নেতা, উদ্ভাবক এবং 
                    দায়িত্বশীল নাগরিক তৈরি করে যারা সমাজে ইতিবাচক অবদান রাখে।
                  </p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <Sparkles className="h-4 w-4" />
                    <span>শ্রেষ্ঠত্বকে অনুপ্রাণিত করা</span>
                  </div>
                </div>
              </div>

              {/* Mission Card */}
              <div className="group relative bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] overflow-hidden animate-fade-in-up animation-delay-200 animate-on-scroll">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-200/50 rounded-full translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-smooth">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">আমাদের লক্ষ্য</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>আধুনিক শিক্ষা পদ্ধতিতে মানসম্মত শিক্ষা প্রদান</span>
                    </li>
                    <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>সমালোচনামূলক চিন্তাভাবনা, সৃজনশীলতা ও সমস্যা সমাধানের দক্ষতা বিকাশ</span>
                    </li>
                    <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>নৈতিক মূল্যবোধ, নীতি ও সামাজিক দায়িত্ব গঠন</span>
                    </li>
                    <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                      <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>বৈশ্বিক চ্যালেঞ্জ ও সুযোগের জন্য শিক্ষার্থীদের প্রস্তুত করা</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Goals Section */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center group hover:shadow-xl transition-smooth hover:-translate-y-2 animate-fade-in-up animation-delay-100 animate-on-scroll">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">একাডেমিক শ্রেষ্ঠত্ব</h4>
                <p className="text-sm text-gray-600">উদ্ভাবনী শিক্ষার মাধ্যমে অসাধারণ ফলাফল অর্জন</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl text-center group hover:shadow-xl transition-smooth hover:-translate-y-2 animate-fade-in-up animation-delay-200 animate-on-scroll">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">চরিত্র গঠন</h4>
                <p className="text-sm text-gray-600">মূল্যবোধ, নীতি ও নেতৃত্বের গুণাবলী বিকাশ</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center group hover:shadow-xl transition-smooth hover:-translate-y-2 animate-fade-in-up animation-delay-300 animate-on-scroll">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">বৈশ্বিক প্রস্তুতি</h4>
                <p className="text-sm text-gray-600">আন্তর্জাতিক সুযোগের জন্য শিক্ষার্থীদের প্রস্তুত করা</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== প্রধান শিক্ষকের বাণী ====== */}
      <section className="py-16 bg-gradient-to-br from-green-50/50 via-white to-red-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
                <User className="h-4 w-4" />
                প্রধান শিক্ষকের বাণী
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
                প্রধান শিক্ষকের বার্তা
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-smooth hover:scale-[1.01] animate-fade-in-up animate-on-scroll">
              <div className="md:flex">
                <div className="md:w-2/5 bg-gradient-to-br from-green-100 to-red-100 p-8 flex flex-col items-center justify-center">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-green-200 shadow-xl hover:ring-green-400 transition-smooth hover:scale-105 hover:rotate-3">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                      alt="প্রধান শিক্ষক প্রফেসর ড. মো. রহমান"
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mt-4 text-center hover:text-green-700 transition-colors duration-300">
                    প্রফেসর ড. মো. রহমান
                  </h3>
                  <p className="text-gray-600 text-sm text-center">প্রধান শিক্ষক</p>
                  <div className="flex flex-wrap gap-3 mt-3 justify-center">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-semibold hover:bg-green-300 transition-smooth hover:scale-105">পিএইচ.ডি.</span>
                    <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-xs font-semibold hover:bg-red-300 transition-smooth hover:scale-105">৪০+ বছর</span>
                  </div>
                </div>
                <div className="md:w-3/5 p-8 md:p-10">
                  <Quote className="h-10 w-10 text-green-500 mb-4 animate-pulse-soft" />
                  <p className="text-gray-700 leading-relaxed text-lg italic mb-6 hover:text-gray-900 transition-colors duration-300">
                    &ldquo;শিক্ষা শুধু জ্ঞান অর্জনের বিষয় নয়; এটি চরিত্র গঠন, কৌতূহল বিকাশ 
                    এবং আমাদের শিক্ষার্থীদের সহানুভূতিশীল, দায়িত্বশীল এবং উদ্ভাবনী 
                    বিশ্ব নাগরিক হিসেবে প্রস্তুত করার বিষয়। পলাশবাড়ী সুতি মাহমুদ 
                    মডেল পাইলট সরকারি উচ্চ বিদ্যালয়ে আমরা সম্পূর্ণ শিশুকে লালন-পালনে 
                    বিশ্বাস করি—মন, শরীর ও আত্মা।&rdquo;
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                        <p className="text-sm font-semibold text-slate-800">শিক্ষা</p>
                        <p className="text-xs text-gray-600">শিক্ষায় পিএইচ.ডি., হার্ভার্ড বিশ্ববিদ্যালয়</p>
                      </div>
                      <div className="hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                        <p className="text-sm font-semibold text-slate-800">অভিজ্ঞতা</p>
                        <p className="text-xs text-gray-600">শিক্ষায় ৪০+ বছর</p>
                      </div>
                      <div className="hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                        <p className="text-sm font-semibold text-slate-800">বিশেষায়ন</p>
                        <p className="text-xs text-gray-600">শিক্ষাগত নেতৃত্ব</p>
                      </div>
                      <div className="hover:bg-gray-50 p-2 rounded-lg transition-colors duration-300">
                        <p className="text-sm font-semibold text-slate-800">পুরস্কার</p>
                        <p className="text-xs text-gray-600">জাতীয় শিক্ষা পুরস্কার ২০২০</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== পরিচালনা পরিষদ ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
                <Users className="h-4 w-4" />
                পরিচালনা পরিষদ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
                আমাদের নেতৃত্ব দল
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                প্রতিষ্ঠানের বৃদ্ধি ও শ্রেষ্ঠত্বের জন্য নিবেদিত পেশাদাররা
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Member 1 - Chairman */}
              <div className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border border-green-100 animate-fade-in-up animation-delay-100 animate-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                    কেএ
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-800 text-lg group-hover:text-green-700 transition-colors duration-300">মো. কামাল আহমেদ</h3>
                      <Crown className="h-4 w-4 text-yellow-500 animate-pulse-soft" />
                    </div>
                    <p className="text-green-600 font-medium text-sm">সভাপতি</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-gray-600 flex items-center gap-2 group-hover:text-gray-800 transition-colors duration-300">
                        <Briefcase className="h-3 w-3" /> ব্যবসায়ী নেতা
                      </p>
                      <p className="text-xs text-gray-600 flex items-center gap-2 group-hover:text-gray-800 transition-colors duration-300">
                        <Award className="h-3 w-3" /> ২৫+ বছর অভিজ্ঞতা
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    দৃষ্টিভঙ্গি ও প্রতিশ্রুতি সহ নেতৃত্ব দেওয়া
                  </p>
                </div>
              </div>

              {/* Member 2 - Vice Chairman */}
              <div className="group bg-gradient-to-br from-red-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border border-red-100 animate-fade-in-up animation-delay-200 animate-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                    এসআর
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-red-700 transition-colors duration-300">সুফিয়া রহমান</h3>
                    <p className="text-red-600 font-medium text-sm">সহ-সভাপতি</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-gray-600 flex items-center gap-2 group-hover:text-gray-800 transition-colors duration-300">
                        <Briefcase className="h-3 w-3" /> শিক্ষা বিশেষজ্ঞ
                      </p>
                      <p className="text-xs text-gray-600 flex items-center gap-2 group-hover:text-gray-800 transition-colors duration-300">
                        <Award className="h-3 w-3" /> ২০+ বছর অভিজ্ঞতা
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    শিক্ষাগত উদ্ভাবন এবং শিক্ষার্থীদের সাফল্যের প্রতি অনুরাগী
                  </p>
                </div>
              </div>

              {/* Member 3 - Secretary */}
              <div className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border border-blue-100 animate-fade-in-up animation-delay-300 animate-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                    একে
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-700 transition-colors duration-300">আব্দুল করিম</h3>
                    <p className="text-blue-600 font-medium text-sm">সচিব</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-gray-600 flex items-center gap-2 group-hover:text-gray-800 transition-colors duration-300">
                        <Briefcase className="h-3 w-3" /> একাডেমিক প্রশাসক
                      </p>
                      <p className="text-xs text-gray-600 flex items-center gap-2 group-hover:text-gray-800 transition-colors duration-300">
                        <Award className="h-3 w-3" /> ১৫+ বছর অভিজ্ঞতা
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    মসৃণ কার্যক্রম এবং একাডেমিক শাসন নিশ্চিত করা
                  </p>
                </div>
              </div>

              {/* Member 4 - Treasurer */}
              <div className="group bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border border-purple-100 animate-fade-in-up animation-delay-400 animate-on-scroll">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                    এফএ
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-lg group-hover:text-purple-700 transition-colors duration-300">ফজলুল আলম</h3>
                    <p className="text-purple-600 font-medium text-sm">কোষাধ্যক্ষ</p>
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-gray-600 flex items-center gap-2 group-hover:text-gray-800 transition-colors duration-300">
                        <Briefcase className="h-3 w-3" /> অর্থ বিশেষজ্ঞ
                      </p>
                      <p className="text-xs text-gray-600 flex items-center gap-2 group-hover:text-gray-800 transition-colors duration-300">
                        <Award className="h-3 w-3" /> ১৮+ বছর অভিজ্ঞতা
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    স্বচ্ছতা ও শ্রেষ্ঠত্বের সাথে প্রতিষ্ঠানের অর্থ পরিচালনা
                  </p>
                </div>
              </div>
            </div>

            {/* Committee Members Grid */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-slate-800 text-center mb-6">পরিষদের সদস্যবৃন্দ</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "প্রফেসর ড. আহমেদ হাসান", role: "শিক্ষা বিশেষজ্ঞ" },
                  { name: "মোছা. জাহানারা বেগম", role: "অভিভাবক প্রতিনিধি" },
                  { name: "মো. শফিকুল ইসলাম", role: "কমিউনিটি নেতা" },
                  { name: "তাহমিনা আখতার", role: "প্রাক্তন ছাত্রী প্রতিনিধি" },
                ].map((member, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-smooth hover:-translate-y-1 hover:scale-[1.02] text-center border border-gray-100 animate-fade-in-up animation-delay-100 animate-on-scroll">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-white font-bold mx-auto mb-2 hover:scale-110 transition-smooth">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <p className="font-semibold text-sm text-slate-800">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ====== শিক্ষক বিভাগ ====== */}
            <div className="mt-16">
              <div className="text-center mb-10 animate-fade-in-down">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
                  <Users className="h-4 w-4" />
                  আমাদের শিক্ষকরা
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 hover:text-green-700 transition-colors duration-300">
                  নিবেদিত ও অভিজ্ঞ শিক্ষকমণ্ডলী
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  শিক্ষার্থীদের সাফল্যের জন্য প্রতিশ্রুতিবদ্ধ আমাদের আবেগী শিক্ষকদের সাথে পরিচিত হন
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Teacher 1 */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-100 animate-fade-in-up animation-delay-100 animate-on-scroll">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                        আরআই
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">রফিকুল ইসলাম</h4>
                        <p className="text-green-600 font-medium text-sm">বিজ্ঞান শাখার প্রধান</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">বিশেষায়ন:</span> পদার্থবিদ্যা ও গবেষণা পদ্ধতি
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teacher 2 */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-100 animate-fade-in-up animation-delay-200 animate-on-scroll">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 h-2"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                        এসএ
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">সুলতানা আখতার</h4>
                        <p className="text-red-600 font-medium text-sm">ইংরেজি শাখার প্রধান</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">বিশেষায়ন:</span> সাহিত্য ও সৃজনশীল লেখা
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teacher 3 */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-100 animate-fade-in-up animation-delay-300 animate-on-scroll">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                        এএইচ
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">আনোয়ার হোসেন</h4>
                        <p className="text-purple-600 font-medium text-sm">গণিত শাখার প্রধান</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">বিশেষায়ন:</span> বীজগণিত ও গাণিতিক মডেলিং
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teacher 4 */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-100 animate-fade-in-up animation-delay-400 animate-on-scroll">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                        এফআর
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">ফাতেমা রহমান</h4>
                        <p className="text-orange-600 font-medium text-sm">সামাজিক বিজ্ঞান শাখার প্রধান</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">বিশেষায়ন:</span> ইতিহাস ও সাংস্কৃতিক অধ্যয়ন
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teacher 5 */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-100 animate-fade-in-up animation-delay-500 animate-on-scroll">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                        কেএম
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">কামাল মিয়া</h4>
                        <p className="text-teal-600 font-medium text-sm">আইসিটি শাখার প্রধান</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">বিশেষায়ন:</span> প্রোগ্রামিং ও ডিজিটাল সাক্ষরতা
                      </p>
                    </div>
                  </div>
                </div>

                {/* Teacher 6 */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] overflow-hidden border border-gray-100 animate-fade-in-up animation-delay-600 animate-on-scroll">
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 h-2"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0 group-hover:scale-110 transition-smooth">
                        এনএইচ
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 text-lg">নাসরিন হক</h4>
                        <p className="text-pink-600 font-medium text-sm">শিল্প ও সংস্কৃতি শাখার প্রধান</p>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">বিশেষায়ন:</span> চারুকলা ও সাংস্কৃতিক শিক্ষা
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== শিক্ষাগত পটভূমি ====== */}
      <section className="py-16 bg-gradient-to-br from-green-50/50 via-white to-red-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
                <BookOpen className="h-4 w-4" />
                শিক্ষাগত পটভূমি
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
                একাডেমিক শ্রেষ্ঠত্ব
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                সামগ্রিক উন্নয়নের জন্য ডিজাইন করা ব্যাপক শিক্ষা কার্যক্রম
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border-t-4 border-green-500 animate-fade-in-up animation-delay-100 animate-on-scroll">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <GraduationCap className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">প্রাথমিক স্তর</h3>
                    <p className="text-xs text-gray-500">১ম-৫ম শ্রেণী</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    মূল বিষয়ে শক্ত ভিত্তি
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    কার্যক্রম-ভিত্তিক শিক্ষা
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    চরিত্র উন্নয়ন কর্মসূচি
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border-t-4 border-red-500 animate-fade-in-up animation-delay-200 animate-on-scroll">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <GraduationCap className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">মাধ্যমিক স্তর</h3>
                    <p className="text-xs text-gray-500">৬ষ্ঠ-১০ম শ্রেণী</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-red-500" />
                    ব্যাপক বিষয় কভারেজ
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-red-500" />
                    ল্যাব ও ব্যবহারিক সেশন
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-red-500" />
                    ক্যারিয়ার কাউন্সেলিং কর্মসূচি
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border-t-4 border-purple-500 animate-fade-in-up animation-delay-300 animate-on-scroll">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">উচ্চ মাধ্যমিক</h3>
                    <p className="text-xs text-gray-500">১১শ-১২শ শ্রেণী</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    বিজ্ঞান, বাণিজ্য ও কলা শাখা
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    উন্নত গবেষণার সুযোগ
                  </li>
                  <li className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300">
                    <CheckCircle className="h-4 w-4 text-purple-500" />
                    বিশ্ববিদ্যালয় প্রস্তুতি কর্মসূচি
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-smooth hover:scale-[1.01] animate-fade-in-up animation-delay-400 animate-on-scroll">
              <div className="text-center hover:scale-105 transition-smooth">
                <div className="text-2xl font-bold text-green-600">৯৫%</div>
                <div className="text-xs text-gray-600">বোর্ড পরীক্ষায় সাফল্য</div>
              </div>
              <div className="text-center hover:scale-105 transition-smooth">
                <div className="text-2xl font-bold text-red-600">৯৮%</div>
                <div className="text-xs text-gray-600">বিশ্ববিদ্যালয়ে ভর্তি</div>
              </div>
              <div className="text-center hover:scale-105 transition-smooth">
                <div className="text-2xl font-bold text-purple-600">৮৫%</div>
                <div className="text-xs text-gray-600">মেধা তালিকায় অর্জন</div>
              </div>
              <div className="text-center hover:scale-105 transition-smooth">
                <div className="text-2xl font-bold text-orange-600">৯০%</div>
                <div className="text-xs text-gray-600">শিক্ষার্থী সন্তুষ্টি</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}