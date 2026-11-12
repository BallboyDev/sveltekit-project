<script>
    // @ts-nocheck

    let { message = "svelte" } = $props();
</script>

{#snippet name(value)}
    <p>name - value : {value} / props(message) : {message}</p>
{/snippet}

{@render name("snippet")}
