//引入body-parser中间件
const bodyParser=require('body-parser');
//引入mysql模块
const mysql=require('mysql');
const express=require('express');
//创建web服务器
var app=express();
app.listen(3000);
//连接MySQL
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'tedu',
  connectionLimit:20
});
//托管静态资源到public下
app.use(express.static('public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended:false  //不使用扩展的，而是使用nodejs提供的查询字符串模块
}));
//路由
app.post('/add',(req,res)=>{
  //获取浏览器传递的数据
  var obj=req.body;
  //执行SQL语句，将传递的数据插入到MySQL数据库
  pool.query('INSERT INTO dept SET ?',[obj],(err,result)=>{
    if(err) throw err;
    //console.log(result);
	//判断是否插入成功
    if(result.affectedRows>0){
	  res.send('部门添加成功');
	}
  });

});








