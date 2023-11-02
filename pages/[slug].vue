<template lang="pug">
TheHeader
div
  div(
    v-for="(block, index) in body"
    :key="ids[index]")
    component(
      v-bind:is="components[block.type]"
      :newId="ids[index]"
      v-bind="block")
TheFooter
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid'

import { useArticleStore } from "~/store/articleStore";

import ArticleIntroBlock from '~/components/blocks/ArticleIntroBlock.vue'
import TextBlock from '~/components/blocks/TextBlock.vue'
import ImageBlock from '~/components/blocks/ImageBlock.vue'
import SliderBlock from '~/components/blocks/SliderBlock.vue'
import SubscribeFormBlock from '~/components/blocks/SubscribeFormBlock.vue'
import ArticleListBlock from '~/components/blocks/ArticleListBlock.vue'
import CtaFormBlock from '~/components/blocks/CTAFormBlock.vue'

const articleStore = useArticleStore();

const route = useRoute();
const slug = route.params.slug;

await articleStore.fetchArticle(slug);

const body = articleStore.articles

const components = {
  article_intro_block: ArticleIntroBlock,
  text_block: TextBlock,
  image_block: ImageBlock,
  slider_block: SliderBlock,
  subscribe_form_block: SubscribeFormBlock,
  article_list_block: ArticleListBlock,
  cta_form_block: CtaFormBlock,
}

const ids = body.map(block => uuidv4())
console.log(ids)


console.log(body)

</script>

<style module lang="scss"></style>
