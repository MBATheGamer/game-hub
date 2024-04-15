import useGenres from "@/hooks/useGenres";

const usePlatform = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find(genre => genre.id === id);
};

export default usePlatform;
