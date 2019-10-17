var db=require('../dbconnection'); //reference of dbconnection.js
 
var cat={
 
getAllCategory:function(callback){
 
return db.query("Select * from category_table",callback);
 
},
deleteCategory:function(cat_id,callback){
    return db.query('delete from category_table where cat_id=?',[cat_id],callback);
}
 
};
 module.exports=cat;