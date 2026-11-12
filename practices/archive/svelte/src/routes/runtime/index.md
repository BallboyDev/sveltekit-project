# Runtime

## Store
- 스벨트에는 여러 컴포넌트의 상태를 공유하기 위해 store 라는 구조를 제공한다.
- 스토어에 대한 참조가 있을 때마다 구성 요소 내부의 해당 값에 `$` 문자로 접두사를 붙이면 액세스 할 수 있습니다.
- 스토어 변수에 값을 할당하기 위해서는 쓰기 가능한 저장소여야 하며, 이는 저장소의 .set 메서드로 호출됩니다.

~~~svelte
<script>
    import { writable } from 'svelte/store';

    const count = writable(0)
    console.log($count)

    count.set(1)
    console.log($count)

    $count = 2
    console.log($count)
</script>
~~~

### svelte/store
- writable
    - 외부 구성 요소에서 설정할 수 있는 값을 가진 저장소를 생성하는 기능입니다. 추가 설정 및 업데이트 방법을 통해 객체로 생성됩니다
    - `set(val)`은 스토어 값에 val을 설정합니다.
    - `subscribe(callback)`는 스토어를 구독하여 스토어의 값이 변하면 새로운 값을 인수로 callback을 실행합니다. 반환값으로 구독을 중지하는 함수를 반환합니다.
    - `update(update)`은 현재 값을 기반으로 스토어의 값을 새 값으로 업데이트, 현재 값을 인수로 updater가 실행, 반환 값으로 새 값을 스토어에 설정 합니다.

    ```js
    import { writable } from 'svelte/store'

    const count = writable(0)

    count.subscribe((value) => {console.log(value)})
    count.set(1)
    count.update((n) => {return n + 1})
    ```
