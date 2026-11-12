<script>
    import { onMount } from "svelte";

    let inputA = $state("inputA");
    let inputB = $state("inputB");

    let result = $state({ method: "", a: "", b: "" });

    onMount(() => {
        console.log("/server +page.svelte onMount()");
    });

    const handler = {
        get: async () => {
            console.log("+page.svelte API get");

            const res = await fetch(`/server?a=${inputA}&b=${inputB}`);

            result = await res.json();
        },
        post: async () => {
            console.log("+page.svelte API post");

            const res = await fetch(`/server`, {
                method: "POST",
                body: JSON.stringify({
                    a: inputA,
                    b: inputB,
                }),
            });

            result = await res.json();
        },
        put: async () => {
            console.log("+page.svelte API put");

            const res = await fetch(`/server`, {
                method: "PUT",
                body: JSON.stringify({
                    a: inputA,
                    b: inputB,
                }),
            });

            result = await res.json();
        },
        delete: async () => {
            console.log("+page.svelte API delete");

            const res = await fetch(`/server`, {
                method: "DELETE",
                body: JSON.stringify({
                    a: inputA,
                    b: inputB,
                }),
            });

            result = await res.json();
        },
    };
</script>

<h2>Server page</h2>

<div class="inputs">
    <div>Input A : <input type="text" name="" id="" bind:value={inputA} /></div>
    <br />
    <div>Input B : <input type="text" name="" id="" bind:value={inputB} /></div>

    <div class="buttons">
        <button onclick={handler.get}>GET</button>
        <button onclick={handler.post}>POST</button>
        <button onclick={handler.put}>PUT</button>
        <button onclick={handler.delete}>DELETE</button>
    </div>
</div>

<div class="result">
    <p>Method: {result.method}</p>
    <p>result A: {result.a}</p>
    <p>result B: {result.b}</p>
</div>

<style>
    .inputs {
        border: 1px solid black;
        padding: 1rem;
        margin-bottom: 1rem;
    }
    .buttons {
        border: 1px solid black;
        padding: 1rem;
        margin-top: 1rem;
    }
    .result {
        border: 1px solid black;
        padding: 1rem;
        margin-bottom: 1rem;
    }
</style>
