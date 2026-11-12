<script>
    import Box from "./Box.svelte";

    import Card from "./Card.svelte";

    import List from "./List.svelte";
</script>

<Box>
    <h3>Svelte</h3>
    <p>svelte is very good</p>
</Box>

<Card>
    <h3 slot="title">Svelte</h3>
    <svelte:fragment slot="body">
        <p>svelte is very good</p>
    </svelte:fragment>
</Card>

<List let:item={text}>
    <div style="color: blue">{text}</div>
</List>
