export async function fetchUsers() {
  // get the client
  const mysql = require("mysql2/promise");
  // create the connection
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "demo",
    password: "db_pwd",
  });
  // query database
  const [rows] = await connection.execute("SELECT * FROM customers;");
  return rows;
}

export async function fetchUserById(id) {
  // get the client
  const mysql = require("mysql2/promise");
  // create the connection
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "demo",
    password: "db_pwd",
  });
  // query database
  const [rows] = await connection.execute(
    `SELECT * FROM customers WHERE id = ${id};`
  );
  return rows?JSON.parse(JSON.stringify(rows[0])):{};
}
