CREATE DATABASE IF NOT EXISTS Gerenciamento_Projetos;
USE Gerenciamento_Projetos;

CREATE TABLE Projetos(
	Id int NOT NULL auto_increment,
    NomeProjeto VARCHAR(60),
    DescricaoProjeto VARCHAR(200),
    dhCriacao DATETIME,
    xStatus VARCHAR(20),
    linkProjeto VARCHAR(500),
    PRIMARY KEY (Id)
);

CREATE TABLE Tarefas(
    IdTarefa int NOT NULL auto_increment,
    IdProjeto int NOT NULL,	
    NomeUsuario VARCHAR(40),
    Titulo VARCHAR(60),
    dhCriacao DATETIME,
    Importancia VARCHAR(20),
    xStatus VARCHAR(20),
    ultimaAlteracao DATETIME,
    DescricaoTarefa VARCHAR(200),
    PRIMARY KEY (IdTarefa, IdProjeto),
    FOREIGN KEY (IdProjeto) references Projetos(Id) on delete cascade
)