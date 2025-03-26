import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-300">
              Jeevan Marg Church is committed to sharing God's love and building
              a community of faith, hope, and love.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#ministries"
                  className="text-gray-300 hover:text-white transition"
                >
                  Ministries
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-gray-300 hover:text-white transition"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#sermons"
                  className="text-gray-300 hover:text-white transition"
                >
                  Sermons
                </a>
              </li>
              <li>
                <a
                  href="#give"
                  className="text-gray-300 hover:text-white transition"
                >
                  Give
                </a>
              </li>
            </ul>
          </div>

          {/* Service Times Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Service Times</h2>
            <ul className="space-y-2 text-gray-300">
              <li>Sunday: 10:00 AM </li>
              <li>Men's Study: Saturday 8:00 AM</li>
              <li>Life Groups: Friday 6:30 PM</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-gray-400">
          © 2025 Jeevan Marg Church. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
