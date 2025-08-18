export const actions = {
    default: async ({ request }) => {

        const data = await request.formData()
        const name = data.get('name')
        const message = data.get('message')

        return {
            success: true, name, message
        }
    }
}