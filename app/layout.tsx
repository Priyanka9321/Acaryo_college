import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: "Acaryo Institute of Technology and Management",
  description:
    "Acaryo Institute of Technology and Management is a premier institution offering quality education in engineering, technology, and management with a focus on innovation, research, and career development.",
  keywords: [
    "Acaryo Institute",
    "Technology Institute",
    "Management College",
    "Engineering College",
    "Higher Education",
    "Professional Courses",
  ],
  authors: [{ name: "Acaryo Institute" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Acaryo Institute of Technology and Management",
    description:
      "Empowering students with excellence in technology and management education. Explore courses, admissions, and campus life at Acaryo Institute.",
    url: "https://yourdomain.com",
    siteName: "Acaryo Institute",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acaryo Institute Campus",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
