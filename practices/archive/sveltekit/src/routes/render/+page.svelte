<script lang="ts">
    import { onMount } from "svelte";
    import type { PageProps } from "./$types";

    // data : +page.ts파일의 load 함수로 부터의 반환 값
    let { data }: PageProps = $props();

    onMount(() => {
        console.log("/render +page.svelte onMount()");
    });
</script>

<h2>{data.title}</h2>

<p>{data.contents}</p>

<p>{data.userInfo}</p>
