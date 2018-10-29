const express=require('express');
//引入body-parser中间件模块
const bodyParser=require('body-parser');
//创建服务器
var app=express();
app.listen(3000);
//托管静态资源到public下
app.use(express.static('public'));
//使用body-parser中间件
//用于对post请求的数据进行解析，解析成对象
app.use(bodyParser.urlencoded({
  extended:false
  //false-使用nodejs中的查询字符串模块解析
  //true-使用第三方的模块qs来解析
}));
//根据表单中的请求写路由
app.post('/mylogin',(req,res)=>{
  //如果已经使用了body-parser中间件
  //就可以使用req.body来直接获取表单中的数据
  //返回一个对象
  console.log(req.body);
});








