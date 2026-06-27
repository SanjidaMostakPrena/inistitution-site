
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  GraduationCap,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  School,
  CalendarDays,
  Quote,
  Video,
  Camera,
  MapPinned,
  Sparkles,
  Star,
  Heart,
  TrendingUp,
  Wifi,
  Library,
  Utensils,
  Bus,
  ShieldCheck,
  Dumbbell,
  Microscope,
  Laptop,
  Building2,
} from "lucide-react";

export default function HomePage() {
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
      {/* ====== হিরো / স্লাইডার ====== */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-white/5 rounded-tr-full animate-bounce-slow" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse-soft animation-delay-1000" />

        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6 hover:bg-white/30 transition-smooth hover:scale-105">
                <School className="h-4 w-4 animate-spin-slow" />
                <span>প্রতিষ্ঠিত ১৯৮৫ | ইআইআইএন: ১২৩৪৫৬</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 animate-fade-in-up animation-delay-200">
                <span className="text-yellow-300 hover:text-yellow-200 transition-colors duration-300 relative inline-block">
                  পলাশবাড়ী সুতি মাহমুদ
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </span>
                <br />
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  মডেল পাইলট সরকারি উচ্চ বিদ্যালয়ে
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl">
                  স্বাগতম
                </span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-lg mb-8 animate-fade-in-up animation-delay-400">
                শিক্ষায় শ্রেষ্ঠত্ব — সততা, উদ্ভাবন এবং অনুপ্রেরণার মাধ্যমে 
                ভবিষ্যতের নেতা তৈরি করা আমাদের লক্ষ্য।
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
                <Link
                  href="/admission/form"
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-smooth hover:scale-105 hover:shadow-2xl shadow-xl group"
                >
                  এখনই আবেদন করুন <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-2 group-hover:rotate-12" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold hover:bg-white/30 transition-smooth border border-white/30 hover:border-white/50 hover:scale-105 hover:shadow-xl"
                >
                  আরও জানুন
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6 text-sm text-white/80 animate-fade-in-up animation-delay-800">
                <span className="flex items-center gap-1.5 hover:text-white transition-colors duration-300 group">
                  <CalendarDays className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" /> ভর্তি ২০২৬ চলমান
                </span>
                <span className="flex items-center gap-1.5 hover:text-white transition-colors duration-300 group">
                  <Clock className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" /> সীমিত আসন
                </span>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end animate-fade-in-right animation-delay-400">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20 bg-gradient-to-br from-green-400 to-red-500 hover:ring-white/40 transition-smooth hover:scale-105 hover:rotate-1">
                <Image
                  src="/image/pilot.jpg"
                  alt="পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয় ক্যাম্পাস"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  priority
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 hover:bg-black/60 transition-smooth animate-pulse-soft">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  লাইভ ক্যাম্পাস
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 hover:bg-white transition-smooth hover:scale-105 hover:shadow-2xl">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 animate-spin-slow" />
                  <span className="text-sm font-semibold text-slate-800">শীর্ষ রেটেড প্রতিষ্ঠান</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-sm font-semibold animate-bounce-slow hover:scale-110 transition-smooth hover:shadow-2xl cursor-pointer">
                <Award className="h-5 w-5 text-green-600 animate-pulse-soft" />
                ৯৫% সাফল্যের হার
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== পরিসংখ্যান ====== */}
      <section className="py-12 bg-white/80 backdrop-blur-sm shadow-sm relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-4 rounded-xl hover:bg-green-50 transition-smooth group cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-100">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                ৫০০০+
              </div>
              <div className="text-sm text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <Users className="h-3.5 w-3.5 text-green-500 transition-transform duration-300 group-hover:rotate-12 group-hover:animate-bounce" />
                শিক্ষার্থী
              </div>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-green-50 transition-smooth group cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-200">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                ২০০+
              </div>
              <div className="text-sm text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <GraduationCap className="h-3.5 w-3.5 text-red-500 transition-transform duration-300 group-hover:rotate-12 group-hover:animate-bounce" />
                শিক্ষক
              </div>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-green-50 transition-smooth group cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                ৩০+
              </div>
              <div className="text-sm text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <BookOpen className="h-3.5 w-3.5 text-blue-500 transition-transform duration-300 group-hover:rotate-12 group-hover:animate-bounce" />
                কোর্স
              </div>
            </div>
            <div className="text-center p-4 rounded-xl hover:bg-green-50 transition-smooth group cursor-pointer hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-400">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                ৯৫%
              </div>
              <div className="text-sm text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <Award className="h-3.5 w-3.5 text-yellow-500 transition-transform duration-300 group-hover:rotate-12 group-hover:animate-bounce" />
                সাফল্যের হার
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== প্রধান শিক্ষকের বাণী ====== */}
      <section className="py-16 bg-gradient-to-br from-green-50/50 via-white to-red-50/50">         <div className="container mx-auto px-4 max-w-5xl">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:flex hover:shadow-2xl transition-smooth hover:scale-[1.02] animate-fade-in-up animate-on-scroll">
           <div className="md:w-1/3 bg-gradient-to-br from-green-100 to-red-100 flex items-center justify-center p-8 relative overflow-hidden">
             <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-200/30 rounded-full animate-pulse-soft" />         <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-200/30 rounded-full animate-pulse-soft animation-delay-1000" />
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-green-200 shadow-xl bg-gradient-to-br from-green-200 to-red-200 hover:ring-green-400 transition-smooth hover:scale-105 hover:rotate-3">
             <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                  alt="প্রধান শিক্ষক প্রফেসর ড. মো. রহমান"
                  fill
                  sizes="(max-width: 768px) 160px, 192px"
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-10">
              <Quote className="h-8 w-8 text-green-500 mb-2 animate-pulse-soft" />
              <h2 className="text-2xl font-bold text-slate-800 hover:text-green-700 transition-colors duration-300">
                প্রধান শিক্ষকের বাণী
              </h2>
              <p className="text-gray-600 italic mt-2 leading-relaxed text-base md:text-lg hover:text-gray-800 transition-colors duration-300">
                &ldquo;শিক্ষা হল সেই শক্তিশালী অস্ত্র যা দিয়ে আপনি বিশ্বকে বদলে দিতে পারেন। 
                পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়ে আমরা শুধু 
                পণ্ডিতই নয়, দায়িত্বশীল বিশ্ব নাগরিকও তৈরি করি।&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-semibold text-slate-800 text-lg hover:text-green-700 transition-colors duration-300">
                  প্রফেসর ড. মো. রহমান
                </p>
                <p className="text-sm text-gray-500">প্রধান শিক্ষক, পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium hover:bg-green-200 transition-smooth hover:scale-105">পিএইচ.ডি.</span>
                  <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-medium hover:bg-red-200 transition-smooth hover:scale-105">৪০+ বছর</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== আমাদের সম্পর্কে / হাইলাইটস ====== */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
              <School className="h-4 w-4 animate-spin-slow" />
              আমাদের সম্পর্কে
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
              আমাদের প্রতিষ্ঠান সম্পর্কে
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              ১৯৮৫ সাল থেকে মানসম্মত শিক্ষা ও সার্বিক উন্নয়নে প্রতিশ্রুতিবদ্ধ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-red-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-smooth group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animation-delay-100 animate-on-scroll">
              <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-red-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-green-300 group-hover:to-red-300 transition-smooth group-hover:scale-110 group-hover:rotate-6">
                <GraduationCap className="h-7 w-7 text-green-700 group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-green-700 transition-colors duration-300">
                মানসম্মত শিক্ষা
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                আধুনিক শিক্ষা পদ্ধতি, অত্যাধুনিক ল্যাব এবং অভিজ্ঞ শিক্ষকমণ্ডলী 
                শিক্ষার্থীদের সাফল্যের জন্য নিবেদিত।
              </p>
              <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                <Sparkles className="h-3.5 w-3.5 group-hover:animate-spin-slow" />
                শ্রেষ্ঠত্বের নিশ্চয়তা
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-red-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-smooth group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animation-delay-200 animate-on-scroll">
              <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-red-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-green-300 group-hover:to-red-300 transition-smooth group-hover:scale-110 group-hover:rotate-6">
                <Users className="h-7 w-7 text-green-700 group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-green-700 transition-colors duration-300">
                দক্ষ শিক্ষকমণ্ডলী
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                নিবেদিতপ্রাণ শিক্ষকরা প্রতিটি শিক্ষার্থীকে তাদের পূর্ণ সম্ভাবনায় 
                পৌঁছাতে ব্যক্তিগত মনোযোগ প্রদান করেন।
              </p>
              <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                <Heart className="h-3.5 w-3.5 group-hover:animate-pulse-soft" />
                যত্নশীল শিক্ষক
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-red-50 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-smooth group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animation-delay-300 animate-on-scroll">
              <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-red-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-green-300 group-hover:to-red-300 transition-smooth group-hover:scale-110 group-hover:rotate-6">
                <Award className="h-7 w-7 text-green-700 group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-green-700 transition-colors duration-300">
                চমৎকার ফলাফল
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                বোর্ড পরীক্ষা এবং প্রতিযোগিতামূলক পরীক্ষায় বছর বছর অসাধারণ 
                একাডেমিক ফলাফল।
              </p>
              <div className="mt-4 flex items-center gap-1 text-green-600 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                <TrendingUp className="h-3.5 w-3.5 group-hover:animate-bounce" />
                ধারাবাহিক সাফল্য
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <div className="bg-gradient-to-br from-green-100 to-red-100 p-4 rounded-xl text-center hover:scale-105 transition-smooth cursor-pointer hover:shadow-lg animate-fade-in-up animation-delay-100 animate-on-scroll">
              <span className="text-sm font-semibold text-green-700 block">
                ইআইআইএন
              </span>
              <span className="text-lg font-bold text-slate-800">১২৩৪৫৬</span>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-red-100 p-4 rounded-xl text-center hover:scale-105 transition-smooth cursor-pointer hover:shadow-lg animate-fade-in-up animation-delay-200 animate-on-scroll">
              <span className="text-sm font-semibold text-green-700 block">
                প্রতিষ্ঠিত
              </span>
              <span className="text-lg font-bold text-slate-800">১৯৮৫</span>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-red-100 p-4 rounded-xl text-center hover:scale-105 transition-smooth cursor-pointer hover:shadow-lg animate-fade-in-up animation-delay-300 animate-on-scroll">
              <span className="text-sm font-semibold text-green-700 block">
                মোট শিক্ষার্থী
              </span>
              <span className="text-lg font-bold text-slate-800">৫,০০০+</span>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-red-100 p-4 rounded-xl text-center hover:scale-105 transition-smooth cursor-pointer hover:shadow-lg animate-fade-in-up animation-delay-400 animate-on-scroll">
              <span className="text-sm font-semibold text-green-700 block">
                মোট শিক্ষক
              </span>
              <span className="text-lg font-bold text-slate-800">২০০+</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====== আমাদের কোর্সসমূহ ====== */}
      <section className="py-16 bg-gradient-to-br from-green-50/30 via-white to-red-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
              <BookOpen className="h-4 w-4 animate-spin-slow" />
              একাডেমিক
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
              আমাদের কোর্সসমূহ
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              আপনার ভবিষ্যতের জন্য ডিজাইন করা বিস্তৃত একাডেমিক কোর্স থেকে বেছে নিন
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border border-green-100 group animate-fade-in-up animation-delay-100 animate-on-scroll">
              <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-green-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <BookOpen className="h-7 w-7 text-green-700 group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-green-700 transition-colors duration-300">
                বিজ্ঞান
              </h3>
              <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">
                আধুনিক ল্যাব, গবেষণা সুবিধা এবং অভিজ্ঞ শিক্ষকমণ্ডলী সহ 
                ব্যাপক বিজ্ঞান শিক্ষা।
              </p>
              <Link
                href="/academic/programs"
                className="text-green-600 font-medium text-sm flex items-center gap-1 hover:gap-3 transition-all group-hover:text-red-600"
              >
                আরও জানুন <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-2 group-hover:rotate-12" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border border-green-100 group animate-fade-in-up animation-delay-200 animate-on-scroll">
              <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-green-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <BookOpen className="h-7 w-7 text-green-700 group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-green-700 transition-colors duration-300">
                বাণিজ্য
              </h3>
              <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">
                ব্যবসা ও বাণিজ্য কোর্স যা শিক্ষার্থীদের ব্যবহারিক জ্ঞানের সাথে 
                কর্পোরেট বিশ্বের জন্য প্রস্তুত করে।
              </p>
              <Link
                href="/academic/programs"
                className="text-green-600 font-medium text-sm flex items-center gap-1 hover:gap-3 transition-all group-hover:text-red-600"
              >
                আরও জানুন <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-2 group-hover:rotate-12" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-smooth hover:-translate-y-2 hover:scale-[1.02] border border-green-100 group animate-fade-in-up animation-delay-300 animate-on-scroll">
              <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-green-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <BookOpen className="h-7 w-7 text-green-700 group-hover:animate-bounce" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-800 group-hover:text-green-700 transition-colors duration-300">
                কলা
              </h3>
              <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">
                সৃজনশীল কলা ও মানবিক কোর্স যা উদ্ভাবন, সমালোচনামূলক চিন্তাভাবনা 
                এবং শৈল্পিক অভিব্যক্তিকে উৎসাহিত করে।
              </p>
              <Link
                href="/academic/programs"
                className="text-green-600 font-medium text-sm flex items-center gap-1 hover:gap-3 transition-all group-hover:text-red-600"
              >
                আরও জানুন <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-2 group-hover:rotate-12" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====== নোটিশ বোর্ড ====== */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3 hover:bg-green-200 transition-smooth hover:scale-105">
                <Calendar className="h-4 w-4 animate-spin-slow" />
                আপডেট
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 hover:text-green-700 transition-colors duration-300">
                নোটিশ বোর্ড
              </h2>
              <p className="text-gray-600 mt-2">
                সর্বশেষ ঘোষণা ও আপডেট
              </p>
            </div>
            <Link
              href="/news"
              className="text-green-600 font-medium flex items-center gap-1 hover:gap-3 transition-all hover:text-red-600 group animate-fade-in-right"
            >
              সব দেখুন <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-2 group-hover:rotate-12" />
            </Link>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-red-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-smooth hover:-translate-y-1 hover:scale-[1.01] animate-fade-in-up animation-delay-100 animate-on-scroll">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <span className="bg-gradient-to-r from-green-200 to-green-300 text-green-800 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap hover:from-green-300 hover:to-green-400 transition-smooth hover:scale-105">
                  ভর্তি
                </span>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg hover:text-green-700 transition-colors duration-300">
                    ভর্তি ২০২৬ এখন চলমান
                  </h3>
                  <p className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-300">
                    ২০২৬ শিক্ষাবর্ষের জন্য আবেদন গ্রহণ করা হচ্ছে। 
                    সময়সীমার আগে অনলাইনে আবেদন করুন।
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                      <Calendar className="h-3.5 w-3.5" /> ১৫ মার্চ, ২০২৬
                    </span>
                    <span className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                      <Clock className="h-3.5 w-3.5" /> ১০:০০ AM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-red-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-smooth hover:-translate-y-1 hover:scale-[1.01] animate-fade-in-up animation-delay-200 animate-on-scroll">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <span className="bg-gradient-to-r from-green-200 to-green-300 text-green-800 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap hover:from-green-300 hover:to-green-400 transition-smooth hover:scale-105">
                  ইভেন্ট
                </span>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg hover:text-green-700 transition-colors duration-300">
                    বার্ষিক বিজ্ঞান মেলা ২০২৬
                  </h3>
                  <p className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-300">
                    উদ্ভাবনী প্রকল্প এবং গবেষণা কাজ প্রদর্শনের জন্য 
                    বার্ষিক বিজ্ঞান মেলায় যোগ দিন।
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                      <Calendar className="h-3.5 w-3.5" /> ২০ মার্চ, ২০২৬
                    </span>
                    <span className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                      <Clock className="h-3.5 w-3.5" /> ৯:০০ AM – ৫:০০ PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-red-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-smooth hover:-translate-y-1 hover:scale-[1.01] animate-fade-in-up animation-delay-300 animate-on-scroll">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <span className="bg-gradient-to-r from-green-200 to-green-300 text-green-800 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap hover:from-green-300 hover:to-green-400 transition-smooth hover:scale-105">
                  নোটিশ
                </span>
                <div>
                  <h3 className="font-semibold text-slate-800 text-lg hover:text-green-700 transition-colors duration-300">
                    পরীক্ষার রুটিন প্রকাশিত
                  </h3>
                  <p className="text-gray-600 text-sm hover:text-gray-800 transition-colors duration-300">
                    ২০২৬ শিক্ষাবর্ষের বার্ষিক পরীক্ষার রুটিন প্রকাশিত হয়েছে।
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1 hover:text-gray-700 transition-colors duration-300">
                      <Calendar className="h-3.5 w-3.5" /> ২৫ মার্চ, ২০২৬
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== ক্যাম্পাস সুবিধাসমূহ ====== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
              <Building2 className="h-4 w-4 animate-spin-slow" />
              ক্যাম্পাস সুবিধাসমূহ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
              বিশ্বমানের সুবিধাসমূহ
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              সামগ্রিক উন্নয়নের জন্য ডিজাইন করা আধুনিক অবকাঠামো ও সুযোগ-সুবিধা
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-2xl text-center hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.05] group animate-fade-in-up animation-delay-50 animate-on-scroll">
              <div className="w-14 h-14 bg-green-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Library className="h-7 w-7 text-green-700 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm group-hover:text-green-700 transition-colors duration-300">আধুনিক গ্রন্থাগার</h3>
              <p className="text-xs text-gray-500 mt-1">১০,০০০+ বই</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-2xl text-center hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.05] group animate-fade-in-up animation-delay-100 animate-on-scroll">
              <div className="w-14 h-14 bg-blue-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Laptop className="h-7 w-7 text-blue-700 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm group-hover:text-blue-700 transition-colors duration-300">কম্পিউটার ল্যাব</h3>
              <p className="text-xs text-gray-500 mt-1">১০০+ কম্পিউটার</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-2xl text-center hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.05] group animate-fade-in-up animation-delay-150 animate-on-scroll">
              <div className="w-14 h-14 bg-purple-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Microscope className="h-7 w-7 text-purple-700 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm group-hover:text-purple-700 transition-colors duration-300">বিজ্ঞান ল্যাব</h3>
              <p className="text-xs text-gray-500 mt-1">৫টি আধুনিক ল্যাব</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-5 rounded-2xl text-center hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.05] group animate-fade-in-up animation-delay-200 animate-on-scroll">
              <div className="w-14 h-14 bg-red-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Dumbbell className="h-7 w-7 text-red-700 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm group-hover:text-red-700 transition-colors duration-300">ক্রীড়া কমপ্লেক্স</h3>
              <p className="text-xs text-gray-500 mt-1">ইনডোর ও আউটডোর</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-5 rounded-2xl text-center hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.05] group animate-fade-in-up animation-delay-250 animate-on-scroll">
              <div className="w-14 h-14 bg-yellow-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Utensils className="h-7 w-7 text-yellow-700 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm group-hover:text-yellow-700 transition-colors duration-300">ক্যাফেটেরিয়া</h3>
              <p className="text-xs text-gray-500 mt-1">স্বাস্থ্যকর খাবার</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-5 rounded-2xl text-center hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.05] group animate-fade-in-up animation-delay-300 animate-on-scroll">
              <div className="w-14 h-14 bg-pink-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Bus className="h-7 w-7 text-pink-700 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm group-hover:text-pink-700 transition-colors duration-300">পরিবহন ব্যবস্থা</h3>
              <p className="text-xs text-gray-500 mt-1">স্কুল বাস সার্ভিস</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-2xl text-center hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.05] group animate-fade-in-up animation-delay-350 animate-on-scroll">
              <div className="w-14 h-14 bg-indigo-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <ShieldCheck className="h-7 w-7 text-indigo-700 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm group-hover:text-indigo-700 transition-colors duration-300">নিরাপত্তা ব্যবস্থা</h3>
              <p className="text-xs text-gray-500 mt-1">২৪/৭ সিসিটিভি</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-5 rounded-2xl text-center hover:shadow-xl transition-smooth hover:-translate-y-2 hover:scale-[1.05] group animate-fade-in-up animation-delay-400 animate-on-scroll">
              <div className="w-14 h-14 bg-teal-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Wifi className="h-7 w-7 text-teal-700 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-slate-800 text-sm group-hover:text-teal-700 transition-colors duration-300">ওয়াই-ফাই ক্যাম্পাস</h3>
              <p className="text-xs text-gray-500 mt-1">হাই-স্পিড ইন্টারনেট</p>
            </div>
          </div>

          <div className="mt-8 text-center animate-fade-in-up">
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-red-600 transition-colors group hover:gap-3"
            >
              সব সুবিধা দেখুন <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-2 group-hover:rotate-12" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== সংবাদ ও ইভেন্ট ====== */}
      <section className="py-16 bg-gradient-to-br from-green-50/30 via-white to-red-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover:scale-105">
              <Calendar className="h-4 w-4 animate-spin-slow" />
              ইভেন্ট
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 hover:text-green-700 transition-colors duration-300">
              সংবাদ ও ইভেন্ট
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              একাডেমিক, সাংস্কৃতিক, ক্রীড়া ও জাতীয় দিবস উদযাপন
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-smooth group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animation-delay-100 animate-on-scroll">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-green-400 to-green-600">
                <Image
                  src="/image/image8.jpg"
                  alt="আন্তঃস্কুল ক্রিকেট টুর্নামেন্ট"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-green-600 transition-smooth hover:scale-105">
                    ক্রীড়া
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-xs hover:bg-black/60 transition-smooth hover:scale-105">
                  🏏 ক্রিকেট
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 text-lg group-hover:text-green-600 transition-colors duration-300">
                  আন্তঃস্কুল ক্রিকেট টুর্নামেন্ট
                </h3>
                <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-800 transition-colors duration-300">
                  ২০+ স্কুলের অংশগ্রহণে বার্ষিক ক্রিকেট টুর্নামেন্ট।
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  <Calendar className="h-3.5 w-3.5" /> ৫ এপ্রিল, ২০২৬
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-smooth group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animation-delay-200 animate-on-scroll">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-400 to-purple-600">
                <Image
                  src="/image/image4.jpg"
                  alt="সাংস্কৃতিক অনুষ্ঠান"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-purple-600 transition-smooth hover:scale-105">
                    সাংস্কৃতিক
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-xs hover:bg-black/60 transition-smooth hover:scale-105">
                  🎭 পরিবেশনা
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 text-lg group-hover:text-purple-600 transition-colors duration-300">
                  বার্ষিক সাংস্কৃতিক অনুষ্ঠান
                </h3>
                <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-800 transition-colors duration-300">
                  শিক্ষার্থীদের দ্বারা সাংস্কৃতিক পরিবেশনা, সঙ্গীত, নৃত্য ও নাটক।
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  <Calendar className="h-3.5 w-3.5" /> ১২ এপ্রিল, ২০২৬
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-smooth group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animation-delay-300 animate-on-scroll">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-400 to-red-600">
                <Image
                  src="/image/image11.jpg"
                  alt="জাতীয় দিবস উদযাপন"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full hover:bg-red-700 transition-smooth hover:scale-105">
                    জাতীয় দিবস
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-2 py-1 rounded text-white text-xs hover:bg-black/60 transition-smooth hover:scale-105">
                  🇧🇩 বাংলাদেশ
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-800 text-lg group-hover:text-red-600 transition-colors duration-300">
                  জাতীয় দিবস উদযাপন
                </h3>
                <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-800 transition-colors duration-300">
                  পতাকা উত্তোলন, সাংস্কৃতিক অনুষ্ঠান এবং দেশাত্মবোধক সমাবেশের 
                  মাধ্যমে মহান উদযাপন।
                </p>
                <div className="flex items-center gap-2 mt-3 text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                  <Calendar className="h-3.5 w-3.5" /> ২৬ মার্চ, ২০২৬
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== গ্যালারি প্রিভিউ ====== */}
      <section className="py-16 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-3 hover:bg-green-200 transition-smooth hover:scale-105">
                <Camera className="h-4 w-4 animate-spin-slow" />
                স্মৃতিচারণ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 hover:text-green-700 transition-colors duration-300">
                গ্যালারি
              </h2>
              <p className="text-gray-600 mt-2">সাম্প্রতিক মুহূর্তগুলো</p>
            </div>
            <Link
              href="/gallery"
              className="text-green-600 font-medium flex items-center gap-1 hover:gap-3 transition-all hover:text-red-600 group animate-fade-in-right"
            >
              সব দেখুন <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-2 group-hover:rotate-12" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-smooth group cursor-pointer bg-gradient-to-br from-green-200 to-green-400 hover:scale-[1.05] animate-fade-in-up animation-delay-50 animate-on-scroll">
              <Image
                src="/image/image8.jpg"
                alt="সমাবর্তন অনুষ্ঠান"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-sm font-medium">🎓 সমাবর্তন</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-smooth group cursor-pointer bg-gradient-to-br from-blue-200 to-blue-400 hover:scale-[1.05] animate-fade-in-up animation-delay-150 animate-on-scroll">
              <Image
                src="/image/image4.jpg"
                alt="বিদ্যালয় ভবন"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-sm font-medium">🏫 ক্যাম্পাস</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-smooth group cursor-pointer bg-gradient-to-br from-purple-200 to-purple-400 hover:scale-[1.05] animate-fade-in-up animation-delay-250 animate-on-scroll">
              <Image
                src="/image/image10.jpg"
                alt="শ্রেণীকক্ষে শিক্ষার্থীরা"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-sm font-medium">📚 শ্রেণীকক্ষ</span>
              </div>
            </div>

            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-smooth group cursor-pointer bg-gradient-to-br from-red-200 to-red-400 hover:scale-[1.05] animate-fade-in-up animation-delay-350 animate-on-scroll">
              <Image
                src="/image/image11.jpg"
                alt="গ্রন্থাগার"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="text-white text-sm font-medium">📖 গ্রন্থাগার</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6">
            <span className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-lg transition-smooth hover:scale-105 hover:text-green-600 animate-fade-in-up animation-delay-100">
              <Camera className="h-4 w-4 text-green-600" /> ১২০+ ছবি
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-lg transition-smooth hover:scale-105 hover:text-red-600 animate-fade-in-up animation-delay-200">
              <Video className="h-4 w-4 text-red-600" /> ১৫+ ভিডিও
            </span>
          </div>
        </div>
      </section>

      {/* ====== যোগাযোগ / মানচিত্র ====== */}
      <section className="py-16 bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-soft animation-delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4 hover:bg-white/30 transition-smooth hover:scale-105">
              <Mail className="h-4 w-4 animate-spin-slow" />
              আমাদের সাথে যোগাযোগ করুন
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 hover:text-yellow-200 transition-colors duration-300">
              যোগাযোগ করুন
            </h2>
            <p className="text-center text-white/80 text-base md:text-lg max-w-2xl mx-auto">
              আপনার মতামত আমাদের কাছে গুরুত্বপূর্ণ — যেকোনো সময় আমাদের সাথে যোগাযোগ করুন
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-smooth text-center group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animation-delay-100 animate-on-scroll">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Phone className="h-7 w-7 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-lg">ফোন</h3>
              <p className="text-white/90">+৮৮০ ১২৩৪-৫৬৭৮৯০</p>
              <p className="text-sm text-white/70">সোম–শুক্র: ৯:০০ AM – ৫:০০ PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-smooth text-center group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animation-delay-200 animate-on-scroll">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <Mail className="h-7 w-7 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-lg">ইমেইল</h3>
              <p className="text-white/90">info@palashbari.edu.bd</p>
              <p className="text-sm text-white/70">২৪ ঘন্টার মধ্যে উত্তর</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/20 transition-smooth text-center group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animation-delay-300 animate-on-scroll">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-smooth">
                <MapPin className="h-7 w-7 group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-lg">ঠিকানা</h3>
              <p className="text-white/90">পলাশবাড়ী, গাইবান্ধা, বাংলাদেশ</p>
              <p className="text-sm text-white/70 flex items-center justify-center gap-1 hover:text-white transition-colors duration-300">
                <MapPinned className="h-3.5 w-3.5" /> গুগল ম্যাপ
              </p>
            </div>
          </div>
          <div className="mt-12 text-center animate-fade-in-up animation-delay-400">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-6 md:px-8 py-3 md:py-3.5 rounded-xl font-semibold hover:bg-gray-100 transition-smooth hover:scale-105 hover:shadow-2xl shadow-lg group"
            >
              যোগাযোগ করুন <ChevronRight className="h-4 w-4 transition-smooth group-hover:translate-x-2 group-hover:rotate-12" />
            </Link>
          </div>
        </div>
      </section>

      
    </main>
  );
}