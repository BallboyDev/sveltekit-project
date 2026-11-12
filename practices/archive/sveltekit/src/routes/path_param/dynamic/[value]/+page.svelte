<script lang="ts">
    import type { PageProps } from "./$types";

    const { data }: PageProps = $props();
</script>

<h3>Dynamic Route page</h3>

<p>form : /path_param/dynamic/[value]</p>
<p>path : {data.path}</p>
<p>value : {data.value}</p>
