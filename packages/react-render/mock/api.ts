export default {
  // GET 可忽略
  // 支持值为 Object 和 Array
  'GET /api/text': { info: '123' },


  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
}
