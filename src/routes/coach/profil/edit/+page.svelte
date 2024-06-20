<script lang="ts">
  import { page } from "$app/stores";

  export let data;
  export let form;

  import noImage from "$gambar/noimg.jpeg";
  const { profil } = data;
  let file: FileList;
  $: tempImage = file
    ? URL.createObjectURL(file[0])
    : profil.foto
      ? `${$page.url.origin}/${profil.foto}`
      : noImage;
</script>

<form
  method="POST"
  enctype="multipart/form-data"
  class="card m-2 p-4 rounded bg-white flex-1 overflow-y-auto"
>
  {#if form?.sukses}
    <div
      class="p-4 mb-2 rounded-lg {form.sukses ? 'bg-green-300' : 'bg-red-200'}"
    >
      {form.sukses ? "Berhasil" : "Gagal"} ubah profil
    </div>
  {/if}
  <h2 class="text-xl mb-4 font-bold uppercase">Edit profil</h2>
  <input type="hidden" name="id" value="" />
  <div class="mb-2 flex items-center">
    <label class="basis-2/12">email</label>
    <input
      required
      type="email"
      value={profil.email}
      readonly
      name="email"
      class="flex-1"
    />
  </div>
  <div class="mb-2 flex items-center">
    <label class="basis-2/12">nama</label>
    <input
      required
      type="text"
      value={profil.nama}
      name="nama"
      class="flex-1"
    />
  </div>
  <div class="mb-2 flex items-center">
    <label class="basis-2/12">nomor hp</label>
    <input type="text" name="no_hp" value={profil.noHp} class="flex-1" />
  </div>
  <div class="mb-2 flex items-center">
    <label class="basis-2/12">Jenis Kelamin</label>
    <select value={profil.gender} name="gender" class="flex-1 bg-[98%]">
      <option value={null}>Pilih jenis kelamin</option>
      <option value="L">Laki-laki</option>
      <option value="P">Perempuan</option>
    </select>
  </div>
  <div class="mb-2 flex items-center">
    <label class="basis-2/12">Alamat</label>
    <textarea value={profil.alamat} name="alamat" class="flex-1"></textarea>
  </div>
  <div class="mb-2 flex items-center">
    <label class="basis-2/12">Foto profil</label>
    <input bind:files={file} type="file" name="foto" class="flex-1" />
    <img class="size-16 ms-4" src={tempImage} alt="foto" />
  </div>
  <div class="flex justify-end gap-2">
    <a href="/coach/profil" class="btn bg-red-500">Kembali</a>
    <button class="btn bg-green-500">Simpan</button>
  </div>
</form>
