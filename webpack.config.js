const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  ['counter-lib']);

module.exports = {
  output: {
    uniqueName: "mfAlone",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

        name: "mfAlone",
        filename: "mfAloneEntry.js",
        exposes: {
            './FlightsModule': './src/app/flights/flights.module',
          './ReservationsModule': './src/app/reservations/reservations.module',
        },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "counter-lib": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
          "@ngx-translate/core": {singleton: true, strictVersion: true, requiredVersion: 'auto'},

          ...sharedMappings.getDescriptors()
        })

    }),
    sharedMappings.getPlugin()
  ],
};
