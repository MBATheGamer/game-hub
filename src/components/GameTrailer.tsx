import useTrailers from "@/hooks/useTrailers";

type Props = {
  gameId: number;
};

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const firstElement = data?.results[0];

  return firstElement ? (
    <video
      src={firstElement.data[480]}
      poster={firstElement.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
