<script setup>
import { ref } from 'vue'
import {data} from './collections.data.js'

const collections = data;
</script>

# Icon Collection

An icon collection represents a set of icons that can be added or removed collectively from the builder's icon library. You can install one of the collections provided by Essentials or [create a custom collection](./custom-collection).

After installation, the collection icons will integrate natively and be available in the builder Icon Picker under the _Collections_ Tab.

<template v-for="col in collections">

<h2 :id="col.name" tabindex="-1">
  {{ col.title }} Icon Collection
  <a class="header-anchor" :href="`#${col.name}`" :aria-label="`Permalink to &quot;${col.name}&quot;`">​</a>
</h2>

<div v-html="col.icon" class="tm-resource-icon"></div>

A collection of `{{ col.icons }}` icons from <a :href="col.url" target="_blank">{{ col.title }}</a> released on {{ col.release }} under the {{ col.license }} license as version `{{ col.version }}`.

<img :src="`assets/collection-${col.name}.webp`" :alt="`${col.title} Icon Collection` ">

</template>
