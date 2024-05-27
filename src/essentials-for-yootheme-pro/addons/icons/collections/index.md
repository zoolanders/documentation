---
index: true
aside: false
---

<script setup>
import { ref } from 'vue'
import {data} from './index.data.js'

const icons = data.map(d => ({
  ...d,
  details: d.description || '',
}))

</script>

# Icon Collections

List of [Icon Collections](../collection) available out of the box.

<TmIndex
  :items="icons"
/>
