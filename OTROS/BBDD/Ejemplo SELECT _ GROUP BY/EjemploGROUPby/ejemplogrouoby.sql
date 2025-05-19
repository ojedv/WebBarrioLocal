/* Ejemplo uso de Group By*/
drop database if exists ejemplogroup;
create database if not exists ejemplogroup;
use ejemplogroup;

create table visitantes(
nombre varchar(40),
edad int, 
sexo char(1),
domicilio varchar(50),
ciudad varchar (20),
telefono int
);

insert into visitantes values ('Soraya', 27, 'f', 'mi casa', 'Sevilla', 1234);
insert into visitantes values ('Pepe', 25, 'm', 'su casa', 'Sevilla', 5678);
insert into visitantes values ('Miguel', 30, 'm', 'su casa', 'Jerez', 91011);

select ciudad, count(*)
from visitantes
group by ciudad; 

select ciudad, count(*)
from visitantes;