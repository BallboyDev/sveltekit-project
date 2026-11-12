<!-- <script>
    import { onDestroy, onMount } from "svelte";

    let state = $state({ value: 0 });
    let derived = $derived({ value: state.value * 2 });

    onMount(() => {
        console.log("onMount()");
    });

    onDestroy(() => {
        console.log("onDetroy()");
    });

    $effect(() => {
        console.log("change state");
        state;
    });
    $effect(() => {
        console.log("change state.value");
        state.value;
    });
    $effect(() => {
        console.log("change derived");
        derived;
    });

    $effect.pre(() => {
        console.log("pre change state.value");
        state.value;
    });
</script>

<button onclick={() => (state.value += 1)}>
    {state.value}
</button>

<p>{state.value} doubled is {derived.value}</p> -->

<script>
    let count = $state(0);
    let temp = $state(0);

    console.log("in component setup : ", $effect.tracking());

    $effect(() => {
        count;
        console.log("effect");
    });

    $effect.pre(() => {
        count;
        console.log("effect.pre");
    });

    $effect(() => {
        console.log("in effect : ", $effect.tracking());
    });

    const cleanup = $effect.root(() => {
        $effect(() => {
            console.log(count);
        });

        return () => {
            console.log("effect root cleanup");
        };
    });
</script>

<button
    onclick={() => {
        count++;
        console.log("in onclick : ", $effect.tracking());
    }}>{count}</button
>
<button
    onclick={() => {
        temp++;
    }}>TEMP</button
>

<p>in template : {$effect.tracking()}</p>
