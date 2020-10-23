module.exports = {
  devServer: {
    port: 10001,
    open: false,
    proxy: {
      '/ccecc': {
        target: 'http://192.168.1.100:8089',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/ccecc': '',
        },
      },
    },
  },
};
