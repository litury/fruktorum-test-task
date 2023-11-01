<template lang="pug">
TheHeader
ArticleListBlock(:data="articles")
TheFooter
</template>

<script setup lang="ts">
const { data } = await useFetch("/api/home", {
  method: "GET",
});
const { body, meta } = data.value;
const articles = body[0].data.articles.slice(0, 3) as [];
</script>

<style scoped></style>
