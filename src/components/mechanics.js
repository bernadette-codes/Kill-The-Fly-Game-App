import { Component } from "react";

class Mechanics extends Component {
  startGame = () => {
    this.setState({
      startButton: false,
      counter: true,
      fly: true
    });
    // Timer
    setInterval(
      function() {
        this.state.timeLeft >= 1
          ? this.setState({ timeLeft: this.state.timeLeft - 1 })
          : this.stopGame();
      }.bind(this),
      1000
    );
  };

  clickFly = () => {
    this.setState({
      numOfClick: this.state.numOfClick + 1
    });
  };

  stopGame = () => {
    setTimeout(
      function() {
        this.setState({
          counter: false,
          fly: false,
          gameOver: true
        });
      }.bind(this),
      1000
    );
  };

  reset = () => {
    window.location.reload();
  };
}

export default Mechanics;
