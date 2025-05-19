-- 1. Elimina la base de datos si ya existe para evitar errores
DROP DATABASE IF EXISTS ejemplo_group_by;

-- 2. Crea la base de datos
CREATE DATABASE ejemplo_group_by;

-- 3. Usa la base de datos recién creada
USE ejemplo_group_by;

-- 4. Crea la tabla 'ventas'
CREATE TABLE ventas (
    id_venta INT AUTO_INCREMENT PRIMARY KEY,
    producto VARCHAR(50),
    cantidad INT
);

-- 5. Inserta los datos en la tabla
INSERT INTO ventas (producto, cantidad) VALUES
('Manzanas', 3),
('Peras', 5),
('Manzanas', 4),
('Plátanos', 2),
('Peras', 3);

-- 6. Consulta con GROUP BY
SELECT producto, SUM(cantidad) AS total_cantidad
FROM ventas
GROUP BY producto;

-- 7. Consulta sin GROUP BY (esto generará un error en modo estricto)
SELECT producto, SUM(cantidad)
FROM ventas;

-- 8. Consulta global sin incluir 'producto' (sin errores)
SELECT SUM(cantidad) AS total_cantidad_global
FROM ventas;
