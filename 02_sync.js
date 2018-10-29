const fs=require('fs');
//同步异步
/*
fs.stat('./01_homework.js',(err,stats)=>{
  if(err) throw err;
  console.log(stats);
});
*/
var res=fs.statSync('./01_homework.js');
console.log(res);
console.log(1);