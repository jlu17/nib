import React from 'react';

import About from './containers/About';
import Home from './containers/Home';
import Apply from './containers/Apply';
import Projects from './containers/Projects';
import Members from './containers/Members';
import NotFound from './containers/NotFound';
import FAQ from './containers/FAQ';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <Router
      hashType={"slash"}
      basename={"/"}
    >
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/apply" component={Apply} />
          <Route path="/projects" component={Projects} />
          <Route path="/members" component={Members} />
          <Route path="/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
