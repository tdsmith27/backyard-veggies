import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import { FavoriteBorder } from "@material-ui/icons";
import { favoriteButtonStyle, favoriteIconStyle } from "../../helpers";

const RecipeListEntry = ({ recipe, favorite }) => (
  <Fragment>
    <div className="recipe">
      <p className="recipeLabel">{recipe.recipe.label}</p>
      <a href={recipe.recipe.url}>
        <img className="recipeImage" src={recipe.recipe.image} />
      </a>
      <Button
        onClick={() => favorite(recipe)}
        style={favoriteButtonStyle}
        variant="contained"
        color="default">
        <FavoriteBorder style={favoriteIconStyle} />
      </Button>
    </div>
  </Fragment>
);

export default RecipeListEntry;
