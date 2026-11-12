import type { PageServerLoad } from "./$types";

// 빌드 시점에 미리 사전 렌더링 후 HTML 파일을 생성
// 정적 사이트 생성
export const prerender = 'auto'; // (true, false, 'auto')

// 서버 사이드 렌더링 작동 여부 
// true : sveltekit의 기본 동작 방식
export const ssr = true // (true, false)

// 클라이언트 사이드 렌더링 작동 여부
export const csr = true // (true, false)

// +layout.server.ts파일의 load 함수로 부터의 반환 값
export const load: PageServerLoad = async ({ parent }) => {
    console.log('/render +page.server.ts load()')

    const layoutServerData = await parent()
    console.log('layoutServerData >> ', layoutServerData)

    // 데이터 베이스의 직접 접근
    const userInfo = tempDb.get()

    return {
        contents: 'Render Content (+page.server.ts)',
        userInfo: {
            name: userInfo.name,
            age: userInfo.age,
            gender: userInfo.gender,
            // 유저(front)에 공개 되면 안되거나 보안적으로 중요한 정보는 .server.ts 파일에서 관리
            customInfo: userInfo.verySecretData.replace('secret', 'custom')
        }
    }
}

const tempDb = {
    get: () => {
        return { name: 'ballboy', age: '99', gender: 'male', verySecretData: 'secret-Info' }
    }
}