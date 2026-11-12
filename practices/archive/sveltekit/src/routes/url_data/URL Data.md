## URL Data
- load 함수는 URL 에 따라 기능이 달라질 수 있다. 이를 위해 load 함수는 url, route, params 데이터를 제공한다.

### params
- params는 동적 라우트 세그먼트의 값을 담고 있는 객체이다. 파일이나 폴더 이름을 대괄호로 묶어 생성한 동적 경로의 실제 값에 접근 할 때 사용한다.

### url
- 현제 페이지의 URL에 대한 모든 정보를 담고 있는 javascript URL 객체이다. params가 경로의 일부만 제공하는 것과 달리 url은 URL에 대한 접근을 제공한다.

### route
- route는 현재 요청과 일치하는 sveltekit의 라우트 패턴 정보를 담고 있는 객체이다. 실제 URL 경로가 아닌 sveltekit이 내부적으로 사용하는 라우트 ID에 접근할 때 사용한다.