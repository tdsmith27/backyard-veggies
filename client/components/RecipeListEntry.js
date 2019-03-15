import React, { Fragment } from "react";

const RecipeListEntry = ({ recipe }) => (
  <Fragment>
    <div className="recipe">
      <p className="recipeLabel">{recipe.recipe.label}</p>
      <a href={recipe.recipe.url}>
        <img className="recipeImage" src={recipe.recipe.image} />
      </a>
    </div>
  </Fragment>
);

export default RecipeListEntry;
