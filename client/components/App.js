import React, { Component, Fragment } from "react";
import Axios from "axios";
import StateSelect from "./StateSelect";
import SeasonSelect from "./SeasonSelect";
import VeggieList from "./VeggieList";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeState = this.changeState.bind(this);
    this.changeSeason = this.changeSeason.bind(this);
    this.getSeasonal = this.getSeasonal.bind(this);

    this.state = {
      state: "alabama",
      season: "early-january",
      seasonal: []
    };
  }

  componentDidMount() {}

  changeState(e) {
    let state = e.target.value;
    this.setState({ state });
  }

  changeSeason(e) {
    let season = e.target.value;
    this.setState({ season });
  }

  getSeasonal() {
    Axios.get(`/seasonal/${this.state.state}/${this.state.season}`)
      .then(response => this.setState({ seasonal: response.data }))
      .catch(err => console.log("error", err));
  }

  render() {
    return (
      <>
        <p>{this.state.state}</p>
        <p>{this.state.season}</p>
        <StateSelect changeState={this.changeState} />
        <SeasonSelect changeSeason={this.changeSeason} />
        <button onClick={this.getSeasonal}>Get Seasonal Foods</button>
        <VeggieList veggies={this.state.seasonal} />
      </>
    );
  }
}

export default App;
