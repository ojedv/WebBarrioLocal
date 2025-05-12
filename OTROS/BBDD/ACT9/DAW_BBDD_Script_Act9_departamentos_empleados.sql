/*** Creción y selección de la base de datos ***/
DROP DATABASE departamentos_empleados;
CREATE DATABASE departamentos_empleados character set utf8 collate utf8_spanish_ci;
USE departamentos_empleados;

/*** Creación de tablas ***/
CREATE TABLE departamento(
codigo int NOT NULL PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50), 
localidad VARCHAR(50)
);
CREATE TABLE empleado(
codigo int NOT NULL PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50),
Dpto int,
tlf int(9),
salario FLOAT(10,2),
fecha_nac DATE,
fecha_contr DATE,
Categoria VARCHAR(15) DEFAULT 'Empleado',
Descript VARCHAR(100),
FOREIGN KEY (Dpto) REFERENCES departamento(codigo),
constraint CHK_Descript CHECK (Descript IN('Empleado','Director en funciones','Director en propiedad','Director de departamento'))
);

CREATE TABLE incidencia(
codigo int NOT NULL PRIMARY KEY AUTO_INCREMENT,
Dpto int(9), -- Departamento donde se detecta la incidencia.
Fecha DATE,-- Fecha en la que se detectó la incidencia.
Texto VARCHAR(200), -- Breve explicación de la incidencia (con los datos relevantes de la misma)No permitiremos que una misma incidencia se inserte dos veces para el mismo departamento.
FOREIGN KEY (Dpto) REFERENCES departamento(codigo)
);

/*** Inserción de datos ***/
INSERT INTO departamento VALUES (null,'Ventas','C1');
INSERT INTO departamento VALUES (null,'Juegos','C1');
INSERT INTO departamento VALUES (null,'Ropa','C1');
INSERT INTO departamento VALUES (null,'Moviles','C1');

INSERT INTO empleado VALUES (null,'Juan1',1,123456789,1600.12,'1993-12-21','2009-10-24',DEFAULT,'Empleado');
INSERT INTO empleado VALUES (null,'Juan2',1,123456789,1500.12,'1994-12-21','2010-10-24',DEFAULT,'Empleado');
INSERT INTO empleado VALUES (null,'Juan3',1,123456789,1400.12,'1995-12-21','2011-10-24',DEFAULT,'Empleado');
INSERT INTO empleado VALUES (null,'Juan4',1,123456789,1300.12,'1996-12-21','2012-10-24',DEFAULT,'Empleado');
INSERT INTO empleado VALUES (null,'Juan5',1,123456789,1200.12,'1997-12-21','2013-10-24',DEFAULT,'Director en funciones');
INSERT INTO empleado VALUES (null,'Juan6',1,123456789,1100.12,'1998-12-21','2014-10-24',DEFAULT,'Empleado');
INSERT INTO empleado VALUES (null,'Juan7',1,123456789,1000.12,'1999-12-21','2015-10-24',DEFAULT,'Empleado');
INSERT INTO empleado VALUES (null,'Pepe',2,123456789,1100.15,'1955-04-16','2012-08-14',DEFAULT,'Director en funciones');
INSERT INTO empleado VALUES (null,'Laura',4,123456789,900.50,'2004-08-14','2013-12-21',DEFAULT,'Director en propiedad');
INSERT INTO empleado VALUES (null,'Roberto',3,123456789,500.21,'2000-10-24','2002-04-16',DEFAULT,'Empleado');