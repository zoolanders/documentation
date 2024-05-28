<script setup>
import { ref } from 'vue'
import { data } from '../_data/addons.data.js'

const addons = data.map(d => ({
  ...d,
  details: d.description || '',
}))
</script>

# Essential Addons for YOOtheme Pro

<TmIndex
  :items="addons"
/>
