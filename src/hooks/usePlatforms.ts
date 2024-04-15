import platforms from "@/data/platforms";
import APIClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24"),
    initialData: platforms,
  });

export default usePlatforms;
