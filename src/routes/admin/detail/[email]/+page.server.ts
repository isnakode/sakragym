import { eq } from "drizzle-orm";
import { db } from "../../../../data/db";
import { tblUser } from "../../../../data/tabel/user";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params: { email } }) => {

  const user = await db
    .select()
    .from(tblUser)
    .where(eq(tblUser.email, email))
    .limit(1)

  return user[0]
};