import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Play, Download, Search, Filter } from "lucide-react";
import axios from "axios";

const Sermons = () => {
  const location = useLocation();
  const [sermons, setSermons] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Latest");
  const [currentAudio, setCurrentAudio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);

  // Extract bookName from route state
  const bookName = location.state?.bookName || "All";

  // Fetch sermons from API
  useEffect(() => {
    const fetchSermons = async () => {
      try {
        setIsLoading(true);
        // Replace with your actual API endpoint
        const response = await axios.get("http://localhost:3000/api/audios", {
          params: {
            bookName: bookName,
            // search: searchTerm,
            // sortBy: sortBy,
          },
        });
        console.log("data", response);
        setSermons(response.data.data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch sermons");
        setIsLoading(false);
        console.error("Sermon fetch error:", err);
      }
    };

    fetchSermons();
  }, [bookName, searchTerm, sortBy]);

  // Sermon playback handler
  const handlePlaySermon = (sermon) => {
    if (currentAudio === sermon.id) {
      audioRef.current.pause();
      setCurrentAudio(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(sermon.audioUrl);
      audioRef.current.play();
      setCurrentAudio(sermon.id);
    }
  };

  // Render loading state
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Loading sermons...</p>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-4">
        {bookName === "All" ? "All Sermons" : `Sermons on ${bookName}`}
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Listen to inspiring messages from our weekly services
      </p>

      {/* Search and Filter Section */}
      <div className="flex mb-8 space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search sermons..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>

        <select
          className="px-4 py-2 border rounded-lg"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option>All Categories</option>
        </select>

        <select
          className="px-4 py-2 border rounded-lg"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option>Latest</option>
          <option>Oldest</option>
        </select>
      </div>

      {/* Sermons Grid */}
      {sermons.length === 0 ? (
        <div className="text-center text-gray-600">
          No sermons found for this selection.
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {sermons.map((sermon) => (
            <div
              key={sermon.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="w-full h-48 object-cover"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  onClick={() => handlePlaySermon(sermon)}
                >
                  <Play className="text-white" size={64} />
                </div>
                <div className="absolute top-2 right-2 bg-white bg-opacity-80 px-2 py-1 rounded">
                  {sermon.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{sermon.title}</h3>
                <div className="flex justify-between items-center text-gray-600">
                  <span>{sermon.speaker}</span>
                  <span>{sermon.date}</span>
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => handlePlaySermon(sermon)}
                  >
                    <Play className="mr-2" size={20} /> Play
                  </button>
                  <button className="text-gray-600 hover:text-gray-800">
                    <Download size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        <button className="px-4 py-2 border rounded">&lt;</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">1</button>
        <button className="px-4 py-2 border rounded">2</button>
        <button className="px-4 py-2 border rounded">3</button>
        <span className="px-4 py-2">...</span>
        <button className="px-4 py-2 border rounded">10</button>
        <button className="px-4 py-2 border rounded">&gt;</button>
      </div>
    </div>
  );
};

export default Sermons;
