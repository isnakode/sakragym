import { xenditCLient } from "$lib/xendit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const { Invoice } = xenditCLient

  const invoice = await Invoice.getInvoices()
  return { invoice }
};