<template>
  <div>
    <h3>{{ a }}</h3>
    <h3>{{ b }}</h3>
    <button @click="a += 'a'">点击a</button>
    <button @click="b += 'b'">点击b</button>
    <hr />
    <h3>{{ person.name }}</h3>
    <h3>{{ person.age }}</h3>
    <h3>{{ person.job.type }}</h3>
    <button @click="person.name += 'j'">点击name</button>
    <button @click="person.age++">点击age</button>
    <button @click="person.job.type += '!'">点击type</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
  setup() {
    let a = ref('a')
    let b = ref('b')
    let person = reactive({
      name: 'xiaodeng',
      age: 21,
      job: {
        type: 'f2e',
      },
    })

    // ref 监视一个
    // watch(a, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    // ref 监视多个
    // watch(
    //   [a, b],
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    //   },
    //   { immediate: true }
    // )

    // reactive 监视全部 强制开启 deep:true ,oldValue 无效
    // watch(person, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    // reactive 监视某个
    // watch(
    //   () => person.name,
    //   (newValue, oldValue) => {
    //     console.log(newValue, oldValue)
    //   }
    // )

    // reactive 监视某些
    // watch([() => person.name, () => person.age], (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    // 特殊情况 person.job是一个对象，要用 deep:true
    watch(
      () => person.job,
      (newValue, oldValue) => {
        console.log(newValue, oldValue)
      },
      {
        deep: true,
      }
    )

    return {
      a,
      b,
      person,
    }
  },
}
</script>

<style></style>
