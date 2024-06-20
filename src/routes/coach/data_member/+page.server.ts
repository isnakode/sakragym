import { getSession } from "$lib/server/session";
import { eq } from "drizzle-orm";
import { db } from "../../../data/db";
import { tblUser } from "../../../data/tabel/user";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  const sessionId = cookies.get('session') as string
  const { email } = getSession(sessionId)

  const user = await db
    .select()
    .from(tblUser)
    .where(eq(tblUser.emailCoach, email))
  return { user }
};