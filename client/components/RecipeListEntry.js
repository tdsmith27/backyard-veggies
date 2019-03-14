import React, { Fragment } from "react";

const RecipeListEntry = ({ recipe }) => (
  <Fragment>
    <div className="recipe">
      <p className="recipeLabel">{recipe.recipe.label}</p>
      <img className="recipeImage" src={recipe.recipe.image} />
    </div>
  </Fragment>
);

export default RecipeListEntry;
