import "./App.css";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Reviews from "./Reviews/Reviews";
import Review from "./Review/Review";
import AboutMe from "./AboutMe/AboutMe";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./AboutMe/Contact";
import Hobbies from "./AboutMe/Hobbies";
import MyStory from "./AboutMe/MyStory";
import PageNotFound from "./PageNotFound/PageNotFound";
import SiteHistory from "./AboutUs/SiteHistory";
import SiteMission from "./AboutUs/SiteMission";
import { useState, useEffect } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://emoji-critic.es.tripleten-services.com/v1/reviews")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setReviews(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route
          path="/reviews/:reviewId"
          element={<Review reviews={reviews} />}
        />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="contact" element={<Contact />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="my-story" element={<MyStory />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
