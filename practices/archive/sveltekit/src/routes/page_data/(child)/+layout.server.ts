import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
    const layoutServerLoad = '(child) +layout.server.ts data'

    return { layoutServerLoad, data: '+layout.server.ts' }
}