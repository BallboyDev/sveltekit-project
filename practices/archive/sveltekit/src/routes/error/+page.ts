import { error } from '@sveltejs/kit';
// import type { PageLoad } from './$types.js';
import type { PageServerLoad } from '../about/$types.js';

export const load: PageServerLoad = async ({ url }) => {
    console.log('/error +page.ts load()')

    const err = url.searchParams.get('err')
    if (err === '400') {
        throw error(400, 'Bad Request')
    }

    return {
        title: 'Error 처리 Title'
    }
}
