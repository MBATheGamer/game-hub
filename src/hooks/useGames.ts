import useData from "@/hooks/useData";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Game = {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

const useGames = () => useData<Game>("/games");

export default useGames;
