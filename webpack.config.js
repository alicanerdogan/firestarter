const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const API_HOSTNAME = "http://localhost:3000";

const isProduction = process.argv.includes("--mode=production");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: isProduction ? "[name].[contenthash].js" : "[name].[hash].js",
    path: __dirname + "/dist",
    publicPath: "/"
  },
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    contentBase: "./dist",
    compress: true,
    historyApiFallback: true,
    overlay: true,
    proxy: {
      "/api": {
        target: API_HOSTNAME
      }
    }
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        type: "javascript/auto",
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack"
          },
          {
            loader: "file-loader",
            options: {
              name: "[name].[hash].[ext]"
            }
          }
        ]
      },
      {
        type: "javascript/auto",
        test: /\.(png|jpg|gif|ico|xml|json)$/,
        include: [path.resolve(__dirname, "src/assets")],
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]"
          }
        }
      },
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader"]
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "ReactivePod",
      template: "./src/index.html"
    })
  ],
  optimization: {
    minimizer: isProduction ? [new TerserPlugin()] : [],
    splitChunks: {
      minChunks: 2,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "async"
        }
      }
    }
  }
};
