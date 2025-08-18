# sveltekit
## 프로젝트 생성
~~~sh
npx sv create project-name
cd project-name
npm run dev
~~~

### [sveltekit 정리](https://ballboydev.github.io/post/117)

## Practices
### [데이터 흐름과 페이지의 구성](<src/routes/render/데이터 흐름과 페이지의 구성.md>)

### [Error page](<src/routes/error/Error page.md>)

### [+server.ts](<src/routes/server/서버 핸들러.md>)

### [라우트 그룹](<src/routes/route_group/라우트 그룹.md>)

### [경로 변수](<src/routes/path_param/경로 변수.md>)

### [페이지 데이터](<src/routes/page_data/페이지 데이터.md>)

### [URL 데이터](<src/routes/url_data/URL Data.md>)

### [Action과 hooks](<src/routes/(actions_login)/Action과 hooks.md>)


## svektekit 기본 구조

~~~
my-project/
├ src/
│ ├ lib/
│ │ ├ server/
│ │ │ └ [your server-only lib files]
│ │ └ [your lib files]
│ │
│ ├ params/
│ │ └ [your param matchers]
│ │
│ ├ routes/
│ │ └ [your routes]
│ │
│ ├ app.html
│ ├ error.html
│ ├ hooks.client.js
│ ├ hooks.server.js
│ └ service-worker.js
│ 
├ static/
│ └ [your static assets]
│
├ tests/
│ └ [your tests]
│
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
~~~

- `/src/lib` : `$lib`을 통해 가져오거나 배포를 위한 라이브러리 작성
    - `server` : 서버 전용 라이브러리 작성, sveltekit에서는 클라이언트 코드에서 호출 불가

- `/src/params` : 앱의 실행에 필요한 매개 변수 작성

- `/src/routes` : 애플리케이션의 경로 및 구성 컴포넌트 작성
    - `sveltekit`에서는 디렉토리 구조가 부모-자식 관계를 결정한다. 이것은 sveltekit의 특징인 '파일 시스템 기반 라우팅'의 핵심이다.
    - `+layout.svelte`는 sveltekit에서 부모 역할을 하는 핵심 파일이다.
        - 특정 디렉토리에 있는 `+layout.svelte` 파일은 그 디렉토리 안에 있는 모든 하위 페이지들과 하위 디렉토리들의 '부모'또는 '껍데기' 역할을 한다.
        - 또한 이 관계는 중첩 될 수 있다. 하위 디렉토리에 또 다른 `+layout.svelte`가 있다면, 그 레이아웃은 자신의 부모 레이아웃의 자식이자, 자기 안의 페이지들에게는 부모가 된다.

- `app.html` : 최상단 페이지 템플릿
    - `%sveltekit.head%` : 앱에 필요한 요소 (`<link>`, `<script>`, `<svelte:head>`)
    - `%sveltekit.body%` : 렌더링된 페이지의 마크업 (권장 형태: `<body><code>%sveltekit.body%</code></body>`)
    - `%sveltekit.assets%` : 
    - `%sveltekit.nonce%` : 
    - `%sveltekit.env.[NAME]%` : 

- `error.html` : 에러 페이지
    - `%sveltekit.status%` : HTTP 상태
    - `%sveltekit.errer.message%` : 오류 메시지

- `hooks.client.js` : 클라이언트 후크

- `hooks.server.js` : 서버 후크

- `service-worker.js` : 서비스 워커

- `/test` : 

- `package.json`

- `svelte.config.js` : svelte/sveltekit의 구성 및 설정

- `tsconfig.json`

- `vite.config.js` : vite 구성 및 설정