import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://template.fadhilkholaf.my.id",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
};

export default sitemap;
