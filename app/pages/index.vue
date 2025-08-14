<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-indigo-300/40 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/40 to-purple-300/40 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-200/40 to-blue-300/40 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 text-blue-700 rounded-full text-sm font-medium mb-8 hover:scale-105 transition-transform duration-300">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span>专业 · 简洁 · 高效</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-black mb-8 leading-tight">
          <span class="bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">让代码</span>
          <br>
          <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">更加精彩</span>
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          <span class="text-blue-600 font-semibold">专业的</span>代码分享平台，支持多种编程语言和主题
          <br>
          <span class="text-indigo-600 font-semibold">让每一行代码都能被精美地展示</span>
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <NuxtLink to="/code" class="group px-10 py-5 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3">
            <svg class="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>开始创作</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
          <a href="#features" class="group px-10 py-5 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-3">
            <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>了解更多</span>
          </a>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div class="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg">
            <div class="text-4xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">25K+</div>
            <div class="text-gray-600 font-medium">代码作品</div>
            <div class="text-xs text-blue-500 mt-1">持续增长</div>
          </div>
          <div class="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:scale-105 shadow-lg">
            <div class="text-4xl font-black bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">8.5K</div>
            <div class="text-gray-600 font-medium">活跃用户</div>
            <div class="text-xs text-indigo-500 mt-1">每日活跃</div>
          </div>
          <div class="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-105 shadow-lg">
            <div class="text-4xl font-black bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">156K</div>
            <div class="text-gray-600 font-medium">下载次数</div>
            <div class="text-xs text-purple-500 mt-1">累计下载</div>
          </div>
          <div class="group text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-green-100 hover:border-green-300 transition-all duration-300 hover:scale-105 shadow-lg">
            <div class="text-4xl font-black bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">99.2%</div>
            <div class="text-gray-600 font-medium">满意度</div>
            <div class="text-xs text-green-500 mt-1">用户好评</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black mb-6">
            <span class="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">强大功能</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            提供专业的代码编辑和分享体验，让您的代码展示更加精美
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Monaco Editor</h3>
            <p class="text-gray-600 leading-relaxed">
              集成VS Code同款编辑器，支持语法高亮、智能提示、代码折叠等专业功能
            </p>
          </div>
          
          <!-- Feature 2 -->
          <div class="group p-8 rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">丰富主题</h3>
            <p class="text-gray-600 leading-relaxed">
              提供多种精美主题，支持自定义背景、颜色、圆角等，让代码展示更个性化
            </p>
          </div>
          
          <!-- Feature 3 -->
          <div class="group p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">一键下载</h3>
            <p class="text-gray-600 leading-relaxed">
              支持将代码截图导出为高清图片，方便分享到社交媒体或保存到本地
            </p>
          </div>
          
          <!-- Feature 4 -->
          <div class="group p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 hover:border-green-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">多语言支持</h3>
            <p class="text-gray-600 leading-relaxed">
              支持JavaScript、Python、Java、C++等主流编程语言的语法高亮
            </p>
          </div>
          
          <!-- Feature 5 -->
          <div class="group p-8 rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">自定义设置</h3>
            <p class="text-gray-600 leading-relaxed">
              灵活的自定义选项，包括字体、行号、缩进、主题等，满足个性化需求
            </p>
          </div>
          
          <!-- Feature 6 -->
          <div class="group p-8 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">快速响应</h3>
            <p class="text-gray-600 leading-relaxed">
              基于现代Web技术构建，响应速度快，支持移动端访问，随时随地编辑代码
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl md:text-5xl font-black mb-6">
            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">开始您的创作之旅</span>
          </h2>
          <p class="text-xl text-gray-600 mb-12 leading-relaxed">
            无需注册，立即体验专业的代码编辑和分享功能
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink to="/code" class="group px-12 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-4">
              <svg class="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span class="text-lg">立即开始</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 首页组件
</script>

<style scoped>
/* 首页样式 */
</style>