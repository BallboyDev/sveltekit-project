## Actions과 hooks.server.ts

### 폼 액션
- sveltekit의 form action은 서버의 데이터를 생성, 수정, 삭제 하기 위한 핵심적인 기능이다. 전통적인 HTML `<form>`의 강력함과 sveltekit의 최신 기술을 결합하여, Javascript 코드가 없어도 동작하고 코드 구성이 깔끔하며, 데이터 처리가 매우 편리한 패턴을 제공한다.
- Action은 항상 `+page.server.ts` 파일 안에 정의 된다.

### 기본 동작
- 실행 순서 : `[ UI ] -> [ 미들웨어 (handle) ] -> [ 서버 액션 (actions) ] -> [ 서버 응답 (load) ] -> [ UI 피드백 ]`

### Action 핸들러
- `Action`의 핸들러 함수는 파라미터로 `RequestEvent`라는 객체를 받는다. 이 객체에는 요청에 대한 모든 정보가 담겨 있다.
    - `request` : 틀어온 요청 자체 (메서드, 헤더, 본문 등)
    - `cookies` : 브라우저의 쿠키를 읽고 설정하는 헬퍼
    - `locals` : `hooks.server.ts`에서 설정한 서버 전용 데이터 (인증된 사용자 정보 등)
    - `params` : 동적 경로의 파라미터
- 사용자가 `<form>`에 입력하여 `POST` 방식으로 보낸 데이터는 `request` 객체의 `formData()` 메서드를 통해 읽을 수 있다.

### fail / redirect
- `fail(statusCode, dataObject)` / `redirect(statusCode, path)`
    - `statusCode` : HTTP 오류 상태 코드
    - `dataObject` : 클라이언트에게 다시 보낼 데이터, 오류 메시지와 클라이언트가 입력했던 값을 포함 시키는 것이 일반적이다.
    - `path` : 리다이레트할 경로

### hooks.server.ts handle()
- `handle`함수는 주로 사용자의 인증 상태를 확인하고, 쿠키에서 사용자 정보를 읽어와 `event.locals` 객체에 저장하는 용도로 사용된다. `event.locals`는 한번의 요청-응답 주기 동안 서버의 여러곳(`handle`, `action`, `load`) 에서 데이터를 공유하기 위한 공간이다.