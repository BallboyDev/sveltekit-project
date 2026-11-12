<script lang="ts">
    import { onMount } from "svelte";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    onMount(() => {
        console.log("/error +page.svelte onMount()");
    });
</script>

<h2>{data.title}</h2>

<a href="/error?err=400">400 Error</a>
