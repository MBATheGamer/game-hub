import { Platform } from "@/hooks/Platform";

export type Game = {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
};
