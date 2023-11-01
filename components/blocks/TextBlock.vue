<template lang="pug">
div(:class="[$style['text-block'], 'container']")
  div(v-html="props.data" )
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
.text-block {
  width: 884px;
  margin: auto;
  margin-bottom: 100px;

  & h2 {
    margin-bottom: 50px;
  }

  & p {
    margin-bottom: 20px;
  }

  & blockquote {
    padding-top: 20px;
    margin-left: 98px;
    position: relative;

    & p {
      font-family: Montserrat-LightItalic, sans-serif;
    }

    & footer {
      margin-top: -5px;
      max-width: 380px;
      font-size: var(--font-size-body-2);
      line-height: var(--font-line-height-body-2);
      color: var(--color-gray);
    }

    &:before {
      content: '';

      position: absolute;
      left: -98px;

      display: inline-block;
      width: 80px;
      height: 64px;

      background-image: url('/assets/icons/quotes.svg');
      background-repeat: no-repeat;
    }
  }
}

</style>