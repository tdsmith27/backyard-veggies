module.exports = {
  excludeChain: exclude => {
    let ingredients = exclude.split(",");
    let chain = "";
    for (let ingredient of ingredients) {
      chain += `&excluded=${ingredient}`;
    }
    return chain;
  },

  formStyle: {
    width: "200px",
    margin: "10px"
  },

  labelStyle: {
    fontSize: "15px"
  },

  selectStyle: {
    fontSize: "22px"
  },

  recipeButtonStyle: {
    backgroundColor: "#e0e0e0",
    border: "1px solid aliceblue",
    width: "140px"
    // margin: "20px 20px 0 0"
  },

  searchStyle: {
    color: "green"
  },

  progressStyle: {
    color: "green",
    height: "28px",
    width: "28px",
    marginTop: "5px"
  },

  favoriteButtonStyle: {
    backgroundColor: "aliceblue"
  },

  favoriteIconStyle: {
    color: "red"
  }
};
