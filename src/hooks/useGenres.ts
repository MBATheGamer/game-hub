import genres from "@/data/genres";
import apiClient, { FetchResponse } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then(response => response.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
