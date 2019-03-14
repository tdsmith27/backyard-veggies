import React, { Fragment } from "react";
import RecipeListEntry from "./RecipeListEntry";

const RecipeList = ({ recipes }) => (
  <Fragment>
    <div className="recipeList">
      {recipes.map((recipe, key) => (
        <RecipeListEntry recipe={recipe} />
      ))}
    </div>
  </Fragment>
);

export default RecipeList;
