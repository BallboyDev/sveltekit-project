import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ url, params, route }) => {
    const value = params.value

    console.log(value)
    console.log(url)

    return { path: url.pathname, value }
}