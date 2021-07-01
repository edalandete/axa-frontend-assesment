import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import OrcsList from './components/OrcsList/OrcsList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={OrcsList} />
      </Switch>
    </div>
  );
}

export default App;
