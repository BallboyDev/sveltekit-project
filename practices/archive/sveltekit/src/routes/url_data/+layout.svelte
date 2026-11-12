<script lang="ts">
    const { children } = $props();
</script>

<h3>Url Data Layout</h3>

<div class="wrapper">
    {@render children()}
</div>

<style>
    .wrapper {
        border: 1px solid black;
        padding: 1rem;
    }
</style>
