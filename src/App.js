import './App.css';
import MatchList from './components/tourney-brackets/MatchList';
import PlayerList from './components/tourney-brackets/PlayerList';


function App() {
  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <PlayerList />
      <MatchList />
    </div>
  );
}

export default App;
