const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
      timeout: 600,
      target: 'http://localhost:5077/',
      changeOrigin: true,
  }));
};