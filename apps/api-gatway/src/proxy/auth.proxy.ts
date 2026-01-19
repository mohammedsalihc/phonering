import { createProxyMiddleware } from "http-proxy-middleware";

export const authProxy = createProxyMiddleware({
  target: "http://localhost:4000",
  changeOrigin: true,
  pathRewrite: {
    "^/api/auth": "",
  },

  on: {
    proxyReq: (proxyReq, req, res) => {
      console.log("[GATEWAY] Forwarding:", req.method, req.url);
    },
    proxyRes: (proxyRes, req, res) => {
      console.log("[GATEWAY] Response from auth:", proxyRes.statusCode);
    },
    error: (err, req, res) => {
      console.error("[GATEWAY] Proxy error:", err.message);
      res.end("Proxy error");
    },
  },
});
