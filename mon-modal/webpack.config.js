// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Ton point d'entrée principal
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Matcher tous les fichiers .js et .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Utiliser les presets pour ES6 et React
          },
        },
      },
    ],
  },
};
