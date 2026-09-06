import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChannelPage } from "@/components/channels/channel-page";
import { CHANNELS, CHANNEL_BY_SLUG } from "@/content/channels";

export const dynamicParams = false;

export function generateStaticParams() {
  return CHANNELS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CHANNEL_BY_SLUG[slug];
  if (!c) return {};
  return { title: c.title, description: c.description };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CHANNEL_BY_SLUG[slug];
  if (!c) notFound();
  return <ChannelPage channel={c} />;
}
