{
  test   :/\.jsx?$/,
  exclude:/(node_modules|bower_components)/,
  loader :'babel',
  query  :{
      presets:['react','es2015']
  }
}