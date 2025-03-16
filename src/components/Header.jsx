import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-600 text-2xl font-bold">✝</span>
          <h1 className="ml-2 text-xl font-bold text-gray-800">Jeevan Marg</h1>
        </div>
        <nav className="flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Blog
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Resources
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
            Join Us
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
