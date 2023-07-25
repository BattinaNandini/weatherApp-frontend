const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "^/api/location": {
        target: "http://localhost:8084/",
        changeOrigin: true,
        pathRewrite: {"^/api": ""},
      }
    }
  }
})
