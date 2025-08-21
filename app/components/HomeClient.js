import { siteContent } from "./lib/content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";

export async function generateMetadata() {
  const { home } = siteContent;
  return {
    title: "Nextora Digital - Modern Digital Solutions",
    description:
      "Transform your brand with Nextora Digital's expert web design, development, and digital solutions. Get 50% off now!",
    keywords:
      "web design, web development, UI/UX, ecommerce, digital solutions, Nextora Digital",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.nextoradigital.com",
      title: "Nextora Digital - Modern Digital Solutions",
      description:
        "Transform your brand with Nextora Digital's expert web design, development, and digital solutions.",
      images: [
        {
          url: home.ogImage || "https://www.nextoradigital.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Nextora Digital - Future-Ready Digital Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nextora Digital - Modern Digital Solutions",
      description:
        "Transform your brand with Nextora Digital's expert web design, development, and digital solutions.",
      images: home.ogImage || "https://www.nextoradigital.com/og-image.jpg",
    },
    robots: "index, follow",
    alternates: { canonical: "https://www.nextoradigital.com" },
  };
}

export const revalidate = 3600; // ISR every hour

export default function HomeClient() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <AnnouncementBar />
        <Hero content={siteContent.home} />
        <Services />
        <WhyChooseUs />
        <Process />
        <Portfolio />
        <Testimonials />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
