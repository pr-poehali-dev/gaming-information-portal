import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  title: string;
  description: string;
  imageUrl: string;
  genre: string;
  rating: string;
  releaseYear: string;
  platforms: string[];
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  imageUrl,
  genre,
  rating,
  releaseYear,
  platforms,
}) => {
  const handleLearnMore = () => {
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(title + " видеоигра")}`,
      "_blank",
    );
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-slate-800 border-slate-700 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
          {rating}
        </div>
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors">
          {title}
        </CardTitle>
        <div className="flex justify-between text-sm text-gray-400">
          <span>{genre}</span>
          <span>{releaseYear}</span>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {platforms.map((platform) => (
            <span
              key={platform}
              className="bg-slate-700 text-gray-300 px-2 py-1 rounded-md text-xs"
            >
              {platform}
            </span>
          ))}
        </div>
        <Button
          onClick={handleLearnMore}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
        >
          Подробнее об игре
        </Button>
      </CardContent>
    </Card>
  );
};

export default GameCard;
