# CodeShare - 专业的代码分享平台

<div align="center">
  <h3>🚀 让每一行代码都能被精美地展示和分享</h3>
  <p>基于 Nuxt 3 + Monaco Editor 构建的现代化代码分享平台</p>
  
  <p>
    <a href="https://www.nsmao.com">🌐 官网</a> |
    <a href="#功能特性">✨ 功能</a> |
    <a href="#快速开始">🚀 开始</a> |
    <a href="#部署">📦 部署</a>
  </p>
</div>

## 📖 项目介绍

CodeShare 是一个专业的代码分享平台，提供优雅的代码编辑、美化和分享功能。支持多种编程语言语法高亮、丰富的主题选择，以及高质量的代码截图生成功能。

### 🎯 设计理念

- **简洁优雅** - 现代化的UI设计，专注于代码展示
- **功能丰富** - 支持多语言、多主题、自定义样式
- **高性能** - 基于 Nuxt 3 SSR，快速加载和SEO友好
- **易于使用** - 直观的操作界面，无需复杂配置

## ✨ 功能特性

### 🎨 代码编辑器
- **Monaco Editor** - 基于 VS Code 的专业代码编辑器
- **语法高亮** - 支持 JavaScript、Python、Java、C++、HTML、CSS、SQL、TypeScript、PHP 等多种语言
- **智能提示** - 代码自动补全和错误检测
- **多主题支持** - VS Code Dark/Light、GitHub Dark、Monokai、Solarized 等8种精美主题

### 🎯 自定义功能
- **实时预览** - 代码修改实时反映在界面上
- **自定义样式** - 可调节阴影强度、背景等视觉效果
- **水印功能** - 支持添加自定义水印文本
- **响应式设计** - 完美适配桌面端和移动端

### 📸 导出功能
- **高质量截图** - 基于 html2canvas 生成精美的代码截图
- **一键复制** - 快速复制代码内容
- **设置重置** - 一键恢复默认配置

### 🔧 技术特性
- **SSR支持** - 服务端渲染，SEO友好
- **TypeScript** - 完整的类型支持
- **UnoCSS** - 原子化CSS框架，高性能样式
- **组件化** - 模块化设计，易于维护和扩展

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0 (推荐)

### 安装依赖

```bash
# 使用 pnpm (推荐)
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发环境

启动开发服务器 `http://localhost:3000`:

```bash
pnpm dev
```

### 生产构建

```bash
# 构建应用
pnpm build

# 预览构建结果
pnpm preview
```

## 📦 部署

### Docker 部署

#### 使用 Docker

```bash
# 构建镜像
docker build -t codeshare .

# 运行容器
docker run -p 3000:3000 codeshare
```

#### 使用 Docker Compose

```bash
# 启动服务
docker-compose up -d

# 停止服务
docker-compose down
```

### Vercel 部署

1. Fork 本项目到你的 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 自动部署完成

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/codeshare)

### 其他平台

- **Netlify**: 支持自动部署
- **Railway**: 一键部署
- **Heroku**: 容器化部署

## 🛠️ 技术栈

- **框架**: [Nuxt 3](https://nuxt.com/) - Vue.js 全栈框架
- **编辑器**: [Monaco Editor](https://microsoft.github.io/monaco-editor/) - VS Code 编辑器核心
- **样式**: [UnoCSS](https://unocss.dev/) - 原子化CSS引擎
- **语言**: [TypeScript](https://www.typescriptlang.org/) - 类型安全的JavaScript
- **截图**: [html2canvas](https://html2canvas.hertzen.com/) - HTML转图片
- **构建**: [Vite](https://vitejs.dev/) - 下一代前端构建工具

## 📁 项目结构

```
codeshare/
├── app/                    # 应用源码
│   ├── components/         # Vue组件
│   │   └── MonacoEditor.vue
│   ├── layouts/           # 布局组件
│   │   └── default.vue
│   ├── pages/             # 页面组件
│   │   ├── index.vue      # 首页
│   │   └── code.vue       # 编辑器页面
│   ├── plugins/           # 插件
│   │   └── monaco.client.ts
│   └── assets/            # 静态资源
├── public/                # 公共文件
├── Dockerfile            # Docker配置
├── docker-compose.yml    # Docker Compose配置
├── vercel.json          # Vercel部署配置
└── nuxt.config.ts       # Nuxt配置
```

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 开源协议

本项目基于 [MIT](LICENSE) 协议开源。

## 🔗 相关链接

- **官网**: [www.nsmao.com](https://www.nsmao.com)
- **文档**: [Nuxt 3 文档](https://nuxt.com/docs)
- **Monaco Editor**: [官方文档](https://microsoft.github.io/monaco-editor/)

## 💖 支持项目

如果这个项目对你有帮助，请给它一个 ⭐️！

---

<div align="center">
  <p>Made with ❤️ by <a href="https://www.nsmao.com">nsmao.com</a></p>
</div>
