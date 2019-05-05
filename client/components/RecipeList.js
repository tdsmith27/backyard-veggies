import React, { Fragment } from "react";
import RecipeListEntry from "./RecipeListEntry";

const RecipeList = ({ recipes, editList }) => (
  <Fragment>
    <div className="recipeList">
      {recipes.map((recipe, key) => (
        <RecipeListEntry editList={editList} recipe={recipe} key={key} />
      ))}
    </div>
  </Fragment>
);

export default RecipeList;
