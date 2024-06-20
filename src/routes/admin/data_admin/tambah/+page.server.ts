import { db } from "../../../../data/db";
import { tblUser } from "../../../../data/tabel/user";
import type { Actions } from "./$types";

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await request.formData()

    const nama = form.get('nama') as string
    const noHp = form.get('no_hp') as string
    const email = form.get('email') as string
    const alamat = form.get('alamat') as string
    const gender = form.get('gender') as 'P' | 'L'

    try {
      await db
        .insert(tblUser)
        .values({ email, password: 'admin', nama, noHp, alamat, gender, tipe: 'admin' })

      return { sukses: true }
    } catch (error) {
      return { sukses: false }
    }
  }
};