import "./App.css";
import Navbar from "./components/Navbar.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home.js";
import Services from "./components/pages/Services.js";
import Products from "./components/pages/Products.js";
import Signup from "./components/pages/Signup.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/services' exact element={<Services />} />
        <Route path='/products' exact element={<Products />} />
        <Route path='/signup' exact element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
