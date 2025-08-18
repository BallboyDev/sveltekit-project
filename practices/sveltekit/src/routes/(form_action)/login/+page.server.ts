import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    console.log('/login +page.server.ts load()')

    return {
        user: locals.user
    }
}

export const actions = {
    login: async ({ cookies, url, locals }) => {
        console.log('/login +page.server.ts actions/login()')

        cookies.set('sessionId', 'secret-session-id', {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7
        })

        locals.user = { name: "ballboy", email: 'test@test.com' }
        throw redirect(303, '/login')
    },
    logout: async ({ cookies, locals }) => {
        console.log('/login +page.server.ts actions/logout()')

        cookies.delete('sessionId', { path: '/' })
        locals.user = null

        return { success: true, msg: 'logout' }
    }
}