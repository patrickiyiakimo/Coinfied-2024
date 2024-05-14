import About from "./components/About";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Market from "./components/Market";
import SignUp from "./components/Signup";
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
          <Route path="/signup">
            <SignUp />
          </Route>
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
            <div className="faq">
              <Faq />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;




