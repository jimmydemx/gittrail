// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css' //解决移动端高分辨率屏幕显示border:1px 实际先是2px
import fastClick from 'fastclick' // 使用npm install fastclick --save 引用的依赖，解决移动端点击事件延迟300s执行的问题

Vue.config.productionTip = false
fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

