<script>
    let { first = "1st", second = "2nd", third } = $props();
    // let { first: one = "1st" } = $props();
</script>

<!-- <p>first : {one}</p> -->
<p>first : {first}</p>
<p>second : {second}</p>
<p>third : {third}</p>
