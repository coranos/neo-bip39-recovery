module.exports = {
  entry : './exports.js',
  output : {
    filename : './imports.js',
    libraryTarget : 'var',
    library : 'modules'
  },
  module : {
    loaders : [ {
      test : /\.js?$/,
      exclude : /node_modules/,
      loader : 'babel-loader'
    }, {
      test : /\.json?$/,
      loader : 'json-loader'
    } ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
