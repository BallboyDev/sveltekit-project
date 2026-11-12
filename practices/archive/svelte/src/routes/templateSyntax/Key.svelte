<script>
    import { fade } from "svelte/transition";

    let count = $state(0);
    let bool = $state(false);
</script>

<button
    onclick={() => {
        count++;
    }}>{count}</button
>
<button
    onclick={() => {
        bool = !bool;
    }}>{bool}</button
>

{#key bool}
    <div transition:fade>{count}</div>
{/key}
