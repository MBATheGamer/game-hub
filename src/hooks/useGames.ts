import { GameQuery } from "@/App";
import useData from "@/hooks/useData";
import { Platform } from "@/hooks/usePlatforms";

export type Game = {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
