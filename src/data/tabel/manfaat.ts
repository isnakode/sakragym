import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { tblPaket } from "./paket";

export const tblManfaat = mysqlTable('manfaat', {
  id: int('id').primaryKey().autoincrement(),
  idPaket: int('id_paket').notNull().references(() => tblPaket.id),
  judul: varchar('nama', { length: 255 }).notNull(),
})