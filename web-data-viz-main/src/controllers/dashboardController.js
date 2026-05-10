var dashboardModel = require("../models/dashboardModel");

function casaUsuarios(req, res){

    dashboardModel.casaUsuarios()
    .then(function(resultado){
        res.json(resultado);
    }).catch(function(erro){
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    casaUsuarios
}