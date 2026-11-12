<script lang="ts">
    import { onMount } from "svelte";

    let { children } = $props();

    onMount(() => {
        console.log("/(group_a) +layout.svelte onMount()");
    });
</script>

<h2>group_a layout</h2>

{@render children()}
