import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import CriticScore from "@/components/CriticScore";
import Emoji from "@/components/Emoji";
import PlatformIconList from "@/components/PlatformIconList";
import { Game } from "@/hooks/useGames";
import getCroppedImageUrl from "@/services/image-url";

type Props = {
  game: Game;
};

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(({ platform }) => platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;