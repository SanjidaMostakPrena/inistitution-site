
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  Info,
  BookOpen,
  Mail,
  School,
  ChevronRight,
  Users,
  GraduationCap,
  User,
  Trophy,
  Image as ImageIcon,
  Download,
  Phone,
  Calendar,
  FileText,
  ClipboardList,
  Award,
  Video,
  Newspaper,
  Bell,
  FileCheck,
  LayoutGrid,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicOpen, setAcademicOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [downloadsOpen, setDownloadsOpen] = useState(false);

  const downloadsItems = [
    { label: "ব্রোশিওর ডাউনলোড", href: "/download/brochure" },
    { label: "প্রসপেক্টাস ডাউনলোড", href: "/download/prospectus" },
    { label: "আবেদন ফর্ম ডাউনলোড", href: "/download/application-form" },
    { label: "একাডেমিক ক্যালেন্ডার", href: "/download/calendar" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname?.startsWith(href);
  };

  const academicItems = [
    { label: "একাডেমিক প্রোগ্রাম", href: "/academic" },
    { label: "একাডেমিক পোর্টাল", href: "/academic/portal" },
  ];

  const admissionItems = [
    { label: "ভর্তি তথ্য", href: "/admission/requirment" },
    { label: "অনলাইন ভর্তি ফর্ম", href: "/admission/form" },
    { label: "ভর্তি বিজ্ঞপ্তি", href: "/admission/notice" },
  ];

  const galleryItems = [
    { label: "ছবি গ্যালারি", href: "/gallery/photo" },
    
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-1.5 text-xs">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" />
                <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" />
                <span>info@palashbari.edu.bd</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="w-px h-4 bg-white/30" />
              <Link href="/contact" className="hover:text-red-200 transition-colors">
                যোগাযোগ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl overflow-hidden shadow-lg shadow-red-200 group-hover:shadow-red-300 transition-shadow duration-300">
                <Image
                  src="/image/logo.jpeg"
                  alt="পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়ের লোগো"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base lg:text-xl font-bold text-gray-800 leading-tight">
                পলাশবাড়ী সুতি মাহমুদ
              </h1>
              <p className="text-[9px] lg:text-xs text-red-600 font-semibold">
                মডেল পাইলট সরকারি উচ্চ বিদ্যালয়
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {/* Home */}
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                ${isActive("/") && !isActive("/academic") && !isActive("/admission") && !isActive("/result")
                  ? "text-red-600 bg-red-50"
                  : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
            >
              <Home className="h-4 w-4" />
              হোম
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                ${isActive("/about")
                  ? "text-red-600 bg-red-50"
                  : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
            >
              <Info className="h-4 w-4" />
              সম্পর্কে
            </Link>

            {/* Academic Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAcademicOpen(true)}
              onMouseLeave={() => setAcademicOpen(false)}
            >
              <div
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer
                  ${isActive("/academic")
                    ? "text-red-600 bg-red-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                শিক্ষা
              </div>

              {academicOpen && (
                <div className="absolute top-full left-0 mt-1 min-w-[240px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                  <div className="p-2">
                    {academicItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200
                          ${pathname === item.href
                            ? "bg-red-50 text-red-600"
                            : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                          }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            pathname === item.href ? "bg-red-500" : "bg-gray-300"
                          }`}
                        />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Admission Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAdmissionOpen(true)}
              onMouseLeave={() => setAdmissionOpen(false)}
            >
              <div
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer
                  ${isActive("/admission")
                    ? "text-red-600 bg-red-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                ভর্তি
              </div>

              {admissionOpen && (
                <div className="absolute top-full left-0 mt-1 min-w-[240px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                  <div className="p-2">
                    {admissionItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200
                          ${pathname === item.href
                            ? "bg-red-50 text-red-600"
                            : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                          }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            pathname === item.href ? "bg-red-500" : "bg-gray-300"
                          }`}
                        />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Results - Direct Button */}
            <Link
              href="/result"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                ${isActive("/result")
                  ? "text-red-600 bg-red-50"
                  : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
            >
              <Trophy className="h-4 w-4" />
              ফলাফল
            </Link>

            {/* Gallery Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <div
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer
                  ${isActive("/gallery")
                    ? "text-red-600 bg-red-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
              >
                <ImageIcon className="h-4 w-4" />
                গ্যালারি
              </div>

              {galleryOpen && (
                <div className="absolute top-full left-0 mt-1 min-w-[220px] bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
                  <div className="p-2">
                    {galleryItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200
                          ${pathname === item.href
                            ? "bg-red-50 text-red-600"
                            : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                          }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            pathname === item.href ? "bg-red-500" : "bg-gray-300"
                          }`}
                        />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Downloads */}
            <Link
              href="/download"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                ${isActive("/download")
                  ? "text-red-600 bg-red-50"
                  : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                }`}
            >
              <Download className="h-4 w-4" />
              ডাউনলোড
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-lg hover:bg-red-50 transition-colors duration-200 relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`xl:hidden fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <Image
                src="/image/logo.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-800 leading-tight">
                পলাশবাড়ী সুতি মাহমুদ
              </h2>
              <p className="text-[10px] text-red-600 font-semibold">
                মডেল পাইলট সরকারি উচ্চ বিদ্যালয়
              </p>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-5rem)] pb-24">
          <div className="px-2 py-3">
            {/* Home Mobile */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 border-b border-gray-100
                ${isActive("/") && !isActive("/academic") && !isActive("/admission") && !isActive("/result")
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
            >
              <Home className="h-5 w-5" />
              <span className="font-medium">হোম</span>
            </Link>

            {/* About Mobile */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 border-b border-gray-100
                ${isActive("/about")
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
            >
              <Info className="h-5 w-5" />
              <span className="font-medium">সম্পর্কে</span>
            </Link>

            {/* Academic Mobile */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setAcademicOpen(!academicOpen)}
                className="flex items-center justify-between w-full px-4 py-3 hover:bg-red-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-red-500" />
                  <span className="font-medium text-gray-800">শিক্ষা</span>
                </div>
                <ChevronRight
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    academicOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  academicOpen ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <div className="bg-gray-50/50 py-2">
                  {academicItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setAcademicOpen(false);
                      }}
                      className="flex items-center gap-3 px-8 py-2.5 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50/50 transition-colors duration-200"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Admission Mobile */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setAdmissionOpen(!admissionOpen)}
                className="flex items-center justify-between w-full px-4 py-3 hover:bg-red-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-red-500" />
                  <span className="font-medium text-gray-800">ভর্তি</span>
                </div>
                <ChevronRight
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    admissionOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  admissionOpen ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <div className="bg-gray-50/50 py-2">
                  {admissionItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setAdmissionOpen(false);
                      }}
                      className="flex items-center gap-3 px-8 py-2.5 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50/50 transition-colors duration-200"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Mobile - Direct Button */}
            <Link
              href="/result"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 border-b border-gray-100
                ${isActive("/result")
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
            >
              <Trophy className="h-5 w-5 text-red-500" />
              <span className="font-medium">ফলাফল</span>
            </Link>

            {/* Gallery Mobile */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setGalleryOpen(!galleryOpen)}
                className="flex items-center justify-between w-full px-4 py-3 hover:bg-red-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <ImageIcon className="h-5 w-5 text-red-500" />
                  <span className="font-medium text-gray-800">গ্যালারি</span>
                </div>
                <ChevronRight
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    galleryOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  galleryOpen ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <div className="bg-gray-50/50 py-2">
                  {galleryItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setGalleryOpen(false);
                      }}
                      className="flex items-center gap-3 px-8 py-2.5 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50/50 transition-colors duration-200"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Downloads Mobile */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setDownloadsOpen(!downloadsOpen)}
                className="flex items-center justify-between w-full px-4 py-3 hover:bg-red-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-3">
                  <Download className="h-5 w-5 text-red-500" />
                  <span className="font-medium text-gray-800">ডাউনলোড</span>
                </div>
                <ChevronRight
                  className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                    downloadsOpen ? "rotate-90" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  downloadsOpen ? "max-h-[400px]" : "max-h-0"
                }`}
              >
                <div className="bg-gray-50/50 py-2">
                  {downloadsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setDownloadsOpen(false);
                      }}
                      className="flex items-center gap-3 px-8 py-2.5 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50/50 transition-colors duration-200"
                    >
                      <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Mobile */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 border-b border-gray-100
                ${isActive("/contact")
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
            >
              <Phone className="h-5 w-5 text-red-500" />
              <span className="font-medium">যোগাযোগ</span>
            </Link>

            <div className="mt-4 p-4 bg-gradient-to-r from-red-50 to-red-100/50 rounded-xl mx-2">
              <h3 className="text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-500" />
                যোগাযোগের তথ্য
              </h3>
              <div className="space-y-1.5 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-red-400" />
                  <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-red-400" />
                  <span>info@palashbari.edu.bd</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-400 to-red-500" />
      </div>
    </header>
  );
}