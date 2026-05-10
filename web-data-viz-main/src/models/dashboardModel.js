var database = require("../database/config");

function casaUsuarios() {
    var instrucaoSql = `
        SELECT 
        c.nomeCasa AS casa,
        COUNT(u.idUsuario) AS quantidade
        FROM casa c
        JOIN usuario u
        ON c.idCasa = u.fk_casa
        GROUP BY c.nomeCasa
        ORDER BY quantidade DESC
        LIMIT 1`;

    return database.executar(instrucaoSql);
}

module.exports = {
    casaUsuarios
}

