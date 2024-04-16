import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Market from "./components/Market";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <div className="hero">
        <Hero />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="market">
        <Market />
      </div>
      <div className="footer">
        <Footer />
      </div>
     
    </div>
  );
}

export default App;
