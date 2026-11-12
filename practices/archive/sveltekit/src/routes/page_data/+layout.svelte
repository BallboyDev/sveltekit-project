<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";

    const { children } = $props();
</script>

<h2>PageData Layout</h2>

<p>page.data 값</p>
<p>- layoutServerLoad : {page.data.layoutServerLoad}</p>
<p>- layoutLoad : {page.data.layoutLoad}</p>
<p>- pageServerLoad : {page.data.pageServerLoad}</p>
<p>- pageLoad : {page.data.pageLoad}</p>
<p>- data : {page.data.data}</p>

<div class="wrapper">
    {@render children()}
</div>

<style>
    .wrapper {
        border: 1px solid black;
        padding: 0.5rem;
    }
</style>
