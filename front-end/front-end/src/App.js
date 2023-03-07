import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Statistics from './components/Statistics';
import Analysis from './components/Analysis';
import Badip from './components/Badip';

function App() {
  return (
    
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/statistics" component={Statistics} />
          <Route path="/analysis" component={Analysis} />
          <Route path="/badip" component={Badip} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
