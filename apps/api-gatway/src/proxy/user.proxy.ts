import { createProxyMiddleware } from "http-proxy-middleware";

export const userProxy = createProxyMiddleware({
  target: "http://localhost:4001", // user-service port
  changeOrigin: true,
  pathRewrite: {
    "^/api/users": "",
  },
});
