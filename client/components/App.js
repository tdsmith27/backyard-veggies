import React, { Component } from "react";
import Axios from "axios";
import Selector from "./Selector";
import VeggieListContainer from "./VeggieListContainer";
import RecipeList from "./RecipeList";
import { Button, CircularProgress } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import {
  recipeButtonStyle,
  searchStyle,
  progressStyle,
  states,
  seasons
} from "../../helpers";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeSelect = this.changeSelect.bind(this);
    this.getSeasonal = this.getSeasonal.bind(this);
    this.removeVeggie = this.removeVeggie.bind(this);
    this.addVeggie = this.addVeggie.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.favorite = this.favorite.bind(this);

    this.state = {
      state: "alabama",
      season: "early-january",
      seasonal: [],
      search: [],
      exclude: [],
      recipes: [],
      favorites: [],
      fetchingI: false,
      fetchingR: false
    };
  }

  changeSelect(e, list) {
    let selection = e.target.value;
    let newState = {};
    newState[list.toLowerCase()] = selection;
    this.setState(newState);
  }

  getSeasonal() {
    this.setState({ fetchingI: true }, () => {
      Axios.get(`/seasonal/${this.state.state}/${this.state.season}`)
        .then(response =>
          this.setState({
            seasonal: response.data,
            fetchingI: false,
            search: [],
            exclude: [],
            recipes: []
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

    if (!search.includes(veggie)) {
      search.push(veggie);
    }

    this.setState({ search });
  }

  getRecipes() {
    this.setState({ fetchingR: true }, () => {
      Axios.get(`/recipes/${this.state.search}/${this.state.exclude}`)
        .then(response => {
          let recipes = response.data;
          this.setState({ recipes, fetchingR: false });
        })
        .catch(err => console.log("lol", err));
    });
  }

  favorite(recipe) {
    let favorites = this.state.favorites;

    if (favorites.includes(recipe)) {
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i] === recipe) {
          favorites.splice(i, 1);
        }
      }
    } else {
      favorites.push(recipe);
    }

    this.setState({ favorites });
  }

  render() {
    return (
      <>
        <div className="overlay">
          <div className="head">
            <div className="form">
              <Selector
                listLabel={"State"}
                list={states}
                value={this.state.state}
                changeSelect={this.changeSelect}
              />
              <Selector
                listLabel={"Season"}
                list={seasons}
                value={this.state.season}
                changeSelect={this.changeSelect}
              />
            </div>
            <div className="form">
              {this.state.fetchingI ? (
                <CircularProgress style={progressStyle} />
              ) : null}
              <Button
                onClick={this.getSeasonal}
                variant="contained"
                color="default">
                Ingredients
                <Search style={searchStyle} />
              </Button>
            </div>
          </div>
          <div className="float">
            <div className="progressContainer">
              {this.state.fetchingR ? (
                <CircularProgress style={progressStyle} />
              ) : null}
              <Button
                style={recipeButtonStyle}
                className="buttonTest"
                onClick={this.getRecipes}
                variant="contained"
                color="default">
                Recipes
                <Search style={searchStyle} />
              </Button>
            </div>

            <VeggieListContainer
              seasonal={this.state.seasonal}
              search={this.state.search}
              exclude={this.state.exclude}
              remove={this.removeVeggie}
              add={this.addVeggie}
            />
            <RecipeList recipes={this.state.recipes} favorite={this.favorite} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
