<script>
    import { fade } from "svelte/transition";

    let visible = $state(false);
</script>

<button
    onclick={() => {
        visible = !visible;
    }}>click</button
>

{#if visible}
    <div transition:fade>in and out</div>
{:else}
    <div transition:fade>out and in</div>
{/if}
