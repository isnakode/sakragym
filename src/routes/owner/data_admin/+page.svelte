<script lang="ts">
  import { gender } from "$lib/gender";

  export let data;
  export const print = () => window.print();
</script>

<div class="bg-white flex-1 m-2 rounded-lg overflow-y-auto bisaprint">
  <div class="flex items-center mx-4 my-2 gap-2">
    <p class=" font-bold text-xl flex-1">Data Admin</p>
    <button on:click={print} class="btn bg-gray-500 print:hidden">Cetak</button>
  </div>
  <table class="w-full">
    <tr class="sticky top-0 bg-white *:border">
      <th>Nama</th>
      <th>Email</th>
      <th>Alamat</th>
      <th>Nomor HP</th>
      <th>Gender</th>
    </tr>
    {#each data.user as user}
      <tr class="*:border">
        <td>{user.nama}</td>
        <td>{user.email}</td>
        <td>{user.alamat ?? "-"}</td>
        <td>{user.noHp ?? "-"}</td>
        <td>{gender(user.gender)}</td>
      </tr>
    {/each}
  </table>
</div>
