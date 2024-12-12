---
layout: home
hero:
  name: Getting Started
  text: Learn how to get started and set up basic workflows.
---

<script setup>
import {data as articles} from './docs.data.js';
</script>

<ul>
    <li v-for="article in articles" :key="article.url">
        <a :href="article.url">{{ article.frontmatter.title }}</a>
    </li>
</ul>
