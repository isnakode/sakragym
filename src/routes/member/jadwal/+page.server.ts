import { getSession } from "$lib/server/session";
import { eq, sql } from "drizzle-orm";
import { alias } from "drizzle-orm/mysql-core";
import { db } from "../../../data/db";
import { tblJadwal, type jadwalSelect } from "../../../data/tabel/jadwal";
import { tblUser } from "../../../data/tabel/user";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  const sessionId = cookies.get('session') as string
  const user = getSession(sessionId)

  const jadwal = sql<jadwalSelect[]>`JSON_ARRAYAGG(JSON_OBJECT(
    'email',${tblJadwal.email},
    'id',${tblJadwal.id},
    'jam',${tblJadwal.jam},
    'hari',${tblJadwal.hari}
  ))`

  const tblUser2 = alias(tblUser, 'user2')
  const member = await db
    .select({
      user: tblUser,
      coach: tblUser2,
      jadwal: sql<jadwalSelect[]>`${db.select({ jadwal }).from(tblJadwal).where(eq(tblJadwal.email, tblUser.email))}`,
    })
    .from(tblUser)
    .leftJoin(tblUser2, eq(tblUser2.email, tblUser.emailCoach))
    .where(eq(tblUser.email, user.email))
    .limit(1)

  const coach = await db
    .select()
    .from(tblUser)
    .where(eq(tblUser.tipe, 'coach'))

  return { member: member[0], coach }
};

export const actions: Actions = {
  jadwal: async ({ request, cookies }) => {
    const sessionId = cookies.get('session') as string
    const user = getSession(sessionId)
    const form = await request.formData()

    const hari = parseInt(form.get('hari') as string)
    const jam = form.get('jam') as string
    await db
      .insert(tblJadwal)
      .values({ email: user.email, hari: hari, jam })
  },
  coach: async ({ request, cookies }) => {
    const sessionId = cookies.get('session') as string
    const user = getSession(sessionId)
    const form = await request.formData()

    const emailCoach = form.get('coach') as string
    await db
      .update(tblUser)
      .set({ emailCoach })
      .where(eq(tblUser.email, user.email))
  },
};