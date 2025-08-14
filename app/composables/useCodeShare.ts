import { ref, computed } from 'vue'
import hljs from 'highlight.js'

export const useCodeShare = () => {
  const code = ref('')
  const selectedTheme = ref('atom-one-dark')
  const selectedLanguage = ref('auto')
  const themes = ref([
    { name: 'atom-one-dark', cdn: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css' },
    { name: 'github-dark', cdn: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css' },
    { name: 'solarized-light', cdn: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/solarized-light.min.css' },
    { name: 'monokai-sublime', cdn: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/monokai-sublime.min.css' },
    { name: 'dracula', cdn: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/dracula.min.css' },
    { name: 'vs2015', cdn: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/vs2015.min.css' },
    { name: 'a11y-dark', cdn: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/a11y-dark.min.css' },
    { name: 'gradient-dark', cdn: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/gradient-dark.min.css' },
  ])

  const highlightedCode = computed(() => {
    if (code.value) {
      if (selectedLanguage.value === 'auto') {
        return hljs.highlightAuto(code.value).value
      } else {
        return hljs.highlight(code.value, { language: selectedLanguage.value }).value
      }
    }
    return ''
  })

  const loadTheme = () => {
    const theme = themes.value.find(t => t.name === selectedTheme.value)
    if (theme) {
      const linkId = 'highlight-theme'
      let link = document.getElementById(linkId)
      if (!link) {
        link = document.createElement('link')
        link.id = linkId
        link.rel = 'stylesheet'
        document.head.appendChild(link)
      }
      link.href = theme.cdn
    }
  }

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code.value)
      return true
    } catch (err) {
      console.error('复制失败:', err)
      return false
    }
  }

  return {
    code,
    selectedTheme,
    selectedLanguage,
    themes,
    highlightedCode,
    loadTheme,
    copyCode
  }
}