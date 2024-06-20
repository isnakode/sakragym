<script>
  import gambar from "../gambar/gym.webp";
  import { infoLogin } from "../state/infoLogin";
</script>

<div
  class="flex flex-col h-full text-white bg-cover"
  style="background-image: url('{gambar}')"
>
  <header class="flex justify-between items-center py-2 px-4">
    <h2 class="font-bold text-xl uppercase">sakra fitness</h2>
    <nav class="flex items-center gap-4">
      <a href="/" class="hover:underline">Beranda</a>
      <a href="/" class="hover:underline">Tentang</a>
      <a href="/" class="hover:underline">Paket</a>
      <a href="/" class="hover:underline">Kontak kami</a>
    </nav>
    {#if $infoLogin?.nama}
      <a href="{$infoLogin.tipe}/dashboard" class="btn bg-primary text-black">
        Masuk
      </a>
    {:else}
      <a href="/login" class="btn bg-primary text-black">Login</a>
    {/if}
  </header>
  <div class="flex-1 flex justify-center items-center flex-col gap-4">
    <h2 class="font-bold text-4xl">SELAMAT DATANG DI WEBSITE SAKRA FITNESS</h2>
    <p>Raih bentuk tubuh lebih kuat dan sehat bersama kami di Sakra Fitness</p>
    <div class="flex gap-2">
      {#if $infoLogin?.nama}
        <a
          href="/{$infoLogin.tipe}/dashboard"
          class="btn bg-primary text-black"
        >
          Masuk Dashboard
        </a>
      {:else}
        <a href="/daftar" class="btn bg-primary text-black">Daftar</a>
        <a href="/login" class="btn border-primary text-primary">Login</a>
      {/if}
    </div>
  </div>
</div>
