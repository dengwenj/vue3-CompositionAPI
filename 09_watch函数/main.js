// 引入的不再是 Vue 构造函数了，引入的是一个为 createApp 的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app(类似于之前 Vue2 中的 vm，但 app 比 vm 更轻)
// createApp(App).mount('#app')
const app = createApp(App) // app 是个对象
// 挂载
app.mount('#app')

/* Vue2
  const vm = new Vue({
    render: (h) => h(App),
  })
  vm.$mount('#app')
*/
