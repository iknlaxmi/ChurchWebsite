import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-cover bg-center h-[600px]" // Reduced height to 500px
      style={{
        backgroundImage: `url("/src/assets/church.jpeg")`,
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center text-center text-white">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
            Welcome to Jeevan Marg Church
          </h2>
          <p className="text-lg md:text-xl mb-6">
            A place where faith meets community. Join us in our <br />
            journey of worship, fellowship, and spiritual growth.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200">
              Join Our Community
            </button>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-200">
              Watch Latest Sermon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
