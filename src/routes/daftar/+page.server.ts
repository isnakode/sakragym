import { fail, redirect } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import { db } from "../../data/db";
import { tblUser } from "../../data/tabel/user";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await request.formData()

    const nama = form.get('nama') as string
    const email = form.get('email') as string
    const password = form.get('password') as string

    const user = await db
      .select()
      .from(tblUser)
      .where(eq(tblUser.email, email))

    if (user.length > 0) {
      return fail(400, { pesan: 'akun sudah terdaftar' })
    }

    await db
      .insert(tblUser)
      .values({ nama, email, password, tipe: 'member' })

    return redirect(302, '/login')
  }
};