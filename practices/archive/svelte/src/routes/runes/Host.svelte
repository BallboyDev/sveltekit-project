<svelte:options customElement="my-stepper" />

<script>
    // @ts-nocheck

    const dispatch = (type) => {
        $host().dispatchEvent(new CustomEvent(type));
    };
</script>

<button onclick={() => dispatch("decrement")}>decrement</button>
<button onclick={() => dispatch("increment")}>increment</button>
