---
layout: home
hero:
  name: Develop
  text: Extend Essentials with custom workflows, actions and sources.
---

<script setup>
import {data as articles} from './docs.data.js';
</script>

<ul>
    <li v-for="article in articles" :key="article.url">
        <a :href="article.url">{{ article.frontmatter.title }}</a>
    </li>
</ul>
