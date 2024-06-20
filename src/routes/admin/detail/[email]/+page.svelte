<script>
  import { page } from "$app/stores";
  import noImage from "$gambar/noimg.jpeg";
  import { gender } from "$lib/gender";
  export let data;

  const datas = [
    { nama: "nama", isi: data.nama },
    { nama: "email", isi: data.email },
    { nama: "alamat", isi: data.alamat },
    { nama: "Nomer HP", isi: data.noHp },
    { nama: "Jenis kelamin", isi: gender(data.gender) },
  ];
</script>

<div class="bg-white flex-1 flex flex-col m-2 p-4">
  <div class="p-4 bg-blue-200 font-bold text-xl text-center mb-4">
    biodata {data.nama}
  </div>
  <div class=" flex gap-5">
    <div style="flex-basis: 18%">
      <img
        class="w-100"
        src={data.foto ? `${$page.url.origin}/${data.foto}` : noImage}
        alt=""
      />
    </div>
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
  </div>
  <div class="flex mt-auto justify-end gap-2">
    <a href="javascript:history.back()" class="btn bg-red-500">Kembali</a>
  </div>
</div>
