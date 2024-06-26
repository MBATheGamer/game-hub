import usePlatforms from "@/hooks/usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find(platform => platform.id === id);
};

export default usePlatform;
