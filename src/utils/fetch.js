/*import axios from 'axios'
import qs from 'qs'

const env = process.env.NODE_ENV

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

// request拦截器
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token') || ''
    if (token !== '') {
      config.headers.Authorization = env === 'development' ? '3bb532bb49c86899be423d11398a0a2c751888411566330d675083ec398fb274e3740e85cb0f1c50cc1d00af2c849dcc' : 'Basic ' + token; // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config.method === 'post') {
      config.data = qs.stringify(config.data) // 传参序列化
    }
    // service 过滤器
    config.url += '.do'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// code状态码1判断
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 1) {
      return Promise.reject(res)
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
*/

export default function fetch(url, method, data) {
  let token = wx.getStorageSync(
    'token'
  )
  let Authorization = token ? 'Basic ' + token : ''
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data,
      header: {
/*        'TenantId': '478f3ff3289742e49ffbb0a8a5b77a2e',
        'Authorization': Authorization,
        'Content-Type': 'application/x-www-form-urlencoded'*/
      },
      success(response) {
        const res = response.data;
        if (res.code !== 1) {
          return reject(res);
        } else {
          return resolve(response.data);
        }
      }
    })
  })
}
