
export default defineNuxtConfig({
  target: "static",
  nitro: {
    prerender: {
      routes: ["/service", "/home", "/track-preference", "/about-us", "/contacts"],
    },
  },
  app: {
    head: {
      title: "hello world",
    },
  },
  experimental: {
    renderJsonPayloads: false,
  },
  devtools: { enabled: true },
  css: [
    "element-plus/dist/index.css",
    "~/main.css",
    "animate.css/animate.min.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@element-plus/nuxt", "@pinia/nuxt", "@nuxtjs/tailwindcss"],
  vite: {
    resolve: {
      alias: {
        "@store": "~/store",
        "@composable": "~/composable",
        "@": "~/src",
      },
    },
  },
  plugins: ["plugins/router.js", "plugins/element-icons.js"],
  build: {
    assetsDir: 'static',
    publicPath: '/_nuxt/', // 可能需要根据实际情况调整
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              outputPath: 'fonts/',
              publicPath: './public/fonts/', // 可能需要根据实际情况调整
            },
          },
        });
      }
    }
  }
});
