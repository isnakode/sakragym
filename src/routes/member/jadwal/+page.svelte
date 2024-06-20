<script lang="ts">
  const day = ["ahad", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
  export let data;
  let selectedDay = 0;

  let dialog: HTMLDialogElement;
</script>

<div class="card m-4">
  <h2 class="text-xl font-bold">Jadwal latihan</h2>
  <p class="mb-4 mt-2">Pelatih: {data.coach?.nama ?? "-"}</p>
  <div class="grid grid-cols-4 gap-4">
    {#each day as hari, i}
      <div class="card border border-slate-500">
        <p class="mb-2">{hari}</p>
        {#if data.jadwal.some((j) => j.hari == i)}
          <p class="font-bold">
            {data.jadwal.find((j) => j.hari == i)?.jam.slice(0, 5) ?? ""}
          </p>
        {:else}
          <button
            on:click={() => {
              selectedDay = i;
              dialog.showModal();
            }}
            class="btn bg-blue-500 btn-sm">Atur jadwal</button
          >
        {/if}
      </div>
    {/each}
  </div>
</div>

<dialog bind:this={dialog}>
  <form method="post" class="flex flex-col">
    <input type="hidden" name="hari" value={selectedDay} />
    <h2 class="text-xl font-bold text-center">Atur waktu</h2>
    <label for="jam">Jam latihan</label>
    <input type="time" name="jam" id="jam" min="14:00" max="20:00" />
    <div class="flex gap-2 mt-2 justify-center">
      <button class="btn bg-blue-500">Simpan</button>
      <button
        type="button"
        on:click={() => dialog.close()}
        class="btn border-red-500 text-red-500">Batal</button
      >
    </div>
  </form>
</dialog>
