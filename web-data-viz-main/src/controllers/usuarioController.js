var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Email undefined");
    } else if (senha == undefined) {
        res.status(400).send("Senha undefined");
    } else {
        usuarioModel.autenticar(email, senha)
            .then(function (resultado) {

                if (resultado.length == 1) {
                    res.json({
                        idUsuario: resultado[0].idUsuario,
                        nome: resultado[0].nome,
                        email: resultado[0].email
                    });
                } else if (resultado.length == 0) {
                    res.status(403).send("Email ou senha inválidos");
                } else {
                    res.status(403).send("Duplicidade de usuários");
                }

            }).catch(function (erro) {
                res.status(500).json(erro.sqlMessage);
            });
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var repSenha = req.body.repSenhaServer;
    var dtNascimento = req.body.nascimentoServer;
    var casa = req.body.casaServer;

    if (nome == undefined) {
        res.status(400).send("Nome undefined");
    } else if (sobrenome == undefined) {
        res.status(400).send("Sobrenome undefined");
    } else if (email == undefined) {
        res.status(400).send("Email undefined");
    } else if (senha == undefined) {
        res.status(400).send("Senha undefined");
    } else if (repSenha == undefined) {
        res.status(400).send("Repetir senha undefined");
    } else if (dtNascimento == undefined) {
        res.status(400).send("Nascimento undefined");
    } else if (casa == undefined) {
        res.status(400).send("Casa undefined");
    } else if (senha !== repSenha) {
        res.status(400).send("As senhas não coincidem");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, sobrenome, email, senha, dtNascimento, casa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}