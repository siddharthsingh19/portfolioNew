import { Routes, Route, useLocation } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import Blogs from "./pages/blogs/Blogs";
import Portfolio from "./pages/portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { AnimatePresence } from "framer-motion";
import Hire from "./pages/hire/Hire";
function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
