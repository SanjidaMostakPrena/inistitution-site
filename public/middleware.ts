// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('admin_token')?.value; // অথবা localStorage-এর পরিবর্তে cookie ব্যবহার করুন
//   const { pathname } = request.nextUrl;

//   // যদি অ্যাডমিন রুটে যায় আর টোকেন না থাকে, তাহলে লগইনে পাঠান
//   if (pathname.startsWith('/admin') && !token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // যদি লগইন পেজে যায় আর টোকেন থাকে, তাহলে ড্যাশবোর্ডে পাঠান
//   if (pathname === '/login' && token) {
//     return NextResponse.redirect(new URL('/admin', request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/admin/:path*', '/login'],
// };