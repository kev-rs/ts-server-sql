import sql from 'mysql2';

const db = sql.createPool({
  host: "0.0.0.0",
  user: "root",
  password: "kev123",
  database: "kevdb"
}).promise();


export { db };