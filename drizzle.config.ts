import { defineConfig } from "drizzle-kit";
import { env } from "process";

export default defineConfig({
  schema: './src/data/tabel/*',
  out: './src/data/migrasi',
  breakpoints: false,
  dialect: 'mysql',
  dbCredentials: {
    url: env.DB_URL!,
  }
})