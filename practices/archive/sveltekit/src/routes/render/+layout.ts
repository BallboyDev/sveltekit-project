import type { LayoutLoad } from "./$types";

// data : +layout.server.ts파일의 load 함수로 부터의 반환 값
export const load: LayoutLoad = ({ data }) => {
    console.log('/render +layout.ts load()')

    return {
        title: 'Render Layout (+layout.ts)',
        contents: data.contents,
        appInfo: `${data.appInfo.server} / ${data.appInfo.front} / ${data.appInfo.publicKey}\n(+layout.server.ts => +layout.ts(custom))`
    }
}