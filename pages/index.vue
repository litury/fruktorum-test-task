<template lang="pug">

ArticleListBlock(:data="articles")

</template>

<script setup lang="ts">
const { data } = await useFetch("/api/home", {
  method: "GET",
});
const { body, meta } = data.value;
const articles = body[0].data;

// .articles.slice(0, 3) as []
</script>

<style scoped></style>
