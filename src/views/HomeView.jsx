import React from 'react';
import AllBeers from '../components/AllBeers';
import RandomBeer from '../components/RandomBeer';
import NewBeer from '../components/NewBeer';

function HomeView() {
  return (
    <div>
      <AllBeers />
      <RandomBeer />
      <NewBeer />
    </div>
  );
}

export default HomeView;
