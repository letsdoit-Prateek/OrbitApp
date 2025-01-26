module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        alias: {
          '@app-components': './app/components',
          '@app-containers': './app/containers',
          '@app-navigations': './app/navigations',
          '@app-helpers': './app/helpers',
          '@app-experience': './app/experience',
          '@app-services': './app/services',
          '@app-contexts': './app/contexts',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
}
