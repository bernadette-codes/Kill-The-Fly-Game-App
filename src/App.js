import React from "react";
import Mechanics from "./components/mechanics";
import Nav from "./components/nav";
import MainContent from "./components/mainContent";

class App extends Mechanics {
  constructor(props) {
    super(props);
    this.state = {
      instruction: true,
      startButton: true,
      counter: false,
      numOfClick: 0,
      timeLeft: 30,
      fly: false,
      gameOver: false
    };
  }

  render() {
    const {
      instruction,
      startButton,
      counter,
      numOfClick,
      timeLeft,
      fly,
      gameOver
    } = this.state;

    return (
      <div>
        <Nav reset={this.reset} />

        <MainContent
          instruction={instruction}
          startButton={startButton}
          startGame={this.startGame}
          counter={counter}
          numOfClick={numOfClick}
          timeLeft={timeLeft}
          fly={fly}
          clickFly={this.clickFly}
          gameOver={gameOver}
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
