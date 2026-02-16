import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akshaythakur.dev"; // Replace with actual domain

  // Static Routes
  const routes = ["", "/about", "/projects", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic Blog Routes
  const posts = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date), // Simplification: using publish date as last mod
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...routes, ...posts];
}
