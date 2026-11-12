<script>
    /** @type {import('svelte/action').Action} */
    const action = (node) => {
        console.log("1");
        $effect(() => {
            console.log("2");
            return () => {
                console.log("3");
            };
        });
    };

    let value = $state(false);
</script>

<button
    onclick={() => {
        value = !value;
    }}>click</button
>

{#if value}
    <div use:action>div tag</div>
{/if}
