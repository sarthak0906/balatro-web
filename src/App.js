import React from 'react';
import Game from './components/Game';
import { defaultDeck } from './default';

const App = () => {
  return (
    <div className="App">
      <Game
        initialDeck={defaultDeck}
      />
    </div>
  );
};

export default App;
