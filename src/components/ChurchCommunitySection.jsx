import React from "react";

const ChurchCommunitySection = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Community</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* First row of images */}
          <div className="rounded-lg overflow-hidden h-48 md:h-64">
            <img
              src="/src/assets/church_community/community1.jpeg"
              alt="Group of diverse young adults smiling together"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden h-48 md:h-64">
            <img
              src="/src/assets/church_community/community2.jpeg"
              alt="Young adults having fun at an outdoor gathering"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden h-48 md:h-64">
            <img
              src="/src/assets/church_community/community3.jpeg"
              alt="Family playing with a frisbee in the park"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Second row of images */}
          <div className="rounded-lg overflow-hidden h-48 md:h-64">
            <img
              src="/src/assets/church_community/community4.jpeg"
              alt="Group of people planting trees together"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden h-48 md:h-64">
            <img
              src="/src/assets/church_community/community5.jpeg"
              alt="Community meal with people eating and talking"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-lg overflow-hidden h-48 md:h-64">
            <img
              src="/src/assets/church_community/community6.jpeg"
              alt="Children playing on swings"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChurchCommunitySection;
