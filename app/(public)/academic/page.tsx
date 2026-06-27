"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Calendar,
  Clock,
  ChevronRight,
  School,
  Layers,
  FileText,
  BookMarked,
} from "lucide-react";

export default function AcademicProgramsPage() {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const quickLinks = [
    { 
      id: "classes", 
      title: "শ্রেণী ও বিভাগের তথ্য", 
      icon: <Layers className="h-8 w-8" />, 
      desc: "উপলব্ধ শ্রেণী, একাডেমিক শাখা ও বিভাগসমূহ",
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100",
      link: "/academic/classes"
    },
    { 
      id: "curriculum", 
      title: "পাঠ্যক্রমের তথ্য", 
      icon: <BookOpen className="h-8 w-8" />, 
      desc: "এনসিটিবি পাঠ্যক্রম ও একাডেমিক কার্যক্রম",
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      link: "/academic/curriculum"
    },
    { 
      id: "calendar", 
      title: "একাডেমিক ক্যালেন্ডার", 
      icon: <Calendar className="h-8 w-8" />, 
      desc: "বার্ষিক একাডেমিক ক্যালেন্ডার ও ইভেন্টসমূহ",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      link: "/academic/calendar"
    },
    { 
      id: "routine", 
      title: "শ্রেণী রুটিন", 
      icon: <Clock className="h-8 w-8" />, 
      desc: "পিডিএফ আপলোড ও ডাউনলোড সুবিধা",
      color: "from-red-400 to-red-600",
      bgColor: "from-red-50 to-red-100",
      link: "/academic/routine"
    },
    { 
      id: "exam", 
      title: "পরীক্ষার রুটিন", 
      icon: <FileText className="h-8 w-8" />, 
      desc: "পিডিএফ আপলোড ও ডাউনলোড সুবিধা",
      color: "from-yellow-400 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      link: "/academic/exam"
    },
    { 
      id: "syllabus", 
      title: "সিলেবাস", 
      icon: <BookMarked className="h-8 w-8" />, 
      desc: "শ্রেণীভিত্তিক সিলেবাস ডাউনলোড",
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      link: "/academic/syllabus"
    },
  ];

  const schoolPrograms = [
    {
      id: 1,
      name: "প্রাথমিক শিক্ষা",
      grade: "১ম - ৫ম শ্রেণী",
      age: "৬ - ১০ বছর",
      duration: "৫ বছর",
      color: "from-green-400 to-green-600",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      departments: ["সাধারণ", "বিজ্ঞান"]
    },
    {
      id: 2,
      name: "নিম্ন মাধ্যমিক",
      grade: "৬ষ্ঠ - ৮ম শ্রেণী",
      age: "১১ - ১৩ বছর",
      duration: "৩ বছর",
      color: "from-blue-400 to-blue-600",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      departments: ["বিজ্ঞান", "বাণিজ্য", "মানবিক"]
    },
    {
      id: 3,
      name: "মাধ্যমিক",
      grade: "৯ম - ১০ম শ্রেণী",
      age: "১৪ - ১৬ বছর",
      duration: "২ বছর",
      color: "from-purple-400 to-purple-600",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c7f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      departments: ["বিজ্ঞান", "বাণিজ্য", "মানবিক"]
    },
  ];

  const collegePrograms = [
    {
      id: 4,
      name: "বিজ্ঞান শাখা",
      grade: "১১শ - ১২শ শ্রেণী",
      age: "১৬ - ১৮ বছর",
      duration: "২ বছর",
      color: "from-red-400 to-red-600",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      departments: ["বিজ্ঞান"]
    },
    {
      id: 5,
      name: "বাণিজ্য শাখা",
      grade: "১১শ - ১২শ শ্রেণী",
      age: "১৬ - ১৮ বছর",
      duration: "২ বছর",
      color: "from-yellow-400 to-yellow-600",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      departments: ["বাণিজ্য"]
    },
    {
      id: 6,
      name: "মানবিক শাখা",
      grade: "১১শ - ১২শ শ্রেণী",
      age: "১৬ - ১৮ বছর",
      duration: "২ বছর",
      color: "from-pink-400 to-pink-600",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      departments: ["মানবিক"]
    },
  ];

  return (
    <main className="min-h-screen pt-16 lg:pt-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* ====== HERO SECTION ====== */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-500 to-red-700 text-white overflow-hidden py-12 md:py-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 clip-path-slant" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-white/5 rounded-tr-full animate-bounce-slow" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />

        <div className="container mx-auto px-4 py-12 md:py-16 relative z-10 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-6 hover:bg-white/30 transition-smooth hover-scale">
              <BookOpen className="h-4 w-4 animate-spin-slow" />
              <span>একাডেমিক প্রোগ্রাম ২০২৬</span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fade-in-up">
              আমাদের <span className="text-yellow-300">একাডেমিক প্রোগ্রাম</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
              তরুণ মনকে লালন ও ভবিষ্যতের নেতা তৈরির জন্য আমাদের ব্যাপক শিক্ষামূলক প্রোগ্রাম আবিষ্কার করুন।
            </p>
          </div>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className="py-12 bg-white/80 backdrop-blur-sm shadow-sm relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            <div className="text-center p-3 md:p-4 rounded-xl hover:bg-green-50 transition-smooth group cursor-pointer hover-scale hover:shadow-lg animate-fade-in-up animation-delay-100">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                ৩০+
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <BookOpen className="h-3 w-3 md:h-3.5 md:w-3.5 text-green-500 group-hover:rotate-12 transition-transform duration-300" />
                প্রোগ্রাম
              </div>
            </div>
            <div className="text-center p-3 md:p-4 rounded-xl hover:bg-green-50 transition-smooth group cursor-pointer hover-scale hover:shadow-lg animate-fade-in-up animation-delay-200">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                ৫০০০+
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <Users className="h-3 w-3 md:h-3.5 md:w-3.5 text-red-500 group-hover:rotate-12 transition-transform duration-300" />
                শিক্ষার্থী
              </div>
            </div>
            <div className="text-center p-3 md:p-4 rounded-xl hover:bg-green-50 transition-smooth group cursor-pointer hover-scale hover:shadow-lg animate-fade-in-up animation-delay-300">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                ২০০+
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <GraduationCap className="h-3 w-3 md:h-3.5 md:w-3.5 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
                শিক্ষক
              </div>
            </div>
            <div className="text-center p-3 md:p-4 rounded-xl hover:bg-green-50 transition-smooth group cursor-pointer hover-scale hover:shadow-lg animate-fade-in-up animation-delay-400">
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                ৯৫%
              </div>
              <div className="text-xs md:text-sm text-gray-600 mt-1 font-medium flex items-center justify-center gap-1">
                <Award className="h-3 w-3 md:h-3.5 md:w-3.5 text-yellow-500 group-hover:rotate-12 transition-transform duration-300" />
                সাফল্যের হার
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== QUICK LINKS ====== */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover-scale">
              <Layers className="h-4 w-4 animate-spin-slow" />
              দ্রুত প্রবেশাধিকার
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4 hover:text-green-700 transition-colors duration-300">
              একাডেমিক সম্পদ অন্বেষণ করুন
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              সমস্ত একাডেমিক তথ্য ও সম্পদের দ্রুত প্রবেশাধিকার
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {quickLinks.map((item, index) => (
              <Link
                key={item.id}
                href={item.link}
                className={`bg-gradient-to-br ${item.bgColor} p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animate-on-scroll`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 text-white`}>
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-green-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2 group-hover:text-gray-800 transition-colors duration-300">
                  {item.desc}
                </p>
                <div className="mt-3 md:mt-4 flex items-center gap-2 text-green-600 font-medium group-hover:gap-3 transition-all duration-300">
                  অন্বেষণ <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SCHOOL SECTION ====== */}
      <section id="school-section" className="py-12 md:py-16 bg-gradient-to-br from-green-50/30 via-white to-red-50/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover-scale">
              <School className="h-4 w-4 animate-spin-slow" />
              স্কুল বিভাগ
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4 hover:text-green-700 transition-colors duration-300">
              স্কুল প্রোগ্রাম
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              গুণগত শিক্ষা ও সামগ্রিক উন্নয়নের মাধ্যমে তরুণ মনকে লালন করা
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {schoolPrograms.map((program, index) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animate-on-scroll"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={`relative h-48 md:h-56 overflow-hidden bg-gradient-to-br ${program.color}`}>
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{program.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-white/90 text-xs md:text-sm mt-1">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3 md:h-3.5 md:w-3.5" /> {program.grade}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 md:h-3.5 md:w-3.5" /> {program.age}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 md:h-3.5 md:w-3.5" /> {program.duration}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/40 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs text-white">
                    {program.grade}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex flex-wrap gap-1.5">
                    {program.departments.map((dept, idx) => (
                      <span key={idx} className="text-[10px] md:text-xs bg-gray-100 text-gray-600 px-1.5 md:px-2 py-0.5 rounded">
                        {dept}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/academic/portal`}
                    className="mt-3 md:mt-4 inline-flex items-center gap-2 text-green-600 font-medium hover:text-red-600 transition-colors group-hover:gap-3 text-sm md:text-base"
                  >
                    প্রোগ্রাম অন্বেষণ
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== COLLEGE SECTION ====== */}
      <section id="college-section" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-down">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 hover:bg-green-200 transition-smooth hover-scale">
              <GraduationCap className="h-4 w-4 animate-spin-slow" />
              কলেজ বিভাগ
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3 md:mb-4 hover:text-green-700 transition-colors duration-300">
              কলেজ প্রোগ্রাম
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              বিশ্ববিদ্যালয় ও পেশাদার কর্মজীবনের জন্য শিক্ষার্থীদের প্রস্তুত করার উন্নত প্রোগ্রাম
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {collegePrograms.map((program, index) => (
              <div
                key={program.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up animate-on-scroll"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className={`relative h-48 md:h-56 overflow-hidden bg-gradient-to-br ${program.color}`}>
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{program.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 text-white/90 text-xs md:text-sm mt-1">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3 md:h-3.5 md:w-3.5" /> {program.grade}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 md:h-3.5 md:w-3.5" /> {program.age}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 md:h-3.5 md:w-3.5" /> {program.duration}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-black/40 backdrop-blur-sm px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs text-white">
                    উচ্চ মাধ্যমিক
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex flex-wrap gap-1.5">
                    {program.departments.map((dept, idx) => (
                      <span key={idx} className="text-[10px] md:text-xs bg-gray-100 text-gray-600 px-1.5 md:px-2 py-0.5 rounded">
                        {dept}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/academic/portal`}
                    className="mt-3 md:mt-4 inline-flex items-center gap-2 text-green-600 font-medium hover:text-red-600 transition-colors group-hover:gap-3 text-sm md:text-base"
                  >
                    প্রোগ্রাম অন্বেষণ
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}