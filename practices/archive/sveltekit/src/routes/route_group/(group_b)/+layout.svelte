<script lang="ts">
    import { onMount } from "svelte";

    let { children } = $props();

    onMount(() => {
        console.log("/(group_b) +layout.svelte onMount()");
    });
</script>

<h1>group_b layout</h1>

{@render children()}
