const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
      // TypeScript-Kompilierung + AOT

const PurifyPlugin = require('@angular-devkit/build-optimizer').PurifyPlugin;
      // Build Optimizer

const path = require('path');
const webpack = require('webpack');

const clientA = {
  entry: './projects/client-a/src/main.ts',
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
      tsConfigPath: './projects/client-a/tsconfig.app.json',
      hostReplacementPaths: {
        "./src/environments/environment.ts": "./src/environments/environment.prod.ts"
      },
      entryModule: path.resolve(__dirname, './projects/client-a/src/app/app.module#AppModule' )
    }),

    new PurifyPlugin()

  ],
  output: {
    path: __dirname + '/dist/shell/client-a',
    filename: 'main.bundle.js',
    libraryTarget: 'umd',
    library: 'client-a'
  },
  /*
  externals: {
    "ng.core": "@angular/core",
    "ng.common": "@angular/common",
    "ng.router": "@angular/router",
    "ng.forms": "@angular/forms",
    "ng.elements": "@angular/elements",
    "ng.platformBrowser": "@angular/platform-browser",
    "rxjs": "rxjs"
  },
    --> results in angular framework to be included in the bundle. wrong syntax!
  */
  /*
  externals: {
    "@angular/core": "ng.core",
    "@angular/common": "ng.common",
    "@angular/router": "ng.router",
    "@angular/forms": "ng.forms",
    "@angular/elements": "ng.elements",
    "@angular/platform-browser": "ng.platformBrowser",
    "rxjs": "rxjs"
  },    --> results in `require("ng.common")` and `root["ng.common"]`
        --> it should be `require(@angular/common)`, mapped to `root.ng.common` (or `root["ng"]["common"]`)
  */
 externals: {
  "@angular/core": { root: ["ng", "core"] },
  "@angular/common": { root: ["ng", "common"] },
  "@angular/router": { root: ["ng", "router"] },
  "@angular/forms": { root: ["ng", "forms"] },
  "@angular/elements": { root: ["ng", "elements"] },
  "@angular/platform-browser": { root: ["ng", "platformBrowser"] },
  "rxjs": { root: ["rxjs"] }
  }, // --> ERROR in chunk main ...  Missing external configuration for type:commonjs2
  mode: 'development'
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
      hostReplacementPaths: {
        "./src/environments/environment.ts": "./src/environments/environment.prod.ts"
      },
      tsConfigPath: './projects/client-b/tsconfig.app.json',
      entryModule: path.resolve(__dirname, './projects/client-b/src/app/app.module#AppModule' )
    }),

    new PurifyPlugin()

  ],
  output: {
    path: __dirname + '/dist/shell/client-b',
    filename: 'main.bundle.js'
  },
  mode: 'development'
};

module.exports = [clientA, clientB];
