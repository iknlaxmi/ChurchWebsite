import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Information Column */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin
                className="text-blue-500 mr-4 mt-1 flex-shrink-0"
                size={20}
              />
              <span className="text-gray-700">
                ROYAL PUBLIC SCHOOL,
                <br />
                Daddys Garden Main Road,
                <br />
                Kammasandra, <br />
                Electronic City Post, <br />
                Bangalore -560100
              </span>
            </div>

            <div className="flex items-center">
              <Phone className="text-blue-500 mr-4 flex-shrink-0" size={20} />
              <span className="text-gray-700">8105802944</span>
            </div>

            <div className="flex items-center">
              <Mail className="text-blue-500 mr-4 flex-shrink-0" size={20} />
              <span className="text-gray-700">jeevanmargchurch@gmail.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex mt-8 space-x-4">
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Contact Form Column */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
