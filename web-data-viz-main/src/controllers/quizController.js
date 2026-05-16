var quizModel = require("../models/quizModels");

function salvarPontuacao(req, res){

    var pontuacao = req.body.pontuacaoServer
    var fk_usuario = req.body.fkUsuarioServer;

    quizModel.salvarPontuacao(pontuacao, fk_usuario)
        .then(function(resultado){
            res.json(resultado);
        }).catch(function(erro){
            console.log(erro)
            res.status(500).json(erro.sqlMessage)
        })  
}

function listarResultados(req, res){
    var fk_usuario = req.params.fk_usuario;

    quizModel.listarResultados(fk_usuario)
        .then(function(resultado){
            res.json(resultado)
        }).catch(function(erro){
            console.log(erro)
            res.status(500).json(erro.sqlMessagem)
        })
}

module.exports = {
    salvarPontuacao,
    listarResultados
}