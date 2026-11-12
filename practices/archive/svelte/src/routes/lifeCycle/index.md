## life Cycle
### 라이프 사이클
- .svelte 파일로 작성된 컴포넌트는 최종적으로 자바스크립트 파일로 변환되어 브라우저에서 실행된다. 이 실행(런타임) 처리의 흐름을 컴포넌트의 라이프 사이클 이라고 한다.
- svelte5의 라이프 사이클은 생성과 파괴라는 두 가지 주요 과정으로 구성됩니다.
- 생성/마운트은(는) 컴포넌트가 초기화되며 DOM에 렌더링되는 시점입니다. 컴포넌트가 필요한 렌더링 효과를 설정하며, 초기 상태와 UI가 준비됩니다.
- 파괴/언마운트는 컴포넌트가 DOM에서 제거되기 전, 리소스를 정리하고 이벤트 리스너나 구독을 해제해야 할 때 호출됩니다.

- 라이프 사이클 함수
    - 스벨트는 라이프 사이클 과정에서 특정 타이밍에 실행할 작업을 지정할 수 있는 onMount, onDestory와 상태가 반영될 때 까지 기다리는 tick을 제공하며 이들을 라이프 사이클 함수라고 한다.
    - svelte5 이후 로는 사용되지 않는 beforeUpdate, afterUpdate 함수가 있었다.

- onMount
    - onMount는 컴포넌트가 작성되고 최초 렌더링이 완료된 직후에 호출되는 처리를 설정하는 함수이다.

- onDestory
    - onDestory는 onMount와 반대로, 컴포넌트가 삭제되기 직전에 호출되는 처리를 설정하는 함수다

- tick
    - tick은 스벨트가 제공하는 특수한 함수로, 컴포넌트 내부에 보류 상태의 DOM 업데이트가 있으면 업데이터가 끝날 떄까지 기다리는 Promise를 반환한다.

```html
<script>
    import { onMount, onDestory, tick } from 'svelte'

    onMount(() => {
        console.log('the component has mounted')

        // onMount에서 비동기 함수 로직(async/await)을 넣을 경우 async 함수의 리턴은 promise이므로 return 익명 함수가 무시된다. 그래서 비동기 함수가 있는 경우에는 onDestory 함수를 사용해야 된다.
        // return () => { console.log('the component is being destoryed') }
    })

    onDestory(() => {
        console.log('the component is being destoryed')
    })

    let clicked = $state(false);

    const handleClick = async () => {
        // 상태 변경
        clicked = true;

        // clicked 값의 상태가 변경 될때까지 대기
        await tick();

        // clicked 의 값이 변경 되지 않았을때 실행시 <canvas> 요소를 찾을 수 없어 에러 발생
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#ddd";
        ctx.fillRect(0, 0, 100, 100);
        ctx.fillRect(100, 100, 200, 200);
    };
</script>

<h3>{temp}</h3>

<div>
    <button onclick={handleClick}>표시</button>
</div>

{#if clicked}
    <canvas id="canvas" width="200" height="200"></canvas>
{/if}
```

### beforeUpdate / afterUpdate
- beforeUpdate와 afterUpdate는 각각 컴포넌트의 DOM 구조가 업데이트 되기 직전과 직후에 호출 되는 처리를 등록하는 함수이다.

```html
<script>
    import { beforeUpdate, afterUpdate } from 'svelte'

    beforeUpdate(() => {
        console.log('the component is about to update')
    })

    afterUpdate(() => {
        console.log('the component just updated')
    })
</script>
```