<template>
  <div>
    <input type="text" v-model="person.one" /><br />
    <input type="text" v-model="person.two" />
    <div>全名：{{ person.fullName }}</div>
    <input type="text" v-model="person.fullName" />
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  setup() {
    let person = reactive({
      one: '张',
      two: '三',
    })

    // 和 Vue2 中的一样 就是写法不一样
    // person.fullName = computed(() => {
    //   return person.one + '-' + person.two
    // })

    // 和 Vue2 中的一样 就是写法不一样
    person.fullName = computed({
      get() {
        return person.one + '-' + person.two
      },
      set(value) {
        console.log(value)
        const arr = value.split('-')
        person.one = arr[0]
        person.two = arr[1]
      },
    })

    return {
      person,
    }
  },
}
</script>

<style></style>
