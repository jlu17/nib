import React from 'react';
import './css/App.css';

import About from './containers/About';
import Home from './containers/Home';
import Apply from './containers/Apply';
import Projects from './containers/Projects';
import Members from './containers/Members';
import NotFound from './containers/NotFound';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/apply" component={Apply} />
          <Route path="/projects" component={Projects} />
          <Route path="/members" component={Members} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
