module.exports = {
  publicPath: "./",
  configureWebpack: {
    devtool: "#source-map",
  },
  devServer: {
    proxy: {
      "/apis": {
        target: "http://192.168.1.54:9871",
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          "^/apis": "",
        },
      },
    },
    overlay: {
      warnings: false,
      errors: false,
    },
  },
}
