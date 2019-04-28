import React from 'react';
import Navbar from './components/Navbar/index'
import Jumbotron from './components/Jumbotron';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
