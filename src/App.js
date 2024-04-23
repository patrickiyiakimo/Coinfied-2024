import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Market from "./components/Market";
import MyPlayer from "./components/MyPlayer";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <div className="nav">
        <Hero />
      </div>
      <div className="nav">
        <About />
      </div>
      <div className="nav">
        <Market />
      </div>
      <div className="nav">
        <Footer />
      </div>
      <div className="video">
        <MyPlayer />
      </div>
    </div>
  );
}

export default App;




