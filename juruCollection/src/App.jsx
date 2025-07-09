import "./App.css";
import MainPage from "./MainPage";
import { Route, Routes, Link } from "react-router-dom";
import AboutMe from "./AboutMe";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
