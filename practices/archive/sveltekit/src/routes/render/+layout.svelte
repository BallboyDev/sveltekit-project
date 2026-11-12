<script lang="ts">
    import { onMount } from "svelte";
    import type { LayoutProps } from "./$types";

    // children : +page.svelte 파일의 구성 요소
    // data : +layout.ts파일의 load 함수로 부터의 반환 값
    let { children, data }: LayoutProps = $props();

    onMount(() => {
        console.log("/render +layout.svelte onMount()");
    });
</script>

<h1>{data.title}</h1>

<p>{data.contents}</p>

<p>{data.appInfo}</p>

<div class="page">
    {@render children()}
</div>

<style>
    .page {
        padding: 1rem;
        border: 1px solid black;
    }
</style>
