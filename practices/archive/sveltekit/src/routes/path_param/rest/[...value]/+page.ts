import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url, params, route }) => {
    const value = params.value

    return { path: url.pathname, value }
}