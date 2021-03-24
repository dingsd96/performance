// 自动化构建路由
let configRouters = []
// 自动化构建路由
const files = require.context(".", true, /\.js$/)
const fileList = []
/**
 * inject routers
 */
fileList.forEach((key) => {
  if (key === "./index.js") {
    return
  }
  configRouters = configRouters.concat(files(key).default) // 读取出文件中的default模块
})
export default configRouters // 抛出一个Vue-router期待的结构的数组
