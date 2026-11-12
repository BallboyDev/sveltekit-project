# svelte
- `svelte`는 HTML, CSS, 및 JavaScript로 작성된 선언적 컴포넌트를 사용자 인터페이스 구축을 위한 최적화된 JavaScript로 컴파일 하는 웹 프레임워크이다.

~~~sh
>> npx sv create project-name
>> cd project-name
>> npm install
>> npm run dev
~~~

## .svelte 구조
- 컴포넌트는 `svelte` 애플리케이션의 구성요소로 HTML의 상위 집합을 사용하여 `.svelte`파일로 작성된다.

~~~html
<script module>
</script>

<script lang='ts'> // 인스턴스 스크립트
</script>

<!-- Markup -->
<div>content</div>

<style>
</style>
~~~

1. <script module></script>
    - 가장 일반적으로 사용되는 스크립트 블록
    - 실행 시점 : 컴포넌트의 새로운 인스턴스가 생성될 때마다 실행
    - 목적
        - 컴포넌트의 내부 상태 관리
        - 부모 컴포넌트로 부터 `props`를 상속
        - 이벤트 핸들러와 같은 로직 정의
        - `onMount`, `onDestory`와 같은 컴포넌트 생명 주기 함수 사용
    - 이 영역에 선언된 변수나 상태는 각 컴포넌트 인스턴스에 공유하며 다른 인스턴스와 공유되지 않는다.

2. <script context='module'></script>, <script module></script>
    - 실행 시점 : 컴포넌트 인스턴스가 아닌, 해당 모듈이 처음으로 로드될 때 단 한번만 실행
    - 목적
        - 해당 컴포넌트의 모든 인스턴스가 공유하는 변수, 상수 또는 함수를 정의
        - SvelteKit에서 load 함수를 export 하여, 컴포넌트가 렌더링 되기 전에 서버나 클라이언트에서 데이터를 미리 불러오는 데 사용
    - 이 영역에 선언된 값은 모든 인스턴스에서 동일하게 접근할 수 있는 공유 자원이다.
    - export를 통해 다른 모듈에서 이 값들을 import하여 사용할 수 있다.


## .svelte.js, .svelte.ts
- `.svelte` 파일 이외에도 Svelte는 `.svelte.js` 및 `.svelte.ts` 파일에서도 작동한다. 룬 문법을 사용할 수 있다는 점을 제외하고는 다른 `.js` 또는 `.ts` 모듈과 동일하게 작동한다.
