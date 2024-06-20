import type { SessionData } from "$lib/tipe"
import { writable } from "svelte/store"

const loginStore = () => {
  const { set, subscribe } = writable<SessionData | null>()

  return {
    subscribe,
    setInfo: (data: SessionData) => set(data),
    deleteInfo: () => set(null),
  }
}

export const infoLogin = loginStore()