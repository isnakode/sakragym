import { drizzle } from "drizzle-orm/mysql2";
import mysql from 'mysql2/promise';
import { tblManfaat } from "./tabel/manfaat";
import { tblPaket } from "./tabel/paket";
import { tblUser } from "./tabel/user";

const main = async () => {
  const connection = await mysql.createConnection({
    database: 'gym',
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    connectionLimit: 10,
  })

  const db = drizzle(connection, { mode: "default" })
  await db.insert(tblUser).values({
    nama: 'admin',
    email: 'admin@gmail.com',
    password: 'admin',
    tipe: 'admin'
  })
  await db.insert(tblPaket).values([
    { id: 1, nama: 'paket harian', durasi: 1, harga: 10000, privat: false },
    { id: 2, nama: 'paket bulanan', durasi: 30, harga: 100000, privat: false },
    { id: 3, nama: 'paket bulanan privat', durasi: 30, harga: 500000, privat: true },
  ])
  await db.insert(tblManfaat).values([
    { idPaket: 1, judul: 'coach terlatih' },
    { idPaket: 1, judul: 'akses semua alat' },
  ])
  await db.insert(tblManfaat).values([
    { idPaket: 2, judul: 'coach terlatih' },
    { idPaket: 2, judul: 'akses semua alat' },
  ])
  await db.insert(tblManfaat).values([
    { idPaket: 3, judul: 'coach profesional' },
    { idPaket: 3, judul: 'akses semua alat' },
    { idPaket: 3, judul: 'jadwal latihan dengan coach' },
  ])



  await connection.end()
}
main()




