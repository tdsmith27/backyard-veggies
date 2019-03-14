import React, { Fragment } from "react";
import RecipeListEntry from "./RecipeListEntry";

const RecipeList = ({ recipes }) => (
  <Fragment>
    {recipes.length
      ? recipes.map((recipe, key) => <RecipeListEntry recipe={recipe} />)
      : null}
  </Fragment>
);

export default RecipeList;
