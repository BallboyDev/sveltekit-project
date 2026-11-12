import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    const pageServerLoad = '(child) +page.server.ts data'

    return { pageServerLoad, data: '+page.server.ts' }
}