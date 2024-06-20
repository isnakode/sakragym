import { addSession } from "$lib/server/session";
import { fail, redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import { db } from "../../data/db";
import { tblUser } from "../../data/tabel/user";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const form = await request.formData()

    const email = form.get('email') as string
    const password = form.get('password') as string

    const users = await db
      .select()
      .from(tblUser)
      .where(eq(tblUser.email, email))
      .limit(1)

    const user = users[0]

    if (users.length == 0) {
      return fail(400, { pesan: 'akun tidak ditemukan' })
    }

    if (user.password != password) {
      return fail(400, { pesan: 'password salah' })
    }

    const randomId = crypto.randomUUID()
    cookies.set('session', randomId, { path: '/' })
    addSession(randomId, {
      nama: user.nama,
      tipe: user.tipe,
      email: user.email
    })

    return redirect(302, `/${user.tipe}/dashboard`)
  }
};