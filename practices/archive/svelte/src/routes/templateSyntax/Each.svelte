<script>
    // @ts-nocheck

    let array = $state([0, 1, 2, 3]);

    let jsonArray = $state([
        { id: 10, name: "a", value: "w" },
        { id: 20, name: "b", value: "x" },
        { id: 30, name: "c", value: "y" },
        { id: 40, name: "d", value: "z" },
    ]);

    let empty = $state([]);
</script>

{#each array as item, i}
    <p>{i} / {item}</p>
{/each}

{#each jsonArray as item, i}
    <p>{i} / {item.name} / {item.value}</p>
{/each}

{#each array, index}
    <p>{index}</p>
{/each}

{#each empty as item, i}
    <p>{i} / item</p>
{:else}
    <p>empty</p>
{/each}
