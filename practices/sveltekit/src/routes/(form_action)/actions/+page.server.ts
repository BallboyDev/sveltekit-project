import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    console.log('/actions +page.server.ts load()')
}

export const actions = {
    // default: async (event) => {
    //     console.log('/actions +page.server.ts actions/default()')
    // },
    login: async (event) => {
        console.log('/actions +page.server.ts actions/login()')

        const data = await event.request.formData()

        const email = data.get('email')
        const type = data.get('type')

        if (type === 'redirect') {
            redirect(303, '/')
        } else if (type === 'fail') {
            return fail(400, { method: 'login', email, err: 'selected fail' })
        }


        return { method: 'login', email, type }
    },
    register: async (event) => {
        console.log('/actions +page.server.ts actions/register()')

        const data = await event.request.formData()
        const email = data.get('email')
        const type = data.get('type')

        return { method: 'register', email, type }
    },
} satisfies Actions;