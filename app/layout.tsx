
import type { Metadata } from "next";
import { AuthProvider } from "@/app/context/AuthContext";
import "./globals.css";
import { ApplicationProvider } from "./context/ApplicationContext";


export const metadata: Metadata = {
  title: "পলাশবাড়ী সুতি মাহমুদ মডেল পাইলট সরকারি উচ্চ বিদ্যালয়",
  description: "শিক্ষায় শ্রেষ্ঠত্ব",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>
        <AuthProvider>    {/* ← এখানেই প্রোভাইডার যোগ করুন */}
          <ApplicationProvider>
           
             
  {children}
             
            
             
          </ApplicationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}