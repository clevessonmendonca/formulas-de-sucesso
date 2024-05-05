import { MetadataRoute } from "next";

const websiteUrl = "https://marketingdigital.com.br"
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${websiteUrl}/sitemap.xml`,
  };
}