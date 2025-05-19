-- 1. Eliminamos tablas si existen

DROP DATABASE IF EXISTS repaso;
CREATE DATABASE repaso; 
USE repaso; 

-- 2. Creamos las tablas

CREATE TABLE cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(8,2),
    stock INT
);

CREATE TABLE pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    fecha DATE,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE detalle_pedido (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT,
    id_producto INT,
    cantidad INT,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);

-- 3. Insertamos clientes
INSERT INTO cliente (nombre, email) VALUES 
('Laura Pérez', 'laura.perez@email.com'),
('Carlos Ruiz', 'carlos.ruiz@email.com'),
('Ana Gómez', 'ana.gomez@email.com'),
('Luis Martínez', 'luis.martinez@email.com');

-- 4. Insertamos productos
INSERT INTO producto (nombre, precio, stock) VALUES 
('Ratón inalámbrico', 15.90, 50),
('Teclado mecánico', 55.00, 25),
('Monitor 24"', 120.00, 10),
('Memoria USB 32GB', 7.50, 100),
('Auriculares Bluetooth', 30.00, 40);

-- 5. Insertamos pedidos
INSERT INTO pedido (id_cliente, fecha) VALUES 
(1, '2025-01-10'),
(1, '2025-03-05'),
(2, '2025-01-12'),
(3, '2025-04-15');

-- 6. Insertamos detalles de pedidos
INSERT INTO detalle_pedido (id_pedido, id_producto, cantidad) VALUES 
(1, 1, 2), -- Laura compra 2 ratones
(1, 2, 1), -- Laura compra 1 teclado
(2, 4, 3), -- Laura compra 3 USBs en otro pedido
(3, 3, 1), -- Carlos compra un monitor
(3, 5, 1), -- Carlos compra unos auriculares
(4, 2, 1); -- Ana compra 1 teclado

SELECT * FROM cliente;
SELECT * FROM producto;
SELECT * FROM pedido;

-- 1. Función stock_total
-- Crea una función stock_total que reciba el id_producto y devuelva la cantidad total de unidades en stock.
-- Si el producto no existe, devuelve NULL.

DELIMITER $$

CREATE FUNCTION stock_total(idProd int)
RETURNS INT
DETERMINISTIC
BEGIN 
	DECLARE cantTotal int;
    SELECT stock INTO cantTotal FROM producto WHERE idProd = id_producto;
    IF cantTotal IS NULL THEN 
		RETURN null;
	END IF;
    RETURN cantTotal;
END $$

DELIMITER ;

-- 2. Función nombre_cliente
-- Crea una función nombre_cliente que reciba un email y devuelva el nombre del cliente
-- asociado.
-- Si no hay ningún cliente con ese email, devuelve 'Cliente no encontrado'.


DELIMITER $$

CREATE FUNCTION nombre_cliente(emailpar VARCHAR(100))
RETURNS VARCHAR(100)
DETERMINISTIC
BEGIN 
	DECLARE nombre_client VARCHAR(100);
    SELECT nombre INTO nombre_client FROM cliente WHERE email = emailpar;
    IF nombre_client IS NULL THEN
		RETURN "Cliente no encontrado";
	END IF;
	RETURN nombre_client;
END $$

DELIMITER ;

/*3. Procedimiento pedidos_por_fecha
Crea un procedimiento que reciba una fecha (tipo DATE) y muestre:
● Nombre del cliente
● Producto
● Cantidad pedida
● Precio total del pedido (cantidad × precio)
Solo de los pedidos realizados en esa fecha exacta.*/

DELIMITER $$

CREATE PROCEDURE pedidos_por_fecha(fechita DATE)
BEGIN 
    SELECT c.nombre AS cliente, p.nombre AS producto, dp.cantidad, (dp.cantidad * p.precio) AS precio_total FROM detalle_pedido dp
    INNER JOIN pedido ped ON dp.id_pedido = ped.id_pedido
    INNER JOIN cliente c ON ped.id_cliente = c.id_cliente
    INNER JOIN producto p ON dp.id_producto = p.id_producto WHERE ped.fecha = fechita;
END $$

DELIMITER ;


CALL pedidos_por_fecha('2025-03-05');

/*7. Función ultimo_pedido_cliente
Crea una función que reciba un id_cliente y devuelva la fecha de su último pedido.
Si no ha hecho pedidos o no existe, devuelve NULL.*/

DELIMITER $$

CREATE FUNCTION ultimo_pedido_cliente(idClient INT)
RETURNS DATE
DETERMINISTIC
BEGIN 
    DECLARE ultimafecha DATE;
    SELECT MAX(fecha) INTO ultimafecha FROM pedido WHERE idClient = id_cliente;
    RETURN ultimafecha;
END $$

DELIMITER ;

/*9. Procedimiento clientes_gasto_medio
Crea un procedimiento que:
● Calcule el gasto medio (precio × cantidad) de cada cliente,
● Muestre el nombre del cliente y su gasto medio, ordenado de mayor a menor,
● Excluye a los que no han realizado ningún pedido.
*/

DELIMITER $$

CREATE PROCEDURE clientes_gasto_medio()
BEGIN 

	SELECT AVG(p.stock * p.precio) AS Gasto_medio FROM producto p 
	INNER JOIN detalle_pedido dp ON p.id_producto = dp.id_producto
    INNER JOIN pedido ped ON dp.id_pedido = ped.id_pedido
    INNER JOIN cliente c ON ped.id_cliente = c.id_cliente ORDER BY ;
END $$

DELIMITER ;


