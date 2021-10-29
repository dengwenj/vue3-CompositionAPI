<template>
  <div>
    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <button @click="say">say</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  // 组合式 API 都要写在 setup 里面
  setup() {
    let person = reactive({
      name: 'dwj',
      age: 18,
    })

    function say() {
      alert('say')
    }
    // 若返回一个对象，则对象中的属性，方法在模板中均可以直接使用
    return {
      person,
      say,
    }
  },
}
</script>
