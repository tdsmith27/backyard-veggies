import React, { Fragment } from "react";

const RecipeListEntry = ({ recipe }) => (
  <Fragment>
    <p>{recipe.recipe.label}</p>
  </Fragment>
);

export default RecipeListEntry;
