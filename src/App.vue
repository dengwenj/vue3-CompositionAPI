<template></template>

<script>
import { reactive } from 'vue'
export default {
  /* 
    reactive 对比 ref
      1 从定义数据角度对比：
          ref用来定义：基本数据类型
          reactive用来定义：对象（或数组）类型数据
          ref 也可以用来定义对象（或数组）类型数据，它内部会自动通过 reactive 转为代理对象

      2 从原理角度对比
          ref 通过 Object.defineProperty()的 get 和 set 来实现响应式
          reactive 通过使用 Proxy 来实现响应式，并通过 Reflect 操作源对象内部的数据
      
      3 从使用角度：
          ref定义的数据：操作数据需要 .value，读取数据是模板中不需要 .value
          reactive定义的数据：操作数据和读取数据都不需要 .value
  */
  setup() {
    let data = reactive({
      person: {},
      arr: [],
    })

    return { data }
  },
}
</script>

<style></style>
