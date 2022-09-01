module.exports = {
  presets: ['module:metro-react-native-babel-preset'], // ['babel-preset-expo'],
  plugins: ['react-native-reanimated/plugin'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
