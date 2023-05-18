const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  lintOnSave: false,
  devServer: {
    port: 8080,
    host: 'localhost',
    https: false,
    open: true,
    allowedHosts: 'all',
    proxy: {
      '/api': {       //'/api'是自行设置的请求前缀
        target: 'https://www.fastmock.site/mock/052388bff43d641e9daa8648836c6e4a/mhjy',
        pathRewrite: { '^/api': '' },  //路径重写，（正则）匹配以api开头的路径为空（将请求前缀删除）
        ws: true,//用于支持websocket
        changeOrigin: true //用于控制请求头中的host值
      }
    }
  }
})
