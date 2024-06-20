<script>
  export let form;
</script>

<form
  method="POST"
  class="card m-2 p-4 rounded bg-white flex-1 overflow-y-auto"
>
  {#if form?.sukses}
    <div
      class="p-4 mb-2 rounded-lg {form.sukses ? 'bg-green-300' : 'bg-red-200'}"
    >
      {form.sukses ? "Berhasil" : "Gagal"} ubah profil
    </div>
  {/if}
  <h2 class="text-xl mb-4 font-bold uppercase">Tambah Coach</h2>
  <input type="hidden" name="id" value="" />
  <div class="mb-3 flex items-center">
    <label class="basis-2/12">email</label>
    <input required type="email" name="email" class="flex-1" />
  </div>
  <div class="mb-3 flex items-center">
    <label class="basis-2/12">nama</label>
    <input required type="text" name="nama" class="flex-1" />
  </div>
  <div class="mb-3 flex items-center">
    <label class="basis-2/12">nomor hp</label>
    <input type="text" name="no_hp" class="flex-1" />
  </div>
  <div class="mb-3 flex items-center">
    <label class="basis-2/12">Jenis Kelamin</label>
    <select name="gender" class="flex-1 bg-[98%]">
      <option value="L">Laki-laki</option>
      <option value="P">Perempuan</option>
    </select>
  </div>
  <div class="mb-3 flex items-center">
    <label class="basis-2/12">Alamat</label>
    <textarea name="alamat" class="flex-1"></textarea>
  </div>
  <div class="flex justify-end gap-2">
    <a href="javascript:history.back()" class="btn bg-red-500">Kembali</a>
    <button class="btn bg-primary">Simpan</button>
  </div>
</form>
