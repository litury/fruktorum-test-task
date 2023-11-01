<template lang="pug">
TheHeader
ArticleIntroBlock
TextBlock
ImageBlock
SliderBlock
TheFooter
</template>

<script setup lang="ts">
import { useArticleStore } from "~/store/articleStore";

const articleStore = useArticleStore();

const route = useRoute();
const slug = route.params.slug;

await articleStore.fetchArticle(slug);


console.log("SLUG")
</script>

<style module lang="scss"></style>
