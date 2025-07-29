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
  "/invoices",
  createProxyMiddleware({
    target: "http://127.0.0.1:8000/invoices",
    // changeOrigin: true,
    // pathRewrite: { '^/invoices': '' },
  })
);

app.use(
  "/payments",
  createProxyMiddleware({
    target: "http://127.0.0.1:8000/payments",
    changeOrigin: true,
    pathRewrite: { "^/payments": "" },
  })
);

app.use(
  "/payment_invoice_records",
  createProxyMiddleware({
    target: "http://127.0.0.1:8000/payment_invoice_records",
    changeOrigin: true,
    pathRewrite: { "^/payment_invoice_records": "" },
  })
);

app.use(
  "/settings",
  createProxyMiddleware({
    target: "http://127.0.0.1:8000/settings",
    changeOrigin: true,
    pathRewrite: { "^/settings": "" },
  })
);

app.use(
  "/customers",
  createProxyMiddleware({
    target: "http://127.0.0.1:8000/customers",
    changeOrigin: true,
    pathRewrite: { "^/customers": "" },
  })
);

app.use(
  "/logs",
  createProxyMiddleware({
    target: "http://127.0.0.1:8000/logs",
    changeOrigin: true,
    pathRewrite: { "^/logs": "" },
  })
);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Proxy corriendo en http://localhost:${PORT}`);
});
