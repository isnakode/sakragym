import { drizzle } from "drizzle-orm/mysql2";
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  database: 'gym',
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  connectionLimit: 10,
})

export const db = drizzle(connection, { mode: "default" })

