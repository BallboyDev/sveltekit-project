import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
    console.log('/render +layout.server.ts load()')

    // 데이터 베이스에 직접 접근
    const appInfo = tempDb.get()

    return {
        contents: 'Render Layout (+layout.server.ts)',
        appInfo: {
            server: appInfo.server,
            front: appInfo.front,
            // 유저(front)에 공개 되면 안되거나 보안적으로 중요한 정보는 .server.ts 파일에서 관리
            publicKey: appInfo.secretKey.split('').reverse().join('')
        }
    }

}

const tempDb = {
    get: () => {
        return { server: 'vite', front: 'svelte', secretKey: '12345' }
    }
}