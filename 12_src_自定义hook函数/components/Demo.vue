<template>
  <div>
    <h2 v-show="person.title">我是{{ person.title }}组件</h2>
    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
  </div>
</template>

<script>
import usePerson from '../hooks/usePerson'
export default {
  setup() {
    const person = usePerson('Demo')

    return { person }
  },
}
</script>

<style></style>
