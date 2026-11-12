<script lang="ts">
    import type { LayoutProps } from "./$types";

    const { children, data }: LayoutProps = $props();
</script>

<h2>layoutData/Child Layout</h2>

<p>
    +layout.ts load() 반환값 : {JSON.stringify({
        layoutLoad: data.layoutLoad,
        data: "+layout.ts",
    })}
</p>

<p>
    +layout.server.ts load() 반환값 : {JSON.stringify({
        layoutServerLoad: data.layoutServerLoad,
        data: "+layout.server.ts",
    })}
</p>

<div class="wrapper">
    {@render children()}
</div>

<style>
    .wrapper {
        border: 1px solid black;
        padding: 0.5rem;
    }
</style>
