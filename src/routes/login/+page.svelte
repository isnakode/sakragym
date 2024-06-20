<script>
  export let form;
</script>

<div class="h-full flex justify-center items-center bg-slate-900">
  <form method="post" class="bg-white flex p-4 rounded-xl flex-col w-1/3">
    {#if form?.pesan}
      <div class="p-4 rounded-lg bg-red-500 text-white mb-4">
        {form.pesan}
      </div>
    {/if}
    <p class="font-bold text-xl mb-4 text-center">LOGIN</p>
    <label for="email">Email</label>
    <input class="mb-2" type="email" name="email" id="email" />
    <label for="password">Password</label>
    <input type="password" name="password" id="password" />
    <button class="btn bg-primary mt-4">login</button>
    <a href="/daftar" class="text-center mt-3 link">belum punya akun</a>
  </form>
</div>
