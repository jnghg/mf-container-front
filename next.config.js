const deps = require("./package.json").dependencies;
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
  trailingSlash: true,
  webpack5: true,
  webpack(config, options) {
    const { webpack } = options;

    config.module.rules.push({
      test: /_app.tsx/,
      loader: "@module-federation/nextjs-mf/lib/federation-loader.js",
    });

    config.output.publicPath = process.env.FRONT_HOST;
    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        remoteType: "var",
        remotes: {
          app1: "app1",
          app2: "app2",
        },
        shared: {
          react: {
            eager: true,
            requiredVersion: deps["react"],
            singleton: true,
          },
          "react-dom": {
            eager: true,
            requiredVersion: deps["react-dom"],
            singleton: true,
          },

          "mobx-react": {
            eager: true,
            requiredVersion: deps["mobx-react"],
            singleton: true,
          },
        },
      }),
      new Dotenv({
        path: path.resolve(__dirname, "config", `.env.${process.env.APP_ENV}`),
      })
    );
    return config;
  },
};
