import React, { Component } from 'react'

export default class SetTimeout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: 10,
            status: 'Start Game',
        }
    }

    resetGame = () => {
        this.setState({ timer: 10, status: "Start Game" })
    }

    execTimeout = () => {
        const timer = setInterval(() => {
            this.setState(prevState => {
                return {
                    timer: prevState.timer - 1
                }
            })
        }, 1000);

        this.setState({status: "Started..."});
        
        setTimeout(() => {
            alert('Game Timeout');
            clearInterval(timer);
        }, 10000);
    }
  render() {
    return (
        <>
        <button onClick={this.execTimeout}>{this.state.status}</button>
        <button onClick={this.resetGame}>Reset</button>
      <div>{this.state.timer}</div>
      </>
    )
  }
}
