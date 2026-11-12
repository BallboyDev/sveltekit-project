## Attribute
### 속성
- 속성 생성, 전달, default
    - 속성을 사용하기 위해서는 속성을 전달받는 측인, 자식 컴포넌트에서 속성을 생성해야 한다.
    ```html
    <!-- Button.svelte -->
    <script>
        // svelte4 props 선언
        export let label
        export let disabled = false;

        // svelte5 props 선언
        let { label, disabled = false } = $props();

        // svelte5 버전의 runes 문법 추가로 인해 사용하지 않는 문법
        console.log($$props)
    </script>

    <button {disabled}>
        {label}
    </button>

    <!-- App.svelte -->
    <script>
        import Button from './Button.svelte'
        let buttonLabel = '전송'
    </script>

    <Button label={buttonLabel} />
    ```
