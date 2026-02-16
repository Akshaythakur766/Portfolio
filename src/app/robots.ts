import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/admin/"], // Example disallowed paths
    },
    sitemap: "https://akshaythakur.dev/sitemap.xml",
  };
}
