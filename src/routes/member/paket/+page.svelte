<script lang="ts">
  let paketId = 0;

  let dialog: HTMLDialogElement;

  export let data;
</script>

{#if data.userPaket}
  <div class="bg-green-300 p-4 text-lg">
    Kamu memiliki paket aktif: <span class="font-bold"
      >{data.userPaket.nama}</span
    >
  </div>
{:else}
  <div class="grid grid-cols-3 place-content-start gap-4 flex-1 p-4">
    {#each data.paket as paket}
      <div class="card flex flex-col">
        <p class="text-xl font-bold">{paket.nama}</p>
        <p class="text-xl my-2">
          Rp
          {Intl.NumberFormat("id").format(paket.harga)}
        </p>
        <p class="mb-1">✅ akses gym {paket.durasi} hari</p>
        {#each paket.manfaat as manfaat}
          <p class="mb-1">✅ {manfaat.judul}</p>
        {/each}
        <br />
        <button
          on:click={() => (paketId = paket.id)}
          class="btn bg-primary mt-auto"
          on:click={() => dialog.showModal()}
        >
          Beli
        </button>
      </div>
    {/each}
  </div>
{/if}

<dialog bind:this={dialog}>
  <div class="flex flex-col items-center gap-4">
    <p class="text-xl">Yakin beli paket?</p>
    <form method="post" class="flex justify-center gap-2">
      <input type="hidden" name="id" value={paketId} />
      <button class="btn bg-green-600">Beli</button>
      <button
        type="button"
        on:click={() => dialog.close()}
        class="btn border-red-500 text-red-500">batal</button
      >
    </form>
  </div>
</dialog>
