import { useEffect, useState } from "react";
import MemeCard from "../components/MemeCard";

export default function Home() {
  const [memes, setMemes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const API_URL = "https://api.imgflip.com/get_memes";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setMemes(data.data.memes))
      .catch((err) => console.log(err));
  }, []);

  const filteredMemes = memes.filter((m) =>
    m.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">
        Meme Template Viewer
      </h1>

      <input
        type="text"
        placeholder="Search memes..."
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm mb-6"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredMemes.length === 0 ? (
        <p className="text-center text-gray-500">No memes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMemes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
      )}
    </div>
  );
}
