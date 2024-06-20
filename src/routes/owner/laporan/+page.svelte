<script>
  import coach from "$gambar/coach.svg";
  import com from "$gambar/com.svg";
  import member from "$gambar/member.svg";
  import rupiah from "$gambar/rupiah.svg";

  export let data;

  const datas = [
    {
      judul: "Jumlah Member",
      isi: data.user.filter((u) => u.tipe == "member").length + " orang",
      link: "/owner/data_member",
      gambar: member,
      warna: "bg-blue-500",
    },
    {
      judul: "Jumlah Admin",
      isi: data.user.filter((u) => u.tipe == "admin").length + " orang",
      link: "/owner/data_admin",
      gambar: com,
      warna: "bg-purple-500",
    },
    {
      judul: "Jumlah Coach",
      isi: data.user.filter((u) => u.tipe == "coach").length + " orang",
      link: "/owner/data_coach",
      gambar: coach,
      warna: "bg-emerald-500",
    },
    {
      judul: "Transaksi",
      isi: data.user.filter((u) => u.tipe == "coach").length + " transaksi",
      link: "/owner/transaksi",
      gambar: rupiah,
      warna: "bg-slate-500",
    },
  ];
</script>

<div class="flex-1 grid grid-cols-4 gap-4 place-content-start p-4">
  {#each datas as laporan}
    <div class="card flex flex-col {laporan.warna} bg-blue-500 text-white">
      <img src={laporan.gambar} alt="profil" class="size-12" />
      <h2 class="text-xl">{laporan.judul}</h2>
      <p class="text-xl font-bold">{laporan.isi}</p>
      <a href={laporan.link} class="underline">Cek detail</a>
    </div>
  {/each}
</div>
