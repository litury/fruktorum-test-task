<template lang="pug">
div.article-block(v-for="block in homeBody")
  div.article-block__content
    div.article-block__content__title
      h1 {{ block.title }}
</template>

<script setup lang="ts">
import { useHomeStore } from '~/store/home'

const homeStore = useHomeStore()

const homeBody = computed(() => homeStore.home)

onMounted(() => {
  homeStore.fetchHome()

  console.log(homeStore)
})



</script>