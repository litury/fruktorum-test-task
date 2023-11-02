<script setup lang="ts">

</script>

<template lang="pug">
div
  TheHeader
  main(:class="[$style['main']]")
    slot
  TheFooter
</template>

<style lang="scss" module>
@import '../assets/scss/_mixins/media.scss';

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 150px;

  margin-bottom: 200px;
}

@include media($xl-1200) {
  // Стили для экранов с шириной до 319px
  .main {
    gap: 50px;

    margin-bottom: 100px;
  }
}

</style>