import { xenditCLient } from "$lib/xendit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params: { id } }) => {
  const { Invoice } = xenditCLient

  const invoice = await Invoice.getInvoiceById({ invoiceId: id })
  return invoice
};