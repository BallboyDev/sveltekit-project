<!-- <script>
    let count = $state(0);
    let message = $state("hello");

    $inspect(count, message); // will console.log when `count` or `message` change
</script>

<button onclick={() => count++}>Increment</button>
<input bind:value={message} /> -->

<script>
    let count1 = $state(0);
    let count2 = $state(0);
    let count3 = $state(0);

    $inspect(count1, count2, count3);

    $inspect(count1, count2, count3).with((type, count1, count2, count3) => {
        console.group(`type: ${type}`);
        console.log(`count1: ${count1}`);
        console.log(`count2: ${count2}`);
        console.log(`count3: ${count3}`);
        console.groupEnd();
    });

    $inspect(count1).with(console.trace);
</script>

<button
    onclick={() => {
        count1++;
    }}>count1 : {count1}</button
>
<button
    onclick={() => {
        count2++;
    }}>count2 : {count2}</button
>
<button
    onclick={() => {
        count3++;
    }}>count3 : {count3}</button
>
