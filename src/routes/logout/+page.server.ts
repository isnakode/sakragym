import { deleteSession } from "$lib/server/session";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  deleteSession(cookies.get(`session`)!)
  cookies.delete(`session`, { path: `/` })
};