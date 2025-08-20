import { siteContent } from "./lib/content";
import HomeClient from "./components/HomeClient";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export async function generateMetadata() {
  const { home } = siteContent;
  return {
    title: home.title,
    description: home.description,
    keywords: home.keywords,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://yourdomain.com",
      title: home.title,
      description: home.description,
      images: [
        {
          url: home.ogImage,
          width: 1200,
          height: 630,
          alt: "Nextora Digital - Future-Ready Digital Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: home.title,
      description: home.description,
      images: home.ogImage,
    },
    robots: "index, follow",
    alternates: { canonical: "https://yourdomain.com" },
  };
}

export const revalidate = 3600; // ISR every hour

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeClient content={siteContent.home} />
      <Footer />
    </>
  );
}
