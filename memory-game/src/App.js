import React from 'react';
import Navbar from './components/Navbar/index'
import Jumbotron from './components/Jumbotron';
import CharacterCard from './components/CharacterCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <CharacterCard />
      </div>
    );
  }
}

export default App;
