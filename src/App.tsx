import React from 'react';
import './App.css';
import { InfinitePeople } from './people/InfinitePeople';

function App(): JSX.Element {
  return (
    <div>
      <h1>Infinite SWAPI</h1>
      <InfinitePeople />
    </div>
  );
}

export default App;
