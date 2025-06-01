import React from "react";
import GameCard from "./GameCard";

const PopularGames = () => {
  const games = [
    {
      title: "Cyberpunk 2077",
      description:
        "Футуристическая RPG в открытом мире Night City. Станьте киберпанком и исследуйте мегаполис будущего с передовыми технологиями и опасными корпорациями.",
      imageUrl:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop&auto=format",
      genre: "RPG / Экшен",
      rating: "9.0",
      releaseYear: "2020",
      platforms: ["PC", "PlayStation", "Xbox"],
    },
    {
      title: "The Witcher 3: Wild Hunt",
      description:
        "Эпическое фэнтези-приключение Геральта из Ривии. Охотьтесь на монстров, принимайте сложные решения и исследуйте огромный открытый мир.",
      imageUrl:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&auto=format",
      genre: "RPG / Фэнтези",
      rating: "9.8",
      releaseYear: "2015",
      platforms: ["PC", "PlayStation", "Xbox", "Switch"],
    },
    {
      title: "Grand Theft Auto V",
      description:
        "Криминальная сага в Лос-Сантосе. Грабьте банки, участвуйте в гонках и исследуйте огромный открытый мир с тремя уникальными персонажами.",
      imageUrl:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format",
      genre: "Экшен / Криминал",
      rating: "9.5",
      releaseYear: "2013",
      platforms: ["PC", "PlayStation", "Xbox"],
    },
    {
      title: "Minecraft",
      description:
        "Безграничный мир кубиков для творчества и выживания. Стройте, исследуйте, сражайтесь и создавайте свои уникальные миры в этой легендарной песочнице.",
      imageUrl:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&auto=format",
      genre: "Песочница / Выживание",
      rating: "9.2",
      releaseYear: "2011",
      platforms: ["PC", "Mobile", "Console", "Switch"],
    },
    {
      title: "Fortnite",
      description:
        "Королевская битва с уникальной механикой строительства. Сражайтесь с 99 игроками, стройте укрытия и станьте последним выжившим на острове.",
      imageUrl:
        "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop&auto=format",
      genre: "Battle Royale",
      rating: "8.5",
      releaseYear: "2017",
      platforms: ["PC", "Mobile", "PlayStation", "Xbox", "Switch"],
    },
    {
      title: "Red Dead Redemption 2",
      description:
        "Вестерн-эпос о банде Ван дер Линде в Америке конца 19 века. Невероятно детализированный мир Дикого Запада с захватывающей историей.",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&auto=format",
      genre: "Экшен / Вестерн",
      rating: "9.7",
      releaseYear: "2018",
      platforms: ["PC", "PlayStation", "Xbox"],
    },
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          🔥 Самые популярные игры
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularGames;
