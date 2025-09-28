const debug = false

const loki = {
  enabled: false,
  url: "",
}

const endpoints = {
  "ap2": {
    dohProviders: [
      {
        host: "dns11.quad9.net",
        path: "/dns-query",
      },
      {
        main: true,
        host: "cloudflare-dns.com",
        path: "/dns-query",
      },
    ],
  },
}

export { debug, loki, endpoints }
