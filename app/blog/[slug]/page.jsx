import React from "react";
import { Clock } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogHeaderClient from "../../components/BlogHeaderClient";
import BlogPostClient from "../../components/BlogPostClient";

export default function BlogPost({ params }) {
  const blogPosts = {
    "top-10-web-design-trends-2025": {
      title: "Top 10 Web Design Trends for 2025",
      date: "August 20, 2025",
      tags: ["Web Design", "Trends", "2025"],
      content: `
        <h2>Introduction to 2025 Web Design Trends</h2>
        <p>As we step into 2025, the digital landscape continues to evolve...</p>
      `,
    },
    "boost-ecommerce-sales-with-seo": {
      title: "Boost Your Ecommerce Sales with SEO",
      date: "August 18, 2025",
      tags: ["Ecommerce", "SEO", "Tips"],
      content: `<h2>Introduction to Ecommerce SEO</h2> <p>SEO is crucial...</p>`,
    },
    "power-of-responsive-design": {
      title: "The Power of Responsive Design",
      date: "August 15, 2025",
      tags: ["Responsive Design", "Mobile", "Development"],
      content: `<h2>Why Responsive Design Matters</h2> <p>Responsive design ensures...</p>`,
    },
  };

  const blogPost = blogPosts[params.slug];
  if (!blogPost) {
    return <div className="text-center py-16">Blog post not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-6">
          {/* Animated header handled in a client component */}
          <BlogHeaderClient title={blogPost.title} date={blogPost.date} />

          {/* Pass content + tags into another client component */}
          <BlogPostClient blogPost={blogPost} />
        </div>
      </section>
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "top-10-web-design-trends-2025" },
    { slug: "boost-ecommerce-sales-with-seo" },
    { slug: "power-of-responsive-design" },
  ];
}
