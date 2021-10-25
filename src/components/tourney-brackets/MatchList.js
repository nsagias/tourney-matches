import React from 'react';
import matchData from "../../data/matchData";
import Match from './Match';

function MatchList(props) {
  // const oneMatch = matchData[3];
  // const parsedMatches = matchData.map(match => <Match {...match} />);
  const parsedMatches = matchData.map(match => <Match key={match.matchNumber}{...match} />);
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {/* <Match {...oneMatch} /> */}
      {parsedMatches}
    </section>
  );
}
export default MatchList;