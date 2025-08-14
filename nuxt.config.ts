// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@unocss/nuxt',
  ],
  css: [
    '@/assets/css/index.css'
  ],
  vite: {
    optimizeDeps: {
      include: ['monaco-editor']
    },
    define: {
      global: 'globalThis',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    },
    worker: {
      format: 'es'
    },
    server: {
      fs: {
        allow: ['..', 'node_modules/monaco-editor']
      }
    }
  },
  nitro: {
    publicAssets: [
      {
        baseURL: '/monaco-editor',
        dir: 'node_modules/monaco-editor/min'
      }
    ]
  },
  build: {
    transpile: ['monaco-editor']
  },
  app: {
    head: {
      title: 'CodeShare - 专业的代码分享平台',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '专业的代码分享平台，支持多种编程语言和主题，让每一行代码都能被精美地展示和分享。提供丰富的自定义选项和高质量的代码截图功能。' },
        { name: 'keywords', content: 'CodeShare,代码分享,代码截图,代码编辑器,Monaco Editor,代码高亮,编程,JavaScript,Python,Java,C++,HTML,CSS' },
        { name: 'author', content: 'CodeShare Team' },
        { property: 'og:title', content: 'CodeShare - 专业的代码分享平台' },
        { property: 'og:description', content: '专业的代码分享平台，支持多种编程语言和主题，让每一行代码都能被精美地展示和分享。' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/favicon.ico' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'CodeShare - 专业的代码分享平台' },
        { name: 'twitter:description', content: '专业的代码分享平台，支持多种编程语言和主题，让每一行代码都能被精美地展示和分享。' }
      ],
      script: [
        {
          innerHTML: `
            if (typeof global === 'undefined') {
              var global = globalThis;
            }
          `,
          type: 'text/javascript'
        }
      ]
    }
  }
})
