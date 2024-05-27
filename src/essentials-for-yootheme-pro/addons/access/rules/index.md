---
index: true
aside: false
---

<script setup>
import { ref } from 'vue'
import {data} from './index.data.js'

const rules = data.map(d => ({
  ...d,
  details: d.description || '',
}))

const miscRules = rules.filter(d => d.collection === 'Misc')
const siteRules = rules.filter(d => d.collection === 'Site')
const deviceRules = rules.filter(d => d.collection === 'Device')
const datetimeRules = rules.filter(d => d.collection === 'Date & Time')
</script>

# Access Rules

List of [Access Condition rules](../condition) available out of the box.

<TmIndex
  :items="miscRules"
/>

## Site Rules

<TmIndex
  :items="siteRules"
/>

## Device Rules

<TmIndex
  :items="deviceRules"
/>

## Date & Time Rules

<TmIndex
  :items="datetimeRules"
/>
