import React, { Component } from "react";
import Nav from "./components/nav";
import MainContent from "./components/mainContent";
import Fail from "./components/fail";
import flyImg from "./img/fly.png";
import flyImgClick from "./img/flyClick.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      main: true,
      instruction: true,
      startButton: true,
      counter: false,
      numOfClick: 0,
      timeLeft: 30,
      fly: false,
      flyImg: flyImg,
      gameOver: false,
      fail: false
    };
  }

  componentDidMount() {
    if (this.props.height <= 450) {
      this.setState({
        main: false,
        fail: true
      });
    }
  }

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
      numOfClick: this.state.numOfClick + 1,
      flyImg: flyImgClick
    });
    setInterval(
      function() {
        this.setState({
          flyImg: flyImg
        });
      }.bind(this),
      500
    );
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

  render() {
    const {
      main,
      instruction,
      startButton,
      counter,
      numOfClick,
      timeLeft,
      fly,
      flyImg,
      gameOver,
      fail
    } = this.state;

    return (
      <div>
        <Nav reset={this.reset} />

        <MainContent
          main={main}
          instruction={instruction}
          startButton={startButton}
          startGame={this.startGame}
          counter={counter}
          numOfClick={numOfClick}
          timeLeft={timeLeft}
          fly={fly}
          flyImg={flyImg}
          clickFly={this.clickFly}
          gameOver={gameOver}
        />

        <Fail fail={fail} />

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

App.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight
};

export default App;
