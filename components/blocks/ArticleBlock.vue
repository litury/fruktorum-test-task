<template>
<!--  <div class="block">-->

<!--    <img class="block__image" src="{{ props.image }}" alt="article image" loading="lazy" />-->

<!--    <h3 class="block__header header">{{ props.title }}</h3>-->

<!--    <nuxt-link :to="`${link}`" class="block__button">-->
<!--      <BaseButtons color="black" label="Читать" />-->
<!--    </nuxt-link>-->
<!--  </div>-->
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