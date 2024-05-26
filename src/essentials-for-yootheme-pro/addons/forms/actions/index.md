---
index: true
aside: false
---

<script setup>
import { ref } from 'vue'
import {data} from './index.data.js'

const actions = data.map(d => ({
  ...d,
  details: d.description || '',
}))

const coreActions = actions.filter(d => d.core)
const otherActions = actions.filter(d => !d.core)
</script>

# Actions

List of [After Submit Actions](../after-submit-actions) available out of the box.

## Core Actions

<TmIndex
  :items="coreActions"
/>

## Integration Actions

<TmIndex
  :items="otherActions"
/>
