import "./App.css";
import Header from "./Header/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard"
import Reviews from "./Reviews/Reviews"
import AboutMe from "./AboutMe/AboutMe"
import AboutUs from "./AboutUs/AboutUs"
import Contact from "./AboutMe/Contact"
import Hobbies from "./AboutMe/Hobbies"
import MyStory from "./AboutMe/MyStory";
import SiteHistory from "./AboutUs/SiteHistory";
import SiteMission from "./AboutUs/SiteMission"
import { useState, useEffect } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // Obtiene los datos de reseñas del servidor.
    fetch('https://emoji-critic.es.tripleten-services.com/v1/reviews').then((res) => {
      return res.json();
    }).then((data) => {
      // Pasa el cuerpo de la respuesta analizada a la función setter.
      console.log(data);
      setReviews(data);
    })
    .catch(console.error);
  // Un array de dependencia vacío significa que el hook sólo se ejecuta cuando
  // se carga el componente.
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/about-me" element={<AboutMe/>}>
          <Route path="contact" element={<Contact/>}/>
          <Route path="hobbies" element={<Hobbies/>}/>
          <Route path="my-story" element={<MyStory/>}/>
        </Route>
        <Route path="/about-us" element={<AboutUs/>}>
          <Route path="site-history" element={<SiteHistory/>}/>
          <Route path="site-mission" element={<SiteMission/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
