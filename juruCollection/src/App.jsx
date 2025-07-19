import "./App.css";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Testimonials from "./components/Testimonials";
import Product from "./components/Product";
import ProductMen from "./components/ProductMen";
import ProductWomen from "./components/ProductWomen";
import ContactPage from "./components/ContactPage";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/navbar";

// import ProductPage from "./components/ProductPage";

function App() {
  return (
    <div>
      <Navbar
        className="header"
        home="Home"
        about="About"
        testimonials="Testimonials"
        contact="Contact"
        collection="Collection"
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/explore" element={<Product />}>
          <Route
            index
            element={
              <>
                <ProductMen />
                <ProductWomen />
              </>
            }
          />
          <Route path="men" element={<ProductMen />} />
          <Route path="women" element={<ProductWomen />} />
        </Route>
        <Route path="/product-details/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
