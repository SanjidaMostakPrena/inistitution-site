"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const quickLinks = [
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "ভর্তি", href: "/admission/form" },
    { name: "ফলাফল", href: "/result" },
    { name: "যোগাযোগ", href: "/contact" },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "hover:text-blue-500 hover:scale-110 hover:-translate-y-1",
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      color: "hover:text-sky-400 hover:scale-110 hover:-translate-y-1",
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      color: "hover:text-red-500 hover:scale-110 hover:-translate-y-1",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "hover:text-blue-600 hover:scale-110 hover:-translate-y-1",
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      color: "hover:text-pink-400 hover:scale-110 hover:-translate-y-1",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* About Section with Logo - Fully Responsive */}
          <div className="animate-on-scroll-left animation-delay-100">
            <div className="mb-4 flex items-center gap-3 sm:gap-4">
              {/* Logo - Responsive Size */}
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex-shrink-0 overflow-hidden rounded-xl transition-smooth hover:scale-110 hover:rotate-6 hover:shadow-xl">
                <Image
                  src="/image/logo.jpeg"
                  alt="পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়ের লোগো"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                  priority
                />
              </div>
              
              {/* School Name - Responsive Text Size */}
              <div className="transition-smooth hover:translate-x-1 min-w-0 flex-1">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight font-bold transition-smooth hover:text-red-400">
                  <span className="block sm:inline">পলাশবাড়ী সুতি মাহমুদ</span>
                  <span className="block text-red-500 transition-smooth hover:text-yellow-400 hover:scale-105">
                    মডেল পাইলট সরকারি উচ্চ বিদ্যালয়
                  </span>
                </h3>
                <p className="text-[10px] sm:text-xs text-gray-400 transition-smooth hover:text-gray-300">
                  শিক্ষায় শ্রেষ্ঠত্ব
                </p>
              </div>
            </div>
            
            {/* Description - Responsive Text */}
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 transition-smooth hover:text-gray-300">
              শিক্ষার মাধ্যমে জাতি গঠনে প্রতিশ্রুতিবদ্ধ। ১৯৯০ সাল থেকে শিক্ষার 
              আলো ছড়িয়ে চলেছে পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়।
            </p>
            
            {/* Social Links - Responsive */}
            <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className={`group rounded-lg bg-white/5 p-1.5 sm:p-2 text-gray-400 transition-bounce hover:bg-white/10 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-on-scroll animation-delay-200">
            <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white transition-smooth hover:text-red-400 hover:translate-x-1">
              দ্রুত লিংক
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link, index) => (
                <li 
                  key={link.name}
                  className="animate-on-scroll-right"
                  style={{ animationDelay: `${150 + index * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    className="group text-xs sm:text-sm text-gray-400 transition-smooth hover:text-red-400 hover:translate-x-2 inline-flex items-center gap-2"
                  >
                    <span className="text-red-500 opacity-0 transition-smooth group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll animation-delay-300">
            <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white transition-smooth hover:text-red-400 hover:translate-x-1">
              যোগাযোগ
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="group flex items-start gap-2 sm:gap-3 text-gray-400 transition-smooth hover:text-white hover:translate-x-1">
                <MapPin className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-red-400 transition-smooth group-hover:scale-110 group-hover:rotate-12" />
                <span className="break-words">পলাশবাড়ী, গাইবান্ধা, বাংলাদেশ</span>
              </li>
              <li className="group flex items-center gap-2 sm:gap-3 text-gray-400 transition-smooth hover:text-white hover:translate-x-1">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-red-400 transition-smooth group-hover:scale-110 group-hover:rotate-12" />
                <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
              </li>
              <li className="group flex items-center gap-2 sm:gap-3 text-gray-400 transition-smooth hover:text-white hover:translate-x-1">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-red-400 transition-smooth group-hover:scale-110 group-hover:rotate-12" />
                <span className="break-words">info@palashbari.edu.bd</span>
              </li>
            </ul>
          </div>

          {/* Location Map */}
          <div className="animate-on-scroll-scale animation-delay-400">
            <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-white transition-smooth hover:text-red-400 hover:translate-x-1">
              অবস্থান
            </h4>
            <div className="h-40 sm:h-44 md:h-48 w-full overflow-hidden rounded-lg bg-gray-800 transition-smooth hover:shadow-2xl hover:shadow-red-500/20 hover:scale-[1.02] hover:rotate-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902!2d90.391!3d23.750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b0c8a8f8f9%3A0x8b7c8f8f8f8f8f8!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1234567890"
                className="h-full w-full transition-smooth hover:scale-105"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়ের অবস্থান"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 border-t border-gray-800 pt-6 sm:pt-8 text-center text-[10px] sm:text-sm text-gray-400 animate-on-scroll animation-delay-500">
          <p className="transition-smooth hover:text-red-400 hover:scale-105 inline-block">
            &copy; {currentYear} পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়। 
            সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </div>

      {/* Decorative animated elements - Hidden on mobile */}
      <div className="hidden sm:block fixed bottom-4 right-4 opacity-20 animate-pulse-soft pointer-events-none">
        <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-red-500/20 blur-2xl"></div>
      </div>
      <div className="hidden lg:block fixed top-1/4 left-4 opacity-10 animate-spin-slow pointer-events-none">
        <div className="h-20 w-20 lg:h-24 lg:w-24 rounded-full border-4 border-red-500/10"></div>
      </div>
    </footer>
  )
}