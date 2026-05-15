var database = require("../database/config")

function salvarPontuacao(pontuacao, fk_usuario){
    var instrucaoSql = `INSERT INTO resultado (pontuacao, fk_usuario) VALUES (${pontuacao}, ${fk_usuario})`

    return database.executar(instrucaoSql)
}

module.exports = {
    salvarPontuacao
}