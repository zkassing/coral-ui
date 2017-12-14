

const components = [
  {
    name: 'alert',
    template: '<div>1</div>'
  }
]

const install = function (Vue, options) {
  if (install.installed) return
  components.map(function(component){
    Vue.component(componet.name,component)
  })
}
if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue)
}

module.exports = {
  version: '1.03',
  install
}