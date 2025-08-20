export default async function sitemap() {
  const baseUrl = "https://yourdomain.com";
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Add more pages, fetch dynamically from DB/API
  ];
}
