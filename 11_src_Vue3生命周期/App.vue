<template>
  <div>
    <div>{{ num }}</div>
    <button @click="num++">点击++</button>
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount,
  ref,
} from 'vue'
export default {
  setup() {
    let num = ref(1)
    // 组合式 API 里面没有 beforeCreate created
    console.log('setup')
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    return {
      num,
    }
  },
}
</script>

<style></style>
