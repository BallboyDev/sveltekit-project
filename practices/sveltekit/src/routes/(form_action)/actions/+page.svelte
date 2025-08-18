<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import type { ActionData, PageData, RouteParams } from "./$types";

    const { data, form, params } = $props();

    onMount(() => {
        console.log("/actions +page.svelte onMount()");
    });
</script>

<h3>Form Action Page</h3>

<form method="post" action="?">
    <div>default()</div>
    <input name="email" type="email" placeholder="Email" />
    <input name="password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
</form>

<form method="post" action="?/login">
    <div>login()</div>
    <input name="email" type="email" placeholder="Email" value={form?.email} />
    <!-- <br /> -->

    <div class="radio">
        <label>
            <input type="radio" name="type" value="return" defaultChecked /> return
        </label>

        <label>
            <input type="radio" name="type" value="fail" /> fail
        </label>

        <label>
            <input type="radio" name="type" value="redirect" /> redirect
        </label>
    </div>
    <!-- <br /> -->

    <button>Login</button>
    <button formaction="?/register">Register</button>
</form>

{#if form?.method}
    <p>result : {JSON.stringify(form)}</p>
{/if}

<style>
    form {
        border: 1px solid black;
        padding: 1rem;
        margin-bottom: 1rem;
    }
    .radio {
        margin: 0.5rem 0;
    }
</style>
