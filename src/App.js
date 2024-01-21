import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Page/Home";
import About from "./components/Page/About";
import ContactUs from "./components/Page/ContactUs";
import Products from "./components/Page/Products";
import Cart from "./components/Page/Cart";
import Footer from "./components/Footer/Index"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />}/>
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
