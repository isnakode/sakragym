import { getSession } from "$lib/server/session";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ cookies }) => {
  const sessionId = cookies.get('session') as string
  const user = getSession(sessionId)
  return user
};