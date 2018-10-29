//引入mysql第三方模块
const mysql=require('mysql');
//mysql.exe -h127.0.0.1 -P3306 -uroot -p
//使用mysql模块创建连接,返回对象
var connection=mysql.createConnection({
  host:'127.0.0.1',
  port:3306,
  user:'root',
  password:'',
  database:'tedu' //连接成功后，要使用的数据库
});
//执行连接
connection.connect();
//执行SQL语句
//参数1：要执行的SQL语句
//参数2：回调函数，获取SQL语句的执行结果
connection.query('SELECT*FROM emp',(err,result)=>{
  //err 如果执行有错误，记录错误信息
  //result SQL语句的执行结果
  if(err) throw err;
  console.log(result);
});
//如果SQL语句已经执行完毕,关闭连接
connection.end();




