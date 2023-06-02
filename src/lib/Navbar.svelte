<script>
	import { page } from "$app/stores";

    $: routeId = $page.route.id;
    $: url = $page.url.href;
</script>

<nav class="flex justify-between p-4 text-lg bg-slate-800 text-white">
    <h1>Project</h1>
    <ul class='underline flex text-base justify-center gap-4'>
       <li>
           <a href='/'>Home</a>
       </li>
       <li>
           <a href='/about'>About</a>
       </li>
       <li>
           <a href='/services'>Services</a>
       </li>
       <li>
           <a href='/contact'>Contact</a>
       </li>
       <li>
        <a href='/blog'>Blog</a>
    </li>
    </ul>
</nav>