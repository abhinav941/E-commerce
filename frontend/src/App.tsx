import React from 'react';
import { Switch ,Route} from 'react-router-dom';

import './App.css';

import LandingPage from 'pages/LandingPage';


function App() {
  return (
    <Switch>
      <Route path="/" component={LandingPage}/>
    </Switch>
  );
}

export default App;
