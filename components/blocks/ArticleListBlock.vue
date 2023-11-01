<template lang="pug">
div(:class="[$style['articles'], 'container']")
    ArticleBlock(
      v-for="article in props.data.slice(0, 3)"
      :key="article.title"
      :image="article.image"
      :title="article.title"
      :link="article.link"
    )
</template>

<script setup lang="ts">

interface IProps {
  data: [];
}

const props = defineProps<IProps>();
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
}
</style>
