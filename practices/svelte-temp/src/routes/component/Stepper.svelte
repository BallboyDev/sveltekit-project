<svelte:options customElement="my-stepper" />

<script lang="ts">
    function dispatch(type: any) {
        $host().dispatchEvent(new CustomEvent(type));
    }
</script>

<button onclick={() => dispatch("de")}>decrement</button>
<button onclick={() => dispatch("in")}>increment</button>
