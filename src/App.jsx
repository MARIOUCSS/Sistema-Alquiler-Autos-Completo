import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Listing from "./Pages/Listing";
import CardDetails from "./Pages/CardDetails";
import Contact from "./Pages/Contact";
import MyBookings from "./Pages/MyBookings";
import Home from "./Pages/Home";
//import Footer from "./Components/Footer";
import Footers from "./Components/Footers";
import Blog from "./Pages/Blog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing/:id" element={<CardDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-booking" element={<MyBookings />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </>
  );
}

export default App;
