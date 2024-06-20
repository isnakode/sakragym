export const gender = (gender: 'L' | 'P' | null) =>
  gender ? (gender == "L" ? "Laki-laki" : "Perempuan") : "-" 
