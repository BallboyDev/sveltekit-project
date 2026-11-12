<script>
    console.log($$slots);
</script>

<div class="card">
    {#if $$slots.title}
        <div class="title">
            <slot name="title" />
        </div>
    {/if}

    <div class="body">
        <slot name="body" />
    </div>
</div>

<style>
    .card {
        border: 1px solid lightgray;
    }
    .title {
        border-bottom: 1px solid lightgray;
        padding: 0.5rem 1rem;
    }

    .body {
        padding: 0.5rem 1rem;
    }
</style>
