import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    console.log('/ hooks.server.ts handle()')

    // 쿠키에서 세션 ID를 읽는다.
    const sessionId = event.cookies.get('sessionId')

    if (sessionId) {
        // ID로 데이터 베이스에서 사용자 정보를 조회한다.
        event.locals.user = { name: 'ballboy', email: 'handle@handle.com' }
    } else {
        event.locals.user = null;
    }

    // 다음 단계 (action 또는 load)로 요청을 전달
    return resolve(event)
}