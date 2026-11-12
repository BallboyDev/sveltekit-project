<script lang="ts">
    let { children } = $props();
</script>

<h2>route group layout</h2>

<div class="page">
    {@render children()}
</div>

<style>
    .page {
        margin-top: 1rem;
        padding: 1rem;
        border: 1px solid black;
    }
</style>
