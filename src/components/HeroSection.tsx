import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          🎮{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Gaming World
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
          Откройте для себя самые популярные и захватывающие видеоигры всех
          времен
        </p>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-500 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
