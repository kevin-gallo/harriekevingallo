import type { MetadataRoute } from "next";
import { works } from "@/data/works";
import { services } from "@/data/services";
import { tools } from "@/data/tools";
import { experience } from "@/data/experience";

const siteUrl = "https://harriekevingallo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/lab",
    "/lab/collections",
    "/lab/websites",
    "/lab/services",
    "/lab/tools",
    "/lab/experience",
    "/lab/assets",
    "/lab/globals",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
  }));

  const workRoutes = works.map((work) => ({
    url: `${siteUrl}/lab/websites/${work.slug}`,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${siteUrl}/lab/services/${service.slug}`,
  }));

  const toolRoutes = tools.map((tool) => ({
    url: `${siteUrl}/lab/tools/${tool.slug}`,
  }));

  const experienceRoutes = experience.map((item) => ({
    url: `${siteUrl}/lab/experience/${item.slug}`,
  }));

  return [
    ...staticRoutes,
    ...workRoutes,
    ...serviceRoutes,
    ...toolRoutes,
    ...experienceRoutes,
  ];
}
