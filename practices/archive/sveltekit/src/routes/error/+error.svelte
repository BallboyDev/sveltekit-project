<script lang="ts">
    import { page } from "$app/state";
    import { onMount } from "svelte";

    onMount(() => {
        console.log("/error +error.svelte onMount()");
    });
</script>

<h2>{page.status}</h2>
<p>{page.error?.message}</p>
