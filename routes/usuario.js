var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/jalija", {native_parser: true});////TROCAR IP QUANDO SUBIR PARA SERVIDOR

exports.CadastrarNewsletter = function (req, res) {
    if ((req.body.nome == '') || (req.body.email == '')) {
        res.send({status: 2, msg: 'Todos campos são obrigatórios'});
    } else {
        var usuario = {
            nome: req.body.nome,
            email: req.body.email,
            data: req.body.data.charAt(8)+req.body.data.charAt(9)+'/'+req.body.data.charAt(5)+req.body.data.charAt(6)+'/'+req.body.data.charAt(0)+req.body.data.charAt(1)+req.body.data.charAt(2)+req.body.data.charAt(3)
        };
        db.collection('newsletter').insert(usuario, function (err, user) {
            if (err) {
                res.send({status: 1, msg: 'Estamos com problema no servidor. Envie suas informações para o e-mail: newsletter@jalija.com.br. Obrigado!'});
            } else {
                res.send({status: 1, msg: 'Você foi cadastrado com sucesso! Em breve receberá novidades por e-mail!'});
            }
        })
    }
};

exports.listar = function(req,res){
    db.collection('newsletter').find().toArray(function(err, lista){
        res.send({erro:err,lista:lista});
    })
};