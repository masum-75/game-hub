import React from "react";
import { Link } from "react-router";

const GameCard = ({ game }) => {
  return (
    <div className="bg-[#0f0f0f] rounded-md overflow-hidden shadow-md hover:shadow-xl transition">
      <img src={game.image} className="w-full h-56 object-cover" alt={game.title} />
      <div className="p-4">
        <h3 className="font-semibold">{game.title}</h3>
        <p className="text-sm text-gray-400">{game.genre} • {game.release_year}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-sm text-yellow-400 font-medium">{game.rating.toFixed(1)}</span>
          <Link to={`/game/${game.id}`} className="btn btn-outline btn-sm">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
