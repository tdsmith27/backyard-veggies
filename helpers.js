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
  },

  states: [
    ["alabama", "Alabama"],
    ["alaska", "Alaska"],
    ["arizona", "Arizona"],
    ["arkansas", "Arkansas"],
    ["california", "California"],
    ["colorado", "Colorado"],
    ["connecticut", "Connecticut"],
    ["delaware", "Delaware"],
    ["washington-dc", "District Of Columbia"],
    ["florida", "Florida"],
    ["georgia", "Georgia"],
    ["hawaii", "Hawaii"],
    ["idaho", "Idaho"],
    ["illinois", "Illinois"],
    ["indiana", "Indiana"],
    ["iowa", "Iowa"],
    ["kansas", "Kansas"],
    ["kentucky", "Kentucky"],
    ["louisiana", "Louisiana"],
    ["maine", "Maine"],
    ["maryland", "Maryland"],
    ["massachusetts", "Massachusetts"],
    ["michigan", "Michigan"],
    ["minnesota", "Minnesota"],
    ["mississippi", "Mississippi"],
    ["missouri", "Missouri"],
    ["montana", "Montana"],
    ["nebraska", "Nebraska"],
    ["nevada", "Nevada"],
    ["new-hampshire", "New Hampshire"],
    ["new-jersey", "New Jersey"],
    ["new-mexico", "New Mexico"],
    ["new-york", "New York"],
    ["north-carolina", "North Carolina"],
    ["north-dakota", "North Dakota"],
    ["ohio", "Ohio"],
    ["oklahoma", "Oklahoma"],
    ["oregon", "Oregon"],
    ["pennsylvania", "Pennsylvania"],
    ["rhode-island", "Rhode Island"],
    ["south-carolina", "South Carolina"],
    ["south-dakota", "South Dakota"],
    ["tennessee", "Tennessee"],
    ["texas", "Texas"],
    ["utah", "Utah"],
    ["vermont", "Vermont"],
    ["virginia", "Virginia"],
    ["washington", "Washington"],
    ["west-virginia", "West Virginia"],
    ["wisconsin", "Wisconsin"],
    ["wyoming", "Wyoming"]
  ],

  seasons: [
    ["early-january", "January"],
    ["early-february", "February"],
    ["early-march", "March"],
    ["early-april", "April"],
    ["early-may", "May"],
    ["early-june", "June"],
    ["early-july", "July"],
    ["early-august", "August"],
    ["early-september", "September"],
    ["early-october", "October"],
    ["early-november", "November"],
    ["early-december", "December"]
  ]
};
