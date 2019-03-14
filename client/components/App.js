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
    this.removeVeggie = this.removeVeggie.bind(this);

    this.state = {
      state: "alabama",
      season: "early-january",
      seasonal: [],
      fetching: false
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
    this.setState({ fetching: true }, () => {
      Axios.get(`/seasonal/${this.state.state}/${this.state.season}`)
        .then(response =>
          this.setState({ seasonal: response.data, fetching: false })
        )
        .catch(err => console.log("error", err));
    });
  }

  removeVeggie(veggie) {
    let list = this.state.seasonal;

    for (let i = 0; i < list.length; i++) {
      if (list[i] === veggie) {
        list.splice(i, 1);
      }
    }
    this.setState({ seasonal: list });
  }

  render() {
    return (
      <>
        {this.state.fetching ? (
          <div className="fetching">fetching</div>
        ) : (
          <div className="notFetching" />
        )}
        <div className="form">
          <StateSelect changeState={this.changeState} />
          <SeasonSelect changeSeason={this.changeSeason} />
          <button onClick={this.getSeasonal}>Get Seasonal Foods</button>
        </div>
        <VeggieList veggies={this.state.seasonal} remove={this.removeVeggie} />
      </>
    );
  }
}

export default App;
