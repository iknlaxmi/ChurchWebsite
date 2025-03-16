import React from "react";
import { ChevronRight, Clock, MapPin, Calendar } from "lucide-react";

const ChurchWebsiteSection = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Latest Sermon */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Latest Sermon</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-48 relative">
            <img
              src="/src/assets/sermon.jpg"
              alt="Worship service with band and lights"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">Walking in Faith</h3>
            <p className="text-gray-600 mt-1">
              Pastor John Smith • Jan 28, 2024
            </p>
            <button className="flex items-center text-blue-500 mt-4">
              <span className="mr-1">Watch Now</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          {/* Sunday Worship Service */}
          <div className="flex gap-4">
            <div className="bg-blue-100 rounded-lg p-2 h-10 w-10 flex items-center justify-center">
              <Calendar className="text-blue-500" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Sunday Worship Service</h3>
              <p className="text-gray-600">January 28, 2024</p>
              <div className="flex items-center text-gray-500 mt-1">
                <Clock size={16} className="mr-1" /> 10:00 AM
                <MapPin size={16} className="ml-3 mr-1" /> Main Sanctuary
              </div>
            </div>
          </div>

          {/* Bible Study Group */}
          <div className="flex gap-4">
            <div className="bg-blue-100 rounded-lg p-2 h-10 w-10 flex items-center justify-center">
              <Calendar className="text-blue-500" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Bible Study Group</h3>
              <p className="text-gray-600">January 30, 2024</p>
              <div className="flex items-center text-gray-500 mt-1">
                <Clock size={16} className="mr-1" /> 7:00 PM
                <MapPin size={16} className="ml-3 mr-1" /> Fellowship Hall
              </div>
            </div>
          </div>

          {/* Youth Ministry Meeting */}
          <div className="flex gap-4">
            <div className="bg-blue-100 rounded-lg p-2 h-10 w-10 flex items-center justify-center">
              <Calendar className="text-blue-500" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">Youth Ministry Meeting</h3>
              <p className="text-gray-600">February 1, 2024</p>
              <div className="flex items-center text-gray-500 mt-1">
                <Clock size={16} className="mr-1" /> 6:30 PM
                <MapPin size={16} className="ml-3 mr-1" /> Youth Center
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Blog Posts */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Recent Blog Posts</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-48 relative">
            <img
              src="/src/assets/blog.jpg"
              alt="Person reading Bible"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold">
              Finding Peace in Today's World
            </h3>
            <p className="text-gray-600 mt-2">
              Discover how faith can help you navigate life's challenges and
              find inner peace...
            </p>
            <div className="flex items-center text-blue-500 mt-4">
              <span className="mr-1">Read More</span>
              <ChevronRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchWebsiteSection;
