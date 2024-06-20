import { int, mysqlEnum, mysqlTable, text, varchar, type AnyMySqlColumn } from "drizzle-orm/mysql-core";
import { tblPaket } from "./paket";

export const tblUser = mysqlTable('user', {
  email: varchar('email', { length: 255 }).notNull().primaryKey(),
  nama: varchar('nama', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  foto: varchar('foto', { length: 255 }),
  gender: mysqlEnum('gender', ['P', 'L']),
  tipe: mysqlEnum('tipe', ['admin', 'coach', 'member', 'owner']).notNull(),
  alamat: text('alamat'),
  noHp: varchar('no_hp', { length: 15 }),
  idPaket: int('id_paket').references(() => tblPaket.id),
  emailCoach: varchar('email_coach', { length: 255 }).references((): AnyMySqlColumn => tblUser.email)
})