const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');
const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;

const clientA = {
  entry: './projects/client-a/src/main.ts',
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
      { test: /\.html$/, loader: 'html-loader',  options: { minimize: false } },
      /*{
        test: /\.css$/,
        "use": [
          "style-loader",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "import": false
            }
          }
        ]
      },*/
      
      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }
      
    ]
  },
  plugins: [
    
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './projects/client-a/tsconfig.app.json',
      entryModule: path.resolve(__dirname, './projects/client-a/src/app/app.module#AppModule' )
    }),
    
    new PurifyPlugin()
    
  ],
  output: {
    path: __dirname + '/dist/shell/client-a',
    filename: 'main.bundle.js'
  },
  mode: 'production'
};

const clientB = {
  entry: './projects/client-b/src/main.ts',
  resolve: {
    mainFields: ['browser', 'module', 'main']
  },
  module: {
    rules: [
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
      { test: /\.html$/, loader: 'html-loader',  options: { minimize: true } },
      /*{
        test: /\.css$/,
        "use": [
          "style-loader",
          {
            "loader": "css-loader",
            "options": {
              "sourceMap": false,
              "import": false
            }
          }
        ]
      },*/
      
      {
        test: /\.js$/,
        loader: '@angular-devkit/build-optimizer/webpack-loader',
        options: {
          sourceMap: false
        }
      }
      
    ]
  },
  plugins: [
    
    new AotPlugin({
      skipCodeGeneration: false,
      tsConfigPath: './projects/client-b/tsconfig.app.json',
      entryModule: path.resolve(__dirname, './projects/client-b/src/app/app.module#AppModule' )
    }),
    
    new PurifyPlugin()
    
  ],
  output: {
    path: __dirname + '/dist/shell/client-b',
    filename: 'main.bundle.js'
  },
  mode: 'production'
};

module.exports = [clientA, clientB];
