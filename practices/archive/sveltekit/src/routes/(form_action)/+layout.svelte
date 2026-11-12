<script lang="ts">
    let { children } = $props();
</script>

<h2>Form action Layout</h2>

<div class="nav">
    <a href="/actions">[ 폼 액션 ]</a>
    <a href="/login">[ 로그인 (hooks / handle)]</a>
    <a href="/enhance">[ enhance ]</a>
</div>

<div class="wrapper">
    {@render children()}
</div>

<style>
    .nav {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border: 1px solid black;
        display: flex;
        flex-wrap: wrap;
    }
    .nav > a {
        margin-right: 0.5rem;
    }
    .wrapper {
        border: 1px solid black;
        padding: 1rem;
    }
</style>
