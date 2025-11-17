import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const formatTime = (seconds) => {
  // Convert seconds to MM:SS format
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

const Sermons = () => {
  const [sermons, setSermons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/api/audios", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("data", response);
        setSermons(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching sermons:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchSermons();
  }, []);

  const handlePlayPause = (sermon) => {
    // If clicking the same sermon, toggle play/pause
    if (currentlyPlaying === sermon.id) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } else {
      // If a different sermon is clicked, stop previous and play new
      if (audioRef.current) {
        audioRef.current.pause();
      }
      console.log(`http://localhost:3000${sermon.audioFilePath}`);
      // Create new audio element
      audioRef.current = new Audio(
        `http://localhost:3000${sermon.audioFilePath}`
      );

      // Add event listeners for progress tracking
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current.duration);
      });
      audioRef.current.addEventListener("timeupdate", updateProgress);
      audioRef.current.addEventListener("ended", handleAudioEnd);

      audioRef.current.play();
      setCurrentlyPlaying(sermon.id);
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const progressPercent =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progressPercent);
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleAudioEnd = () => {
    setCurrentlyPlaying(null);
    setProgress(0);
    setCurrentTime(0);
  };

  const handleSeek = (e) => {
    if (audioRef.current) {
      const seekTime =
        (e.nativeEvent.offsetX / e.target.offsetWidth) *
        audioRef.current.duration;
      audioRef.current.currentTime = seekTime;
      setProgress((seekTime / audioRef.current.duration) * 100);
      setCurrentTime(seekTime);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 text-xl">
          Error loading sermons: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sermons</h1>
      <div className="flex items-center mb-4">
        <div className="relative flex-grow mr-4">
          <input
            type="text"
            placeholder="Search sermons..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <svg
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <select className="px-4 py-2 border rounded-md mr-4">
          <option>All Categories</option>
        </select>
        <select className="px-4 py-2 border rounded-md">
          <option>Latest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sermons.map((sermon) => (
          <div
            key={sermon.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <img
                src={`http://localhost:3000${sermon.thumbnailPath}`}
                alt={sermon.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 right-0 p-2 flex justify-between">
                <span className="bg-black/50 text-white px-2 py-1 rounded">
                  {sermon.duration}
                </span>
                <button
                  onClick={() => handlePlayPause(sermon)}
                  className="bg-white/80 rounded-full p-2 hover:bg-white flex items-center justify-center"
                >
                  {currentlyPlaying === sermon.id ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{sermon.title}</h2>
              <div className="flex items-center text-gray-600">
                <span className="mr-4">{sermon.preacher}</span>
                <span>{sermon.date}</span>
              </div>
              {currentlyPlaying === sermon.id && (
                <div className="mt-2">
                  <div
                    className="h-1 bg-gray-200 cursor-pointer relative"
                    onClick={handleSeek}
                  >
                    <div
                      className="h-1 bg-blue-500 absolute top-0 left-0"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <nav>
          <ul className="flex space-x-2">
            <li>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                &lt;
              </button>
            </li>
            <li>
              <button className="px-3 py-1 bg-blue-500 text-white rounded">
                1
              </button>
            </li>
            <li>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                2
              </button>
            </li>
            <li>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                3
              </button>
            </li>
            <li>
              <span className="px-3 py-1">...</span>
            </li>
            <li>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                10
              </button>
            </li>
            <li>
              <button className="px-3 py-1 border rounded hover:bg-gray-100">
                &gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sermons;
