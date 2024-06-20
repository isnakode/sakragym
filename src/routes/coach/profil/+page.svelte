<script>
  import { page } from "$app/stores";
  import noImage from "$gambar/noimg.jpeg";
  export let data;

  const datas = [
    { nama: "nama", isi: data.nama },
    { nama: "email", isi: data.email },
    { nama: "alamat", isi: data.alamat },
    { nama: "Nomer HP", isi: data.noHp },
  ];
</script>

<div class="bg-white flex-1 flex flex-col m-2 p-4">
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
    <a href="/coach/profil/edit" class="btn bg-yellow-500">Edit profil</a>
    <a href="/logout" class="btn bg-red-500">logout</a>
  </div>
</div>
