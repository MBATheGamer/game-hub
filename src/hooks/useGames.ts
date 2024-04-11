import useData from "@/hooks/useData";
import { Genre } from "@/hooks/useGenres";
import { Platform } from "@/hooks/usePlatforms";

export type Game = {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
