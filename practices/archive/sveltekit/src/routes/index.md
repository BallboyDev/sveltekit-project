## 파일 시스템 기반 라우팅
- sveltekit의 핵심은 파일 시스템 기반 라우팅이다. 앱의 경로, 즉 사용자가 액세스 할 수 있는 경로 `/src/routes` 안의 코드 베이스의 디렉토리 구조에 의해 정의된다.

- `+page`
    - `+page.svelte`
        - 앱의 페이지 정의
    - `+page.ts`
        - 페이지가 렌더링 되기 전에 데이터 로딩 
        - client, server 모두 동작
    - `+page.server.ts`
        - 페이지가 렌더링 되기 전에 데이터 로딩
        - server 에서만 동작
        - 보안이 중요한 데이터 작업 수행 (파일 시스템 접근, 비공개 키값, DB 접근 등)

- `+layout`
    - `+layout.svelte`
        - 경로별 페이지 적용 레이아웃 정의
    - `+layout.ts`
        - 레이아웃이 렌더링 되기 전에 데이터 로딩 
        - client, server 모두 동작
    - `+layout.server.ts`
        - 레이아웃이 렌더링 되기 전에 데이터 로딩
        - server 에서만 동작
        - 보안이 중요한 데이터 작업 수행 (파일 시스템 접근, 비공개 키값, DB 접근 등)

- `+error`
    - `+error.svelte`
        - 경로별 에러 페이지 정의
    - `+error.ts`
        - 에러페이지가 렌더링 되기 전에 데이터 로딩
        - client, server 모두 동작

- `+server`
    - `+server.ts` 
        - 서버에서만 작동하며 API 엔드 포인트 정의
