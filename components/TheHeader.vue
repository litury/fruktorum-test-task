<script setup lang="ts">


</script>

<template lang="pug">
header(:class="$style.header")
  NuxtLink(:class="$style['header__link']" :to="'/'")
    AppLogo
</template>

<style lang="scss" module>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  margin-bottom: 30px;
}

</style>