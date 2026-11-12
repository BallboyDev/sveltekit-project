<script>
    let count = $state(0);
    let doubled = $derived(count + 1);
    let doubledouble = $derived.by(() => {
        return (doubled * 2) ** 2;
    });
</script>

<button onclick={() => count++}> click!! </button>

<p>{count}</p>
<p>{doubled}</p>
<p>{doubledouble}</p>
