<script>
    const handleClick1 = () => {
        console.log("click!!!");
    };

    import HelloButton from "./HelloButton.svelte";
    // @ts-ignore
    const handleHello = (e) => {
        console.log(e?.detail);
    };

    import CustomButton from "./CustomButton.svelte";
    const handleClick2 = () => {
        console.log("click!!!!");
    };
</script>

<button onclick={handleClick1}>click</button>

<HelloButton on:hello={handleHello} />

<CustomButton on:click={handleClick2}>Click to here</CustomButton>
