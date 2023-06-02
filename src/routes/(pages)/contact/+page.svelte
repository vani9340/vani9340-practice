<!-- <script>

</script>

<form class="max-w-md mx-auto mt-8" on:submit|preventDefault={handleSubmit}>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
    <input
      type="text"
      id="name"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      bind:value={name}
      class:border-red-500={errors.name}
    />
    {#if errors.name}
      <p class="text-red-500 text-xs italic mt-1">{errors.name}</p>
    {/if}
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
    <input
      type="email"
      id="email"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      bind:value={email}
      class:border-red-500={errors.email}
    />
    {#if errors.email}
      <p class="text-red-500 text-xs italic mt-1">{errors.email}</p>
    {/if}
  </div>

  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
    <textarea
      id="message"
      class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      bind:value={message}
      class:border-red-500={errors.message}
    ></textarea>
    {#if errors.message}
      <p class="text-red-500 text-xs italic mt-1">{errors.message}</p>
    {/if}
  </div>

  <div class="flex items-center justify-end">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Submit
    </button>
  </div>
</form> -->
