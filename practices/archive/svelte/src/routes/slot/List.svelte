<script>
    let array = ["Svelte", "React", "Vue", "Angular"];
</script>

{#each array as item}
    <slot {item} />
{/each}
