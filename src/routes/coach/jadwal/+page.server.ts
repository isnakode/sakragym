import { getSession } from "$lib/server/session";
import { eq, sql } from "drizzle-orm";
import { db } from "../../../data/db";
import { tblJadwal, type jadwalSelect } from "../../../data/tabel/jadwal";
import { tblUser } from "../../../data/tabel/user";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  const sessionId = cookies.get('session') as string
  const user = getSession(sessionId)
  const jadwal = sql<jadwalSelect[]>`JSON_ARRAYAGG(JSON_OBJECT(
    'email',${tblJadwal.email},
    'id',${tblJadwal.id},
    'jam',${tblJadwal.jam},
    'hari',${tblJadwal.hari}
  ))`

  const member = await db
    .select({
      user: tblUser,
      jadwal: sql<jadwalSelect[]>`${db.select({ jadwal }).from(tblJadwal).where(eq(tblJadwal.email, tblUser.email))}`,
    })
    .from(tblUser)
    .where(eq(tblUser.emailCoach, user.email))
    .limit(1)

  return { member }
};