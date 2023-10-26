import { useHomeStore } from '~/store/home.ts'
export default defineEventHandler(async (event) => {

    // if (!event.context.params?.path) {
    //     return
    // }

    const store = useHomeStore()

    const { path } = event.context.params

    const uri = `https://devtwit8.ru/api/v1/page/?path=/${path === 'home' ? '' : path}`

    const  data = await $fetch(uri)

    return data
})