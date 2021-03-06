import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Pitgama from './components/containers/Pitgama';
import Bruriah from './components/containers/Bruriah';
import Contact from './components/Contact';
import About from './components/containers/About';
import Features from './components/Features';
import './static_resources/stylesheets/Main.css'
import './static_resources/stylesheets/Navbar.css'
import './static_resources/stylesheets/Footer.css'
import './static_resources/stylesheets/Contact.css'
import './static_resources/stylesheets/PitgamaCard.css'
import './static_resources/stylesheets/FeatureCard.css'



const ReactRouter = () => (
  <Router>
    <div className="Routes">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/pitgama" component={Pitgama}/>
        <Route exact path="/features" component={Features}/>
        <Route exact path="/features/bruriah" component={Bruriah}/>
      </Switch>
    </div>
  </Router>
)

class App extends Component {
    render() {
        return (
          <div className="main-container">
            <Header />
            <ReactRouter />
            <Footer />
          </div>
        );
    }
}

export default App;
