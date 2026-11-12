import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ data }) => {
    const pageLoad = '(child) +page.ts data'



    return { pageLoad, ...data, data: '+page.ts' }
}