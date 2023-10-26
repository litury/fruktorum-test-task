
<script setup lang="ts">
import { useHomeStore } from '~/store/home.ts'

const homeStore = useHomeStore()

onMounted(() => {
  homeStore.fetchHome()

  console.log(homeStore)
})

</script>


<template>
  <div>
    TEST
  </div>
</template>



<style scoped>

</style>