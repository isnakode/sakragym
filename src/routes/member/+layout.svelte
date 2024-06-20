<script>
  import profil from "../../gambar/profil.png";
  import Sidebar from "../../komponen/Sidebar.svelte";
  import { infoLogin } from "../../state/infoLogin";

  const menus = [
    { nama: "Dashboard", url: "/member/dashboard" },
    { nama: "Paket", url: "/member/paket" },
    { nama: "jadwal", url: "/member/jadwal" },
  ];
</script>

<div class="flex h-full overflow-y-hidden bg-slate-200">
  <Sidebar {menus} />
  <div class="flex flex-col flex-1 overflow-y-hidden">
    <div class="flex justify-end p-2 bg-white">
      <a href="/member/profil" class=" flex gap-2 items-center">
        <img src={profil} class="w-8" alt="" />
        <p class="font-bold">{$infoLogin?.nama}</p>
      </a>
    </div>
    <slot />
  </div>
</div>
