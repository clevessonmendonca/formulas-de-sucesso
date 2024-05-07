import { MetadataRoute } from "next";

export const websiteUrl = "https://formulasdesucesso.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const pagesWithLocations = [
    {
      url: websiteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${websiteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  return pagesWithLocations.flat() as MetadataRoute.Sitemap;
}
