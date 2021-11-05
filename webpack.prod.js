const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude:
          /node_modules/,
        use: {
          loader:
            'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'MFE2',
        filename:
          'remoteEntry.js',
        remotes: {
          MFE1:
            'MFE1@https://storage.googleapis.com/frontend-astreav2/remoteEntry.js',
        },
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};