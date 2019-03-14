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
    this.addVeggie = this.addVeggie.bind(this);
    this.getRecipes = this.getRecipes.bind(this);

    this.state = {
      state: "alabama",
      season: "early-january",
      seasonal: [],
      search: [],
      exclude: [],
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
          this.setState({
            seasonal: response.data,
            fetching: false,
            search: [],
            exclude: []
          })
        )
        .catch(err => console.log("error", err));
    });
  }

  removeVeggie(veggie, listType) {
    let list = this.state[listType];

    for (let i = 0; i < list.length; i++) {
      if (list[i] === veggie) {
        list.splice(i, 1);
      }
    }

    if (listType === "seasonal") {
      let exclude = this.state.exclude;
      exclude.push(veggie);
      this.setState({ listType: list, exclude });
    } else {
      this.setState({ listType: list });
    }
  }

  addVeggie(veggie) {
    let search = this.state.search;
    let seasonal = this.state.seasonal;

    if (!search.includes(veggie)) {
      search.push(veggie);
    }

    this.setState({ search });
  }

  getRecipes() {
    Axios.get(`/recipes/${this.state.search}/${this.state.exclude}`)
      .then(response => console.log(response.data))
      .catch(err => console.log("lol"));
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
        <button onClick={this.getRecipes}>get recipes</button>
        <div className="lists">
          <VeggieList
            list={"seasonal"}
            veggies={this.state.seasonal}
            remove={this.removeVeggie}
            add={this.addVeggie}
          />
          <VeggieList
            list={"search"}
            veggies={this.state.search}
            remove={this.removeVeggie}
            add={this.addVeggie}
          />
          <VeggieList
            list={"exclude"}
            veggies={this.state.exclude}
            remove={this.removeVeggie}
            add={this.addVeggie}
          />
        </div>
      </>
    );
  }
}

export default App;
