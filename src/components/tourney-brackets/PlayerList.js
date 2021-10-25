import React from 'react';
import playerdata from '../../data/playerData';
import Player from './Players';

function PlayerList () {
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player />
    </section>
  );
}

export default PlayerList;