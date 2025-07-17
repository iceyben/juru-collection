import "./App.css";
import MainPage from "./MainPage";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Testimonials from "./components/Testimonials";
import Product from "./components/Product";
import ProductMen from "./components/ProductMen";
import ProductWomen from "./components/ProductWomen";
import ContactPage from "./components/ContactPage";
import ProductDetail from "./components/ProductDetail";
// import ProductPage from "./components/ProductPage";

function App() {
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
