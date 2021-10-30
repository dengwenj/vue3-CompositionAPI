<template>
  <div>
    demo
    <button @click="emitClick">emit</button>
  </div>
</template>

<script>
/* 
 setup 注意点
   setup 执行时机：在 beforeCreate 之前执行一次，this 是 undefined

setup 的参数
   props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性
   context：上下文对象 类似于一个vm很小很小，只有几个属性 有 emit arrts slots 这样的就解决的没有 this 的烦恼
*/
export default {
  props: {
    // name: {
    //   type: String,
    // },
    age: {
      type: Number,
    },
  },
  beforeCreate() {
    console.log('比setup执行的完')
  },
  setup(props, context) {
    // 比 beforeCreate 执行的都早
    console.log(this) // undefined
    console.log(props, context)

    function emitClick() {
      context.emit('dwj', 1120)
      console.log(context.attrs.name)
      console.log(context.slots)
    }

    return {
      emitClick,
    }
  },
}
</script>

<style></style>
