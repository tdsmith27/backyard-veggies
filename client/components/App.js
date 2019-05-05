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
    this.editList = this.editList.bind(this);
    this.getRecipes = this.getRecipes.bind(this);

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

  editList(listType, item, adding) {
    let list = this.state[listType];
    console.log(listType, ":", list);

    if (adding) {
      if (!list.includes(item)) {
        list.push(item);
      }
    }
    if (!adding) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === item) {
          list.splice(i, 1);
        }
      }
    }

    let newState = {};
    newState[listType] = list;
    this.setState(newState);
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
              editList={this.editList}
            />
            <RecipeList recipes={this.state.recipes} editList={this.editList} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
