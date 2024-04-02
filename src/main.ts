import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// svg插件需要配置代码
import 'virtual:svg-icons-register'

// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入自定义组件，全局注册
import globalComponent from '@/components/index'
// 引入scss
import '@/styles/index.scss'

const app = createApp(App)
app
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(globalComponent)
  .mount('#app')
