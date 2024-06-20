import type { SessionData } from "$lib/tipe";

let sessions: Record<string, SessionData> = {};

export const addSession = (key: string, value: SessionData) => {
  sessions[key] = value
}
export const deleteSession = (key: string) => {
  delete sessions[key]
}
export const getSession = (key: string) => {
  return sessions[key]
}
