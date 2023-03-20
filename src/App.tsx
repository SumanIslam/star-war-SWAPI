import React from 'react';
import './App.css';
import { InfinitePeople } from './people/InfinitePeople';
import { InfiniteSpecies } from './species/InfiniteSpecies';

function App(): JSX.Element {
  return (
    <div>
      <h1>Infinite SWAPI</h1>
      {/* <InfinitePeople /> */}
      <InfiniteSpecies />
    </div>
  );
}

export default App;
