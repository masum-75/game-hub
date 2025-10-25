import React, { useEffect, useState } from "react";
import BannerSlider from "../components/BannerSlider";
import GameCard from "../components/GameCard";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [games, setGames] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then(res => res.json())
      .then(data => {
        setGames(data);
        const sorted = [...data].sort((a, b) => b.rating - a.rating);
        setPopular(sorted.slice(0, 4));
        document.title = "Gamehub — Home";
      });
  }, []);

  return (
    <div>
      <BannerSlider />
      <section className="mt-10">
        <h2 className="text-xl font-bold mb-4">Featured Games</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popular.map(g => <GameCard key={g.id} game={g} />)}
        </div>
      </section>

      <section id="library" className="mt-10">
        <h2 className="text-xl font-bold mb-4">Explore Our Game Library</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {games.map(g => <GameCard key={g.id} game={g} />)}
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Home;
