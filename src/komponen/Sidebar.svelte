<script lang="ts">
  import { page } from "$app/stores";

  export let menus: { url: string; nama: string }[];
</script>

<div class="flex flex-col bg-slate-900 basis-1/6 text-white">
  <a href="/" class="text-center mt-2 font-bold p-4">SAKRA<br />FITNESS</a>
  <hr />
  <div class="flex flex-col mt-4">
    {#each menus as menu}
      <a
        href={menu.url}
        class="px-4 py-2 {$page.url.pathname == menu.url
          ? 'bg-white/20'
          : 'hover:bg-white/10'}">{menu.nama}</a
      >
    {/each}
  </div>
</div>
