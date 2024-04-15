import platforms from "@/data/platforms";
import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const apiClient = new APIClient<Platform>("/platforms/list/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
