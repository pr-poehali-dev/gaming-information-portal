import React from "react";
import HeroSection from "@/components/HeroSection";
import PopularGames from "@/components/PopularGames";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <HeroSection />
      <PopularGames />
      <footer className="bg-slate-800 py-8 text-center text-gray-400">
        <p>🎮 Gaming World — Ваш гид в мире видеоигр</p>
      </footer>
    </div>
  );
};

export default Index;
