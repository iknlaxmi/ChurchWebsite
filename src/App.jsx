import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ChurchWebsiteSection from "./components/ChurchWebsiteSection";
import ChurchWelcomeSection from "./components/ChurchWelcomeSection";
import ChurchResourcesSection from "./components/ChurchResourcesSection";
import ChurchCommunitySection from "./components/ChurchCommunitySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
// Add new components for routed pages
import BlogPage from "./components/BlogPage"; // Create this component
import About from "./components/About"; // Create this component
import Sermons from "./components/Sermons"; // Create this component
import Books from "./components/Books"; // Create this component
import SermonsList from "./components/SermonsList";
import JoinCommunity from "./components/JoinCommunity";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          {/* Home page route */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                {/* <ChurchWebsiteSection /> */}
                <ChurchWelcomeSection />
                <ChurchResourcesSection />
                <ChurchCommunitySection />
                <ContactSection />
              </>
            }
          />
          {/* Other page routes */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/community" element={<JoinCommunity />} />
          <Route path="/resources/sermons" element={<SermonsList />} />
          <Route path="/resources/books" element={<Books />} />
          <Route path="/resources/sermons/:bookName" element={<Sermons />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
