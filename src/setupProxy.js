const { createProxyMiddleware } = require("http-proxy-middleware");
const next = require("next");

module.exports = function (app) {
  app.use(
    "/flask",
    createProxyMiddleware({
      target: "http://127.0.0.1:5000",
      changeOrigin: true,
    })
  );
};
