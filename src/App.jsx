import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import ChurchWebsiteSection from "./components/ChurchWebsiteSection";
import ChurchWelcomeSection from "./components/ChurchWelcomeSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      {/* <ContentSection /> */}
      <ChurchWebsiteSection />
      <ChurchWelcomeSection />
    </div>
  );
}

export default App;
