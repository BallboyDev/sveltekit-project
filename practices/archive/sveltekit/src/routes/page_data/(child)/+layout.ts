import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = ({ data }) => {
    const layoutLoad = '(child) +layout.ts data'
    return { layoutLoad, ...data, data: '+layout.ts' }
}