CREATE SCHEMA `atendpronto` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE `atendpronto`.`Hospital` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '',
  `nome` VARCHAR(128) NOT NULL COMMENT '',
  `latitude` DOUBLE NOT NULL COMMENT '',
  `longitude` DOUBLE NOT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '');

INSERT INTO `atendpronto`.`Hospital` (`nome`, `latitude`, `longitude`)
VALUES
	('HPSM - Hospital de Pronto Socorro', -1.4398354, -48.4807477),
	('Porto Dias', -1.4373363, -48.4583706),
	('Adventista', -1.4399578, -48.4682641),
	('Metropolitano', -1.3927547, -48.4217981),
	('Ophir Loyola', -1.4517658, -48.473999);