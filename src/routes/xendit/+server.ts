import { eq } from "drizzle-orm";
import { db } from "../../data/db";
import { tblUser } from "../../data/tabel/user";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = async ({ request }) => {
  const { payer_email, external_id } = await request.json()

  await db
    .update(tblUser)
    .set({ idPaket: parseInt(external_id) })
    .where(eq(tblUser.email, payer_email))

  return new Response();
};