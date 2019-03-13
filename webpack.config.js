module.exports = {
  entry: __dirname + "/client/index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/public"
  }
};
