<script>
    import { onMount } from "svelte";

    const temp = `
src/routes/route_group
    │
    ├─ +layout.svelte          // 하위 모든 페이지에 공통으로 적용되는 Layout
    ├─ +page.svelte            // 메인 페이지
    │
    ├─ (group_a)
    │   ├─ +layout.svelte      // (group_a) 하위 페이지에만 적용 되는 Layout
    │   │
    │   ├─ group_a_1
    │   │   └─ +page.svelte    // 최종 URL: /route_group/group_a_1
    │   │
    │   └─ group_a_2
    │       └─ +page.svelte    // 최종 URL: /route_group/group_a_2
    └─ (group_b)
        ├─ +layout.svelte      // (group_a) 하위 페이지에만 적용 되는 Layout
        │
        ├─ group_b_1
        │   └─ +page.svelte    // 최종 URL: /route_group/group_b_1
        │
        └─ group_b_2
            └─ +page.svelte    // 최종 URL: /route_group/group_b_2
`;

    onMount(() => {
        console.log("/(group_b)/group_b_2 +page.svelte onMount()");
    });
</script>

<h3>group_b_2 page</h3>

<p>path : src/routes/route_group/(group_a)/group_b_2</p>

<div class="tree">
    {temp}
</div>

<style>
    .tree {
        white-space: pre-wrap;
        font-family: monospace;
    }
</style>
