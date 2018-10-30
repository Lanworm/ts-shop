// see https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/proxy.md
const PROXY_CONFIG = [
  {
      context: [
          "/assets/clients.json",
          "/assets/products.json",
          "/tshop/api/clients",
          "/tshop/api/products",
      ],
      target: "http://localhost:8080",
      secure: false,
      changeOrigin: true,
      logLevel: "debug"
  }
]

module.exports = PROXY_CONFIG;