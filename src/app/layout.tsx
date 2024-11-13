import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css"; // Global styles
import Footer from "@/components/Stable/Footer";
import Nav from "@/components/Stable/Nav";
import Copyright from "@/components/Stable/Copyright";
import 'swiper/css'; // Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Script from "next/script";

// Load local fonts with font-display: swap for better text rendering
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Font swap ensures content is visible while loading
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap", // Font swap ensures content is visible while loading
});

export const metadata: Metadata = {
  title: {
    default: "DevsCushion",
    template: "%s - Leading Software Development Company "
  },
  description: "Devscushion is a vibrant online community and platform designed for developers of all levels to connect, learn, and collaborate. With a focus on fostering a supportive environment, Devscushion offers a wide range of resources, including forums, tutorials, and networking opportunities, to help developers grow their skills and advance their careers. Whether you're a seasoned professional or just starting out, Devscushion provides the tools and community you need to succeed in the ever-evolving world of technology.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Hotjar Script - Load asynchronously for performance */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3553114,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Navigation and main content */}
        <Nav />
        <main>{children}</main>
        <Footer />
        <Copyright />
      </body>
    </html>
  );
}
