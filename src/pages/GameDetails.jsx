import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

const STORAGE_KEY = "gamehub_installed_games";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((g) => String(g.id) === String(id));
        setGame(found || null);
        document.title = found
          ? `${found.title} — GameHub`
          : "Game not found — GameHub";
      });
  }, [id]);

  if (!game)
    return (
      <div className="text-center text-gray-400 py-20 text-lg">
        Game not found
      </div>
    );

  const handleInstall = () => {
    if (!user) {
      toast.info("Please login to install the game");
      navigate("/auth/login", { state: { from: `/game/${id}` } });
      return;
    }

    const installed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const alreadyInstalled = installed.find((g) => g.id === game.id);

    if (!alreadyInstalled) {
      const updated = [...installed, game];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

      toast.success(`${game.title} installed successfully!`);
      
      setTimeout(() => navigate("/installation"), 1500);
    } else {
      toast.warning("This game is already installed!");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
      <div className="md:col-span-2 bg-[#0f0f0f] p-6 rounded-xl shadow-md">
        <img
          src={game.image}
          className="w-full h-96 object-cover rounded-xl"
          alt={game.title}
        />
        <h1 className="text-3xl font-bold mt-5 text-white">{game.title}</h1>
        <p className="text-gray-300 mt-3 leading-relaxed">
          {game.description}
        </p>

        <div className="mt-5 flex gap-3">
          <button className="btn btn-primary" onClick={handleInstall}>
            Install Game
          </button>
          <button
            className="btn btn-outline"
            onClick={() => toast.info("Support developer coming soon")}
          >
            Support Dev
          </button>
        </div>
      </div>

      <aside className="bg-[#0f0f0f] p-6 rounded-xl shadow-md text-gray-300">
        <h4 className="font-semibold text-lg text-white">Game Details</h4>
        <ul className="mt-3 text-sm space-y-2">
          <li>
            <span className="font-medium text-white">Genre:</span> {game.genre}
          </li>
          <li>
            <span className="font-medium text-white">Rating:</span> {game.rating}
          </li>
          <li>
            <span className="font-medium text-white">Release Year:</span>{" "}
            {game.release_year}
          </li>
          <li>
            <span className="font-medium text-white">Company:</span>{" "}
            {game.company}
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default GameDetails;
