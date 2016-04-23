console.log("inicio del mini api");
var http=require("http");
var express=require("express");
var app=expres();
var port=7894;
app.listen(port,function(){
	console.log("listen on port:" +port);
});
app.get("/",function(req,res){
	req.send("Biemvenidos a la miniapi saludos");

});
var bodyParser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.post("/postPrueba",function(requ,res){
	console.log(req.body);
	res.send("OK")

})
var pg=require("pg");
var URL='postgres://gzientzq:OTxZqtM-pq-R0ypnSVceHZR7U2Gi0o3w@pellefant.db.elephantsql.com:5432/gzientzq';
var client=new pg.Client(URL);
client.connect(function(err){
	if(err){
		return console.log(err);
	}
	console.log("Conexion exitosa");
	client.end();

});