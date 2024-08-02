//require multer
const multer=require("multer");
const path=require("path");
const crypto=require("crypto")
//diskstorage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
        const fn=crypto.randomBytes(12,function(err,name){
            const fn=name.toString("hex")+path.extname(file.originalname)
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, fn)
            
        })
    }
  })
  
  //export upload variable
  const upload = multer({ storage: storage })
module.exports=upload;