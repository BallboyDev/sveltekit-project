## Slot
### 슬롯 - legacy APIs
- 부모 컴포넌트에서 자식 템플릿의 일부를 자유롭게 다룰 수 있는 기능
- 슬롯에서는 html태그 뿐만 아니라 컴포넌트나 블록 등 템플릿에서 사용할 수 있는 문법 모두 사용 가능하다.

- 대체 콘텐츠
    - 슬롯에 콘텐츠가 삽입되지 않을 때는 기본값으로 표시할 대체 콘텐츠를 지정할 수 있다.
    - 대체 콘텐츠는 <slot>과 </slot> 사이에 작성한다.

- 이름을 가지는 슬롯
    - 이름을 가지는 슬롯은 슬롯에 이름을 지정하여 슬롯을 구별할 수 있으며 이를 통해 여러 슬롯을 배치할 수 있다.
    - slot 속성은 html 태그 뿐만 아니라 컴포넌트에도 붙일 수 있다.

- $$slots
    - $$slots은 미리 정의된 변수로, 해당 컨포넌트에서 정의된 슬롯 이름을 키로 갖는 객체 변수이다.

- 슬롯 속성
    - 슬롯에 삽압된 요소에 대해 자식 컴포넌트 측에서 값을 전달하고 싶을 때는 슬롯의 속성을 사용한다.
    - `<slot>` 태그에 `속성명 = {값}`과 같이 작성하면 부모 컴포넌트 측에 값을 전달할 수 있다.
    - `let:속성명 = {변수}`와 같이 작성하면 `<slot>`의 슬롯 속성을 변수로 받을 수 있다.

```html
<!-- Box.svelte -->
<div class="box">
    <slot>
        <div>대체 콘텐츠 - not found content</div>
    </slot>
</div>

<style>
    .box {
        border: 1px solid lightgray;
        padding: 1rem;
    }
</style>

<!-- Card.svelte -->
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

<!-- List.svelte -->
<script>
    let array = ["Svelte", "React", "Vue", "Angular"];
</script>

{#each array as item}
    <slot {item} />
{/each}


<!-- App.svelte -->
<script>
    import Box from "./Box.svelte";

    import Card from "./Card.svelte";
</script>

<Box>
    <h3>Svelte</h3>
    {#if true}
        <p>Svelte is very good</p>
    {:else}
        <p>Svelte is very shit</p>
    {/if}
</Box>

<Card>
    <h3 slot="title">Svelte</h3>
    <svelte:fragment slot="body">
        <p>svelte is very good</p>
    </svelte:fragment>
</Card>

<List let:item={text}>
    <div style="color: blue;">{text}</div>
</List>
```