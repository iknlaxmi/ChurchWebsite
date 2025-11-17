// import React, { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Facebook,
//   Twitter,
//   Instagram,
//   Youtube,
// } from "lucide-react";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Form submission logic would go here
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <div className="max-w-7xl mx-auto py-16 px-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Contact Information Column */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-900 mb-8">
//             Get in Touch
//           </h2>

//           <div className="space-y-6">
//             <div className="flex items-start">
//               <MapPin
//                 className="text-blue-500 mr-4 mt-1 flex-shrink-0"
//                 size={20}
//               />
//               <span className="text-gray-700">
//                 ROYAL PUBLIC SCHOOL,
//                 <br />
//                 Daddys Garden Main Road,
//                 <br />
//                 Kammasandra, <br />
//                 Electronic City Post, <br />
//                 Bangalore -560100
//               </span>
//             </div>

//             <div className="flex items-center">
//               <Phone className="text-blue-500 mr-4 flex-shrink-0" size={20} />
//               <span className="text-gray-700">8105802944</span>
//             </div>

//             <div className="flex items-center">
//               <Mail className="text-blue-500 mr-4 flex-shrink-0" size={20} />
//               <span className="text-gray-700">jeevanmargchurch@gmail.com</span>
//             </div>
//           </div>

//           {/* Social Media Icons */}
//           {/* <div className="flex mt-8 space-x-4">
//             <a
//               href="#"
//               className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
//             >
//               <Facebook size={20} />
//             </a>
//             <a
//               href="#"
//               className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
//             >
//               <Twitter size={20} />
//             </a>
//             <a
//               href="#"
//               className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
//             >
//               <Instagram size={20} />
//             </a>
//             <a
//               href="#"
//               className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition duration-300"
//             >
//               <Youtube size={20} />
//             </a>
//           </div> */}
//         </div>

//         {/* Contact Form Column */}
//         <div>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label htmlFor="name" className="block text-gray-700 mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 placeholder="Your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="email" className="block text-gray-700 mb-2">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="message" className="block text-gray-700 mb-2">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 placeholder="Your message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="6"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;

import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("validation_error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Using EmailJS to send emails
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_xb4n4gj", // Replace with your EmailJS service ID
            template_id: "template_mb6jhch", // Replace with your EmailJS template ID
            user_id: "NjcjmppNEUCGBwn6j", // Replace with your EmailJS public key
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_email: "jeevanmargchurch@gmail.com",
              to_name: "Jeevan Marg Church",
            },
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      handleSubmit();
    }
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
              <div className="text-blue-500 mr-4 mt-1 flex-shrink-0 text-lg">
                📍
              </div>
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
              <div className="text-blue-500 mr-4 flex-shrink-0 text-lg">📞</div>
              <span className="text-gray-700">8105802944</span>
            </div>

            <div className="flex items-center">
              <div className="text-blue-500 mr-4 flex-shrink-0 text-lg">✉️</div>
              <span className="text-gray-700">jeevanmargchurch@gmail.com</span>
            </div>
          </div>

          {/* Social Media Icons */}
          {/* <div className="flex mt-8 space-x-4">
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
          </div> */}
        </div>

        {/* Contact Form Column */}
        <div>
          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Failed to send message. Please try again or contact us directly at
              jeevanmargchurch@gmail.com
            </div>
          )}

          {submitStatus === "validation_error" && (
            <div className="mb-6 p-4 bg-orange-100 border border-orange-400 text-orange-700 rounded-lg">
              Please fill in all required fields.
            </div>
          )}

          <div onKeyDown={handleKeyPress}>
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
            </div>

            <div
              onClick={isSubmitting ? undefined : handleSubmit}
              className={`w-full font-medium py-3 px-4 rounded-lg transition duration-300 text-center cursor-pointer ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
