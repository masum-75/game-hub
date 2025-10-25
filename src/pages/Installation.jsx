import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const STORAGE_KEY = "gamehub_installed_games";

const Installation = () => {
  const [installedGames, setInstalledGames] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setInstalledGames(JSON.parse(saved));
    }
  }, []);

  const handleUninstall = (id) => {
    const updated = installedGames.filter((game) => game.id !== id);
    setInstalledGames(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    toast.info("Game uninstalled successfully");
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Installed Games</h2>

      {installedGames.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {installedGames.map((game) => (
            <div
              key={game.id}
              className="card bg-base-100 shadow-xl hover:scale-105 transition"
            >
              <figure>
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{game.title}</h2>
                <p className="text-sm opacity-70">{game.genre}</p>
                <button
                  onClick={() => handleUninstall(game.id)}
                  className="btn btn-error btn-sm mt-2"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 text-lg">
          No games installed yet.
        </p>
      )}
    </div>
  );
};

export default Installation;
