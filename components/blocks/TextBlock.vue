<template lang="pug">
section(:class="[$style['text-block'], 'container']")
  div(v-html="props.data" )
</template>


<script setup lang="ts">
const props = defineProps<{
  data: string;
}>();

</script>


<style module lang="scss">
@import '../../assets/scss/_mixins/media.scss';

.text-block {
  width: 884px;
  margin: auto;

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

  & ul {
    max-width: 700px;
    margin-inline: auto;
    padding-left: 1em;
    margin-bottom: 16px;

    list-style-type: none;
  }

  & ul > li::before {
    content: '\25C6';
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
}


@include media($xl-1200) {
  .text-block {
    width: 100%;
    margin: auto;

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

    & ul {
      max-width: 700px;
      margin-inline: auto;
      padding-left: 1em;
      margin-bottom: 16px;

      list-style-type: none;
    }

    & ul > li::before {
      content: '\25C6';
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
}

</style>