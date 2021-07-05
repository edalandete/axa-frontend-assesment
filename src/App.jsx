import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import OrcDetail from './components/OrcDetail/OrcDetail';
import OrcsList from './components/OrcsList/OrcsList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={OrcsList} />
        <Route path="/:id" exact component={OrcDetail} />
      </Switch>
    </div>
  );
}

export default App;
