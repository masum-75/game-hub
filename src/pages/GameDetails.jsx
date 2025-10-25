import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";


const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("/games.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(g => String(g.id) === String(id));
        setGame(found || null);
        document.title = found ? `${found.title} — Gamehub` : "Game not found — Gamehub";
      });
  }, [id]);

  if (!game) return <div>Game not found</div>;

  const handleInstall = () => {
    if (!user) {
      navigate("/auth/login", { state: { from: `/game/${id}` } });
      return;
    }
    
    const installed = JSON.parse(localStorage.getItem("installed") || "[]");
    if (!installed.includes(game.id)) {
      installed.push(game.id);
      localStorage.setItem("installed", JSON.stringify(installed));
      alert("Installed!");
    } else {
      alert("Already installed");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-[#0f0f0f] p-6 rounded">
        <img src={game.image} className="w-full h-96 object-cover rounded" alt={game.title} />
        <h1 className="text-2xl font-bold mt-4">{game.title}</h1>
        <p className="text-gray-300 mt-2">{game.description}</p>
        <div className="mt-4 flex gap-3">
          <button className="btn btn-primary" onClick={handleInstall}>Install</button>
          <button className="btn btn-outline" onClick={() => alert("Support Developer flow")}>Support Dev</button>
        </div>
      </div>

      <aside className="bg-[#0f0f0f] p-6 rounded">
        <h4 className="font-semibold">Details</h4>
        <ul className="mt-3 text-sm text-gray-300 space-y-2">
          <li>Genre: {game.genre}</li>
          <li>Rating: {game.rating}</li>
          <li>Release Year: {game.release_year}</li>
        </ul>
      </aside>
    </div>
  );
};

export default GameDetails;