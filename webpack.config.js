// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const globImporter = require('node-sass-glob-importer');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const MODE = argv.mode || "development";
  const isDevelop = MODE === "development";

  const config = {
    mode: MODE,
    entry: {
      othello: './src/othello/app.tsx',
    },
    output: {
      filename: '[name]/app.js',
      path: path.join(__dirname, 'public/'),
      publicPath: '/'
    },
    optimization: {
      minimize: !isDevelop,
      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
      ],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            'ts-loader'
          ],
        },
        {
          test: /\.scss/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: isDevelop,
                importLoaders: 2,
                url: false,
              }
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: isDevelop,
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevelop,
                sassOptions: {
                  importer: globImporter()
                }
              }
            }
          ]
        },
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.tsx', '.js', '.json',
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name]/app.css',
      }),
    ],

    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      contentBasePublicPath: '/',
      openPage: 'othello/index.html',
      overlay: true,
    },

    devtool: isDevelop ? 'inline-source-map' : false,
  };

  if (!isDevelop) {
    config.target = ['web', 'es5'];
  }

  return config;
};
