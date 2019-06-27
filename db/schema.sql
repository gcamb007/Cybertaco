CREATE DATABASE qzu7lerqohn84ss0;
USE qzu7lerqohn84ss0;

CREATE TABLE tacos
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	taco_name VARCHAR(50) NOT NULL,
    shell VARCHAR(10) NOT NULL,
	vegetarian BOOLEAN,
    picked_up BOOLEAN,
	PRIMARY KEY (id)
);