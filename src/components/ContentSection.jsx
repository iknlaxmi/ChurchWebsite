import React from "react";

const ContentSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Latest Sermon Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/400x300?text=Concert+Image"
            alt="Latest Sermon"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Latest Sermon
            </h3>
            <div className="mt-2">
              <h4 className="text-md font-medium text-gray-800">
                Walking in Faith
              </h4>
              <p className="text-sm text-gray-600">
                Pastor John Smith • Jan 28, 2024
              </p>
              <button className="mt-2 text-blue-600 hover:underline flex items-center">
                <span>Watch Now</span>
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-900 p-4">
            Upcoming Events
          </h3>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="text-sm text-gray-600">Sunday Worship Service</p>
                <p className="text-sm text-gray-600">
                  January 28, 2024 • 10:00 AM • Main Sanctuary
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="text-sm text-gray-600">Bible Study Group</p>
                <p className="text-sm text-gray-600">
                  January 30, 2024 • 7:00 PM • Fellowship Hall
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-blue-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <p className="text-sm text-gray-600">Youth Ministry Meeting</p>
                <p className="text-sm text-gray-600">
                  February 1, 2024 • 6:30 PM • Youth Center
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Blog Posts Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h3 className="text-lg font-semibold text-gray-900 p-4">
            Recent Blog Posts
          </h3>
          <div className="p-4">
            <div className="mb-4">
              <img
                src="https://via.placeholder.com/400x300?text=Blog+Image"
                alt="Blog Post"
                className="w-full h-32 object-cover rounded-md"
              />
              <div className="mt-2">
                <h4 className="text-md font-medium text-gray-800">
                  Finding Peace in Today's World
                </h4>
                <p className="text-sm text-gray-600">
                  Discover how faith can help you navigate life's challenges and
                  find inner peace...
                </p>
                <button className="mt-2 text-blue-600 hover:underline flex items-center">
                  <span>Read More</span>
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
