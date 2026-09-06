import { googleShopping } from "./google-shopping";
import { googleAds } from "./google-ads";
import { meta } from "./meta";
import { tiktok } from "./tiktok";
import { pinterest } from "./pinterest";
import { snapchat } from "./snapchat";
import { bing } from "./bing";
import { amazon } from "./amazon";
import { walmart } from "./walmart";
import { ebay } from "./ebay";
import type { ChannelData } from "@/components/channels/channel-page";

export const CHANNELS: ChannelData[] = [
  googleShopping,
  googleAds,
  meta,
  tiktok,
  pinterest,
  snapchat,
  bing,
  amazon,
  walmart,
  ebay,
];
export const CHANNEL_BY_SLUG: Record<string, ChannelData> = Object.fromEntries(CHANNELS.map((c) => [c.slug, c]));
