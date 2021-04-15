import React from 'react';

import About from './about';
import Home from './home';
import Apply from './apply';
import Projects from './projects';
import Members from './members';
import NotFound from './404';
import FAQ from './faq';
import Redirecting from './redirecting';
import RedirectingPM from './redirecting-pm';
import Footer from './components/footer';
import NavBar from './components/navbar';
import ScrollToTop from './components/ScrollToTop';
import GA from './components/GoogleAnalytics';
import FourTwenty from './420';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router
      hashType={"slash"}
      basename={""}
    >
      <div>
      { GA.init() && <GA.RouteTracker /> }
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/apply" component={Apply} />
          <Route path="/projects" component={Projects} />
          <Route path="/members" component={Members} />
          <Route path="/faq" component={FAQ} />
          <Route path="/checkin" component={Redirecting} />
          <Route path="/check-in" component={Redirecting} />
          <Route path="/pm" component={RedirectingPM} />
          <Route path="/420" component={FourTwenty} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
    
  );
}

export default App;
