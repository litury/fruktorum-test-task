<template lang="pug">
figure(:class="[$style['image-block'], 'container']")
  img(
    :class="$style['image-block__image']"
    :src="props.data.src",
    :alt="props.data.caption"
  )
</template>

<script setup lang="ts">

const props = defineProps<{
  data: {
    src: string;
    caption: string;
  };
}>();

</script>

<style module lang="scss">
.image-block {
  height: 550px;
  margin-bottom: 155px;

  &__image {
    width: 100%;
    height: 100%;
    border-top-right-radius: 200px;
  }
}
</style>
