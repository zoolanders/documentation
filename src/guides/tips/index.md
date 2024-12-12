---
layout: home
hero:
  name: Troubleshoot Issues
  text: Find tips and solutions to common problems.
---

<script setup>
import {data as articles} from './docs.data.js';
</script>

<ul>
    <li v-for="article in articles" :key="article.url">
        <a :href="article.url">{{ article.frontmatter.title }}</a>
    </li>
</ul>
