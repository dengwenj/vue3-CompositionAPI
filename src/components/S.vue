<template>
  <div>
    S
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </div>
</template>

<script>
import { inject, readonly, toRefs } from 'vue'
export default {
  setup() {
    const p = inject('p')
    const readonlyP = readonly(p)
    return {
      ...toRefs(readonlyP),
    }
  },
}
</script>

<style></style>
