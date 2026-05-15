var quizModel = require("../models/quizModels");

function salvarPontuacao(req, res){

    var pontuacao = req.body.pontuacaoServer
    var fk_usuario = req.body.fkUsuarioServer;

    quizModel.salvarPontuacao(pontuacao, fk_usuario)
        .then(function(resultado){
            req.json(resultado);
        }).catch(function(erro){
            console.log(erro)
            req.status(500).json(erro.sqlMessage)
        })  
}

module.exports = {
    salvarPontuacao
}