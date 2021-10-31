<template>
  <div>
    F
    <slot></slot>
  </div>
</template>

<script>
import { provide, reactive } from 'vue'
export default {
  setup() {
    let person = reactive({
      name: 'xd',
      age: 21,
    })

    provide('p', person)
  },
}
</script>

<style></style>
