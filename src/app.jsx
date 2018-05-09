import React from 'react';
import { HashRouter } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Splash from './components/splash/splash';
import Footer from './components/footer/footer';
import JobsIndex from './components/jobs/jobs_index';
import Review from './components/reviews/reviews';
import Contact from './components/contact/contact';
import About from './components/about/about';
import { Route, Switch } from "react-router-dom";


const App = () => (
  <HashRouter>
    <div>
      <NavBar />
        <Switch>
          <Route path="/jobs" component={JobsIndex}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About} />
          <Route path="/" component={Splash} />
        </Switch>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
