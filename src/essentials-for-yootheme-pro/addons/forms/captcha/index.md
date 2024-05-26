---
index: true
aside: false
---

<script setup>
import { ref } from 'vue'
import {data} from './index.data.js'

const captcha = data.map(d => ({
  ...d,
  details: d.description || '',
})).filter(d => !d.child)

</script>

# Captcha

List of Captcha Fields available out of the box.

<TmIndex
  :items="captcha"
/>
