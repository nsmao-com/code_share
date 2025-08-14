<template>
  <div ref="editorContainer" class="monaco-editor-container" :style="{ height: height }"></div>
</template>

<script setup>
import * as monaco from 'monaco-editor'
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: 'javascript'
  },
  theme: {
    type: String,
    default: 'vs-dark'
  },
  height: {
    type: String,
    default: '400px'
  },
  options: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const editorContainer = ref(null)
let editor = null

const defaultOptions = {
  automaticLayout: true,
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
  foldingStrategy: 'indentation',
  showFoldingControls: 'always',
  unfoldOnClickAfterEndOfLine: false,
  contextmenu: true,
  mouseWheelZoom: true,
  cursorSmoothCaretAnimation: 'on',
  smoothScrolling: true,
  // 禁用语言服务相关功能
  quickSuggestions: false,
  suggestOnTriggerCharacters: false,
  acceptSuggestionOnEnter: 'off',
  tabCompletion: 'off',
  wordBasedSuggestions: false,
  parameterHints: { enabled: false },
  codeLens: false,
  hover: { enabled: false },
  links: false,
  colorDecorators: false,
  lightbulb: { enabled: false },
  scrollbar: {
    vertical: 'visible',
    horizontal: 'visible',
    useShadows: false,
    verticalHasArrows: true,
    horizontalHasArrows: true
  }
}

const initEditor = async () => {
  if (!editorContainer.value) return

  // 禁用TypeScript和JavaScript的语言服务
  try {
    if (monaco.languages && monaco.languages.typescript) {
      monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: true,
        noSuggestionDiagnostics: true
      })
      
      monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: true,
        noSuggestionDiagnostics: true
      })
    }
  } catch (error) {
    console.warn('Failed to configure Monaco language services:', error)
  }

  const editorOptions = {
    ...defaultOptions,
    ...props.options,
    value: props.modelValue,
    language: props.language,
    theme: props.theme
  }

  editor = monaco.editor.create(editorContainer.value, editorOptions)

  // 监听内容变化
  editor.onDidChangeModelContent(() => {
    const value = editor.getValue()
    emit('update:modelValue', value)
    emit('change', value)
  })
}

const updateValue = (newValue) => {
  if (editor && editor.getValue() !== newValue) {
    editor.setValue(newValue || '')
  }
}

const updateLanguage = (newLanguage) => {
  if (editor) {
    const model = editor.getModel()
    if (model) {
      monaco.editor.setModelLanguage(model, newLanguage)
    }
  }
}

const updateTheme = (newTheme) => {
  if (editor) {
    monaco.editor.setTheme(newTheme)
  }
}

// 监听props变化
watch(() => props.modelValue, updateValue)
watch(() => props.language, updateLanguage)
watch(() => props.theme, updateTheme)

onMounted(async () => {
  // 确保只在客户端执行
  if (process.client) {
    await nextTick()
    await initEditor()
  }
})

onUnmounted(() => {
  if (editor) {
    try {
      // 先移除所有监听器
      const model = editor.getModel()
      if (model) {
        model.dispose()
      }
      // 然后销毁编辑器
      editor.dispose()
      editor = null
    } catch (error) {
      console.warn('Editor disposal error:', error)
    }
  }
})

// 暴露编辑器实例给父组件
defineExpose({
  getEditor: () => editor,
  getValue: () => editor?.getValue() || '',
  setValue: (value) => editor?.setValue(value || ''),
  focus: () => editor?.focus(),
  getSelection: () => editor?.getSelection(),
  setSelection: (selection) => editor?.setSelection(selection)
})
</script>

<style scoped>
.monaco-editor-container {
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
}
</style>