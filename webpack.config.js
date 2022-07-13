const path = require('path');

module.exports = {
  entry: './src/index.js',
  plugins: [new MiniCssExtractPlugin()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [[
          {
              loader: MiniCssExtractPlugin.loader, 
              options: {
                  publicPath: ''
              }
          },
          {
              loader: "css-loader"
          }
      ]],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        options: {
          publicPath: ''
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
        },
    ],
  },
};
