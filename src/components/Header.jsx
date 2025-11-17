import React, { useState } from "react";

const Header = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  // Toggle dropdown for click support (useful for mobile)
  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <header className="bg-white shadow-md mt-8">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-600 text-2xl font-bold">✝</span>
          <h1 className="ml-2 text-xl font-bold text-gray-800">Jeevan Marg</h1>
        </div>
        <nav className="flex space-x-6 items-center relative">
          <a href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="/blog" className="text-gray-600 hover:text-blue-600">
            Blog
          </a>

          {/* Resources Dropdown */}
          <div className="relative">
            <button
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              // onMouseEnter={() => setIsResourcesOpen(true)}
              // onMouseLeave={() => setIsResourcesOpen(false)}
              onClick={toggleResources}
              aria-expanded={isResourcesOpen}
              aria-haspopup="true"
            >
              Resources
            </button>

            {isResourcesOpen && (
              <div
                className="absolute z-10 w-48 top-full left-0 mt-2 bg-white border rounded-lg shadow-lg"
                onMouseEnter={() => setIsResourcesOpen(true)}
                onMouseLeave={() => setIsResourcesOpen(false)}
              >
                <a
                  href="/resources/sermons"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Sermons
                </a>
                <a
                  href="/resources/books"
                  className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => setIsResourcesOpen(false)}
                >
                  Books
                </a>
              </div>
            )}
          </div>

          <a href="/about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="/community" className="text-gray-600 hover:text-blue-600">
            Community
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
