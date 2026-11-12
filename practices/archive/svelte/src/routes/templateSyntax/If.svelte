<script>
    let option = $state(0);
</script>

<button
    onclick={() => {
        option = 0;
    }}>0</button
>

<button
    onclick={() => {
        option = 1;
    }}>1</button
>

<button
    onclick={() => {
        option = 2;
    }}>2</button
>

<p>option : {option}</p>

{#if option === 0}
    <p>block is #if</p>
{:else if option === 1}
    <p>block is :else if</p>
{:else}
    <p>block is :else</p>
{/if}
