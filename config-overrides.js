const { override, addBabelPlugins } = require('customize-cra')

module.exports = override(
  addBabelPlugins(
    [
      require.resolve('@babel/plugin-proposal-decorators'),
      {
        legacy: true,
      },
    ],
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      {
        loose: true,
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    [
      'babel-plugin-styled-components',
      {
        displayName: false,
      },
    ],
    'jsx-control-statements',
  ),
)
