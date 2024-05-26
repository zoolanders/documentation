<script setup>
import { computed } from 'vue'
import TmIndexItem from './TmIndexItem.vue'

const props = defineProps(['items'])

const grid = computed(() => {
  const length = props.items.length

  if (!length) {
    return
  } else if (length === 2) {
    return 'grid-2'
  } else if (length === 3) {
    return 'grid-3'
  } else if (length % 3 === 0) {
    return 'grid-6'
  } else if (length > 3) {
    return 'grid-4'
  }
})
</script>

<template>
  <div v-if="items" class="TmIndexItems">
    <div class="container">
      <div class="items">
        <div
          v-for="item in items"
          :key="item.title"
          class="item"
          :class="[grid]"
        >
          <TmIndexItem
            :icon="item.icon"
            :title="item.title"
            :details="item.details"
            :link="item.link"
            :link-text="item.linkText"
            :rel="item.rel"
            :target="item.target"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.TmIndexItems {
  position: relative;
  padding: 25px 0;
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}
/*
@media (min-width: 768px) {
  .item.grid-2,
  .item.grid-4 {
    width: calc(100% / 3);
  }

  .item.grid-3,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
} */
</style>
