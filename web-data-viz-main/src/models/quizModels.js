var database = require("../database/config")

function salvarPontuacao(pontuacao, fk_usuario){
    var instrucaoSql = `INSERT INTO resultado (pontuacao, fk_usuario) VALUES (${pontuacao}, ${fk_usuario})`

    return database.executar(instrucaoSql)
}

function listarResultados(fk_usuario){
    var instrucaoSql = 
    `
    SELECT
        pontuacao, 
        DATE_FORMAT(dtQuiz, '%d/%m/%Y') as dataResultado
    FROM resultado
    where fk_usuario = ${fk_usuario}
    ORDER BY dataResultado DESC;
    `

    return database.executar(instrucaoSql)
}

module.exports = {
    salvarPontuacao,
    listarResultados
}