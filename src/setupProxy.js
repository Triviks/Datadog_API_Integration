const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy endpoint
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://api.us5.datadoghq.com/api/v1',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  })
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
