<template>
  <div>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <div>{{ person.job.type }}</div>
    <div>{{ person.job.salary }}</div>
    <div>{{ person.hobby }}</div>
    <button @click="update">修改</button>
  </div>
</template>

<script>
/* 
  reactive 函数
    作用：定义一个对象类型的响应式数据（基本类型不要用他，要用 ref 函数）
    语法：const 代理对象 = reactive(源对象) 接收一个对象（数组），返回一个代理对象（proxy 对象）
    reactive 定义的响应式数据是 “深层次的”
    内部基于 Es6的 proxy 实现，通过代理对象操作源对象内部数据进行操作
*/
import { reactive } from 'vue'
export default {
  setup() {
    let person = reactive({
      name: 'dwj',
      age: 18,
      job: {
        type: 'f2e',
        salary: '30k',
      },
      hobby: ['睡觉', '敲代码'],
    })

    function update() {
      person.name = 'xiaodeng'
      person.age = 18
      person.job.type = 'ui'
      person.job.salary = '20k'
      person.hobby[0] = '学习'
    }

    return {
      person,
      update,
    }
  },
}
</script>

<style></style>
