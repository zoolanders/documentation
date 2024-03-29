---
---

<script setup>
import { data as posts } from './actions.data.js'
</script>

# Actions

<ul>
  <li v-for="post of posts">
    <a :href="post.url">{{ post.frontmatter.title }}</a>
    <span>{{ post.frontmatter.description }}</span>
    <!-- <div v-html="post.excerpt"></div> -->
    <img :src="`./${post.name}.svg`" alt="Description of image" width="40">
  </li>
</ul>
