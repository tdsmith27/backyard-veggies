import React, { Fragment } from "react";
import RecipeListEntry from "./RecipeListEntry";

const RecipeList = ({ recipes, favorite }) => (
  <Fragment>
    <div className="recipeList">
      {recipes.map((recipe, key) => (
        <RecipeListEntry favorite={favorite} recipe={recipe} key={key} />
      ))}
    </div>
  </Fragment>
);

export default RecipeList;
