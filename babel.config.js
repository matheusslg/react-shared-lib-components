module.exports = (api) => {
  api.cache(true);

  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["babel-plugin-styled-components"];
  const exclude = [/\.test\.js?$/, /\.spec\.js?$/, /\.stories\.js?$/];

  return {
    presets,
    plugins,
    exclude,
  };
};
