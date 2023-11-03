<template lang="pug">
section(:class="[$style['articles'], 'container']")
    h2(:class="[$style['articles__title'], 'container']" v-if="slug" ) {{props.data.title}}
    div(:class="[$style['articles__block-wrapper']]")
      ArticleBlock(
        v-for="article in props.data.articles.slice(0, 3)"
        :key="article.title"
        :image="article.image"
        :title="article.title"
        :link="article.link"
      )
</template>

<script setup lang="ts">
import { useArticleStore } from "~/store/articleStore";

// Инициализация хранилища статей
const articleStore = useArticleStore();

interface IProps {
  data: Object;
}

const props = defineProps<IProps>();

const route = useRoute();
const slug = route.params.slug;
</script>

<style lang="scss" module>
@import "../../assets/scss/_mixins/media.scss";

.articles {
  &__title {
    margin-bottom: 50px;
  }

  &__block-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, minmax(300px, 1fr));
    grid-row-gap: 50px;
    column-gap: 30px;
  }

  @include media($xl-1200) {
    &__block-wrapper {
      grid-template-columns: 1fr;
      max-width: 500px;
      margin: 0 auto;
    }
  }
}
</style>
