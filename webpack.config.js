const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: './app/js/initialize.js'
  },
  output: {
    library: 'rmm',
    libraryTarget: 'var',
    filename: 'app.js'
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
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./app/assets/index.html",
      filename: "./index.html",
      inject: false
    })
  ]
};
