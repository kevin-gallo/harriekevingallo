import type { MetadataRoute } from "next";
import { works } from "@/data/works";
import { services } from "@/data/services";
import { tools } from "@/data/tools";

const siteUrl = "https://harriekevingallo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/work", "/tools", "/services"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const workRoutes = works.map((work) => ({
    url: `${siteUrl}/work/${work.slug}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const toolRoutes = tools.map((tool) => ({
    url: `${siteUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...workRoutes, ...serviceRoutes, ...toolRoutes];
}
