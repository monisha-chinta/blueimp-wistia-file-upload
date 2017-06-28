var express = require("express");
var app = express();

app.get('/',function(req,res){
  res.sendFile( __dirname + "/index.html");
});

app.use(express.static(__dirname));

app.listen(3001,function(){
  console.log("Started on PORT 3001");
})
