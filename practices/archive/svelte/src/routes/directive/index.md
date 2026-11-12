## directive

### bind:
- 데이터는 일반적으로 부모에서 자식으로 흘러값니다. `bind:` 지시문은 데이터를 지식에서 부모로 반대 방향으로 흐르게 합니다.

- Function bindings
    - `bind:property={get, set}`과 같이 getter, setter 함수를 사용할 수 있습니다.
    - 단 읽기 전용 바인딩의 get의 값은 null이어야 합니다.

```html
<input bind:value={value} />

<input bind:value={
    () => value,
    () => value = v.toLowerCase()
}/>

<div
    bind:clientWidth={null, redraw}
    bind:clientHeight={null, redraw}
>...</div>
```

- `<input bind:value>`
    - bind:value 지시문은 속성의 값을 바인딩합니다.
    - 바인딩 값이 null이거나 정의 되지 않은 경우 defaultValue 속성을 사용할 수 있습니다. (5.6.0 이후)

- `<input bind:checked>`
    - 체크박스와 라디오 입력은 `bind:checked` 로 묶을 수 있습니다.
    - 바인딩 값이 null이거나 정의되지 않은 경우 defaultChecked 속성을 사용할 수 있습니다. (5.6.0 이후)

- `<input bind:group>`
    - 함께 작동하는 입력은 bind:group을 사용할 수 있습니다.

- `<input bind:files>`
    - `type="file"`인 경우 bind:files를 사용하여 선택한 파일의 파일 목록을 가져올 수 있습니다.

- `<select bind:value>`
    - `<select>` 값 바인딩은 선택된 `<option>`의 값 속성에 해당한다.

### use:
- use:action은 스벨트에서 사용되는 용어로써, 돔 노드의 요소가 생성, 업데이트, 삭제될 때 실행되는 함수를 의미한다.
- 일반적으로 요소가 마운트 해제될 때 상태를 재설정할 수 있도록 $effect를 사용합니다.

### transition:
- transition은 상태 변화의 결과로 DOM의 변화시 사용되는 요소 입니다.