//引入查询字符串模块
const querystring=require('querystring');
const express=require('express');
var app=express();
app.listen(3000);

//路由：请求注册页面。
//请求方法:get，请求URL:/reg
app.get('/reg',(req,res)=>{
  res.sendFile(__dirname+'/reg.html');
});
//创建请求注册的路由
app.post('/myreg',(req,res)=>{
  //res.send('注册成功');
  //如果有请求的数据发送给服务器端
  //事件
  req.on('data',(buf)=>{
     var qs=buf.toString();
	 //将浏览器传递的数据解析成对象
	 var obj=querystring.parse(qs);
	 console.log(obj);
	 //响应浏览器 ***注册成功
	 res.send(obj.uname+'注册成功');
  });
});
//练习：创建路由 
//请求方法：get，请求url：/myreg2
//获取请求的数据 ———— req.query
app.get('/myreg2',(req,res)=>{
  //获取请求的数据
  //console.log(req.query);
  var obj=req.query;
  //响应到浏览器
  res.send('get请求成功，请求的数据为'+obj.uname);
});
