const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = [
  {
    name: "production",
    entry: __dirname + "/client/index.jsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "/public"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
        },
        {
          test: /\.(html)$/,
          use: {
            loader: "html-loader",
            options: {
              attrs: [":data-src"],
              minimize: true
            }
          }
        },
        {
          test: /\.(png|jpg|gif|jpeg|ttf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "James's House of Bundles",
        template: __dirname + "/client/index.html", //create index.html with js script
        inject: "body",
        filename: "index.html"
      }),
      new MiniCssExtractPlugin({
        //minify that css
        filename: "[name]-[hash].css",
        chunkFilename: "[id][hash].css"
      }),
      new UglifyJsPlugin({ sourceMap: true }) //smash everything
    ],
    mode: "production"
  },
  {
    name: "development",
    entry: __dirname + "/client/index.jsx",
    output: {
      filename: "bundle.js",
      path: __dirname + "/public"
    },
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
    mode: "development"
  }
];
