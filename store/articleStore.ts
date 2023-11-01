import { defineStore } from "pinia";

interface ArticleState {
  articles: any;
  meta: any;
}

export const useArticleStore = defineStore("article", {
  state: (): ArticleState => ({
    articles: null,
    meta: null,
  }),

  getters: {
    getBlockByType: (state) => (type: string) => {
      return state.articles.find((block) => block.type === type);
    },
  },

  actions: {
    async fetchArticle(slug: string) {
      const { data } = await useFetch(`/api/${slug}`, {
        method: "GET",
      });

      const { body, meta } = data.value as { body: any[]; meta: any };

      this.articles = body;
      this.meta = meta;
    },
  },
});
