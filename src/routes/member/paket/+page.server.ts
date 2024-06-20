import { getSession } from "$lib/server/session";
import { xenditCLient } from "$lib/xendit";
import { redirect } from "@sveltejs/kit";
import { eq, sql } from "drizzle-orm";
import { db } from "../../../data/db";
import { tblManfaat } from "../../../data/tabel/manfaat";
import { tblPaket } from "../../../data/tabel/paket";
import { tblUser } from "../../../data/tabel/user";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  const sessionId = cookies.get('session') as string
  const user = getSession(sessionId)

  const paket = await db
    .select({
      id: tblPaket.id,
      nama: tblPaket.nama,
      harga: tblPaket.harga,
      durasi: tblPaket.durasi,
      privat: tblPaket.privat,
      manfaat: sql<{ id: number, judul: string }[]>`JSON_ARRAYAGG(JSON_OBJECT('id',${tblManfaat.id},'judul',${tblManfaat.judul}))`
    })
    .from(tblPaket)
    .innerJoin(tblManfaat, eq(tblManfaat.idPaket, tblPaket.id))
    .groupBy(tblPaket.id)

  const userPaket = await db
    .select({
      nama: tblPaket.nama,
      durasi: tblPaket.durasi,
    })
    .from(tblUser)
    .innerJoin(tblPaket, eq(tblPaket.id, tblUser.idPaket))
    .where(eq(tblUser.email, user.email))
    .limit(1)

  return { paket, userPaket: userPaket[0] }
};

export const actions: Actions = {
  default: async ({ cookies, request }) => {
    const form = await request.formData()
    const sessionId = cookies.get('session') as string
    const user = getSession(sessionId)
    const id = parseInt(form.get('id') as string)
    const { Invoice } = xenditCLient

    const paket = await db
      .select()
      .from(tblPaket)
      .where(eq(tblPaket.id, id))
      .limit(1)

    const invoice = await Invoice.createInvoice({
      data: {
        amount: paket[0].harga,
        externalId: `${paket[0].id}`,
        currency: 'IDR',
        description: paket[0].nama,
        payerEmail: user.email,
        successRedirectUrl: 'https://fbd3-2a09-bac5-3a1b-88c-00-da-d8.ngrok-free.app/member/paket'
      },
    })

    return redirect(302, invoice.invoiceUrl)
  }
};