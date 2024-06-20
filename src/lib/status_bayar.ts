import type { InvoiceStatus } from "xendit-node/invoice/models"

export const statusBayar = (status: InvoiceStatus) => {
  switch (status) {
    case 'EXPIRED':
      return 'Kadaluarsa'
    case 'PAID':
      return 'Sudah dibayar'
    case 'PENDING':
      return 'Menunggu pembayaran'
    case 'SETTLED':
      return 'Batal'
  }
}