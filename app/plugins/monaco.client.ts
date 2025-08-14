export default defineNuxtPlugin(() => {
  if (process.client) {
    // 创建一个安全的Worker类来避免removeEventListener错误
    class SafeWorker {
      constructor() {
        this.onmessage = null
        this.onerror = null
        this.onmessageerror = null
        this._listeners = new Map()
      }
      
      postMessage(data) {
        // 模拟异步响应
        setTimeout(() => {
          if (this.onmessage) {
            this.onmessage({ data: null })
          }
        }, 0)
      }
      
      addEventListener(type, listener, options) {
        if (!this._listeners.has(type)) {
          this._listeners.set(type, new Set())
        }
        this._listeners.get(type).add(listener)
      }
      
      removeEventListener(type, listener) {
        if (this._listeners.has(type)) {
          this._listeners.get(type).delete(listener)
        }
      }
      
      terminate() {
        this._listeners.clear()
        this.onmessage = null
        this.onerror = null
        this.onmessageerror = null
      }
    }
    
    // 配置Monaco Editor环境
    window.MonacoEnvironment = {
      getWorker: function (moduleId, label) {
        // 返回安全的Worker实例
        return new SafeWorker()
      }
    }
  }
})