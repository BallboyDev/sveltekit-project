<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    const handleClick = () => {
        dispatch("hello", "안녕하세요");
    };
</script>

<button on:click={handleClick}>click to here</button>
