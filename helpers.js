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
  }
};
