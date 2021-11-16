/* eslint-disable no-undef */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./src/'],
          alias: {
            // define aliases to shorten the import paths
            store: './src/store',
            screens: './src/screens',
            utils: './src/utils',
            theme: './src/theme',
            molecules: './src/components/molecules',
            organisms: './src/components/organisms',
            atoms: './src/components/atoms',
            api: './src/store/api',
            models: './src/models',
            enums: './src/enums',
          },
          extensions: ['.js', '.jsx', '.tsx', 'ts', '.ios.js', '.android.js'],
        },
      ],
    ],
  }
}
