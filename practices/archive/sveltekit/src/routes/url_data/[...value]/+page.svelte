<script lang="ts">
    import { onMount } from "svelte";
    import type { PageProps } from "./$types";

    let value = $state("");

    const { data }: PageProps = $props();

    onMount(() => {
        value = data.url.replace("/url_data", "");
    });
</script>

<h3>Url Data Page</h3>

<p>queryString : <a href="/url_data?a=1&b=2">/url_data?a=1&b=2</a></p>
<p>pathValue : <a href="/url_data/1/2">/url_data/1/2</a></p>

<p>
    테스트 : <input type="text" name="" id="" bind:value /> ===>
    <a href="/url_data{value}">/url_data{value}</a>
</p>

<div>
    {#each data.queryString as item}
        <div>url.searchParams.get('{item[0]}') : {item[1]}</div>
    {/each}
    <div class="center">route.id : {data.route}</div>
    <div>params.data : {data.params}</div>
</div>

<style>
    .center {
        margin: 0.5rem 0;
    }
</style>
