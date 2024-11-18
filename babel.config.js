const devMode = process.env.NODE_ENV === "development";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3",
      },
    ],
    ["@babel/preset-react", { runtime: "automatic" }],
  ].filter(Boolean),
};
