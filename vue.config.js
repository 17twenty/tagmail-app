module.exports = {
  devServer: {
    proxy: {
      "/app": {
        target: "http://localhost:9001",
        logLevel: 'debug',
      }
    }
  }
};