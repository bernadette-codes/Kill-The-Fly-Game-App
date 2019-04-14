import React, { Component } from "react";
import Nav from "./components/nav";
import MainContent from "./components/mainContent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startButton: true,
      instruction: true,
      timeLeft: 30
    };
  }

  startGame = () => {
    this.setState({
      startButton: false
    });
  };

  reset = () => {
    window.location.reload();
  };

  render() {
    const { startButton, instruction, timeLeft } = this.state;

    return (
      <div>
        <Nav reset={this.reset} />

        <MainContent
          startButton={startButton}
          startGame={this.startGame}
          instruction={instruction}
          timeLeft={timeLeft}
        />

        <footer>
          <p>
            <small>
              Copyright © 2015-{new Date().getFullYear()} Bernadette Estacio.
              All rights reserved.
            </small>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
