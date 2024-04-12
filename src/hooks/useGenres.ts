import data from "@/data/genres";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () => ({ data, isLoading: false, error: null });

export default useGenres;
