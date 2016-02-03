var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/jalija", {native_parser: true});////TROCAR IP QUANDO SUBIR PARA SERVIDOR
var ObjectId = require('mongodb').ObjectID;

exports.logaradm = function(req,res){
    if ((req.params.user=='')||(req.params.pwd=='')){
        res.send(false);
    }else{
        if ((req.params.user=='admjalija')||(req.params.pwd=='nicolas165044')){
            res.send(true);
        }else{
            res.send(false);
        }
    }
};

exports.buscarusuariosnewsletter = function(req,res){
    db.collection('newsletter').find().toArray(function(err,usuarios){
        res.send(usuarios);
    });
};

exports.buscarusuarioscadastrados = function(req,res){
    res.send(null);
};

exports.excluirusuarionewsletter = function(req,res){
    db.collection('newsletter').remove({_id: ObjectId(req.params._id)}, function(err,status){
        if (err){
            res.send('ERRO! '+err+' - '+status);
        }else{
            db.collection('newsletter').find().toArray(function(err,usuarios){
                res.send(usuarios);
            });
        }
    });
};

exports.excluirusuariocadastrado = function(req,res){
    res.send(null);
}