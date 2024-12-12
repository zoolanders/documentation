---
layout: home
hero:
  name: Advanced Workflows
  text: Become a pro with advanced but no-code workflows
---

<script setup>
import {data as articles} from './docs.data.js';
</script>

<ul>
    <li v-for="article in articles" :key="article.url">
        <a :href="article.url">{{ article.frontmatter.title }}</a>
    </li>
</ul>
