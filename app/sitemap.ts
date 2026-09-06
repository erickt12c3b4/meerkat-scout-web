import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/lib/routes";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://meerkatscout.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-06");
  return SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route.startsWith("/legal") ? "yearly" : "monthly",
    priority: route === "/" ? 1 : route === "/pricing" || route === "/demo" ? 0.9 : 0.7,
  }));
}
