## Template Syntax
- __Block__
    - 스벨트의 템플릿에서는 조건 분기나 반복문과 같은 문법을 제공한다.
    - 블록 문법은 모두 `{#...}` 에서 `{/...}`으로 끝나는 구조를 가진다.

### {#if expression}
- 조건부로 렌더링 되는 콘텐츠는 `{#if}` 블록으로 감쌀 수 있습니다. 
- 추가 조건은 `{:else if}`으로 추가할 수 있으며, 선택적으로 `{:else}` 절로 끝납니다.

~~~svelte
{#if expression}
    <!-- Code1 -->
{:else if expression}
    <!-- Code2 -->
{:else}
    <!-- Code3 -->
{/if}
~~~

### {#each expression}
- `#each` 에서 배열과 같은 값에 대한 반복 작업을 수행할 수 있습니다. 
- 각 목록 항목을 고유하게 식별해야 하는 키 식을 제공하면 Svelte는 마지막에 항목을 추가하거나 제거하는 대신 이를 사용하여 데이터가 변경될 때 목록을 확신합니다.
- `#each` 에는 목록이 비어 있는 경우 렌더링이 되는 `{:else}` 절을 사용할 수 있다.

~~~svelte
{#each expression as name, index (key)}
    <!-- repeat Code -->
{/each}

{#each expression as {item, ...rest}, i, {key}}
    <!-- repeat Code -->
{/each}

{#each expression, index}
    <!-- repeat Code -->
{/each}

{#each expression as name, index (key)}
    <!-- repeat Code -->
{:else}
    <!-- empty Code -->
{/each}
~~~

### {#key expression}
- `#key` 블록은 식의 값이 변경되면 내용을 파괴하고 다시 생성합니다. 
- 구성 요소 주변에 사용하면 구성 요소가 다시 복원되고 다시 초기화 됩니다.

~~~svelte
{#key expression}
    <!-- Code -->
{/key}
~~~

### {#await expression}
- `#await` 블록을 사용하면 대기 중, 완료, 거부 세 가지 상태를 분기할 수 있습니다.
- `:then` 블록과 `:catch` 블록은 생략 가능합니다.

~~~svelte
{#await expression}
    <!-- Waiting Code -->
{:then name} 
    <!-- response Code -->
{:catch name}
    <!-- reject Code -->
{/await}

{#await expression}
    <!-- Waiting Code -->
{:then name}
    <!-- response Code -->
{/await}

{#await expression then name}
    <!-- response Code -->
{/await}

{#await expression catch name}
    <!-- reject Code -->
{/await}
~~~

### {#snippet expression}
- `#snippet` 블록과 렌더링 태그는 컴포넌트 내부에 재사용 가능한 마크업 코드를 만드는 방법입니다.
- `#snippet` 블록과 렌더링 태그는 기본 스코프 문법을 따릅니다.
- `#snippet` 블록은 템플릿 내에서 객체로 다루어 지기에 컴포넌트에 속성 값이나 props 값으로 전달이 가능합니다.
- 스니펫 문법은 createRawSnippet API를 사용하여 프로그래밍 방식으로 생성할 수 있습니다.

~~~svelte
{#snippet name1()}
    <!-- Code1 -->
{/snippet}

{#snippet name2(param)}
    <!-- Code2 -->
{/snippet}

{#snippet name3(param)}
    <!-- Code3 -->
{/snippet}

{@render name1()}
{@render name2(param)}
{@render name3?.(param)}

<Component header={name1} row={name2}/>
~~~

### 기타 블럭 문법 
- {@render ...}
    - snippet 문법을 렌더링 하기 위해 사용됩니다.
- {@html ...}
    - svelte 코드에 HTML 주입하기 위해 사용됩니다.
- {@const ...}
    - 로컬 상수를 정의하기 위해 사용됩니다.
    - 블록의 직계 하위 항목으로만 허용됩니다.
- {@debug ...}
    - 특정 변수의 값이 변경 될 때마다 기속되며, 개발 도구가 열려 있는 경우 코드 실행을 일시 중지 합니다.

~~~svelte
<!-- {@render ...} -->
{#snippet name1()}
    <p>name1</p>
{/snippet}
{#snippet name2()}
    <p>name2</p>
{/snippet}

{@render (value ? name1 : name2)()}
{@render name2?.()}

<!-- {@heml ...} -->
<article>
    {@html content}
</article>

<!-- {@const ...} -->
{#each boxes as box}
    {@const area = box.width * box.height}
    {box.width} * {box.height} = {area}
{/each}

<!-- {@debug ...} -->
{@debug user}
{@debug user1, user2, user3}

~~~