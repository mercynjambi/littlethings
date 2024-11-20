const path = require('path');

module.exports = {
  // Your other configurations...
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false, // Set to false if you don't need it in the frontend
      "stream": require.resolve("stream-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "http": require.resolve("stream-http"),
      "net": false, // If net and other modules are not used in the browser, set to false
    },
  },
};
