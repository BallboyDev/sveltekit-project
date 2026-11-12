<script>
    // @ts-nocheck

    import { writable } from "svelte/store";
    import { isLogin } from "./store";
    import { onDestroy } from "svelte";

    // const count = writable(0, () => {
    //     console.log("got a subscriber");

    //     return () => console.log("no more subscribers");
    // });

    // count.set(1);

    // const unsubscribe = count.subscribe((value) => {
    //     console.log("value >>", value);
    // });

    // unsubscribe();

    let login = $state(false);

    const unsubscribe = isLogin.subscribe((value) => {
        login = value;
    });

    const handleLogin = () => {
        isLogin.set(true);
    };

    const handleLogout = () => {
        isLogin.set(false);
    };

    onDestroy(unsubscribe);
</script>

{#if login}
    <button onclick={handleLogout}>logout</button>
{:else}
    <button onclick={handleLogin}>login</button>
{/if}
