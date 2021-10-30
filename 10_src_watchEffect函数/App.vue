<template>
  <div>
    <div>{{ a }}</div>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <button @click="a += 'a'">点击a</button>
    <button @click="person.name += '!'">点击name</button>
  </div>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue'
export default {
  setup() {
    let a = ref('a')
    let person = reactive({
      name: 'xd',
      age: 21,
    })

    // 一上来要调用一次，然后就是这里面写的依赖项改变就会重新调用这个回调
    watchEffect(() => {
      // const aa = a.value
      console.log(a.value)
      console.log(person.name)
    })

    return {
      a,
      person,
    }
  },
}
</script>

<style></style>
