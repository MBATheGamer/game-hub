import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Game = {
  id: number;
  name: string;
};

type FetchGamesResponse = {
  count: number;
  results: Game[];
};

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then(response => setGames(response.data.results))
      .catch(err => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;