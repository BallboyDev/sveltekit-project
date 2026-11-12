<script>
    let { value = $bindable("state"), ...props } = $props();
</script>

<input bind:value {...props} />

<style>
    input {
        color: deeppink;
    }
</style>
