import React from "react";
import { useNavigate } from "react-router-dom";

const ChurchWelcomeSection = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome to Our Church Family
            </h1>

            <p className="text-gray-700 text-lg">
              At Jeevan Marg Church, we believe in creating a warm and inclusive
              environment where everyone can experience God's love. Our
              community is built on faith, fellowship, and service to others.
            </p>

            <p className="text-gray-700 text-lg">
              Whether you're exploring faith for the first time or looking for a
              new church home, we invite you to join us and be part of our
              growing family.
            </p>

            <div className="pt-4">
              <button
                onClick={() => navigate("/about")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300"
              >
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="/src/assets/bible.jpg"
                alt="Church pastor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchWelcomeSection;
