<script>
    import Bind from "./Bind.svelte";
    import Transition from "./Transition.svelte";
    import Use from "./Use.svelte";

    let items = $state(["bind", "use", "transition"]);
    let directive = $state("transition");
</script>

<h3>{directive}</h3>

{#each items as item, i}
    <button
        onclick={() => {
            directive = item;
        }}>{item}</button
    >
{/each}

<hr />

{#if directive === "bind"}
    <Bind />
{:else if directive === "use"}
    <Use />
{:else if directive === "transition"}
    <Transition />
{/if}
