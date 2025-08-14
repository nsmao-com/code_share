<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <!-- Main Editor Area -->
    <div class="pt-20 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <!-- Settings Sidebar -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">
              <h2 class="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <svg class="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                编辑设置
              </h2>
              
              <!-- Theme Selection -->
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-3">代码主题</label>
                <div class="grid grid-cols-2 gap-2">
                  <button 
                    v-for="theme in themes" 
                    :key="theme.name"
                    @click="selectedTheme = theme.name; updateTheme()"
                    :class="[
                      'p-3 rounded-xl border-2 text-sm font-medium transition-all duration-200',
                      selectedTheme === theme.name 
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700' 
                        : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
                    ]"
                  >
                    {{ theme.label || theme.name }}
                  </button>
                </div>
              </div>

              <!-- Language Selection -->
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-3">编程语言</label>
                <select v-model="selectedLanguage" class="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                  <option value="auto">自动检测</option>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="cpp">C++</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="sql">SQL</option>
                  <option value="typescript">TypeScript</option>
                  <option value="php">PHP</option>
                  <option value="ruby">Ruby</option>
                  <option value="go">Go</option>
                  <option value="rust">Rust</option>
                </select>
              </div>

              <!-- Appearance Settings -->
              <div class="mb-6">
                <h3 class="text-sm font-medium text-gray-700 mb-3">外观设置</h3>
                
                <!-- Background Color -->
                <div class="mb-4">
                  <label class="block text-xs text-gray-600 mb-2">背景颜色</label>
                  <div class="flex items-center space-x-2">
                    <input type="color" v-model="backgroundColor" class="w-12 h-10 rounded-lg border border-gray-300 cursor-pointer">
                    <input type="text" v-model="backgroundColor" class="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  </div>
                </div>

                <!-- Background Image -->
                <div class="mb-4">
                  <label class="block text-xs text-gray-600 mb-2">背景图片</label>
                  <input type="file" @change="handleBackgroundImageUpload" class="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100">
                </div>

                <!-- Padding -->
                <div class="mb-4">
                  <label class="block text-xs text-gray-600 mb-2">内边距: {{ padding }}px</label>
                  <input type="range" min="0" max="80" v-model="padding" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider">
                </div>

                <!-- Border Radius -->
                <div class="mb-4">
                  <label class="block text-xs text-gray-600 mb-2">圆角: {{ borderRadius }}px</label>
                  <input type="range" min="0" max="40" v-model="borderRadius" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider">
                </div>

                <!-- Shadow -->
                <div class="mb-4">
                  <label class="block text-xs text-gray-600 mb-2">阴影强度: {{ shadowIntensity }}</label>
                  <input type="range" min="0" max="5" v-model="shadowIntensity" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider">
                </div>
              </div>

              <!-- Branding -->
              <div class="mb-6">
                <h3 class="text-sm font-medium text-gray-700 mb-3">品牌设置</h3>
                <div>
                  <label class="block text-xs text-gray-600 mb-2">水印文字</label>
                  <input type="text" v-model="watermark" placeholder="输入水印文本" class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
              </div>

              <!-- Action Buttons -->
              <div class="space-y-3">
                <button @click="copyCode" class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>复制代码</span>
                </button>
                
                <button @click="resetSettings" class="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>重置设置</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Code Editor Area -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <!-- Editor Header -->
              <div class="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-2">
                      <div class="w-3 h-3 rounded-full bg-red-500"></div>
                      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div class="text-sm text-gray-600">
                      <span class="font-medium">main.</span>{{ selectedLanguage === 'auto' ? 'js' : selectedLanguage }}
                    </div>
                  </div>
                  <div class="flex items-center space-x-4 text-sm text-gray-500">
                    <span class="flex items-center space-x-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>{{ lineCount }} 行</span>
                    </span>
                    <span class="flex items-center space-x-1">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span>{{ code.length }} 字符</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Code Editor -->
              <div ref="captureTarget" :style="containerStyle" class="relative">
                <ClientOnly>
                  <MonacoEditor
                    v-if="mounted"
                    v-model="code"
                    :language="selectedLanguage === 'auto' ? 'javascript' : selectedLanguage"
                    :theme="getMonacoTheme(selectedTheme)"
                    :height="`${Math.max(400, code.split('\n').length * 19 + 40)}px`"
                    :options="monacoOptions"
                    @change="onCodeChange"
                  />
                  <template #fallback>
                    <div class="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
                      <div class="text-gray-500">加载编辑器中...</div>
                    </div>
                  </template>
                </ClientOnly>
                
                <!-- Watermark -->
                <div v-if="watermark" class="absolute bottom-4 right-4 text-black/10 dark:text-white/10 text-sm font-semibold pointer-events-none z-50">
                  {{ watermark }}
                </div>
              </div>
              
              <!-- Editor Footer -->
              <div class="bg-gray-50 px-4 py-2 border-t border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="text-sm text-gray-500">
                    <span>{{ selectedLanguage === 'auto' ? '自动检测' : selectedLanguage }}</span>
                  </div>
                  <button @click="generateAndShareImage" class="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm transition-colors">
                    下载
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import html2canvas from 'html2canvas'
import MonacoEditor from '~/components/MonacoEditor.vue'

const mounted = ref(false)
const code = ref('')
const captureTarget = ref(null)
const selectedTheme = ref('vs-dark')
const selectedLanguage = ref('auto')
const shadowIntensity = ref(3)

