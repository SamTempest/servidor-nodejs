import mysql from "mysql2";
//importamos el modulo mysql2

//creamos una pool para la conexion a la base de datos con la informacion necesaria
//como el host (localhost), user (en este caso root), password (en este caso mysql no tiene) y database
// el nombre de la base de datos creada en mysql
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "pagina_web",
  }).promise();

//Realizar query a base de datos
//log a consola
//exportar