import path from 'path';
import webpack from 'webpack';
import packageJson from './package.json';

export default {
  entry: path.resolve(__dirname, packageJson.source),
  externals: {
    graphql: 'graphql',
    mongoose: 'mongoose'
  },
  output: {
    path: __dirname,
    filename: packageJson.main,
    library: packageJson.libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  target: 'node',
  plugins: [
    new webpack.ProvidePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        use: ['awesome-typescript-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', './index.ts', './index.js']
  }
};
