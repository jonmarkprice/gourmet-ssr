"use strict";

// Note that `context` has only limited properties when main function
// gets called. To access build context properties such as `target` and
// `build`, use `context.getter` in individual properties.
module.exports = context => ({
  autoLoadPlugins: "prepend",
  plugins: [],

  // Builder configuration
  builder: {
    stageTypes: {
      "local": ["local"],
      "production": ["prod", "production"]
    },
    debug: context.getter(() => !context.stageIs("production")),
    optimize: context.getter(() => context.stageIs("production")),
    sourceMap: context.getter(() => !context.stageIs("production")),
    staticPrefix: "/s/",

    // `runtime` is located here as an independent section from Webpack or Babel
    // because the format is kinda standardized based on browserlist and
    // can be used for other purposes such as CSS compilation.
    runtime: {
      client: null,   // browserlist's default
      server: "6.1"   // node 6.10
    },

    // Options to be given to the init function
    initOptions: null,

    // If true, a global hook is installed in `Error` class to display stack trace
    // based on source maps.
    // Only used when `target` is "server" and `sourceMap` is true.
    installSourceMapSupport: true,

    modules: {
      // - name: [client, server] // `name: value` for both client & server
      // - true: normal reference
      // - false: ignore, use `{}` as exported value instead
      // - "external": load at runtime (i.e. `require()`)
      // "jquery": [true, false],
      // "react-dom/server": [false, true],
      // "react-dom": [true, false],
      // "aws-sdk": [false, "external"],
      // "useless-module": false
    }
  },

  webpack: {
    recordsDir: ".webpack",
    hashFunction: "sha1",
    hashLength: 24,
    module: {},
    resolve: {},
    pipelines: {},
    loaders: {},
    output: {},
    alias: {},
    define: {},
    plugins: [],
    config: {}
  },

  pages: {
    main: {
      client: "./src/client.js",
      server: "./src/server.js"
    },
    admin: {
      client: "./src/admin.js",
      server: "./src/admin.js"
    }
  },

  config: {
  }
});
