<script>
  import { statusBayar } from "$lib/status_bayar";

  export let data;

  const datas = [
    { nama: "Harga", isi: data.amount },
    {
      nama: "Tanggal bayar",
      isi: Intl.DateTimeFormat("id", { dateStyle: "full" }).format(
        data.updated,
      ),
    },
    { nama: "status bayar", isi: statusBayar(data.status) },
    { nama: "Email member", isi: data.payerEmail },
    { nama: "Paket", isi: data.description },
  ];
</script>

<div class="bg-white flex-1 flex flex-col m-2 p-4 rounded-lg">
  <div>
    <table>
      {#each datas as data}
        <tr>
          <td class="p-2">{data.nama}</td>
          <td class="p-2">:</td>
          <td class="p-2">{data.isi ?? "-"}</td>
        </tr>
      {/each}
    </table>
  </div>
  <div class="flex mt-auto justify-end gap-2">
    <a href="/edit_profil" class="btn bg-yellow-500">Edit profil</a>
    <a href="/logout" class="btn bg-red-500">logout</a>
  </div>
</div>