// 确保只在客户端挂载编辑器
onMounted(() => {
  mounted.value = true
})
const themes = ref([
  { name: 'vs-dark', label: 'VS Code Dark' },
  { name: 'vs', label: 'VS Code Light' },
  { name: 'hc-black', label: 'High Contrast Dark' },
  { name: 'hc-light', label: 'High Contrast Light' },
  { name: 'github-dark', label: 'GitHub Dark' },
  { name: 'monokai', label: 'Monokai' },
  { name: 'solarized-dark', label: 'Solarized Dark' },
  { name: 'solarized-light', label: 'Solarized Light' }
])

// Monaco Editor配置
const monacoOptions = ref({
  fontSize: 14,
  fontFamily: 'Consolas, "Courier New", monospace',
  lineNumbers: 'on',
  roundedSelection: false,
  scrollBeyondLastLine: false,
  readOnly: false,
  minimap: { enabled: true },
  wordWrap: 'on',
  tabSize: 2,
  insertSpaces: true,
  folding: true,
  contextmenu: true,
  mouseWheelZoom: true,
  cursorSmoothCaretAnimation: 'on',
  smoothScrolling: true,
  automaticLayout: true
})

// 主题映射函数
const getMonacoTheme = (themeName) => {
  const themeMap = {
    'vs-dark': 'vs-dark',
    'vs': 'vs',
    'hc-black': 'hc-black',
    'hc-light': 'vs',
    'github-dark': 'vs-dark',
    'monokai': 'vs-dark',
    'solarized-dark': 'vs-dark',
    'solarized-light': 'vs',
    'atom-one-dark': 'vs-dark',
    'monokai-sublime': 'vs-dark',
    'dracula': 'vs-dark',
    'vs2015': 'vs-dark',
    'a11y-dark': 'hc-black',
    'gradient-dark': 'vs-dark',
    'light': 'vs',
    'dark': 'vs-dark',
    'high-contrast': 'hc-black'
  }
  
  return themeMap[themeName] || 'vs-dark'
}
const backgroundColor = ref('#ffffff')
const backgroundImage = ref('')
const padding = ref(32)
const borderRadius = ref(16)
const watermark = ref('@CodeShare')

const lineCount = computed(() => {
  return code.value ? code.value.split('\n').length : 0
})

const containerStyle = computed(() => ({
  backgroundColor: backgroundColor.value,
  backgroundImage: backgroundImage.value ? `url(${backgroundImage.value})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: `${padding.value}px`,
  borderRadius: `${borderRadius.value}px`,
  boxShadow: shadowIntensity.value > 0 ? `0 ${shadowIntensity.value * 4}px ${shadowIntensity.value * 8}px rgba(0, 0, 0, ${0.1 * shadowIntensity.value})` : 'none',
}))

// Monaco Editor事件处理
const onCodeChange = (newCode) => {
  code.value = newCode
}

// 更新主题时的处理
const updateTheme = () => {
  // 强制触发主题更新
  nextTick(() => {
    const monacoTheme = getMonacoTheme(selectedTheme.value)
  })
}

const handleBackgroundImageUpload = (event) => {
  const file = event.target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      backgroundImage.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(code.value)
    // Show success feedback
    const originalText = event.target.innerHTML
    event.target.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>已复制</span>'
    setTimeout(() => {
      event.target.innerHTML = originalText
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}

const resetSettings = () => {
  selectedTheme.value = 'vs-dark'
  selectedLanguage.value = 'auto'
  backgroundColor.value = '#ffffff'
  backgroundImage.value = ''
  padding.value = 32
  borderRadius.value = 16
  shadowIntensity.value = 3
  watermark.value = '@CodeShare'
}

const generateAndShareImage = async () => {
  if (captureTarget.value) {
    try {
      // 等待ClientOnly组件完全加载
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 获取编辑器容器
      const editorContainer = captureTarget.value
      
      // 检查是否有Monaco编辑器内容
      const monacoEditor = editorContainer.querySelector('.monaco-editor')
      if (!monacoEditor) {
        console.error('Monaco编辑器未找到，请等待编辑器加载完成')
        return
      }
      
      // 等待DOM更新
      await nextTick()
      await new Promise(resolve => setTimeout(resolve, 300))
      
      const canvas = await html2canvas(editorContainer, {
        backgroundColor: '#ffffff',
        useCORS: true,
        scale: 2,
        allowTaint: true,
        foreignObjectRendering: false,
        logging: false,
        onclone: (clonedDoc) => {
          // 确保克隆的文档中Monaco编辑器可见
          const clonedEditor = clonedDoc.querySelector('.monaco-editor')
          if (clonedEditor) {
            clonedEditor.style.visibility = 'visible'
            clonedEditor.style.opacity = '1'
          }
        }
      })
      
      // 检查canvas是否有内容
      if (canvas.width === 0 || canvas.height === 0) {
        console.error('截图失败：canvas尺寸为0')
        return
      }
      
      // 直接下载图片，不进行分享
      downloadImage(canvas)
    } catch (error) {
      console.error('生成图片失败:', error)
    }
  } else {
    console.error('未找到截图目标元素')
  }
}

const downloadImage = (canvas) => {
  const link = document.createElement('a')
  link.download = 'code-snapshot.png'
  link.href = canvas.toDataURL()
  link.click()
}
</script>

<style scoped>
.slider::-webkit-slider-thumb {
  appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #4f46e5;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #4f46e5;
  cursor: pointer;
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>