<script>
    import { /*afterUpdate, beforeUpdate,*/ onDestroy, onMount } from "svelte";

    let viewer = $state(false);

    onMount(() => {
        console.log("onMount");
    });

    // beforeUpdate(() => {
    //     console.log("beforeUpdate");
    // });

    // afterUpdate(() => {
    //     console.log("afterUpdate");
    // });

    onDestroy(() => {
        console.log("onDestroy");
    });
</script>

<button
    onclick={() => {
        viewer = !viewer;
    }}>view</button
>

{#if viewer}
    <div>view</div>
{/if}
