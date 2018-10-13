import Vue from 'vue'
import App from './App'
import global_ from './components/tool/Global'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.GLOBAL = global_

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      'pages/logs/main',
      '^pages/index/main',
      'pages/collected/main', 
      'pages/euramerican/main', 
      'pages/hot/main',  
      'pages/new/main', 
      'pages/online/main', 
      'pages/playing/main', 
      'pages/jazz/main', 
      'pages/ranking/main',
      'pages/searchResult/main'
      ],
    window: {
      backgroundTextStyle: 'light',
      // navigationBarBackgroundColor: '#f36034',
      navigationBarBackgroundColor: '#141919',
      // navigationBarBackgroundColor: '#4f5353',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: '#fff'
    }
  }
}
