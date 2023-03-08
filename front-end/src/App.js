import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Statistics from './pages/Statistics';
import Analysis from './pages/Analysis';
import Badip from './pages/Badip';

function App() {
  return (
    
    <Router>
      <div className="App">
        <div>
          <Header/>
        </div>
        <div>
          <Map/>
        </div>
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
