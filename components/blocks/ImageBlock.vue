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
@import '../../assets/scss/_mixins/media.scss';

.image-block {
  height: 550px;

  &__image {
    width: 100%;
    height: 100%;
    border-top-right-radius: 200px;
  }
}

@include media($xl-1200) {
  .image-block {
    height: 100%;

    &__image {
      width: 100%;
      height: 100%;
      border-top-right-radius: 200px;
    }
  }
}
</style>
