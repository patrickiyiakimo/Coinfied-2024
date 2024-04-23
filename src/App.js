import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Market from "./components/Market";
import MyPlayer from "./components/MyPlayer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
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
          </Route>
          <Route path="/myplayer">
            <MyPlayer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




