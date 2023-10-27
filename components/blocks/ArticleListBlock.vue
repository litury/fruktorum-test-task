<template lang="pug">
//div.article-block(v-for="block in homeBody")
        div.article-block__content
          div.article-block__content__title
            h1 {{ block.title }}


</template>

<script setup lang="ts">
interface FetchResponse<T> {
  data: T;
  error: any;
}

interface DataValue {
  page_type: string;

  meta: {
    title: string;
    description: string;
    slug: string;
  };

  body: {
    type: string;
    id: string;

    data: {
      title?: string;

      articles?: {
        title: string;
        link: string;
        image: string;
      }[];
    };
  }[];
}

interface Article {
  title: string;
  link: string;
  image: string;
}

const { data } = await useFetch<FetchResponse<DataValue>>("/api/home", {
  method: "GET",
});

const { body, meta } = data.value;

const articles = body[0].data.articles;

articles?.forEach((article: Article) => {
  console.log(article.title, article.link);
});
</script>
