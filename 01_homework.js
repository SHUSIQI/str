const express=require('express');
const querystring=require('querystring');
//创建服务器
var app=express();
app.listen(3000);

//托管静态资源到目录下
app.use(express.static('public'));

var id,year,month,date,sex;
//中间件1：获取表单中的数据   
app.use('/myquery',(req,res,next)=>{
  //获取浏览器请求的数据--post
  req.on('data',(buf)=>{
    var str=buf.toString();
	//把查询字符串解析为对象
	var obj=querystring.parse(str);
	id=obj.id;
	//获取完数据以后，再去执行下一个中间件
    next();
  });
});
//中间件2：截取身份证的年月日，性别
app.use('/myquery',(req,res,next)=>{
  //console.log(id);
  //截取出年月日和性别，最终给路由使用
  year=id.slice(6,10);
  month=id.slice(10,12);
  date=id.slice(12,14);
  sex=id.slice(-2,-1);//截取性别，倒数第2位
  //执行下一个中间件或者路由
  next();
});
//根据表单的请求，来写路由
app.post('/myquery',(req,res)=>{
  var result=sex%2==0?'女':'男';
  res.send(`${year}年${month}月${date}日 性别${result}`);
});


