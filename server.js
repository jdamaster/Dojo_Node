console.log("inicio del mini api");
var http=require("http");
var express=require("express");
var app=express();
var port=7894;
app.listen(port,function(){
	console.log("listen on port:" +port);
});
app.get("/",function(req,res){
	req.send("Biemvenidos a la miniapi saludos");

});
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
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
app.post('/api/insertar', function(req, res){
    var cedula = req.body.cedula;
    var nombre = req.body.nombre;
    var dinero = req.body.dinero;
    
    var queryInsertar = 'INSERT INTO saldo VALUES('
                + cedula + ', '
                + '\'' + nombre + '\', '
                + dinero + ');'
    console.log(queryInsertar);
    
    pg.connect(URL, function(err, client, done){
        if (err){
            res.send('Error :(');
            return console.log('Error de conexión');
        }
        client.query(queryInsertar, function(err, result){
            if(err){
                res.send('Error :(');
                client.end();
                return console.log('Error en el query');
            }
            console.log('Se insertó');
            res.send('OK c:');
            client.end();
        });
    });
});