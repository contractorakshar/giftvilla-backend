var db=require('../dbconnection');
var product={
    getAllProduct:function(callback){
        console.log('all data model');
        return db.query ('select * from product_table',callback);
    },
    
    getProductById:function(pro_id,callback){
        console.log('all data model');
        return db.query ('select * from product_table where pro_id=?',[pro_id],callback);
    },
    deleteProduct:function(pro_id,callback){
        console.log('delete model');
        return db.query('delete from product_table where pro_id=?',[pro_id],callback);
    },
    /*updateProduct:function(id,item,callback){
        console.log('update model');
        return db.query ('update product set name=?,price=?,soh=?,color=?,status=? where id=?',[item.name,item.price,item.soh,item.color,item.status,id],callback);
        
    },
    addProduct:function(item,filename,callback){
        console.log('add model');
        return db.query('insert into product values (?,?,?,?,?,?,?)',[item.id,item.name,item.price,item.soh,item.color,item.status,filename],callback);
    }*/
};
module.exports=product;