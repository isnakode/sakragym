import { writeFile } from "fs/promises";

export const upload = async (file: File, id: string | number) => {
  await writeFile(`static/fotopunya${id}`, Buffer.from(await file.arrayBuffer()));

  return `fotopunya${id}`
}

