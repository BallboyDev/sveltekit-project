<script lang="ts">
    import { onMount } from "svelte";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    onMount(() => {
        console.log("/ +page.svelte onMount()");
    });
</script>

<h1>{data.title}</h1>
