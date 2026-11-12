# Configuration
- 프로젝트의 구성과 설정은 `svelte.config.js` 파일을 통하여 이루어집니다. `svelte.config.js`는 svelteKit 외에도 편집기 확장과 같은 Svelte와 통합되는 다른 도구에서도 사용됩니다.

~~~js
// base code
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter()
    }
};

export default config;
~~~

## Config (`interface Config {...}`)
- `compilerOptions?: CompileOptions;`
    - DEFAULT `{}`
    - 옵션이 `svelte.compile`로 전달됩니다.

- `extensions?: string[];`
    - DEFAULT `[".svelte"]`
    - Svelte 파일로 처리해야 하는 파일 확장자 목록입니다.

- `kit?: KitConfig;`
    - SvelteKit 옵션

- `preprocess?: any;`
    - 전처리기 옵션이 있는 경우. 또한 Vite의 전처리 기능을 통해 전처리를 수행할 수도 있습니다.

- `vitePlugin?: PluginOptions`
    - `vite-plugin-svelte` 플러그인 옵션

- `[key: string]: any`
    - 스벨트 개발 툴에 필요한 추가 옵션

---
## KigConfig
- `svelte.config.js`파일의 `config.kit` 속성은 SvelteKit의 옵션을 구성합니다.

- `adapter`
    - DEFAULT `undefined`
    - Vite 빌드를 실행할 때 어댑터가 실행됩니다. 다양한 플랫폼에서 출력이 어떻게 변환되는지를 결정합니다.

- `alias`
    - DEFAULT `{}`
    - import 문에서 값을 대체하는 데 사용되는 0개 이상의 별칭을 포함하는 객체입니다. 이 별칭들은 자동으로 Vite와 TypeScript로 전달 됩니다.

~~~js
/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        alias: {
            'my-file': 'path/to/my-file.js',
            'my-directory': 'path/to/my-directory',
            'my-directory/*': 'path/to/my-directory/*'
        }
    }
}
~~~

- `appDir`
    - DEFAULT `_app`
    - svelteKit이 빌드 시 생성하는 내부 애플리케이션 디렉토리의 이름을 설정하는 옵션입니다.
    - 만약 `paths.assets`가 지정되면, 두 개의 앱 디렉토리 `${paths.assets}/${appDir}`, `${paths.base}/${appDir}`가 생성 됩니다.

- `csp` ***
    - CSP(Content Security Policy)는 웹 애플리케이션의 보안을 강화하기 위해 특정 리소스만 허용하도록 규정하는 정책입니다. 이를 통해 XSS(크로스 사이트 스크립팅) 등의 공격을 방지할 수 있습니다.
    - 속성 설명
        - `mode?: enum('auto'|'hash')`
            - auto: SvelteKit이 자동으로 CSP를 생성
            - hash: 콘텐츠의 해쉬 값을 생성하여 CSP 정책에 포함
        - `directrives?: {}`
            - 특정 리소스 유형별로 허용할 도메인 또는 정책을 설정

    - directives에서 자주 사용되는 csp 정책
        - default-src
            - 모든 리소스(스크립트, 스타일, 이미지 등)의 기본 출처 설정
        - script-src
            - 실행 가능한 JavaScript의 출처를 제한
        - style-src
            - 적용할 수 있는 CSS의 출처를 제한
        - img-src
            - 이미지 로딩을 허용할 출처를 지정
        - connect-src
            - Fetch, WebSocket, AJAX 요청을 허용할 출처 지정
        - frame-src
            - iframe으로 삽입할 수 있는 출처 지정

~~~js
const config = {
    kit: {
        csp: {
            mode: 'hash',
            directives: {
                'default-src': ['self'],
                // self(현재 도메인)와 Google API만 허용
                'script-src': ['self', 'https://apis.google.com'],
                // self(현재 도메인) 및 인라인 스타일 허용
                'style-src': ['self', "'unsafe-inline'"],
                // self(현재 도메인) 및 data:(Base64 인코딩된 이미지) 허용
                'img-src': ['self', 'data:'],
                // self(현재 도메인) 및 api.example.com에서의 데이터 요청 허용
                'connect-src': ['self', 'https://api.example.com'],
                // none으로 설정하여 iframe 삽입 차단
                'frame-src': ['none']
            }
        }
    }
}
~~~

- `csrf`
    - CSRF(Cross-Site Request Forgery) 공격을 방지하는 설정이다.
    - 속성 설명
        - `checkOrigin?: boolean`
            - true: 다른 도메인에서의 요청 차단

    - checkOrigin: true 설정 시
        - 클라이언트가 다른 도메인에서 요청을 보낼 경우 차단된다.
        - 예를 들어, https://evil-site.com에서 https://your-site.com으로 요청을 보내려고 하면 차단됨
        - 보안 강화를 위해 기본적으로 true 설정을 권장함
    

- `embedded`
    - DEFAULT `false`
    - SvelteKit 애플리케이션을 다른 애플리케이션 안에 포함할 수 있도록 허용하는 설정이다.
    - 속성 설명
        - `embedded?: boolean`
            - true로 설정하면 앱이 다른 웹 페이지 내에서 iframe을 통해 포함될 수 있습니다.
    
- `env`
    - kit.env는 svelteKit에서 환경 변수 파일 (.env) 을 로드하는 방식을 설정하는 옵션입니다.
    - 속성 설명
        - `dir?: string`
            - DEFAULT `.`
            - 환경 변수 파일이 위치할 디렉토리 지정
        - `publicPrefix?: string`
            - DEFAULT `PUBLIC_`
            - 환경 변수가 클라이언트 측 코드에 노출되어도 안전하다는 표시를 하는 접두사 입니다.
        - `privatePrefix?: string`
            - DEFAULT `""`
            - 환경 변수가 클라이언트 측 코드에 노출되기에 안전하지 않다는 표시를 하는 접두사 입니다.
            - 공용 접두사나 개인 접두사에 일치하지 않는 환경변수는 모두 폐기 됩니다.