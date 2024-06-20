import { boolean, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const tblPaket = mysqlTable('paket', {
  id: int('id').primaryKey().autoincrement(),
  nama: varchar('nama', { length: 255 }).notNull(),
  harga: int('harga').notNull(),
  durasi: int('durasi').notNull(),
  privat: boolean('privat').notNull(),
})