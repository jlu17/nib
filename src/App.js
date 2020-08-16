import React from 'react';

import About from './containers/About';
import Home from './containers/Home';
import Apply from './containers/Apply';
import Projects from './containers/Projects';
import Members from './containers/Members';
import NotFound from './containers/NotFound';
import FAQ from './containers/FAQ';
import VirtualSproul from './containers/VirtualSproul';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import GA from './components/GoogleAnalytics';



import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter
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
          <Route path="/virtual-sproul" component={VirtualSproul} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        <ScrollToTop />
      </div>
    </HashRouter>
    
  );
}

export default App;
