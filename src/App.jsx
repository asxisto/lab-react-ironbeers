import React from 'react';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import AllBeersView from './views/AllBeersView';
import SingleBeerView from './views/SingleBeerView';
import RandomBeerView from './views/RandomBeerView';
import NewBeerView from './views/NewBeerView';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component={HomeView} exact />
        <Route path="/beers" component={AllBeersView} exact />
        <Route
          path="/beers/:_id"
          render={(props) => <SingleBeerView {...props} />}
          exact
        />
        <Route path="/random-beer" component={RandomBeerView} exact />
        <Route path="/new-beer" component={NewBeerView} exact />
      </Switch>
    </div>
  );
}

export default App;
