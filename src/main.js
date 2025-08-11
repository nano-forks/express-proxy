const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
var cors = require("cors");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Configuración de proxies
app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:9001/auth",
    changeOrigin: true,
    pathRewrite: { "^/auth": "" },
  })
);

app.use(
  "/",
  createProxyMiddleware({
    target: "http://localhost:8000",
    changeOrigin: true,
    pathRewrite: { "^/": "/" },
  })
);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Proxy corriendo en http://localhost:${PORT}`);
});
