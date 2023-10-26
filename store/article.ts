import { defineStore } from 'pinia'

// define the store type
interface ArticleState {
    article: any // the article data from the API
    loading: boolean // the loading state of the article
}

// define the store
export const useArticleStore = defineStore('article', {
    // initial state
    state: (): ArticleState => ({
        article: null,
        loading: false
    }),

    // getters for computed values
    getters: {
        // get the article type
        articleType(): string | null {
            return this.article ? this.article.page_type : null
        },

        // get the article meta
        articleMeta(): any {
            return this.article ? this.article.meta : {}
        },

        // get the article body
        articleBody(): any[] {
            return this.article ? this.article.body : []
        }
    },

    // actions for changing the state
    actions: {
        // fetch the article data from the API by slug
        async fetchArticle(slug: string) {
            // set loading to true
            this.loading = true

            // make an API request using fetch or axios
            const response = await fetch(`http://devtwit8.ru/api/v1/page?path=/${slug}`)
            const data = await response.json()

            // set the article data to the state
            this.article = data

            // set loading to false
            this.loading = false
        }
    }
})
