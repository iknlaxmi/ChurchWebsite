import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const formatTime = (seconds) => {
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
  const [isPlaying, setIsPlaying] = useState({});
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef({});

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/api/audios", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        setSermons(response.data.data);
        console.log(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching sermons:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchSermons();
  }, []);

  const handleDownload = async (sermon) => {
    try {
      // Construct full URL for the audio file
      const audioUrl = `http://localhost:3000${sermon.audioFilePath}`;

      // Fetch the audio file
      const response = await axios({
        url: audioUrl,
        method: "GET",
        responseType: "blob", // Important for file download
      });

      // Create a link element to trigger download
      const link = document.createElement("a");
      const url = window.URL.createObjectURL(new Blob([response.data]));
      link.href = url;

      // Set filename (use sermon title or fallback to 'sermon')
      link.download = `${sermon.title || "sermon"}.mp3`;

      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download the sermon. Please try again.");
    }
  };

  const handlePlayPause = (sermon) => {
    // If no audio element exists for this sermon, create one
    if (!audioRef.current[sermon.id]) {
      audioRef.current[sermon.id] = new Audio(
        `http://localhost:3000${sermon.audioFilePath}`
      );

      // Add event listeners
      audioRef.current[sermon.id].addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current[sermon.id].duration);
      });
      audioRef.current[sermon.id].addEventListener("timeupdate", () =>
        updateProgress(sermon.id)
      );
      audioRef.current[sermon.id].addEventListener("ended", () =>
        handleAudioEnd(sermon.id)
      );
    }

    const audio = audioRef.current[sermon.id];

    // If this sermon is already playing
    if (currentlyPlaying === sermon.id) {
      if (audio.paused) {
        audio.play();
        setIsPlaying((prev) => ({ ...prev, [sermon.id]: true }));
      } else {
        audio.pause();
        setIsPlaying((prev) => ({ ...prev, [sermon.id]: false }));
      }
    } else {
      // If another sermon was playing, pause it
      if (currentlyPlaying && audioRef.current[currentlyPlaying]) {
        audioRef.current[currentlyPlaying].pause();
        setIsPlaying((prev) => ({ ...prev, [currentlyPlaying]: false }));
      }

      // Play the new sermon
      audio.play();
      setCurrentlyPlaying(sermon.id);
      setIsPlaying((prev) => ({ ...prev, [sermon.id]: true }));
    }
  };

  const updateProgress = (sermonId) => {
    if (audioRef.current[sermonId]) {
      const progressPercent =
        (audioRef.current[sermonId].currentTime /
          audioRef.current[sermonId].duration) *
        100;
      setProgress(progressPercent);
      setCurrentTime(audioRef.current[sermonId].currentTime);
    }
  };

  const handleAudioEnd = (sermonId) => {
    setCurrentlyPlaying(null);
    setIsPlaying((prev) => ({ ...prev, [sermonId]: false }));
    setProgress(0);
    setCurrentTime(0);
  };

  const handleSeek = (e, sermonId) => {
    if (audioRef.current[sermonId]) {
      const seekTime =
        (e.nativeEvent.offsetX / e.target.offsetWidth) *
        audioRef.current[sermonId].duration;
      audioRef.current[sermonId].currentTime = seekTime;
      setProgress((seekTime / audioRef.current[sermonId].duration) * 100);
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
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-0 right-0 m-2 bg-black/50 text-white px-2 py-1 rounded">
                {sermon.duration}
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => handlePlayPause(sermon)}
                  className="bg-white rounded-full w-16 h-16 flex items-center justify-center"
                >
                  {isPlaying[sermon.id] ? (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="black"
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
                      fill="black"
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
              <button
                className="absolute bottom-2 right-2 bg-white rounded-full p-2"
                onClick={() => handleDownload(sermon)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{sermon.title}</h2>
              <div className="text-gray-600 mb-2">
                <span>{sermon.preacher}</span>
              </div>
              <div className="text-sm text-gray-500">
                {new Date(sermon.date).toLocaleDateString("en-US", {
                  month: "long", // Full month name (e.g., "December")
                  day: "numeric", // Day of the month (e.g., "10")
                  year: "numeric", // Full year (e.g., "2023")
                })}
              </div>

              {currentlyPlaying === sermon.id && (
                <div className="mt-2">
                  <div
                    className="h-1 bg-gray-200 cursor-pointer relative"
                    onClick={(e) => handleSeek(e, sermon.id)}
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
    </div>
  );
};

export default Sermons;
