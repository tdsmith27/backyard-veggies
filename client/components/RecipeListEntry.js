import React, { Fragment, Component } from "react";
import { Button } from "@material-ui/core";
import { FavoriteBorder, Favorite } from "@material-ui/icons";
import { favoriteButtonStyle, favoriteIconStyle } from "../../helpers";

class RecipeListEntry extends Component {
  constructor({ props }) {
    super(props);
    this.state = {
      favorite: false
    };
  }

  render() {
    return (
      <div className="recipe">
        <p className="recipeLabel">{this.props.recipe.recipe.label}</p>
        <a href={this.props.recipe.recipe.url}>
          <img className="recipeImage" src={this.props.recipe.recipe.image} />
        </a>
        <Button
          onClick={() => {
            this.setState({ favorite: !this.state.favorite }, () => {
              this.props.favorite(this.props.recipe);
            });
          }}
          style={favoriteButtonStyle}
          variant="contained"
          color="default">
          {this.state.favorite ? (
            <Favorite style={favoriteIconStyle} />
          ) : (
            <FavoriteBorder style={favoriteIconStyle} />
          )}
        </Button>
      </div>
    );
  }
}

export default RecipeListEntry;
