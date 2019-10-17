var db=require('../dbconnection'); //reference of dbconnection.js
 
var ad={
 
getAllData:function(callback){
 
return db.query("Select * from admin",callback);
 
},
 getTaskByEmail:function(u_EmailId,callback){
 
return db.query("select * from admin where u_EmailId=?",[u_EmailId],callback);
 },
//  addData:function(details,callback){
//  return db.query("Insert into task values(?,?,?)",[details.email,Task.Title,Task.Status],callback);
//  }
 deleteUserDAata:function(u_EmailId,callback){
  return db.query("delete from admin where u_EmailId=?",[u_EmailId],callback);
 },
//  updateTask:function(id,Task,callback){
//   return db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
//  }
 
};
 module.exports=ad;
