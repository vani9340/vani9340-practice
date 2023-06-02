<script>
export let data;
const {posts} = data;

</script>


<div class='grid grid-cols-3 gap-6'>
{#each posts as {id,title, image,body}}
    <div>
    <img src={image} alt={title} class='h-1/2'/>
    <p class='text-2xl font-bold'>{title.substring(0,20)}</p>
    <p>{body.substring(0,80)}</p>
    </div>
  
    {/each}
</div>


<svelte:head>
    <title>Buisness frontpage</title>
  <meta name="description" content="Business frontpage is a company">
</svelte:head>

