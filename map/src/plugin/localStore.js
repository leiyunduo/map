export const getStore = name => {
  if (!name) return
  return JSON.parse( window.localStorage.getItem(name) )
}

export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

export const removeStore = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}

export const clear = (name) => {
  window.localStorage.clear(name)
}

export const LocalStore = {
  install(Vue, options) {
    Vue.prototype.$getStore = getStore
    Vue.prototype.$setStore = setStore
    Vue.prototype.$removeStore = removeStore
    Vue.prototype.$clear = clear
  }
}

