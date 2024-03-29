<template>
  <svg
    width="48"
    height="48"
    viewBox="0 0 30 30"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    v-html="content"
  ></svg>
</template>

<script>
export default {
  name: 'Svg',
  props: {
    content: {
      type: String,
      default: '',
    },
    // fill: {
    //   type: String,
    //   default: "fill-slate-700 dark:fill-white",
    // },
    // stroke: {
    //   type: String,
    //   default: "stroke-slate-700 dark:stroke-white",
    // },
  },
}
</script>
