<script lang="ts">
    import "./component/Stepper.svelte";

    let count = $state(0);
</script>

<my-stepper onde={() => (count -= 1)} onincrement={() => (count += 1)}
></my-stepper>

<p>count: {count}</p>
