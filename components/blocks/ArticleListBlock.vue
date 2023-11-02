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
.articles {

  &__title {
    margin-bottom: 50px;
  }

  &__block-wrapper {
    width: 100%;
    display: flex;
    gap: 50px;
    padding-top: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
