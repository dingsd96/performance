const axios = require("axios")
import qs from "qs"

const instance = axios.create({
  baseURL: "apis/", // 正式环境
  timeout: 100000,
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("accessToken")
    config.headers["App-Token-Nursing"] =
      "51e827c9-d80e-40a1-a95a-1edc257596e7"
    if (accessToken) {
      config.headers["Auth"] = accessToken
    }
    // 处理用post请求数据的api
    return config
  },
  (error) => Promise.reject(error)
)

// 返回拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.status === 200) {
      if (res.data.code === "200") {
        return res.data.data
      } else {
        return Promise.reject(res.data)
      }
    }
  },
  (
    error // 请求失败
  ) => Promise.reject(error)
)

export default {
  get(url, params) {
    return instance.get(url, { params })
  },
  post(
    url,
    params,
    config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // 'Content-Type': 'application/json'
      },
    }
  ) {
    return instance
      .post(url, qs.stringify(params), config)
      .finally((res) => res || "")
  },
  async uploadFile(
    url,
    file,
    config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ) {
    const param = new FormData() // 创建form对象
    param.append("file", file) // 通过append向form对象添加数据
    return instance.post(url, param, { timeout: 100000, ...config })
  },
}
