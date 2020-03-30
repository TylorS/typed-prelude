const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path')

const sourceDir = path.join(__dirname, 'source')
const distDir = path.join(__dirname, 'dist')

module.exports = {
  entry: path.join(sourceDir, 'client.ts'),
  output: {
    path: distDir,
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(sourceDir, 'index.html') }),
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      {    
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }, 
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    mainFields: ['module', 'main'],
    extensions: [".ts", ".tsx", ".js", ".css"],
    plugins: [
      new TsconfigPathsPlugin({ configFile: path.join(__dirname, 'tsconfig.json') }),
    ]
  },
  devServer: {
    contentBase: distDir,
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
}
