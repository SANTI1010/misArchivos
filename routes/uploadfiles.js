var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
	res.render('upload');//carga el hbs
});

router.post('/',function(req,res,next){
//req.body.nameInput =>info de formulario
//req.session.nameInput=>archivos de session
//req.files.nameInput=>
	var EFile = req.files.file;
	var nombre=EFile.name;
	//admite multiples archivos
	console.log(EFile);
	//mv --> mueve los archivos a una ubicacion
	//mv --> tiene parametros -> 1. ubicacion final del archivo/nombreArchivo, 2.function anonima(error)
	if(EFile.mimetype == "image/jpeg" || EFile.mimetype == "image/png"){
	EFile.mv('./archivos/'+nombre,function(err){  //subimos la imagen a archivos
		if (err) {
			console.log(err + "error aca");
		}else {
			res.render('upload',{mensaje:"Archivo creado correctamente"});
		}
	});
}else {
	res.render('upload',{mensaje:"Formato incorrecto"});
}



});





module.exports=router;