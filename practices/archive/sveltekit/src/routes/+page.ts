import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
    console.log('main +page.ts load()')

    return {
        title: 'Main Title'
    }
}