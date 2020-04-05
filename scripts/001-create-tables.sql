CREATE DATABASE saintSeiyaBattle;

CREATE TABLE saints(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20),
    initialMaxHP INT,
    initialATK INT,
    initialDEF INT,
    PRIMARY KEY(id)
);

CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50),
    password VARCHAR(20),
    PRIMARY KEY(id)
);

CREATE TABLE saints_users(
    id INT NOT NULL AUTO_INCREMENT,
    saintId INT NOT NULL,
    userId INT NOT NULL,
    level INT DEFAULT 1,
    maxHP INT,
    ATK INT,
    DEF INT,
    PRIMARY KEY(id)
);





