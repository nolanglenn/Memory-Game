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

  // didComponentUpdate might work for running the shufflecards function
  // componentDidUpdate = () => {

  // }

  // updateCharacter = id => {
  //   let character = this.state.characters[id]
  //   console.log(character.isClicked)
  //   // Checks to see if the character has been guessed. If not, the game will reset
  //   if(character.isClicked === 'false') {
  //     character.isClicked = 'true'
  //     console.log(character.isClicked)
  //   } else if(character.isClicked === 'true'){
  //     this.state.characters.forEach(character => {
  //       character.isClicked = 'false'
  //     });
  //     alert('You guessed that character already! Try again.');
  //   }
  // }

  // Randomly shuffle the card order
  shuffleCards = () => {
    let arr = this.state.characters;
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    this.setState({
      characters: arr
    })
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
              key={character.id}
              // onClick must be defined as a prop if you're calling it on a Component you made
              onClick={() => {
                // this.updateCharacter(character.id)
                this.shuffleCards()
              }}
            />
          )
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
