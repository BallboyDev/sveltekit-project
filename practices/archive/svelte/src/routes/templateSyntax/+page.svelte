<script>
    import Await from "./Await.svelte";
    import Each from "./Each.svelte";
    import If from "./If.svelte";
    import Key from "./Key.svelte";
    import Snippet from "./Snippet.svelte";

    let items = $state(["if", "each", "key", "await", "snippet"]);
    let block = $state("snippet");
</script>

<h3>{block}</h3>
{#each items as item}
    <button
        onclick={() => {
            block = item;
        }}>{item}</button
    >
{/each}

<hr />

{#if block === "if"}
    <If />
{:else if block === "each"}
    <Each />
{:else if block === "key"}
    <Key />
{:else if block === "await"}
    <Await />
{:else if block === "snippet"}
    <Snippet />
{/if}
