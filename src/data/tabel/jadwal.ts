import { int, mysqlTable, time, varchar } from "drizzle-orm/mysql-core";
import { tblUser } from "./user";

export const tblJadwal = mysqlTable('jadwal', {
  id: int('id').primaryKey().autoincrement(),
  hari: int('hari').notNull(),
  jam: time('jam').notNull(),
  email: varchar('email', { length: 255 }).references(() => tblUser.email).notNull(),
})

export type jadwalSelect = typeof tblJadwal.$inferSelect