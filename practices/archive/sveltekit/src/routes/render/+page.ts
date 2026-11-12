import type { PageLoad } from "./$types";

// data : +page.server.ts파일의 load 함수로 부터의 반환 값
// parent : +layout.ts파일의 load 함수로 부터의 반환 값
export const load: PageLoad = async ({ data, parent }) => {
    console.log('/render +page.ts load()')

    const layoutData = await parent()
    console.log('layoutData >> ', layoutData)


    return {
        title: 'Render Title (+page.ts)',
        contents: data.contents,
        userInfo: `UserInfo : ${data.userInfo.name} / ${data.userInfo.age} / ${data.userInfo.customInfo}\n(+page.server.ts => +page.ts(custom))`
    }
}