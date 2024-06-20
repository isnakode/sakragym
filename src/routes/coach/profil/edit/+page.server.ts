import { getSession } from "$lib/server/session";
import { upload } from "$lib/upload_gambar";
import { eq } from "drizzle-orm";
import { db } from "../../../../data/db";
import { tblUser } from "../../../../data/tabel/user";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  const sessionId = cookies.get('session') as string
  const user = getSession(sessionId)

  const profil = await db
    .select()
    .from(tblUser)
    .where(eq(tblUser.email, user.email))
    .limit(1)

  return { profil: profil[0] }
};

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await request.formData()

    const nama = form.get('nama') as string
    const noHp = form.get('no_hp') as string
    const email = form.get('email') as string
    const alamat = form.get('alamat') as string
    const foto = form.get('foto') as File

    const gender = form.get('gender') as 'P' | 'L'



    try {
      if (foto.size == 0) {
        await db
          .update(tblUser)
          .set({
            email,
            nama,
            noHp,
            alamat,
            gender: gender.length == 0 ? null : gender,
          })
          .where(eq(tblUser.email, email))
      } else {
        await db
          .update(tblUser)
          .set({
            email,
            nama,
            noHp,
            alamat,
            foto: await upload(foto, email),
            gender: gender.length == 0 ? null : gender,
          })
          .where(eq(tblUser.email, email))
      }

      return { sukses: true }
    } catch (error) {
      return { sukses: false }
    }
  }
};