import platforms from "@/data/platforms";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/list/parents")
        .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
