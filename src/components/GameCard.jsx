import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";

const GameCard = ({ game }) => {
  return (
    <div className="bg-gradient-to-br from-[#0a0a0a] via-[#1b1b1b] to-[#2d2d2d] rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-800">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="font-semibold text-gray-100 text-lg mb-1">{game.title}</h3>
        <p className="text-sm text-gray-400">
          {game.genre} • {game.release_year}
        </p>

        
        <div className="flex items-center justify-between mt-4 border-t border-gray-700 pt-3">
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar className="text-yellow-500 text-lg" />
            <span className="text-base font-semibold">{game.rating.toFixed(1)}</span>
          </div>

          <Link
            to={`/game/${game.id}`}
            className="px-4 py-1.5 text-sm font-medium text-indigo-400 border border-indigo-500 rounded-full hover:bg-indigo-500 hover:text-white transition"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
