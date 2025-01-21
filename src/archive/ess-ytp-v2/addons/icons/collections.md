<script setup>
import { ref } from 'vue'
import {data} from './collections.data.js'

const collections = data;
</script>

# Icon Collections

A list of icon collections provided by Essentials. To learn more about [collections](./index#icon-collection), see the corresponding documentation.

<template v-for="col in collections">

<h2 :id="col.name" tabindex="-1">
  {{ col.title }} Icon Collection
  <a class="header-anchor" :href="`#${col.name}`" :aria-label="`Permalink to &quot;${col.name}&quot;`">​</a>
</h2>

<div v-html="col.icon" class="tm-resource-icon"></div>

A collection of `{{ col.icons }}` icons from <a :href="col.url" target="_blank">{{ col.title }}</a> released on {{ col.release }} under the {{ col.license }} license as version `{{ col.version }}`.

<img :src="`./assets/collection-${col.name}.webp`" :alt="`${col.title} Icon Collection` ">

</template>
