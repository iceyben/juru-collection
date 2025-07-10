import "./App.css";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/explore" />
      </Routes>
      
    </>
  );
}

export default App;
