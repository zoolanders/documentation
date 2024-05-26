---
index: true
aside: false
---

<script setup>
import { ref } from 'vue'
import {data} from './index.data.js'

const fields = data.map(d => ({
  ...d,
  details: d.description || '',
})).filter(d => !d.child)

</script>

# Fields

List of Fields available out of the box.

<TmIndex
  :items="fields"
/>

