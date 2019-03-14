module.exports = {
  excludeChain: exclude => {
    let ingredients = exclude.split(",");
    let chain = "";
    for (let ingredient of ingredients) {
      chain += `&excluded=${ingredient}`;
    }
    return chain;
  }
};
