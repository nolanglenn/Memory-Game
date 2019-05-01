import React from 'react';
import Navbar from './components/Navbar/index'
import Jumbotron from './components/Jumbotron';
import Wrapper from './components/Wrapper'
import CharacterCard from './components/CharacterCard';
import characters from './characters.json'

class App extends React.Component {

state = {
  characters
}

  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
        <Wrapper>
          {this.state.characters.map(character => (
          <CharacterCard 
            id={character.id}
            name={character.name}
            image={character.image}
          />
          )
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
