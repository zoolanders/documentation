<script setup>
import { useData } from 'vitepress'
import {data as tagged} from './tagged.data.js';

const { params } = useData()
const articles = tagged.filter(page => page.frontmatter.tags.includes(params.value.tag));
</script>

# Articles Tagged with {{ $params.tag }}

<ul>
    <li v-for="article in articles" :key="article.url">
        <a :href="article.url">{{ article.frontmatter.title }}</a>
    </li>
</ul>
