<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{ job.type }}</div>
    <div>{{ job.sex }}</div>
    <button @click="uodateClick">点击修改</button>
  </div>
</template>

<script>
/* 
  ref 函数：
    作用：定义一个响应式的数据
    语法：const xxx = ref(value)
      创建一个包含响应式数据的引用对象
      js中操作数据：xxx.value
      模板中读取数据：不需要.value

    接收的数据可以是：基本类型、也可以是对象类型
    基本类型的数据：响应式依然是靠 Object.defineProperty()的get和set
    对象类型的数据：内部借助了 Vue3中的新函数——reactive函数
*/
import { ref } from 'vue'
export default {
  name: 'App',
  // 组合式 API 都要写在 setup 里面
  setup() {
    let name = ref('xiaodeng')
    let age = ref(21)
    let job = ref({
      type: 'f2e',
      sex: '男',
    })

    function uodateClick() {
      name.value = 'dwj'
      age.value = 18
      job.value.type = 'nodejs'
      job.value.sex = '女'
      console.log(name, age)
      console.log(job)
    }

    return {
      name,
      age,
      job,
      uodateClick,
    }
  },
}
</script>
