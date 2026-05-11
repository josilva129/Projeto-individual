-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
create database harrypotter;
use harrypotter;

CREATE TABLE casa (
    idCasa INT PRIMARY KEY AUTO_INCREMENT,
    nomeCasa VARCHAR(45)
);


CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    email VARCHAR(60) UNIQUE,
    senha VARCHAR(255),
    dtNascimento DATE,
    dtCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_casa INT,
    
    CONSTRAINT fk_usuario_casa
        FOREIGN KEY (fk_casa)
        REFERENCES casa(idCasa)
);


CREATE TABLE resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT,
    dtQuiz DATETIME DEFAULT CURRENT_TIMESTAMP,
    fk_usuario INT,
    
    CONSTRAINT fk_resultado_usuario
        FOREIGN KEY (fk_usuario)
        REFERENCES usuario(idUsuario)
);