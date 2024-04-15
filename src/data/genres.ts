import { Genre } from "@/hooks/useGenres";
import { FetchResponse } from "@/services/api-client";

export default {
  count: 19,
  next: null,
  results: [
    {
      id: 4,
      name: "Action",
      image_background:
        "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
    },
    {
      id: 51,
      name: "Indie",
      image_background:
        "https://media.rawg.io/media/games/095/0953bf01cd4e4dd204aba85489ac9868.jpg",
    },
    {
      id: 3,
      name: "Adventure",
      image_background:
        "https://media.rawg.io/media/games/879/879c930f9c6787c920153fa2df452eb3.jpg",
    },
    {
      id: 5,
      name: "RPG",
      image_background:
        "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg",
    },
    {
      id: 10,
      name: "Strategy",
      image_background:
        "https://media.rawg.io/media/games/d4b/d4bcd78873edd9992d93aff9cc8db0c8.jpg",
    },
    {
      id: 2,
      name: "Shooter",
      image_background:
        "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    },
    {
      id: 40,
      name: "Casual",
      image_background:
        "https://media.rawg.io/media/games/270/270b412b66688081497b3d70c100b208.jpg",
    },
    {
      id: 14,
      name: "Simulation",
      image_background:
        "https://media.rawg.io/media/games/179/179245a3693049a11a25b900ab18f8f7.jpg",
    },
    {
      id: 7,
      name: "Puzzle",
      image_background:
        "https://media.rawg.io/media/games/e07/e07737df8469bf32d132ba9eaffc3461.jpg",
    },
    {
      id: 11,
      name: "Arcade",
      image_background:
        "https://media.rawg.io/media/games/9a1/9a18c226cf379272c698f26d2b79b3da.jpg",
    },
    {
      id: 83,
      name: "Platformer",
      image_background:
        "https://media.rawg.io/media/games/f8c/f8c6a262ead4c16b47e1219310210eb3.jpg",
    },
    {
      id: 1,
      name: "Racing",
      image_background:
        "https://media.rawg.io/media/games/d16/d160819f22de73d29813f7b6dad815f9.jpg",
    },
    {
      id: 59,
      name: "Massively Multiplayer",
      image_background:
        "https://media.rawg.io/media/screenshots/848/848253347dc93c762bfd51c7e4989b8f.jpg",
    },
    {
      id: 15,
      name: "Sports",
      image_background:
        "https://media.rawg.io/media/games/8f3/8f306808c45a4dbe0cd698e0b142af08.jpg",
    },
    {
      id: 6,
      name: "Fighting",
      image_background:
        "https://media.rawg.io/media/screenshots/df1/df1a27300bf1e4696734b437d81b0fcf.jpg",
    },
    {
      id: 19,
      name: "Family",
      image_background:
        "https://media.rawg.io/media/games/694/6940fa3fbe0d836e4a272c468e65e480.jpg",
    },
    {
      id: 28,
      name: "Board Games",
      image_background:
        "https://media.rawg.io/media/screenshots/8ff/8ffe8f19d2e764867c8ed625ddf4e368.jpg",
    },
    {
      id: 34,
      name: "Educational",
      image_background:
        "https://media.rawg.io/media/screenshots/9d4/9d45ba1c76712ad692fadda67f2777a9.jpeg",
    },
    {
      id: 17,
      name: "Card",
      image_background:
        "https://media.rawg.io/media/games/742/7424c1f7d0a8da9ae29cd866f985698b.jpg",
    },
  ],
} as FetchResponse<Genre>;
