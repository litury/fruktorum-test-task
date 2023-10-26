import { defineStore } from 'pinia'

interface HomeState {
    home: any // the home page data from the API
    loading: boolean // the loading state of the home page
}

// define the store
export const useHomeStore = defineStore({

    // define unique id of the store
    id: 'home',

    // initial state
    state: (): HomeState => ({
        home: null,
        loading: false
    }),

    // getters for computed values
    getters: {
        // get the home page meta
        homeMeta(): any {
            return this.home ? this.home.meta : {}
        },

        // get the home page body
        homeBody(): any[] {
            return this.home ? this.home.body : []
        }
    },

    // actions for changing the state
    actions: {
        // fetch the home page data from the API
        async fetchHome() {
            // set loading to true
            this.loading = true

            // make an API request using fetch or axios
            const response = await $fetch('/api/home')

            const data = await response.body[0].data.articles

            console.log(data)

            // set the home page data to the state
            this.home = data

            // set loading to false
            this.loading = false
        }
    }
})
