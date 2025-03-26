import React from "react";
import { useNavigate } from "react-router-dom";

const SermonsList = () => {
  const navigate = useNavigate();

  const sermonItems = [
    {
      bookName: "Romans",
      title: "Sermons on Book of Romans",
      description:
        "Explore in-depth teachings from the Book of Romans, covering faith, righteousness, and salvation.",
    },
    {
      bookName: "John",
      title: "Sermons on Book of John",
      description:
        "Discover the profound messages of love, light, and life through the Gospel of John.",
    },
    {
      bookName: "Topical",
      title: "Topical Sermons",
      description:
        "Access our collection of sermons organized by topics relevant to contemporary Christian life.",
    },
  ];

  const handleItemClick = (bookName) => {
    navigate(`/resources/sermons/${bookName}`, { state: { bookName } });
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-6 inline-block">
        Sermons
      </h1>

      {/* Sermon List */}
      <div className="space-y-4">
        {sermonItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition cursor-pointer"
            onClick={() => handleItemClick(item.bookName)}
          >
            <div>
              <h2 className="text-lg font-semibold text-blue-800">
                {`${index + 1}. ${item.title}`}
              </h2>
              <p className="text-gray-400 mt-1">{item.description}</p>
            </div>
            <div>
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SermonsList;
