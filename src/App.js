import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Invoice from "./components/Invoice";
import Analytics from "./components/Analytics";
import Tickets from "./components/Tickets";
import Error from "./components/Error";
import { Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  const list = ["john", "david", "jane"];

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="sections">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/invoice/:invoiceId" element={<Invoice />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="tickets" element={<Tickets />} />
              <Route path="analytics" element={<Analytics />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
