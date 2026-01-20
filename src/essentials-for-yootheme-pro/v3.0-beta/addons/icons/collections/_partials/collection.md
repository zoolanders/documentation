<script setup>
import { ref } from 'vue'
import { useData } from 'vitepress'
import { data } from './_collections.data.js'

const { frontmatter } = useData()
const collection = data.find((col) => col.name === frontmatter._value.collection)

</script>

<h1 :id="collection.name" tabindex="-1">
  {{ collection.title }} Icon Collection
  <a class="header-anchor" :href="`#${collection.name}`" :aria-label="`Permalink to &quot;${collection.name}&quot;`">​</a>
</h1>

<div v-html="collection.icon" class="tm-resource-icon"></div>

A collection of `{{ collection.icons }}` icons from <a :href="collection.url" target="_blank">{{ collection.title }}</a> released on {{ collection.release }} under the {{ collection.license }} license as version `{{ collection.version }}`.
