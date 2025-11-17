import React from "react";
import { Play, Calendar, Newspaper } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChurchResourcesSection = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Resources for Your Journey
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sermon Library Card */}
        <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <Play className="text-blue-500" size={28} />
          </div>

          <h3 className="text-xl font-bold mb-3">Sermon Library</h3>

          <p className="text-gray-600 mb-6">
            Watch and listen to our collection of inspiring messages
          </p>

          <button
            onClick={() => navigate("/resources/sermons")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            Browse Sermons
          </button>
        </div>

        {/* Church Calendar Card */}
        <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <Calendar className="text-blue-500" size={28} />
          </div>

          <h3 className="text-xl font-bold mb-3">Church Calendar</h3>

          <p className="text-gray-600 mb-6">
            Stay updated with our upcoming events and activities
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
            View Events
          </button>
        </div>

        {/* Blog Articles Card */}
        <div className="border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <Newspaper className="text-blue-500" size={28} />
          </div>

          <h3 className="text-xl font-bold mb-3">Blog Articles</h3>

          <p className="text-gray-600 mb-6">
            Read our latest articles on faith and community
          </p>

          <button
            onClick={() => navigate("/blog")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
          >
            Read Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChurchResourcesSection;
