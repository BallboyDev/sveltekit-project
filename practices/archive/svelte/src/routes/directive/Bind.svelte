<script>
    // @ts-nocheck

    let message = $state("hello");

    let value = $state("");

    let tortilla = $state("Plain");
    let filling = $state([]);

    let files = $state();
    const clear = () => {
        files = new DataTransfer().files;
    };

    let selected = $state("a");
</script>

<input bind:value={message} />
<p>{message}</p>

<hr />

<form>
    <input bind:value defaultValue="not the empty string" />
    <input type="reset" value="Reset" />
</form>

<hr />

<p>{tortilla}</p>
<input type="radio" bind:group={tortilla} value="Plain" />
<input type="radio" bind:group={tortilla} value="Whole wheat" />
<input type="radio" bind:group={tortilla} value="Spinach" />

<p>{filling}</p>
<input type="checkbox" bind:group={filling} value="Rice" />
<input type="checkbox" bind:group={filling} value="Beans" />
<input type="checkbox" bind:group={filling} value="Cheese" />
<input type="checkbox" bind:group={filling} value="Guac (extra)" />

<hr />

<label for="avatar">Upload a picture:</label>
<input
    accept="image/png, image/jpeg"
    bind:files
    id="avatar"
    name="avatar"
    type="file"
/>
<button onclick={clear}>clear</button>

<hr />

<p>{selected}</p>

<select bind:value={selected}>
    <option value={"a"}>a</option>
    <option value={"b"}>b</option>
    <option value={"c"}>c</option>
    <option value={"d"}>d</option>
</select>
