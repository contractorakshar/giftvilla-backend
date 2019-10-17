var express = require('express');
 var router = express.Router();
 var ad=require('../models/details');
 router.get('/',function(req,res,next){
  ad.getAllData(function(err,rows){
          if(err)
          {
              res.json(err);
          }
          else
          {
              res.json(rows);
          }
      });
});
router.delete('/:u_EmailId',function(req,res,next){
    ad.deleteUserDAata(req.params.u_EmailId,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows)
            }
        });
    });
// router.get('/:u_EmailId',function(req,res,next){
// ad.getTaskByEmail(req.params.u_EmailId,function(err,rows){
//       if(err)
//       {
//           res.json(err);
//       }
//       else
//       {
//           res.json(rows);
//       }
//   });
//});
module.exports=router;