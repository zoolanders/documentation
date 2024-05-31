<script setup>
import { ref } from 'vue'
import {data} from './_data/collections.data.js'

const collections = data;
</script>

# Collections

Install 3rd party Icon Collections

To learn more about [icon collections](./collection.md), see the corresponding documentation.

<template v-for="col in collections">

<h2 :id="col.name" tabindex="-1">
  {{ col.title }} Icon Collection
  <a class="header-anchor" :href="`#${col.name}`" :aria-label="`Permalink to &quot;${col.name}&quot;`">​</a>
</h2>

<img :src="`./_collections/${col.name}/icon.svg`" :alt="`${col.title} Icon Collection`" width="60">

A collection of `{{ col.icons }}` icons from <a :href="col.url" target="_blank">{{ col.title }}</a> released on {{ col.release }} under the {{ col.license }} license as version `{{ col.version }}`.

<img :src="`./assets/collection-${col.name}.webp`" :alt="`${col.title} Icon Collection` ">

</template>
