import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Heart,
  Book,
} from "lucide-react";

const JoinCommunity = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest! We will contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const ministries = [
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Worship Ministry",
      desc: "Choir, music team, and technical support",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Children's Ministry",
      desc: "Sunday school teachers and helpers",
    },
    {
      icon: <Book className="w-5 h-5" />,
      title: "Youth Ministry",
      desc: "Mentors and activity leaders",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Community Outreach",
      desc: "Local service projects and evangelism",
    },
  ];

  const nextSteps = [
    "Visit Us This Sunday at 11:00 AM",
    "Complete a Welcome Card",
    "Attend Our Newcomer's Fellowship",
    "Join a Small Group",
    "Meet with Our Pastor",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Join Our Community
          </h1>
          <p className="text-xl text-blue-100">Jeevan Marg Church</p>
          <div className="mt-8 inline-block bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <p className="text-lg italic">
              "Enter by the narrow gate... the way that leads to life"
            </p>
            <p className="text-sm mt-2 text-blue-200">- Matthew 7:13-14</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <Heart className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">
              Welcome to Jeevan Marg Church
            </h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to our church family! At Jeevan Marg Church, we believe that
            faith is a journey best walked together. Whether you're taking your
            first steps on the path of life (Jeevan Marg) or have been walking
            with Christ for years, you'll find a warm, welcoming community here.
            We are grounded in biblical truth as outlined in our historic
            <span className="font-semibold text-blue-600">
              {" "}
              Catechism of 1869
            </span>
            , yet vibrant in our fellowship and service to one another.
          </p>
        </div>

        {/* What to Expect */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Reverent Worship
                  </h3>
                  <p className="text-gray-600">
                    Our services honor traditional Christian worship while being
                    accessible to all
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Biblical Teaching
                  </h3>
                  <p className="text-gray-600">
                    Messages rooted in Scripture and guided by our Catechism of
                    1869
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Warm Fellowship
                  </h3>
                  <p className="text-gray-600">
                    A genuine community where every person matters
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Come As You Are
                  </h3>
                  <p className="text-gray-600">
                    All are welcome regardless of background - everyone belongs
                    in God's house
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-700">
              <strong>Service Duration:</strong> Our main service typically runs
              90 minutes, including worship, prayer, and teaching
            </p>
          </div>
        </div>

        {/* Ways to Get Involved */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Ways to Get Involved
          </h2>

          {/* Small Groups */}
          <div className="mb-8">
            <button
              onClick={() => toggleSection("smallGroups")}
              className="flex items-center justify-between w-full p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                Small Groups & Bible Study
              </h3>
              {expandedSection === "smallGroups" ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>
            {expandedSection === "smallGroups" && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Weekly Bible study groups following our catechetical
                    teachings
                  </li>
                  <li>• Home fellowship groups for deeper relationships</li>
                  <li>• New member classes exploring our faith foundations</li>
                </ul>
              </div>
            )}
          </div>

          {/* Ministry Opportunities */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Ministry Opportunities
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {ministries.map((ministry, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg"
                >
                  <div className="text-blue-600 mr-3 mt-1">{ministry.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {ministry.title}
                    </h4>
                    <p className="text-sm text-gray-600">{ministry.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fellowship Groups */}
          <div>
            <button
              onClick={() => toggleSection("fellowship")}
              className="flex items-center justify-between w-full p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                Fellowship Groups
              </h3>
              {expandedSection === "fellowship" ? (
                <ChevronUp />
              ) : (
                <ChevronDown />
              )}
            </button>
            {expandedSection === "fellowship" && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <ul className="space-y-2 text-gray-600">
                  <li>• Men's fellowship meetings</li>
                  <li>• Women's ministry and prayer groups</li>
                  <li>• Senior saints fellowship</li>
                  <li>• Young adults group</li>
                  <li>• Family ministry events</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Your Next Steps</h2>
          <p className="text-blue-100 mb-6">
            Ready to join our community? Here's how to get started:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nextSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-white/10 backdrop-blur-sm rounded-lg"
              >
                <div className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold mr-3">
                  {index + 1}
                </div>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Form */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Connect With Us
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you and answer any questions:
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Pastor Michael</p>
                  <p className="text-gray-600">jeevanmargchurch@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Church Office</p>
                  <p className="text-gray-600">+91 8105802944</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Visit Us</p>
                  <p className="text-gray-600">
                    Royal Public School, Daddy's Garden, Bengaluru
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                name="message"
                placeholder="How can we help you?"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Community Events */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <Calendar className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">
              Community Events
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Monthly Fellowship Meals
              </h3>
              <p className="text-sm text-gray-600">Fifth Sunday of the month</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Annual Church Retreat
              </h3>
              <p className="text-sm text-gray-600">Summer season</p>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Community Service Days
              </h3>
              <p className="text-sm text-gray-600">
                Quarterly outreach projects
              </p>
            </div>

            <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">
                Prayer Meetings
              </h3>
              <p className="text-sm text-gray-600">
                Weekly Wednesday evening gatherings
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
