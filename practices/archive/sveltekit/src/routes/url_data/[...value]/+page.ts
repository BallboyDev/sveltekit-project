import type { PageLoad } from "./$types";

export const load: PageLoad = ({ url, route, params }) => {

    console.log('url >>', url)
    console.log('route >>', route)
    console.log('params >>', params)


    const qs = url.search.replaceAll('?', '').split('&').map((v) => {
        const value = v.split('=')
        return value
    })

    return { url: `${url.pathname}${url.search}`, queryString: qs, route: route.id, params: params.value }
}