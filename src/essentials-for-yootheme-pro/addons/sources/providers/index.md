---
index: true
aside: false
---

<script setup>
import { ref } from 'vue'
import {data} from './index.data.js'

const providers = data.map(d => ({
  ...d,
  details: d.description || '',
})).filter(d => !d.child)

</script>

# Source Providers

List of Source Providers available out of the box.

<TmIndex
  :items="providers"
/>
