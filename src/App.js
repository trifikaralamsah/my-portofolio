import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/global-output.css";
import Navbar from "./comoponents/Navbar";
import Footer from "./comoponents/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import NavbarMobile from "./comoponents/NavbarMobile";

function App() {
  return (
    <div className="Main-app-wrapper bg-slate-50 relative min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Portofolio" element={<Portofolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
        <NavbarMobile />
      </BrowserRouter>
    </div>
  );
}

export default App;
