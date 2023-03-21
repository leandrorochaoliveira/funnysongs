module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["nativewind/babel"],
      ["react-native-reanimated/plugin"],
      [
        "module-resolver",
        {
          alias: {
            "@": "./src/*",
          },
          root: ["./"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
    ],
  };
};
