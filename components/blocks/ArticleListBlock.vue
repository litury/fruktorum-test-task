<template lang="pug">
h2(:class="[$style['articles__title'], 'container']" v-if="title" ) {{title}}
div(:class="[$style['articles'], 'container']")
    ArticleBlock(
      v-for="article in articlesData"
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
  data: [];
  title: string;
}


const props = defineProps<IProps>();

const articlesData = computed(() => {
  return props.data ? props.data : articleStore.getBlockByType("article_list_block").data.articles;
});

const blockData = computed(() => {
  return props.data ? props.data : articleStore.getBlockByType("article_list_block").data;
});

const title = computed(() => {
  return blockData.value.title;
});

</script>

<style lang="scss" module>
.articles {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-row-gap: 50px;
  column-gap: 30px;
  margin-bottom: 200px;
  padding-top: 15px;

  &__title {
    margin-bottom: 50px;
  }
}
</style>
