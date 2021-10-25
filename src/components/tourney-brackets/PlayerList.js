import React from 'react';
import playerData from '../../data/playerData';
import matchData from "../../data/matchData";
import { 
  preparePlayerData, 
  addWinsToPlayers 
} from '../../helpers/playerHelpers'; 


import Player from './Players';

function PlayerList(props) {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);
  // const onePlayer = parsedPlayerData[0];
  const parsePlayers = parsedPlayerData.map(player => <Player key={player.gamerTag}{...player} />);
  
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {/* <Player {...onePlayer}/> */}
    {parsePlayers}
    </section>
  );
}
{/* <section className="PlayerList">
        <h1>Current participating players</h1>
        <Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} />
      </section> */}

export default PlayerList;


