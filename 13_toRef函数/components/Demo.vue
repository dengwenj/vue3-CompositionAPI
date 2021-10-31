<template>
  <div>
    <h2>{{ person }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ job.type }}</h2>
    <button @click="name += '!'">name</button>
    <button @click="age++">age</button>
    <button @click="job.type += 'e'">type</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'
export default {
  /* 
    toRef
      作用：创建一个 ref 对象，其 value 值指向(这里改了，那里也要改)另一个对象中的某个属性
      语法：const name = toRef(person,'name')
      应用：要将响应式对象中的某个属性单独提供给外部使用时
      扩展：toRefs 与 toRef 功能一致，但可以批量创建全部 ref 对象，语法：toRefs(person)
  */
  setup() {
    let person = reactive({
      name: 'xd',
      age: 21,
      job: {
        type: 'f2e',
      },
    })

    return {
      person,
      // name: toRef(person, 'name'),
      // age: toRef(person, 'age'),
      // type: toRef(person.job, 'type')
      ...toRefs(person),
    }
  },
}
</script>

<style></style>
