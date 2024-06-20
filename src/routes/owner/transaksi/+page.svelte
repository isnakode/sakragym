<script>
  import { statusBayar } from "$lib/status_bayar";

  export let data;
  export const print = () => window.print();
</script>

<div class="bg-white flex-1 m-2 rounded-lg overflow-y-auto bisaprint">
  <div class="flex items-center mx-4 my-2 gap-2">
    <p class=" font-bold text-xl flex-1">Data Transaksi</p>
    <button on:click={print} class="btn bg-gray-500 print:hidden">Cetak</button>
  </div>
  <table class="w-full">
    <tr class="sticky top-0 bg-white *:border">
      <th>Harga</th>
      <th>Tanggal</th>
      <th>Email pembeli</th>
      <th>Status</th>
      <th>Paket</th>
    </tr>
    {#each data.invoice as invoice}
      <tr class="*:border">
        <td>Rp {Intl.NumberFormat("id").format(invoice.amount)}</td>
        <td
          >{Intl.DateTimeFormat("id-id", { dateStyle: "full" }).format(
            invoice.updated,
          )}</td
        >
        <td>{invoice.payerEmail}</td>
        <td>{statusBayar(invoice.status)}</td>
        <td>{invoice.description}</td>
      </tr>
    {/each}
  </table>
</div>
