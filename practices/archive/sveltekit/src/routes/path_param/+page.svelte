<script lang="ts">
    let value = $state("");
</script>

<h3>Path Variable Page</h3>

<p>value : <input type="text" name="" id="" bind:value /></p>

<div class="group">
    <div class="temp">동적 파라미터 경로 : /path_param/dynamic/[value]</div>
    {#if !value || value.split("/").filter((v) => {
            return !!v;
        }).length !== 1}
        404 Not Found
    {:else}
        <a href="/path_param/dynamic/{value}">/path_param/dynamic/{value}</a>
    {/if}
</div>

<div class="group">
    <div class="temp">
        선택적 파라미터 경로 : /path_param/optional/[[value]]
    </div>
    {#if value.split("/").filter((v) => {
        return !!v;
    }).length > 1}
        404 Not Found
    {:else}
        <a href="/path_param/optional/{value}">/path_param/optional/{value}</a>
    {/if}
</div>

<div class="group">
    <div class="temp">나머지 파라미터 경로 : /path_param/rest/[[value]]</div>
    <a href="/path_param/rest/{value}">/path_param/rest/{value}</a>
</div>

<style>
    .group {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 1px solid black;
    }
    .temp {
        margin-bottom: 0.5rem;
    }
</style>
