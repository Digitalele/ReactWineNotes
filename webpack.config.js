var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');



var config = {
  entry: [
    'script!node_modules/jquery/dist/jquery.min.js',
    'script!node_modules/foundation-sites/dist/foundation.min.js',
    APP_DIR + '/index.jsx'
    ],
    externals: {
      jquery: 'jQuery'
    },
    plugins: [
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
    ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {

        Main: 'src/client/app/components/Main.jsx',
        Wine: 'src/client/app/components/Wine.jsx',
        Nav: 'src/client/app/components/Nav.jsx',
        Fields: 'src/client/app/components/Fields.jsx',
        WineFields: 'src/client/app/components/WineFields.jsx',
        WineList: 'src/client/app/components/WineList.jsx',
        WineForm: 'src/client/app/components/WineForm.jsx',
        WineMessage: 'src/client/app/components/WineMessage.jsx',
        WineMessageFire: 'src/client/app/components/WineMessageFire.jsx',
        Examples: 'src/client/app/components/Examples.jsx',
        ErrorModal: 'src/client/app/components/ErrorModal.jsx',
        About: 'src/client/app/components/About.jsx',

        WineApi: 'src/client/app/api/WineApi.jsx',  
        LocalStorage: 'src/client/app/api/LocalStorage.jsx',
        Firebase: 'src/client/app/api/Firebase.js',

        AppCrud: 'src/client/app/components/crud/AppCrud.jsx',
        DataList: 'src/client/app/components/crud/DataList.jsx',
        WineList: 'src/client/app/components/crud/WineList.jsx',
        Upgrade: 'src/client/app/components/crud/Upgrade.jsx',
        Delete: 'src/client/app/components/crud/Delete.jsx',

        applicationStyles: 'src/client/app/styles/app.scss'
    },
    extensions: ['*', '.js', '.jsx']
  },
    resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        loader : 'babel'
      }
    ]
  },
  devtool: 'inline-source-map'
};

module.exports = config;

