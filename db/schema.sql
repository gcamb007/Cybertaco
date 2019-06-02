CREATE DATABASE taco_db;
USE taco_db;

CREATE TABLE tacos
(
	id int NOT NULL AUTO_INCREMENT,
	taco_name VARCHAR(50) NOT NULL,
    shell VARCHAR(10) NOT NULL,
	vegetarian BOOLEAN,
    picked_up BOOLEAN,
	PRIMARY KEY (id)
);