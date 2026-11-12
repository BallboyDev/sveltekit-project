<script>
    // @ts-nocheck

    import { onDestroy, onMount, tick } from "svelte";

    let temp = $state("before mount");

    onMount(() => {
        console.log("the component has mounted");
        setInterval(() => {
            temp = "mounted";
        }, 3000);
    });

    onDestroy(() => {
        console.log("the component is being destroyed");
    });

    // $effect.pre(() => {
    //     console.log("the component is about to update", temp);
    //     tick().then(() => {
    //         console.log("the component just updated", temp);
    //     });
    // });

    let clicked = $state(false);

    const handleClick = async () => {
        // 상태 변경
        clicked = true;

        await tick();

        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#ddd";
        ctx.fillRect(0, 0, 100, 100);
        ctx.fillRect(100, 100, 200, 200);
    };
</script>

<h3>{temp}</h3>

<div>
    <button onclick={handleClick}>표시</button>
</div>

{#if clicked}
    <canvas id="canvas" width="200" height="200"></canvas>
{/if}

<a href="/lifeCycle/update">beforeUpdate/afterUpdate</a>
