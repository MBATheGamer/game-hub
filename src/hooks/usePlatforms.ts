import data from "@/data/platforms";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => ({ data, isLoading: false, error: null });

export default usePlatforms;
