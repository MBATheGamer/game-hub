import { GameQuery } from "@/App";
import { Platform } from "@/hooks/usePlatforms";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export type Game = {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
};

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then(response => response.data),
  });

export default useGames;
