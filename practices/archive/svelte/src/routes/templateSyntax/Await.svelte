<script>
    const expr = new Promise((resolve, reject) => {
        console.log("promise");
        setTimeout(() => {
            const check = new Date().getSeconds() % 2;

            if (check === 0) resolve("resolve");
            else reject("reject");
        }, 2000);
    });
</script>

{#await expr}
    <p>waiting...</p>
{:then res}
    <p>result : {res}</p>
{:catch err}
    <p>error : {err}</p>
{/await}
