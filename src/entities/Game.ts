import { Genre } from "@/entities/Genre";
import { Platform } from "@/entities/Platform";
import { Publisher } from "@/entities/Publisher";

export type Game = {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
};
