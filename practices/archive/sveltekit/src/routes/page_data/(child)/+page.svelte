<script lang="ts">
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();
</script>

<h3>PageData/Child Page</h3>

<p>
    +page.ts load() 반환값 : {JSON.stringify({
        pageLoad: data.pageLoad,
        data: "+page.ts",
    })}
</p>

<p>
    +page.server.ts load() 반환값 : {JSON.stringify({
        pageServerLoad: data.pageServerLoad,
        data: "+page.server.ts",
    })}
</p>
