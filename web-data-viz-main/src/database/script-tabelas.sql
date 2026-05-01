-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/
create database harrypotter;
use harrypotter;


CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    sobrenome VARCHAR(45),
    email VARCHAR(60) UNIQUE,
    senha VARCHAR(255),
    dtNascimento DATE,
    dtCriacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    casa VARCHAR(45)
);

CREATE TABLE quizzes (
    idQuizzes INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    tema VARCHAR(45)
);

CREATE TABLE perguntas (
    idPerguntas INT PRIMARY KEY AUTO_INCREMENT,
    enunciado VARCHAR(60),
    fk_quiz INT,
    CONSTRAINT fk_pergunta_quiz
        FOREIGN KEY (fk_quiz)
        REFERENCES Quizzes(idQuizzes)
);

CREATE TABLE respostas (
    idRespostas INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(45),
    correta TINYINT,
    fk_perguntas INT,
    CONSTRAINT fk_resposta_pergunta
        FOREIGN KEY (fk_perguntas)
        REFERENCES Perguntas(idPerguntas)
);

CREATE TABLE resultado (
    idResultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT,
    fk_usuario INT,
    fk_resul_quiz INT,
    CONSTRAINT fk_resultado_usuario
        FOREIGN KEY (fk_usuario)
        REFERENCES Usuario(idUsuario),
    CONSTRAINT fk_resultado_quiz
        FOREIGN KEY (fk_resul_quiz)
        REFERENCES Quizzes(idQuizzes)
);

