import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Calendar,
  Clock,
  User,
} from "lucide-react";

// Sample blog posts data with full content
const blogPosts = [
  {
    id: 16,
    category: "Testimony",
    title: "How Insecurities Can Destroy Your Life",
    description:
      "Learning from King Saul's tragic downfall and finding confidence in God's calling rather than our own abilities.",
    author: "Dr. Stephen George",
    date: "December 22, 2020",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-xl text-gray-700 leading-relaxed mb-8">
          Everyone struggles with some form of insecurity, to some degree. The problem of insecurity is not 
          benign, simply leaving one in a state of self-pity. Left unchecked, these insecurities can wreak 
          havoc on our lives and those around us.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-6">The Tragic Example of King Saul</h2>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Saul is a perfect example of someone who's life was destroyed by his insecurities. We get the first 
          indication of his insecurity when he was chosen to be king. He hid among the baggage rather than 
          face the task of being the first King of Israel. He started off well, with a victory over the 
          Ammonites (1 Samuel 11). But soon, we see him making poor leadership decisions (1 Sam 13:13) 
          even taking a brash oath (1 Sam 14:24) that put his troops under unnecessary duress.
        </p>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p class="text-lg italic text-blue-900">
            "Even though you are small in your own eyes..."
          </p>
          <p class="text-sm text-blue-700 mt-2">- 1 Samuel 15:17</p>
        </div>

        <p class="text-gray-700 leading-relaxed mb-6">
          We get a direct diagnosis of Saul's condition from the Lord when Samuel confronts Saul for his 
          failure to obey the commands of the Lord. In 1 Sam 15:17, Samuel tells Saul what the Lord had 
          told Samuel the previous night. The Lord diagnoses the root of Saul's failure as a king. Samuel says:
        </p>

        <p class="text-gray-700 leading-relaxed mb-8">
          The Lord recognized Saul had an insecurity problem. Saul was a tall, handsome man. You could 
          say he had the "look" of a king. Yet, his insecurities led him down a destructive path.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-6">The Destructive Path of Insecurity</h2>

        <div class="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">How Saul's Insecurities Destroyed Him:</h3>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              His insecurities led him to ignore the command of the Lord and heed the peer-pressure of his troops (1 Sam 15:10-35).
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              His insecurities made him seek approval from people rather approval from the Lord (1 Sam 15:30)
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              His insecurities led him to jealousy and a murderous pursuit of David (1 Sam 18-27).
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              His insecurities led him to lose the kingdom (1 Sam 15:28)
            </li>
            <li class="flex items-start">
              <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              His insecurities led him to be an enemy of the Lord (1 Sam 28:16) and eventually to suicide (1 Sam 31:4)
            </li>
          </ul>
        </div>

        <p class="text-gray-700 leading-relaxed mb-8">
          The story of Saul is a tragedy. Often, we are told to "look inside", to find the confidence needed to 
          overcome these insecurities. However, the answer to the Lord's diagnosis was given by the Lord 
          himself in the last clause of that verse (1 Sam 10:17).
        </p>

        <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <p class="text-lg italic text-green-900">
            "are you not the head of the tribes of Israel? The Lord has anointed you as king of Israel"
          </p>
          <p class="text-sm text-green-700 mt-2">- 1 Samuel 15:17</p>
        </div>

        <p class="text-gray-700 leading-relaxed mb-8">
          Saul's mandate and confidence to obey the Lord was to come from the fact that it was the Lord 
          who anointed Saul and tasked him to be the leader of Israel. It was the Lord to whom Saul was 
          answerable and it was the Lord who would give him success.
        </p>

        <h2 class="text-2xl font-bold text-gray-900 mb-6">The Gospel Solution</h2>

        <p class="text-gray-700 leading-relaxed mb-6">
          Insecurities are not benign problems that beset our homes, churches and institutions. These 
          insecurities lead to poor decisions and destructive patterns. Insecurities are not an excuse for 
          destructive behavior. We ignore these to our peril. The answer to these insecurities is not to ignore 
          them or to look within.
        </p>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
          <h3 class="text-xl font-semibold text-yellow-900 mb-4">The answer is to remember the gospel.</h3>
          <div class="space-y-4 text-gray-700">
            <p>
              <strong>Remember that it is Christ who chose us to be holy and blameless (Eph 1:4)</strong>
            </p>
            <p>
              <strong>Remember that he who began the good work in you will complete it (Phil 1:6)</strong>
            </p>
          </div>
        </div>

        <p class="text-gray-700 leading-relaxed mb-8">
          Our confidence is not in ourselves but in the Lord and that He has chosen you for his purpose. 
          Living with this confidence brings about a tremendous peace since we don't have to carry the 
          burden on our own. His yoke is easy to carry (Matt 11:29). Living with this confidence brings us 
          tremendous joy since he has promised never to leave us or forsake us.
        </p>

        <div class="bg-gray-100 rounded-lg p-6 my-8">
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Key Takeaways:</h3>
          <ul class="space-y-2 text-gray-700">
            <li>• Insecurities left unchecked can destroy lives and relationships</li>
            <li>• The solution isn't found within ourselves but in remembering God's calling</li>
            <li>• Our confidence should be rooted in Christ's choice of us, not our own abilities</li>
            <li>• God's promises provide the foundation for overcoming destructive insecurities</li>
          </ul>
        </div>
      </div>
    `,
    authorBio: `Dr. S. J George is a professor at ETS and he is the president of Asian Christian Academy. 
               His doctoral work focused on non-native speakers of English as adult learners and online 
               theological education. This work has led to the development of the online M.A in Christian 
               Studies at ETS.`,
  },
  // Add more sample posts with content...

  {
    id: 17,
    category: "Marriage",
    title: "Discipling Couples into Marriage",
    description:
      "Exploring the biblical perspective on marriage as a sacred covenant and the church's role in discipling couples to build God-honoring marriages.",
    author: "Michael Jesudason",
    date: "July 04, 2025",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400&h=250&fit=crop",
    content: `                  Modern culture often reduces marriage to a contract based on mutual happiness, but the Bible presents it as a sacred covenant ordained by God. This post explores the challenges of marriage due to human sinfulness and the church's role in discipling couples to build marriages that reflect God's love and grace.      
  <h2 class="text-2xl font-bold text-gray-900 mb-6">No Easy Marriage</h2>
  
  <p class="text-gray-700 leading-relaxed mb-6">
    Marriage is not easy because it involves two sinners coming together. Both partners bring imperfections, flaws, and sinful tendencies like selfishness, pride, and unforgiveness into the relationship. As Dave Harvey notes in *When Sinners Say "I Do"*, "What we believe about God determines the quality of our marriage." Without a proper understanding of God's purpose for marriage, couples may find the task of becoming one frustrating and futile.
  </p>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
    <p class="text-lg italic text-blue-900">
      "Nothing is more natural in our fallen world today than trying to build a happy marriage on a foundation of God-avoidance."
    </p>
    <p class="text-sm text-blue-700 mt-2">- Ray Ortlund</p>
  </div>

  <p class="text-gray-700 leading-relaxed mb-8">
    However, when couples model God's unconditional love and forgiveness, their marriage becomes a testimony of His grace, pointing both themselves and the world to the gospel.
  </p>

  <h2 class="text-2xl font-bold text-gray-900 mb-6">Marriage is Instituted by God</h2>

  <p class="text-gray-700 leading-relaxed mb-6">
    The Bible presents marriage as a holy institution. Malachi 2:14 describes it as a covenant with God as a witness, while Ephesians 5:25-33 compares the husband-wife relationship to Christ and the Church. Unlike a contract, a covenant endures through challenges, reflecting God's unchanging love and faithfulness.
  </p>

  <p class="text-gray-700 leading-relaxed mb-8">
    Churches must proclaim this truth from the pulpit and in private counsel, helping couples align their view of marriage with God's purpose—holiness that produces joy, rather than fleeting happiness.
  </p>

  <h2 class="text-2xl font-bold text-gray-900 mb-6">Happiness Through Holiness</h2>

  <p class="text-gray-700 leading-relaxed mb-6">
    Ephesians 5:25-26 calls husbands to love their wives as Christ loved the Church, aiming for mutual holiness. As someone has said, "Marriage is the raw material out of which holiness is forged." Pursuing holiness sustains the covenant through difficult seasons and brings God-given joy.
  </p>

  <div class="bg-green-50 border-l-4 border-green-500 p-6 my-8">
    <p class="text-lg italic text-green-900">
      "Husbands, love your wives, just as Christ loved the church and gave himself up for her to make her holy."
    </p>
    <p class="text-sm text-green-700 mt-2">- Ephesians 5:25-26</p>
  </div>

  <p class="text-gray-700 leading-relaxed mb-8">
    The church models this through married members, showing that a marriage rooted in sanctification is a testimony of God's transformative power. Couples learn to love unconditionally, deepening intimacy with God and each other.
  </p>

  <h2 class="text-2xl font-bold text-gray-900 mb-6">Godly Marriages Are Fostered By Discipleship</h2>

  <p class="text-gray-700 leading-relaxed mb-6">
    A Christian's identity as a disciple of Jesus shapes every aspect of life, including marriage. The church's responsibility is to disciple men and women, helping them view marriage as a sacred covenant and make godly choices.
  </p>

  <div class="bg-white border border-gray-200 rounded-lg p-6 mb-8">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Why Discipleship Matters for Marriage:</h3>
    <ul class="space-y-3 text-gray-700">
      <li class="flex items-start">
        <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        Helps couples understand marriage as a reflection of Christ's love for the Church.
      </li>
      <li class="flex items-start">
        <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        Encourages biblical thinking about marriage and godly decision-making.
      </li>
      <li class="flex items-start">
        <span class="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
        Strengthens the Church by preparing couples before marriage.
      </li>
    </ul>
  </div>

  <h2 class="text-2xl font-bold text-gray-900 mb-6">Honoring God Through Premarital Discipleship</h2>

  <p class="text-gray-700 leading-relaxed mb-6">
    Discipleship for marriage is both practical and spiritual, nurturing hearts and shaping the future of the marriage. It creates a safe space for couples to address issues openly and seek help without shame, recognizing that preparation for marriage is too important to be left to last-minute counseling.
  </p>

  <div class="bg-gray-100 rounded-lg p-6 my-8">
    <h3 class="text-lg font-semibold text-gray-900 mb-3">Key Takeaways:</h3>
    <ul class="space-y-2 text-gray-700">
      <li>• Marriage is a sacred covenant ordained by God, not a contract based on happiness.</li>
      <li>• The church must disciple couples to pursue holiness, which brings joy in marriage.</li>
      <li>• Premarital discipleship prepares couples to honor God and reflect the gospel.</li>
      <li>• Churches have a gospel-motivated obligation to promote marriage for God's glory.</li>
    </ul>
  </div>

  <p class="text-gray-700 leading-relaxed mb-8">
    As Ray Ortlund aptly states, "Churches must not be neutral or casual about what so rejoices the heart of God." By making discipling into marriage a priority, churches help couples display the gospel, bringing glory to God in a world that has lost the true essence of marriage.
  </p>
</div>

  `,
    authorBio:
      "Michael Jesudason serves as a pastor at Jeevan Marg Church, where he is dedicated to discipling believers and proclaiming the gospel. His ministry focuses on helping Christians live out their faith authentically in all aspects of life, including marriage.",
  },
];

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const postsPerPage = 10;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers;
  };

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  // Single Post Page Component
  const SinglePostPage = ({ post, onBack }) => {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button
              onClick={onBack}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </button>

            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">{post.description}</p>

              {/* Post Meta */}
              <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="prose prose-lg max-w-none"
            />
          </div>

          {/* Author Bio */}
          {post.authorBio && (
            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                About the Author
              </h3>
              <div className="flex items-start">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white font-bold text-lg">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-2">
                    {post.author}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {post.authorBio}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // If a post is selected, show the single post page
  if (selectedPost) {
    return <SinglePostPage post={selectedPost} onBack={handleBackToBlog} />;
  }

  // Otherwise, show the blog list page
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Blog</h1>
          <p className="text-gray-600">
            Stories, insights, and updates from our community
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-gray-700">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {post.date} • {post.readTime}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleReadMore(post)}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center transition-colors cursor-pointer"
                  >
                    Read More
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Previous
            </button>

            {/* Page Numbers */}
            {getPageNumbers().map((number) => (
              <button
                key={number}
                onClick={() => paginate(number)}
                className={`px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                  currentPage === number
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {number}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md cursor-pointer ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              Next
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}

        {/* Page Info */}
        <div className="text-center mt-6 text-sm text-gray-600">
          Showing {indexOfFirstPost + 1} to{" "}
          {Math.min(indexOfLastPost, blogPosts.length)} of {blogPosts.length}{" "}
          posts
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
