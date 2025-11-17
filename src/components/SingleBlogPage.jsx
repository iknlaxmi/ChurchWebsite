import React from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Facebook,
  Twitter,
  Mail,
  MessageCircle,
  Heart,
} from "lucide-react";

const SingleBlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Featured Image */}
          <div className="w-full h-96 bg-gradient-to-r from-blue-900 to-purple-900 relative">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop"
              alt="King Saul biblical painting"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium mb-4">
                Testimony
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                How Insecurities Can Destroy Your Life
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Learning from King Saul's tragic downfall and finding confidence
                in God's calling
              </p>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-semibold">SG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Dr. Stephen George
                    </p>
                    <p className="text-sm text-gray-600">
                      Professor at ETS & President of Asian Christian Academy
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  December 22, 2020
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />8 min read
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Everyone struggles with some form of insecurity, to some degree.
                The problem of insecurity is not benign, simply leaving one in a
                state of self-pity. Left unchecked, these insecurities can wreak
                havoc on our lives and those around us.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The Tragic Example of King Saul
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Saul is a perfect example of someone who's life was destroyed by
                his insecurities. We get the first indication of his insecurity
                when he was chosen to be king. He hid among the baggage rather
                than face the task of being the first King of Israel. He started
                off well, with a victory over the Ammonites (1 Samuel 11). But
                soon, we see him making poor leadership decisions (1 Sam 13:13)
                even taking a brash oath (1 Sam 14:24) that put his troops under
                unnecessary duress.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
                <p className="text-lg italic text-blue-900">
                  "Even though you are small in your own eyes..."
                </p>
                <p className="text-sm text-blue-700 mt-2">- 1 Samuel 15:17</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                We get a direct diagnosis of Saul's condition from the Lord when
                Samuel confronts Saul for his failure to obey the commands of
                the Lord. In 1 Sam 15:17, Samuel tells Saul what the Lord had
                told Samuel the previous night. The Lord diagnoses the root of
                Saul's failure as a king. Samuel says:
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                The Lord recognized Saul had an insecurity problem. Saul was a
                tall, handsome man. You could say he had the "look" of a king.
                Yet, his insecurities led him down a destructive path.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The Destructive Path of Insecurity
              </h2>

              <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  How Saul's Insecurities Destroyed Him:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    His insecurities led him to ignore the command of the Lord
                    and heed the peer-pressure of his troops (1 Sam 15:10-35).
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    His insecurities made him seek approval from people rather
                    approval from the Lord (1 Sam 15:30)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    His insecurities led him to jealousy and a murderous pursuit
                    of David (1 Sam 18-27).
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    His insecurities led him to lose the kingdom (1 Sam 15:28)
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    His insecurities led him to be an enemy of the Lord (1 Sam
                    28:16) and eventually to suicide (1 Sam 31:4)
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                The story of Saul is a tragedy. Often, we are told to "look
                inside", to find the confidence needed to overcome these
                insecurities. However, the answer to the Lord's diagnosis was
                given by the Lord himself in the last clause of that verse (1
                Sam 10:17).
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <p className="text-lg italic text-green-900">
                  "are you not the head of the tribes of Israel? The Lord has
                  anointed you as king of Israel"
                </p>
                <p className="text-sm text-green-700 mt-2">- 1 Samuel 15:17</p>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Saul's mandate and confidence to obey the Lord was to come from
                the fact that it was the Lord who anointed Saul and tasked him
                to be the leader of Israel. It was the Lord to whom Saul was
                answerable and it was the Lord who would give him success.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                The Gospel Solution
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Insecurities are not benign problems that beset our homes,
                churches and institutions. These insecurities lead to poor
                decisions and destructive patterns. Insecurities are not an
                excuse for destructive behavior. We ignore these to our peril.
                The answer to these insecurities is not to ignore them or to
                look within.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-yellow-900 mb-4">
                  The answer is to remember the gospel.
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>
                      Remember that it is Christ who chose us to be holy and
                      blameless (Eph 1:4)
                    </strong>
                  </p>
                  <p>
                    <strong>
                      Remember that he who began the good work in you will
                      complete it (Phil 1:6)
                    </strong>
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our confidence is not in ourselves but in the Lord and that He
                has chosen you for his purpose. Living with this confidence
                brings about a tremendous peace since we don't have to carry the
                burden on our own. His yoke is easy to carry (Matt 11:29).
                Living with this confidence brings us tremendous joy since he
                has promised never to leave us or forsake us.
              </p>

              <div className="bg-gray-100 rounded-lg p-6 my-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Takeaways:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    • Insecurities left unchecked can destroy lives and
                    relationships
                  </li>
                  <li>
                    • The solution isn't found within ourselves but in
                    remembering God's calling
                  </li>
                  <li>
                    • Our confidence should be rooted in Christ's choice of us,
                    not our own abilities
                  </li>
                  <li>
                    • God's promises provide the foundation for overcoming
                    destructive insecurities
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 p-8 border-t border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-lg">SG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Dr. Stephen George
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. S. J George is a professor at ETS and he is the president
                  of Asian Christian Academy. His doctoral work focused on
                  non-native speakers of English as adult learners and online
                  theological education. This work has led to the development of
                  the online M.A in Christian Studies at ETS.
                </p>
              </div>
            </div>
          </div>

          {/* Social Share */}
          <div className="p-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600 font-medium">
                  Share this article:
                </span>
                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="w-5 h-5" />
                <span>124 likes</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default SingleBlogPage;
