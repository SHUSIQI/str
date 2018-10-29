const express=require('express');
var app=express();
app.listen(3000);

//前置中间件
//只能拦截 /list 这个路由
app.use('/list',(req,res,next)=>{
  console.log('商品列表的前置中间件');
  next();
});
//路由
app.get('/list',(req,res,next)=>{
  res.send('这是商品列表');
  next();
});
//后置中间件
app.use('/list',(req,res,next)=>{
  console.log('商品列表的后置中间件');
});
//练习：创建路由请求方法：get，请求URL：/detail，响应‘这是商品详情’，添加前置和后置中间件
app.use('/detail',(req,res,next)=>{
  console.log('商品详情的前置中间件');
  next();
});
app.get('/detail',(req,res,next)=>{
  res.send('这是商品详情');
  next();
});
app.use('/detail',(req,res,next)=>{
  console.log('商品详情的后置中间件');
});
//练习：创建路由(/view, get)响应当前的浏览器次数，每次请求，所响应的次数要加1
var num=0;
function fn(req,res,next){
  num++;
  next();
}
app.use('/view',fn);
app.get('/view',(req,res,next)=>{
  res.send(num.toString());
});





