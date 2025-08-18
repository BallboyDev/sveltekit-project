<!-- src/routes/login/+page.svelte -->
<script>
    import { enhance } from "$app/forms";

    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<h1>로그인</h1>

{#if data.user}
    <p>환영합니다, {data.user.name}님!</p>
    <form action="?/logout" method="POST">
        <button type="submit">로그아웃</button>
    </form>
{:else}
    <form action="?/login" method="POST">
        <label for="email">이메일</label>
        <input id="email" name="email" type="email" required />
        <br />
        <label for="password">비밀번호</label>
        <input id="password" name="password" type="password" required />
        <br />
        <button type="submit">로그인</button>
    </form>
{/if}

{#if form?.msg}
    <p style="color: green;">{form.msg}</p>
{/if}

<style>
    input {
        margin-bottom: 0.5rem;
    }
</style>
