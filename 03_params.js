const express=require('express');
var app=express();
app.listen(3000);

//路由
//请求的URL：/detail，请求方法：get
//路由传递参数：通过在URL中设置要接受的名称，以冒号开头的形式
app.get('/detail/:lid/:name',(req,res)=>{
  //获取路由传参的数据
  console.log(req.params);
  res.send('这是商品详情');
});
//练习：创建购物车路由，请求的url：/shopping，请求的方法：get，传递商品的价格(price)和商品的名称(pname)；
app.get('/shopping/:price/:pname',(req,res)=>{
  var obj=req.params;
  console.log(obj);
  res.send('商品的价格为'+obj.price+',商品名称为'+obj.pname);
});

