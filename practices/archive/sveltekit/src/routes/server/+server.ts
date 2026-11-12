import { json, text } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

// GET 메소드 처리에 대한 핸들러
export const GET: RequestHandler = async ({ url }) => {
    console.log('/server +server.ts GET Handler')

    const a = url.searchParams.get('a')
    const b = url.searchParams.get('b')

    return json({ method: "GET", a: `get_${a}`, b: `get_${b}` })
}

// POST 메소드 처리에 대한 핸들러
export const POST: RequestHandler = async ({ request }) => {
    console.log('/server +server.ts POST Handler')

    const data = await request.json()
    const { a, b } = data

    return json({ method: "POST", a: `post_${a}`, b: `post_${b}` })
}

// 작성되지 않은 메소드 처리에 대한 fallback 핸들러
export const fallback: RequestHandler = async ({ params, route, request }) => {
    console.log('/server +server.ts fallback Handler')

    const data = await request.json()

    const { a, b } = data

    return json({ method: request.method, a: `fallback_${a}`, b: `fallback_${b}` })
}