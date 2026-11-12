<script>
    let { user } = $props();
</script>

<h2>{user.name} (@{user.id})</h2>
<p>{user.bio}</p>
