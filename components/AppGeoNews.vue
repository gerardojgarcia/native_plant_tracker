<script>

import axios from 'axios'
export default defineComponent({
  async asyncData({ params, env }) {
    const { category } = params;
    const apiKey = env.NEWS_API_KEY;
    const apiUrl = `https://newsapi.google.com/v1/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    const response = await axios.get(apiUrl);
    return {
      articles: response.data.articles,
      category,
    };
    }
)
</script>

<template>
  <div>
    <h1>{{ category }}</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <a :href="article.url" target="_blank">{{ article.title }}</a>
      </li>
    </ul>

  </div>
</template>

<style scoped>

</style>